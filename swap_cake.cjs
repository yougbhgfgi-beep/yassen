const fs = require('fs');

const htmlFile = 'index.html';
let content = fs.readFileSync(htmlFile, 'utf8');

// 1. Replace <FinalBirthdaySection lang={lang} /> with <BirthdayCakeComponent lang={lang} />
content = content.replace('<FinalBirthdaySection lang={lang} />', '<BirthdayCakeComponent lang={lang} />');

// 2. We need to find BirthdayCakeComponent definition and replace the text when blownOut is true.
// Usually, it's something like: {blownOut ? '...' : ''}
// We can just replace the whole text in the <p> that uses blownOut.

const oldBlownOutTextRegex = /\{\s*blownOut\s*\?\s*\(lang === 'ar' \? '.*?' : '.*?'\)\s*:\s*'[^']*'\s*\}/;
const newBlownOutText = "{blownOut ? 'نمشيها ب دي لحد م تجي يحبيبي ونعمل احلي عيد ميلاد يزعبولا' : ''}";

if (oldBlownOutTextRegex.test(content)) {
    content = content.replace(oldBlownOutTextRegex, newBlownOutText);
    console.log("Successfully replaced blownOut text.");
} else {
    // If it's just a simple string without lang conditional
    const altRegex = /\{\s*blownOut\s*\?\s*'.*?'\s*:\s*'.*?'\s*\}/;
    if (altRegex.test(content)) {
        content = content.replace(altRegex, newBlownOutText);
        console.log("Successfully replaced blownOut text (alt).");
    } else {
        console.log("Could not find blownOut text pattern.");
    }
}

fs.writeFileSync(htmlFile, content, 'utf8');
console.log("Modifications done.");
