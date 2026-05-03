const fs = require('fs');

const htmlFile = 'index.html';
let content = fs.readFileSync(htmlFile, 'utf8');

// 1. Text fixes in Constellation Game
content = content.replace(
    'نورت دنيتي يا ست البنات',
    'نورت دنيتي يا سيد الرجال'
);
content = content.replace(
    'نورتي دنيتي يا ست البنات',
    'نورت دنيتي يا سيد الرجال'
);
content = content.replace(
    'كل نجمة في السما بتشهد على حبي ليكي',
    'كل نجمة في السما بتشهد على حبي ليك'
);
content = content.replace(
    'You lit up my world, my girl',
    'You lit up my world, my man'
);

// 2. Final Scene Rewrite
const newFinalScene = `
                finalScene: { 
                    scene1: "النهاردة مش يوم عادي…<br />النهاردة أنا بحتفل بأعظم انتصار لقلبي", 
                    scene2: "يوم ما دخلت حياتي...", 
                    scene2b: "يوم ما كل حاجة بقالها معنى.", 
                    scene3: "كل سنة وأنت معايا يا ياسين…", 
                    scene3b: "يا سندي، وأماني، وضحكتي الحلوة.", 
                    scene6: "مهما لفت الأيام وطالت السنين، هتفضل أنت...", 
                    scene7: "أول وآخر اختياراتي، وأعظم انتصاراتي.", 
                    scene8: "بحبك فوق الحُب حُبين، يا كل دنيتي.", 
                    infinity: "إلى ما لا نهاية، بحبك يا ياسين", 
                    back: "الرجوع", 
                    thanks: "ربنا يخليك ليا يا نبض قلبي…" 
                },
`;
content = content.replace(/finalScene:\s*\{[\s\S]*?thanks:[^\}]*\}\s*,/g, newFinalScene);

// 3. Audio fix for iOS
// We will replace the <audio> tag with a <video> tag using playsinline
const audioTagRegex = /<audio ref=\{audioRef\} loop>\s*<source src="\.\/background_music\.mp4"[^>]*>\s*<\/audio>/;
const videoTagReplacement = `<video ref={audioRef} loop playsInline webkit-playsinline hidden preload="auto">
                        <source src="./Hamaki_-_La_Malama___حماقي_-_لا_ملامة(360p).m4a.mp4" type="video/mp4" />
                    </video>`;
if (audioTagRegex.test(content)) {
    content = content.replace(audioTagRegex, videoTagReplacement);
} else {
    // If not matching perfectly, just replace the tag roughly
    content = content.replace(/<audio ref=\{audioRef\} loop>[\s\S]*?<\/audio>/, videoTagReplacement);
}

// Ensure the play button toggles correctly and we catch play errors (standard practice)
// Since the component is simple, React's audioRef.current.play() will work for video too.

// 4. Adding Birthday Component
// We will inject a new BirthdayComponent before the Footer
const birthdayComponentDefinition = `
        const FinalBirthdaySection = ({ lang }) => {
            return (
                <section id="birthday5" className="py-24 px-4 relative z-10 flex flex-col items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
                    <div className="max-w-4xl mx-auto text-center relative z-10 bg-white/5 backdrop-blur-2xl p-8 md:p-16 rounded-[3rem] border border-white/10 shadow-[0_0_50px_rgba(139,92,246,0.3)]">
                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-[#8b5cf6] w-24 h-24 rounded-full flex items-center justify-center shadow-[0_0_30px_#8b5cf6] border-4 border-black">
                            <span className="text-4xl">🎂</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-bold font-script text-[#8b5cf6] mb-6 mt-8 drop-shadow-lg">
                            5 / 5
                        </h2>
                        <h3 className="text-2xl md:text-4xl text-white font-premium mb-8">
                            يوم ميلاد أغلى إنسان في دنيتي
                        </h3>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                            كل سنة وأنت طيب يا حبيب عمري.. يا رب كل سنينك الجاية تكون سعادة وفرح، ونفضل دايمًا سند لبعض، وتفضل ضحكتك منورة دنيتي كلها. 
                            وجودك هو أحلى هدية ربنا رزقني بيها، وبدعي ربنا كل يوم يديمك ليا وتفضل معايا العمر كله.
                        </p>
                        <div className="mt-10 flex justify-center gap-4">
                            <Heart className="w-8 h-8 text-[#8b5cf6] animate-bounce" />
                            <Heart className="w-8 h-8 text-[#8b5cf6] animate-pulse" />
                            <Heart className="w-8 h-8 text-[#8b5cf6] animate-bounce" />
                        </div>
                    </div>
                </section>
            );
        };
`;

// Insert the definition before function LoveWebsite()
content = content.replace('function LoveWebsite() {', birthdayComponentDefinition + '\n        function LoveWebsite() {');

// Inject the component before the footer
content = content.replace('<footer className="py-16 text-center bg-white/5 backdrop-blur-md border-t border-white/10">', '<FinalBirthdaySection lang={lang} />\n                            <footer className="py-16 text-center bg-white/5 backdrop-blur-md border-t border-white/10">');

// 5. Aesthetic enhancements (Premium glassmorphism)
// We already changed colors to purple (#8b5cf6), let's enhance the background gradient and the glass effect.
// Replace the StarBackground linear gradient to be more majestic
content = content.replace('background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);', 'background: radial-gradient(ellipse at bottom, #2d1b4e 0%, #090A0F 100%);');

// Update login gradient slightly
content = content.replace('background: radial-gradient(circle at 50% 50%, rgb(196, 13, 116) 0%, #000000 100%);', 'background: radial-gradient(circle at 50% 50%, #4c1d95 0%, #000000 100%);');

// Replace any remaining "pink" glow with purple
content = content.replace(/shadow-\[0_0_.*?pink.*?\]/g, 'shadow-[0_0_30px_rgba(139,92,246,0.3)]');
content = content.replace(/border-pink-500\/30/g, 'border-[#8b5cf6]/30');
content = content.replace(/text-pink-200/g, 'text-purple-200');

fs.writeFileSync(htmlFile, content, 'utf8');
console.log("Enhancements applied.");
