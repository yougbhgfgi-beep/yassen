const fs = require('fs');

const htmlFile = 'index.html';
let content = fs.readFileSync(htmlFile, 'utf8');

content = content.replace(
    'Hamaki_-_La_Malama___حماقي_-_لا_ملامة(360p).m4a.mp4',
    'WhatsApp Audio 2026-05-04 at 1.44.21 AM.mp4'
);

fs.writeFileSync(htmlFile, content, 'utf8');
console.log("Audio replaced.");
