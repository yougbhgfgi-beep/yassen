const fs = require('fs');
const filePath = 'index.html';
let content = fs.readFileSync(filePath, 'utf8');

// Replacement 1: Birthday Cake Text
const oldCakeText = `<p className={\`mt-8 text-xl md:text-2xl text-purple-200 font-bold italic transition-opacity duration-1000 text-center max-w-2xl leading-relaxed \${blownOut ? 'نمشيها ب دي لحد م تجي يحبيبي ونعمل احلي عيد ميلاد يزعبولا' : ''}\`}>
                        {lang === 'ar' ? 'كل سنة وإنت طيبة يا نور عيني.. يا رب السنة دي تكون أحلى سنة في حياتك ونحقق فيها كل أحلامنا سوا 💖' : 'Happy Birthday my light.. May this year be the best year of your life and we achieve all our dreams together 💖'}
                    </p>`;
const newCakeText = `<p className="mt-8 text-xl md:text-2xl text-purple-200 font-bold italic transition-opacity duration-1000 text-center max-w-2xl leading-relaxed">
                        {blownOut ? 'نمشيها ب دي لحد م تجي يحبيبي ونعمل احلي عيد ميلاد يزعبولا' : ''}
                    </p>`;

if (content.includes(oldCakeText)) {
    content = content.replace(oldCakeText, newCakeText);
    console.log("Replaced cake text.");
} else {
    console.log("Could not find cake text. It might be due to line endings or exact spacing.");
    // Try a more flexible regex
    const cakeRegex = /<p className={`mt-8 text-xl md:text-2xl text-purple-200 font-bold italic transition-opacity duration-1000 text-center max-w-2xl leading-relaxed \${blownOut \? '.*' : ''}`}>[\s\S]*?<\/p>/;
    if (cakeRegex.test(content)) {
        content = content.replace(cakeRegex, newCakeText);
        console.log("Replaced cake text using regex.");
    }
}

// Replacement 2: Login Image
const oldLoginIcon = `<div className="relative inline-block p-4 bg-white/5 rounded-full border border-white/10 mb-4">
                                        <Heart className="w-12 h-12 text-[#8b5cf6] animate-pulse" />
                                    </div>`;
const newLoginImage = `<div className="relative inline-block mb-4">
                                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                                        <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                                            <img src="./1 شمامين قد الدنيا.jpeg" alt="Yassin" className="w-full h-full object-cover" />
                                        </div>
                                    </div>`;

if (content.includes(oldLoginIcon)) {
    content = content.replace(oldLoginIcon, newLoginImage);
    console.log("Replaced login icon.");
}

// Replacement 3: Hero Background
const oldHeroBg = `<svg viewBox="0 0 100 100" className="absolute inset-4 w-[calc(100%-32px)] h-[calc(100%-32px)] text-black/40 backdrop-blur-md drop-shadow-2xl transition-transform duration-700 group-hover:scale-105" fill="currentColor">
                                            <path d="M50 88.932l-5.6-5.1C23.6 64.932 10 52.632 10 38.432c0-11.6 8.8-20.4 20.4-20.4 6.7 0 13.1 3.2 17.2 8.1 4.1-4.9 10.5-8.1 17.2-8.1 11.6 0 20.4 8.8 20.4 20.4 0 14.2-13.6 26.5-34.4 45.4l-5.6 5.1z" />
                                        </svg>`;
const newHeroBg = `<div className="absolute inset-8 w-[calc(100%-64px)] h-[calc(100%-64px)] rounded-full overflow-hidden border-2 border-[#D4AF37]/50 transition-transform duration-700 group-hover:scale-110 shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                                            <img src="./1 شمامين قد الدنيا.jpeg" alt="Yassin Background" className="w-full h-full object-cover opacity-60 grayscale-[0.3] hover:grayscale-0 transition-all duration-700" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>
                                        </div>`;

if (content.includes(oldHeroBg)) {
    content = content.replace(oldHeroBg, newHeroBg);
    console.log("Replaced hero background.");
}

fs.writeFileSync(filePath, content);
console.log("Done.");
