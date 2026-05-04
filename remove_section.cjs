const fs = require('fs');

const htmlFile = 'index.html';
let content = fs.readFileSync(htmlFile, 'utf8');

// 1. Remove ConstellationGame tag from LoveWebsite
const constellationRegex = /<ConstellationGame[^>]*\/>/g;
if (constellationRegex.test(content)) {
    content = content.replace(constellationRegex, '');
    console.log("Removed ConstellationGame.");
} else {
    console.log("Could not find ConstellationGame tag.");
}

// 2. Change Birthday Cake text
// The old text currently might be: "كل سنة وإنت طيب يا نور عيني.. يا رب السنة دي تكون أحلى سنة في حياتك ونحقق فيها كل أحلامنا سوا 💖"
// Replace it with: "نمشيها ب دي لحد م تجي يحبيبي ونعمل احلي عيد ميلاد يزعبولا"
const oldBirthdayTextRegex = /كل سنة وإنت طيب يا نور عيني\.\. يا رب السنة دي تكون أحلى سنة في حياتك ونحقق فيها كل أحلامنا سوا 💖/g;
const newBirthdayText = "نمشيها ب دي لحد م تجي يحبيبي ونعمل احلي عيد ميلاد يزعبولا";

if (oldBirthdayTextRegex.test(content)) {
    content = content.replace(oldBirthdayTextRegex, newBirthdayText);
    console.log("Replaced birthday text.");
} else {
    console.log("Could not find the birthday text to replace.");
}

fs.writeFileSync(htmlFile, content, 'utf8');
console.log("Modifications done.");
