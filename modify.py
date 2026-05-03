import os
import re

html_file = 'index.html'

with open(html_file, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Title and Names
content = content.replace('روان صلاح', 'ياسين و ملك')
content = content.replace('روان', 'ياسين')
content = content.replace('Rawan', 'Yassin')
content = content.replace('ست البنات', 'سيد الرجال')
content = content.replace('حبيبتي', 'حبيبي')
content = content.replace('صاحبتي', 'صاحبي')
content = content.replace('بنتي', 'ابني')
content = content.replace('اختي', 'اخويا')
content = content.replace('مراتي', 'جوزي')

# 2. Gender Focus
content = content.replace('اتولدتي', 'اتولدت')
content = content.replace('نورتي', 'نورت')
content = content.replace('بتهون', 'بيهون')
content = content.replace('بتديهالي', 'بتديهولي')
content = content.replace('جمبك', 'جمبك')
content = content.replace('يوم ميلاد', 'يوم عرفتك')
content = content.replace('عيد الميلاد', 'أول يوم')
content = content.replace('عيد ميلاد سعيد', 'ذكرى سعيدة')
content = content.replace('تفتحي', 'تفتح')
content = content.replace('اضغطي عشان تشوفي', 'اضغط عشان تشوف')
content = content.replace('انتي', 'انت')
content = content.replace('إنتي', 'إنت')
content = content.replace('انقري', 'انقر')

# 3. Final Message
new_message = """دي احلي واجمل صدفه حصلت فحياتي  كانت انت ي ياسين والله  حرفياا من يوم مبقيت معاا وبحب احكيلك لان انت اكتر حد بثق في لاني مليش غيرك انت بقيت دنيتي   حرفيا اكتر حد بتخانق معاا وبخلي يشد فشعرو بحب اشوفك غيران عليا عشان بعرف انت بتحبني قد اي  بجد  فكرا كل حاجه بنا بجد وعمري م نسيتها هزرنا كلامنا الي كلو حب  خناقنا الي مبيخلصش بس عرفين ان احنا ملناش غير بعض ومهما هنبعد هنرجع احسن من الأول واثقه ف كدا  أعمل اي بقاا في قلبي ضعيف بيحبك  وبيخاف عليك  عشان انت ابني الي مليش غيرو في الدنيا دي ربنا يديمك لياا يعمري ومحرمنيش منك ابدا ي نن عيني أنا فعلا م كلام بحسك ابويا الي اول ما تحصلي اي مشكلا  أول واحد بجري عليه هوا أنت لان انت اكتر حد بيفهمني وقريب لياا  بنتخانق  بكون مبينا انو عادي بس مبقدرش استحمل زعلك وفعلا بفرح لما القيك بتحكيلي تفاصيل يومك وعمري م بزعل  لما تقولي بلاش تعملي الحاجه دي عشان عرفه ان الحاجه دي أنت شايفها م حلوه ف م عاوزني اعملها حتا لو اي هيا  بكون فراحانه  أنك خايف  علياا  بحبكك  بجدد أنت واحشني موت يحبيبي ترجعلي ب الف سلامه ♥️🌍"""

# Regex to replace finalMessageAR
content = re.sub(r'const finalMessageAR = `.*?`;', f'const finalMessageAR = `{new_message}`;', content, flags=re.DOTALL)

# 4. Color Theme (Purple and Black)
content = content.replace('rgb(196, 13, 116)', '#8b5cf6') # Violet
content = content.replace('rgb(196,13,116)', '#8b5cf6')
content = content.replace('pink-500', 'purple-500')
content = content.replace('pink-600', 'purple-600')
content = content.replace('pink-400', 'purple-400')
content = content.replace('pink-300', 'purple-300')
content = content.replace('pink-200', 'purple-200')
content = content.replace('pink-100', 'purple-100')
content = content.replace('pink-50', 'purple-50')
content = content.replace('rose-400', 'purple-400')
content = content.replace('rose-200', 'purple-200')
content = content.replace('rose-100', 'purple-100')
content = content.replace('rose-50', 'purple-50')
content = content.replace('pink-900', 'purple-900')
content = content.replace('bg-rose-', 'bg-purple-')
content = content.replace('text-rose-', 'text-purple-')

# 5. Timeline Images
files = os.listdir('.')
images = [f for f in files if f.endswith('.jpeg') or f.endswith('.jpg') or f.endswith('.png')]
timeline_items = []
for img in images:
    name_without_ext = os.path.splitext(img)[0]
    # some files have long names, use the whole name as text
    item = f'{{ pic: "{img}", text: "{name_without_ext}", desc: "" }}'
    timeline_items.append(item)

timeline_str = ',\n                        '.join(timeline_items)
# Find the items array in timeline
content = re.sub(r'timeline: \{\s*items: \[\s*.*?\s*\]\s*\}', f'timeline: {{\n                    items: [\n                        {timeline_str}\n                    ]\n                }}', content, flags=re.DOTALL)

# 6. Password and Date
content = content.replace('checkDay === "9" || checkDay === "09"', 'checkDay === "1" || checkDay === "01"')
content = content.replace('checkMonth === "3" || checkMonth === "03"', 'checkMonth === "11" || checkMonth === "11"')
content = content.replace('checkYear === "2005"', 'checkYear === "2025"')
content = content.replace('const firstSightDate = new Date("2025-06-30T00:00:00");', 'const firstSightDate = new Date("2025-11-01T00:00:00");')
content = content.replace('const birthDate = new Date("2005-03-09T00:00:00");', 'const birthDate = new Date("2025-11-01T00:00:00");')

# 7. Video
video_name = "حاولت اجمع شويه من زكرياتنا الحلوه  ال إنشاء الله هنعوضها ونعمل احلي منهاااا كمان يحبيب ملك.mp4"
video_title = os.path.splitext(video_name)[0]
content = content.replace('./whatsapp_video.mp4', f'./{video_name}')
content = content.replace('ذكرى حلوة 🎥', video_title)
content = content.replace('Sweet Memory 🎥', video_title)
content = content.replace('لحظات متتنسيش...', '')
content = content.replace('Unforgettable moments...', '')

# 8. Counter (Remove second counter)
# Find the section with the clocks
# <RelationshipClock startDate={birthDate} title={t.clock2.title} subtitle={t.clock2.subtitle} t={t.clock2} format="full" />
# <RelationshipClock startDate={firstSightDate} title={t.clock1.title} subtitle={t.clock1.subtitle} t={t.clock1} format="days" />
# Remove the birthDate clock
content = re.sub(r'<RelationshipClock startDate=\{birthDate\}.*?/>', '', content)

# ensure the firstSightDate clock is full format
content = content.replace('format="days"', 'format="full"')

with open(html_file, 'w', encoding='utf-8') as f:
    f.write(content)

print("Modifications done!")
