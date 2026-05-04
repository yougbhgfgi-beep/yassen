import os

file_path = 'd:/7000/index.html'
with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Look for the duplicated 'function LoveWebsite() {'
found_indices = [i for i, line in enumerate(lines) if 'function LoveWebsite() {' in line]

if len(found_indices) > 1:
    print(f"Found {len(found_indices)} occurrences of 'function LoveWebsite() {{'")
    # The corruption seems to be that the second occurrence and everything up to the next 'return' or similar is extra.
    # Actually, looking at the view_file, line 1882 is where the extra 'function LoveWebsite' starts.
    # It ends just before line 1963 which is the continuation of the first one.
    
    # Let's find the lines to remove.
    # Between the start of the extra block (around line 1881-1882) and the continuation.
    
    start_remove = 0
    end_remove = 0
    for i in range(len(lines)):
        if '<div className="fixed inset-0 pointer-events-none">' in lines[i] and i > 1800:
            if 'function LoveWebsite() {' in lines[i+1]:
                start_remove = i + 1
                break
    
    if start_remove > 0:
        for i in range(start_remove, len(lines)):
            if '[...Array(50)].map' in lines[i]:
                end_remove = i
                break
        
        if end_remove > start_remove:
            print(f"Removing lines from {start_remove+1} to {end_remove}")
            new_lines = lines[:start_remove] + lines[end_remove:]
            with open(file_path, 'w', encoding='utf-8') as f:
                f.writelines(new_lines)
            print("Successfully fixed duplication.")
        else:
            print("Could not find end of duplication block.")
    else:
        print("Could not find start of duplication block.")
else:
    print("No duplication found.")
