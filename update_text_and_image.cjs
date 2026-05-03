const fs = require('fs');

const htmlFile = 'index.html';
let content = fs.readFileSync(htmlFile, 'utf8');

// 1. Replace the birthday text in FinalBirthdaySection
const oldTextRegex = /كل سنة وأنت طيب يا حبيب عمري.*?وتفضل معايا العمر كله\./s;
const newText = "كل سنة وإنت طيب يا نور عيني.. يا رب السنة دي تكون أحلى سنة في حياتك ونحقق فيها كل أحلامنا سوا 💖";
if (oldTextRegex.test(content)) {
    content = content.replace(oldTextRegex, newText);
} else {
    console.log("Could not find the old birthday text to replace.");
}

// 2. Add the new image to the timeline items array
const newTimelineItem = `
                        { pic: "WhatsApp Image 2026-05-03 at 5.20.24 PM.jpeg", text: "بدايه حكتيتنا", desc: "1/11 اليوم دا هفضل احبو لاخر يوم فعمرييي" }`;

// Find the timeline array and inject the item at the beginning
const timelineRegex = /timeline:\s*\{\s*items:\s*\[/;
if (timelineRegex.test(content)) {
    content = content.replace(timelineRegex, `timeline: {\n                    items: [${newTimelineItem},`);
} else {
    console.log("Could not find timeline items array.");
}

fs.writeFileSync(htmlFile, content, 'utf8');
console.log("Modifications done.");
