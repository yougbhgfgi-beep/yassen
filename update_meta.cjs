const fs = require('fs');

const htmlFile = 'index.html';
let content = fs.readFileSync(htmlFile, 'utf8');

// The new chic title and metadata
const newHeadMetadata = `
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ياسين و ملك | حكاية حب للأبد ♾️💜</title>
    
    <!-- Meta tags for link preview (WhatsApp, Facebook, etc.) -->
    <meta name="description" content="أجمل صدفة في حياتي، وكل دنيتي. دي رسالة حب عشان أقولك فيها إنك أغلى حاجة عندي.">
    <meta property="og:title" content="ياسين و ملك | حكاية حب ♾️💜">
    <meta property="og:description" content="أجمل صدفة في حياتي، وكل دنيتي. دي رسالة حب عشان أقولك فيها إنك أغلى حاجة عندي.">
    <meta property="og:type" content="website">
    <meta property="og:image" content="./1 شمامين قد الدنيا.jpeg">
    <meta name="theme-color" content="#8b5cf6">
`;

// Replace everything between <head> and the first <script> tag or CSS framework import to ensure it's clean
const headContentRegex = /<meta charset="UTF-8">[\s\S]*?<title>.*?<\/title>/;
if (headContentRegex.test(content)) {
    content = content.replace(headContentRegex, newHeadMetadata.trim());
} else {
    // Fallback if the regex doesn't match perfectly
    content = content.replace(/<title>.*?<\/title>/, `<title>ياسين و ملك | حكاية حب للأبد ♾️💜</title>`);
}

fs.writeFileSync(htmlFile, content, 'utf8');
console.log("Metadata and title updated.");
