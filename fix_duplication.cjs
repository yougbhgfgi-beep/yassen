const fs = require('fs');
const filePath = 'index.html';
const content = fs.readFileSync(filePath, 'utf8');
const lines = content.split('\n');

let startRemove = -1;
let endRemove = -1;

for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('<div className="fixed inset-0 pointer-events-none">') && i > 1800) {
        if (lines[i+1] && lines[i+1].includes('function LoveWebsite() {')) {
            startRemove = i + 1;
            break;
        }
    }
}

if (startRemove !== -1) {
    for (let i = startRemove; i < lines.length; i++) {
        if (lines[i].includes('[...Array(50)].map')) {
            endRemove = i;
            break;
        }
    }

    if (endRemove !== -1) {
        console.log(`Removing lines from ${startRemove + 1} to ${endRemove}`);
        const newLines = [...lines.slice(0, startRemove), ...lines.slice(endRemove)];
        fs.writeFileSync(filePath, newLines.join('\n'));
        console.log("Successfully fixed duplication.");
    } else {
        console.log("Could not find end of duplication block.");
    }
} else {
    console.log("Could not find start of duplication block.");
}
