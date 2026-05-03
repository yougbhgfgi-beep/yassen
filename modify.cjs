const fs = require('fs');
const path = require('path');

const htmlFile = 'index.html';
let content = fs.readFileSync(htmlFile, 'utf8');

// 1. Title and Names
content = content.replace(/روان صلاح/g, 'ياسين و ملك');
content = content.replace(/روان/g, 'ياسين');
content = content.replace(/Rawan/g, 'Yassin');
content = content.replace(/ست البنات/g, 'سيد الرجال');
content = content.replace(/حبيبتي/g, 'حبيبي');
content = content.replace(/صاحبتي/g, 'صاحبي');
content = content.replace(/بنتي/g, 'ابني');
content = content.replace(/اختي/g, 'اخويا');
content = content.replace(/مراتي/g, 'جوزي');

// 2. Gender Focus
content = content.replace(/اتولدتي/g, 'اتولدت');
content = content.replace(/نورتي/g, 'نورت');
content = content.replace(/بتهون/g, 'بيهون');
content = content.replace(/بتديهالي/g, 'بتديهولي');
content = content.replace(/يوم ميلاد/g, 'يوم عرفتك');
content = content.replace(/عيد الميلاد/g, 'أول يوم');
content = content.replace(/عيد ميلاد سعيد/g, 'ذكرى سعيدة');
content = content.replace(/تفتحي/g, 'تفتح');
content = content.replace(/اضغطي عشان تشوفي/g, 'اضغط عشان تشوف');
content = content.replace(/انتي /g, 'انت ');
content = content.replace(/إنتي /g, 'إنت ');
content = content.replace(/انقري/g, 'انقر');

// 3. Final Message
const newMessage = `دي احلي واجمل صدفه حصلت فحياتي  كانت انت ي ياسين والله  حرفياا من يوم مبقيت معاا وبحب احكيلك لان انت اكتر حد بثق في لاني مليش غيرك انت بقيت دنيتي   حرفيا اكتر حد بتخانق معاا وبخلي يشد فشعرو بحب اشوفك غيران عليا عشان بعرف انت بتحبني قد اي  بجد  فكرا كل حاجه بنا بجد وعمري م نسيتها هزرنا كلامنا الي كلو حب  خناقنا الي مبيخلصش بس عرفين ان احنا ملناش غير بعض ومهما هنبعد هنرجع احسن من الأول واثقه ف كدا  أعمل اي بقاا في قلبي ضعيف بيحبك  وبيخاف عليك  عشان انت ابني الي مليش غيرو في الدنيا دي ربنا يديمك لياا يعمري ومحرمنيش منك ابدا ي نن عيني أنا فعلا م كلام بحسك ابويا الي اول ما تحصلي اي مشكلا  أول واحد بجري عليه هوا أنت لان انت اكتر حد بيفهمني وقريب لياا  بنتخانق  بكون مبينا انو عادي بس مبقدرش استحمل زعلك وفعلا بفرح لما القيك بتحكيلي تفاصيل يومك وعمري م بزعل  لما تقولي بلاش تعملي الحاجه دي عشان عرفه ان الحاجه دي أنت شايفها م حلوه ف م عاوزني اعملها حتا لو اي هيا  بكون فراحانه  أنك خايف  علياا  بحبكك  بجدد أنت واحشني موت يحبيبي ترجعلي ب الف سلامه ♥️🌍`;

content = content.replace(/const finalMessageAR = \`[\s\S]*?\`;/, "const finalMessageAR = `" + newMessage + "`;");

// 4. Color Theme (Purple and Black)
content = content.replace(/rgb\(196, 13, 116\)/g, '#8b5cf6');
content = content.replace(/rgb\(196,13,116\)/g, '#8b5cf6');
content = content.replace(/pink-500/g, 'purple-500');
content = content.replace(/pink-600/g, 'purple-600');
content = content.replace(/pink-400/g, 'purple-400');
content = content.replace(/pink-300/g, 'purple-300');
content = content.replace(/pink-200/g, 'purple-200');
content = content.replace(/pink-100/g, 'purple-100');
content = content.replace(/pink-50/g, 'purple-50');
content = content.replace(/rose-400/g, 'purple-400');
content = content.replace(/rose-200/g, 'purple-200');
content = content.replace(/rose-100/g, 'purple-100');
content = content.replace(/rose-50/g, 'purple-50');
content = content.replace(/pink-900/g, 'purple-900');
content = content.replace(/bg-rose-/g, 'bg-purple-');
content = content.replace(/text-rose-/g, 'text-purple-');

// 5. Timeline Images
const files = fs.readdirSync('.');
const images = files.filter(f => f.endsWith('.jpeg') || f.endsWith('.jpg') || f.endsWith('.png'));
const timelineItems = images.map(img => {
    const nameWithoutExt = path.parse(img).name;
    return `{ pic: "${img}", text: "${nameWithoutExt}", desc: "" }`;
});

const timelineStr = timelineItems.join(',\n                        ');
content = content.replace(/timeline: \{\s*items: \[\s*[\s\S]*?\s*\]\s*\}/, "timeline: {\n                    items: [\n                        " + timelineStr + "\n                    ]\n                }");

// 6. Password and Date
content = content.replace(/checkDay === "9" \|\| checkDay === "09"/g, 'checkDay === "1" || checkDay === "01"');
content = content.replace(/checkMonth === "3" \|\| checkMonth === "03"/g, 'checkMonth === "11" || checkMonth === "11"');
content = content.replace(/checkYear === "2005"/g, 'checkYear === "2025"');
content = content.replace(/const firstSightDate = new Date\("2025-06-30T00:00:00"\);/g, 'const firstSightDate = new Date("2025-11-01T00:00:00");');
content = content.replace(/const birthDate = new Date\("2005-03-09T00:00:00"\);/g, 'const birthDate = new Date("2025-11-01T00:00:00");');

// 7. Video
const videoName = "حاولت اجمع شويه من زكرياتنا الحلوه  ال إنشاء الله هنعوضها ونعمل احلي منهاااا كمان يحبيب ملك.mp4";
const videoTitle = path.parse(videoName).name;
content = content.replace(/\.\/whatsapp_video\.mp4/g, "./" + videoName);
content = content.replace(/ذكرى حلوة 🎥/g, videoTitle);
content = content.replace(/Sweet Memory 🎥/g, videoTitle);
content = content.replace(/لحظات متتنسيش\.\.\./g, '');
content = content.replace(/Unforgettable moments\.\.\./g, '');

// 8. Counter
content = content.replace(/<RelationshipClock startDate=\{birthDate\}.*?\/>/g, '');
content = content.replace(/format="days"/g, 'format="full"');

fs.writeFileSync(htmlFile, content, 'utf8');
console.log("Modifications done!");
