// 1. The Complete Lore Database
// 1. The Complete Lore Database
const meaningsData = [
    // SEQUENCE
    { id: 1, title: "The Initiator", char: "Crystal", duality: "Simplicity", path: "Sequence", color: "#cbd5e1", img: "images/Crystal.jpg", story: "Born to an isolated royal bloodline, she possesses an innate attunement to the primal elements of earth, air, fire, and water. She acts as the catalyst, initiating pure, unburdened beginnings before complexities arise." },
    { id: 2, title: "The Executioner", char: "Psylocke", duality: "Proximity", path: "Sequence", color: "#a855f7", img: "images/Psylocke.jpg", story: "A silent warrior who learned to forge her own mental focus into a tangible, glowing blade. She cuts away distant anxieties to strike with absolute precision at the immediate task at hand." },
    { id: 3, title: "The Artist", char: "Songbird", duality: "Repulsion", path: "Sequence", color: "#ec4899", img: "images/Songbird.png", story: "Once defined by a destructive sonic scream used for ruin, she reformed her voice to weave solid constructs of sound. She now uses her art to establish firm, protective boundaries." },
    { id: 4, title: "The Frustrated", char: "Polaris", duality: "Attraction", path: "Sequence", color: "#22c55e", img: "images/Polaris.jpg", story: "Gifted with the overwhelming power to control magnetic fields, her life is a constant struggle to balance the forces she pulls toward her. She embodies the chaotic, irresistible pull of attraction and the tension it creates." },
    { id: 5, title: "The Lost", char: "Madelyne Pryor", duality: "Destruction", path: "Sequence", color: "#ef4444", img: "images/Madelyne-Pryor.jpg", story: "Forged as a shadow of someone else, she awoke to the tragic realization that her life was an illusion. Embracing her inner flames, she clears away false realities through absolute, agonizing ruin." },
    { id: 6, title: "The Wayfarer", char: "Loki", duality: "Time", path: "Sequence", color: "#10b981", img: "images/Loki.jpg", story: "A shape-shifting trickster woven from ancient myths, she dances across the timeline, never anchored to a single identity. She represents perfect timing, adaptability, and the danger of wasting eras." },
    { id: 7, title: "The Thinker", char: "Emma Frost", duality: "Addition", path: "Sequence", color: "#f8fafc", img: "images/Emma-Frost.jpg", story: "A telepathic sovereign with a mind as sharp and impenetrable as her diamond skin. She orchestrates strategic growth and intellectual expansion, demanding perfection from herself and others." },
    { id: 8, title: "The Returnee", char: "Invisible Woman", duality: "Space", path: "Sequence", color: "#3b82f6", img: "images/Invisible-Woman.jpg", story: "Mastering the ability to bend light and project unseen force fields, she creates impenetrable safe havens. She understands how to manipulate the space between people to protect or to hide." },
    { id: 9, title: "The Enlightened", char: "Sersi", duality: "Creation", path: "Sequence", color: "#10b981", img: "images/Sersi.jpg", story: "An immortal entity who walked among humanity for centuries, treating existence as an endless canvas. With a mere thought, she transmutes matter, embodying the divine spark of art and creation." },
    { id: 10, title: "The Apprentice", char: "Pixie", duality: "Abstraction", path: "Sequence", color: "#d946ef", img: "images/Pixie.png", story: "Bearing iridescent wings and hallucinogenic dust, she steps through magical portals into the unknown. She learns the fabric of reality through boundless imagination and ethereal journeys." },
    { id: 11, title: "The Daywalker", char: "Luna Snow", duality: "Positivity", path: "Sequence", color: "#93c5fd", img: "images/Luna-Snow.jpg", story: "A radiant performer who wields the dual forces of freezing ice and healing light. She stands as a beacon on the darkest nights, radiating hope and mending spiritual wounds." },
    { id: 12, title: "The Destitute", char: "Killer Frost", duality: "Deficiency", path: "Sequence", color: "#60a5fa", img: "images/Killer-Frost.png", story: "Cursed with a condition that devours warmth, she is driven by an endless, freezing hunger. She represents the absolute minimum required for survival and the stark reality of scarcity." },
    { id: 13, title: "The Looker-Back", char: "Jennifer Kale", duality: "Origin", path: "Sequence", color: "#8b5cf6", img: "images/Jennifer-Kale.jpg", story: "Born into a cursed lineage of ancient witches, she serves as the guardian of forbidden tomes. She constantly looks to the deep roots of the past to understand the magic of the present." },
    { id: 14, title: "The Stargazer", char: "Halo", duality: "External", path: "Sequence", color: "#facc15", img: "images/Halo.jpg", story: "A being reborn through an aura of kaleidoscopic light, she views the world with continuous wonder. She explores the vast horizons of the external world, seeking meaning in every glowing hue." },
    { id: 15, title: "The Warrior", char: "Black Canary", duality: "Symbiosis", path: "Sequence", color: "#60a5fa", img: "images/Black-Canary.png", story: "Armed with unparalleled martial prowess and a piercing sonic cry, she fights on the front lines. She understands that true strength is found not in solitude, but in the unbreakable bonds of partnership." },
    { id: 16, title: "The Charioteer", char: "Livewire", duality: "Change", path: "Sequence", color: "#38bdf8", img: "images/Livewire.jpg", story: "A conduit of living electricity, she moves at the speed of lightning, completely uncontainable. She embodies rapid momentum, sudden progress, and the shock of radical shifts." },
    { id: 17, title: "The Ruler", char: "Medusa", duality: "Totality", path: "Sequence", color: "#ea580c", img: "images/Medusa.png", story: "A queen who commands every strand of her prehensile hair as an extension of her indomitable will. She carries the absolute weight of sovereignty, bearing responsibility for the whole." },
    { id: 18, title: "The Strategist", char: "Sindel", duality: "Conflict", path: "Sequence", color: "#c084fc", img: "images/Sindel.jpg", story: "A resurrected monarch from a fallen realm, wielding a voice that can shatter armies. She commands authority in the heart of crisis, using conflict as a necessary tool for dominance." },
    { id: 19, title: "The Rester", char: "Kelda", duality: "Cycle", path: "Sequence", color: "#e2e8f0", img: "images/Kelda.jpg", story: "An ancient winter deity who understands the slow, inevitable turning of the seasons. She teaches the necessity of deep slumber, patience, and the quiet rejuvenation that precedes spring." },
    { id: 20, title: "The Gardener", char: "Poison Ivy", duality: "Excess", path: "Sequence", color: "#16a34a", img: "images/Poison-Ivy.png", story: "Connected to the pulsing heartbeat of all botanical life, she cultivates overwhelming, venomous beauty. She represents the explosive abundance of nature and the suffocating danger of toxic overgrowth." },
    { id: 21, title: "The Preacher", char: "Gloriana", duality: "Giving", path: "Sequence", color: "#fde047", img: "images/Gloriana.png", story: "Blessed with reality-altering divine power, she seeks to elevate the mortal realm. She is the ultimate benefactor, sharing wisdom and gifts, though sometimes struggling to understand human frailty." },
    { id: 22, title: "The Ferryman", char: "Sister Grimm", duality: "Infinity", path: "Sequence", color: "#dc2626", img: "images/Sister-Grimm.jpg", story: "Bound to a magical staff fueled by blood, she walks the line between the living and the dark unknown. She acts as the spiritual guide through life's most terrifying and profound transitions." },
    { id: 23, title: "The Onlooker", char: "Umar", duality: "Acceptance", path: "Sequence", color: "#14b8a6", img: "images/Umar.jpg", story: "An extradimensional supreme sorceress who views the squabbles of the universe with detached amusement. She is the embodiment of absolute, objective observation without the desire to intervene." },
    { id: 24, title: "The Hermit", char: "Jean Grey", duality: "Order", path: "Sequence", color: "#f97316", img: "images/Jean-Grey.jpg", story: "Having served as the vessel for an infinite cosmic fire, she endured countless cycles of death and rebirth. She has finally achieved ultimate internal peace, mastering the chaos of the cosmos into absolute order." },

    // WILD CARDS
    { id: 25, title: "The Infant", char: "Singularity", duality: "Void", path: "Wild Card", color: "#3b82f6", img: "images/Singularity.jpg", story: "A sentient pocket universe possessing the mind of a child. She represents a space where the laws of reality have not yet been written, embodying the infinite, terrifying potential of the absolute unknown." },
    { id: 26, title: "The Deceased", char: "Hela", duality: "Malice", path: "Wild Card", color: "#10b981", img: "images/Hela.jpg", story: "The sovereign of the underworld, adorned in shadows and absolute finality. She enforces the harsh, inescapable truth that all things must eventually rot, wither, and end." },
    { id: 27, title: "The Ronin", char: "Scarlet Witch", duality: "Chaos", path: "Wild Card", color: "#dc2626", img: "images/Scarlet-Witch.jpg", story: "A reality-weaver born under a fractured star, her sorrow can rewrite the fabric of existence. She is the wild storm of probability, harnessing absolute chaos to manifest both miracles and systemic collapse." },
    { id: 28, title: "The Scholar", char: "White Fox", duality: "Evolution", path: "Wild Card", color: "#94a3b8", img: "images/White-Fox.png", story: "Inheritor of ancient, nine-tailed spiritual senses, she observes the world with supernatural acuity. She relies entirely on sharp calculation and theoretical knowledge to map the path forward." },
    { id: 29, title: "The Avoider", char: "Cyclone", duality: "Freedom", path: "Wild Card", color: "#93c5fd", img: "images/Cyclone.jpg", story: "Wielding the power to summon roaring whirlwinds, she rides the wind to escape any anchor. She is the sudden, chaotic urge to flee responsibility under the guise of ultimate liberation." },
    { id: 30, title: "The Hunter", char: "Black Mamba", duality: "Restriction", path: "Wild Card", color: "#6b7280", img: "images/Black-Mamba.jpg", story: "A predator who uses darkforce illusions to ensnare the minds of her prey before striking. She embodies the razor-sharp instinct of danger and the restrictive traps laid by unseen enemies." },
    { id: 31, title: "The Mercenary", char: "Typhoid Mary", duality: "Unknown", path: "Wild Card", color: "#ef4444", img: "images/Typhoid-Mary.png", story: "Her mind shattered into multiple, violently opposed personas, she dances through life as an unpredictable assassin. She constantly shifts allegiances, adapting her morality to survive the unknown." },
    { id: 32, title: "The Gravedigger", char: "Selene Gallio", duality: "Lack", path: "Wild Card", color: "#9f1239", img: "images/Selene.jpg", story: "An ancient psychic vampire who has walked the earth for millennia by consuming the lifeforce of others. She indulges deeply in ancient shadows, understanding perfectly the desperate hunger of scarcity." },
    { id: 33, title: "The Nightcrawler", char: "Golden Glider", duality: "Concrete", path: "Wild Card", color: "#fbbf24", img: "images/Golden-Glider.jpg", story: "Able to project an astral form and move with frictionless speed, she thrives in the criminal underworld. She represents tangible success obtained through manipulation, shortcuts, and illicit means." },
    { id: 34, title: "The Passenger", char: "Silver Swan", duality: "Reduction", path: "Wild Card", color: "#cbd5e1", img: "images/Silver-Swan.png", story: "Granted the wings of a swan and a devastating sonic cry, she feels her power was forced upon her. She represents passive victimhood, drifting along the currents of fate without fighting back." },
    { id: 35, title: "The Prospector", char: "Amora", duality: "Illusion", path: "Wild Card", color: "#22c55e", img: "images/Amora.jpg", story: "A master of seduction and eldritch sorcery, she twists the desires of mortals and gods alike. She is the blinding allure of temptation, blinding others with beautiful lies for short-term gain." },
    { id: 36, title: "The Drowning", char: "Silver Banshee", duality: "Negative", path: "Wild Card", color: "#f8fafc", img: "images/Silver-Banshee.jpg", story: "Cursed to wander the earth as an avatar of grief, her wail brings immediate death. She is the embodiment of unresolved trauma, sinking so deeply into her own sorrow that she destroys those around her." },
    { id: 37, title: "The Thief", char: "Satana", duality: "Ending", path: "Wild Card", color: "#dc2626", img: "images/Satana.jpg", story: "A hellborn entity who feeds on the souls of the corrupt, manipulating hellfire with sadistic joy. She is the bold parasite, snatching away the energy and final victories of those foolish enough to trust her." },
    { id: 38, title: "The Vagrant", char: "Emerald Empress", duality: "Fragment", path: "Wild Card", color: "#10b981", img: "images/Emerald-Empress.jpg", story: "Her entire identity and formidable power are bound to a single, hovering, glowing eye of ancient origin. When separated from her singular obsession, she collapses, revealing a hollow core." },
    { id: 39, title: "The Patient", char: "Enchantress", duality: "Atrophy", path: "Wild Card", color: "#16a34a", img: "images/Enchantress.png", story: "A chaotic, multidimensional witch bound to a mortal host, spreading dark, corrosive magic. She is the slow, maddening creep of spiritual sickness and the stagnation that rots the mind." },
    { id: 40, title: "The Politician", char: "Morgan le Fay", duality: "Complexity", path: "Wild Card", color: "#7e22ce", img: "images/Morgan-Le-Fay.png", story: "An immortal sorceress steeped in Arthurian legend, she views epochs of history as pieces on a chessboard. She thrives in the orchestration of backstabbing, grand designs, and impossibly complex power plays." },
    { id: 41, title: "The Redeemer", char: "Raven", duality: "Inner", path: "Wild Card", color: "#4c1d95", img: "images/Raven.jpg", story: "The daughter of a demonic overlord, she must constantly meditate to keep her apocalyptic emotional baggage in check. She courageously bears the sins of her bloodline, seeking the light while drowning in inner darkness." },
    { id: 42, title: "The Pretender", char: "Amethyst", duality: "Presence", path: "Wild Card", color: "#a855f7", img: "images/Amethyst.jpg", story: "A sovereign of a gemstone dimension trapped in the guise of a normal mortal. She represents the heavy burden of living a double life, maintaining a fragile presence while hiding profound cosmic truths." },
    { id: 43, title: "The Instigator", char: "Circe", duality: "Known", path: "Wild Card", color: "#d946ef", img: "images/Circe.jpg", story: "A mythical witch who delights in turning the powerful into beasts and dismantling empires. She thrives on conflict, maliciously using the known weaknesses of her enemies to catalyze destructive change." },
    { id: 44, title: "The Prophet", char: "Magik", duality: "Distance", path: "Wild Card", color: "#eab308", img: "images/Magik.png", story: "Snatched into a demonic realm as a child, she forged her soul into a sword to survive. She bears the crushing, heavy burden of foreseeing tragic futures while remaining too distant to prevent them." },
    { id: 45, title: "The Heir", char: "Star Sapphire", duality: "Sufficiency", path: "Wild Card", color: "#d946ef", img: "images/Star-Sapphire.jpg", story: "Chosen by a violet gem fueled by the emotion of love, her power is tied to her heart's vulnerability. She represents the incredible weight of inheriting a grand legacy and the fear of not being enough." },
    { id: 46, title: "The Martyr", char: "Storm", duality: "Benefit", path: "Wild Card", color: "#cbd5e1", img: "images/Storm.png", story: "A mutant goddess worshipped for bringing rain to the desert, she commands the fury of the atmosphere. She is the ultimate sacrifice, voluntarily burning away her own life force to benefit the greater good." },
    { id: 47, title: "The Gatekeeper", char: "Karnilla", duality: "Static", path: "Wild Card", color: "#4ade80", img: "images/Karnilla.png", story: "The fiercely independent queen of the Norn stones, she stubbornly guards the threads of destiny. She is the absolute refusal to change, locking the gates of fate to maintain the eternal status quo." },
    { id: 48, title: "The Mirror-Bearer", char: "Clea", duality: "Reality", path: "Wild Card", color: "#c084fc", img: "images/Clea.png", story: "The sovereign of the Dark Dimension, she mastered mystic realities that break mortal comprehension. She holds the ultimate mirror, forcing truth-seekers to look inward, as the answers they seek are already known." }
];

// 2. Plotting the Orbit Engine & Entrance Animation
const ring = document.getElementById('orbit-ring');
const radius = 425; // Half of our 850px ring size
let currentRotation = 0;

// Temporarily disable dragging while the entrance animation plays
ring.style.pointerEvents = 'none';

// Render 48 cards starting from the center for the entrance animation
meaningsData.forEach((card, index) => {
    const el = document.createElement('div');
    el.className = 'orbit-card cursor-pointer';
    
    const angle = (360 / meaningsData.length) * index;
    
    // STARTING STATE: Hidden at the center, scaled to 0, and rotated back 180 degrees
    el.style.transform = `rotate(${angle - 180}deg) translateY(0px) rotate(-${angle - 180}deg) scale(0)`;
    el.style.opacity = '0';
    
    el.dataset.angle = angle;
    el.innerHTML = `<img src="${card.img}" alt="${card.char}">`;
    
    // Click Event to load Lore into Center Stage
    el.addEventListener('click', () => loadLore(card));
    
    ring.appendChild(el);
});

// TRIGGER THE FLY-OUT ANIMATION
setTimeout(() => {
    const cards = document.querySelectorAll('.orbit-card');
    
    cards.forEach((card, index) => {
        const angle = parseFloat(card.dataset.angle);
        
        // Stagger the deal so they fly out one by one in a spiral
        const delay = index * 0.04; 
        
        // Custom animation: The bezier curve creates a slight "bounce" when they hit the outer ring
        card.style.transition = `transform 1.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${delay}s, opacity 1s ease-out ${delay}s`;
        
        // FINAL STATE: Full orbit radius, faded in
        card.style.transform = `rotate(${angle}deg) translateY(-${radius}px) rotate(-${angle}deg) scale(1)`;
        card.style.opacity = '1';
        
        // Clean up the inline transitions after the animation finishes so normal hover/drag works smoothly
        setTimeout(() => {
            card.style.transition = 'filter 0.3s, border-color 0.3s, transform 0.3s';
        }, (1.5 + delay) * 1000 + 100);
    });

    // Re-enable dragging the ring once the final card finishes moving
    setTimeout(() => {
        ring.style.pointerEvents = 'auto';
    }, (1.5 + (48 * 0.04)) * 1000 + 200);

}, 150); // Slight delay after page load to ensure smooth rendering

// 3. Mathematical Drag Logic (Using Modern Pointer Events)
let isDragging = false;
let startAngle = 0;
let ringStartRotation = 0;
const orbitContainer = document.getElementById('orbit-container');

function getCenterPoint() {
    const rect = orbitContainer.getBoundingClientRect();
    return {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2
    };
}

function startDrag(e) {
    isDragging = true;
    ring.style.transition = 'none';
    
    // PointerEvents give us pageX/pageY directly for both mouse and touch!
    const center = getCenterPoint();
    startAngle = Math.atan2(e.pageY - center.y, e.pageX - center.x) * (180 / Math.PI);
    ringStartRotation = currentRotation;
    
    // This "captures" your finger so the wheel keeps spinning even if your finger slides slightly off the ring
    ring.setPointerCapture(e.pointerId);
}

function doDrag(e) {
    if (!isDragging) return;
    e.preventDefault(); // Extra safety to prevent scrolling
    
    const center = getCenterPoint();
    const currentAngle = Math.atan2(e.pageY - center.y, e.pageX - center.x) * (180 / Math.PI);
    
    let deltaAngle = currentAngle - startAngle;
    currentRotation = ringStartRotation + deltaAngle;
    
    updateRingRotation();
}

function stopDrag(e) {
    if (isDragging) {
        isDragging = false;
        ring.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        ring.releasePointerCapture(e.pointerId);
    }
}

// Attach Universal Pointer Events (Handles Mouse, Touch, and Stylus automatically)
ring.addEventListener('pointerdown', startDrag);
window.addEventListener('pointermove', doDrag, { passive: false });
window.addEventListener('pointerup', stopDrag);
window.addEventListener('pointercancel', stopDrag);

function updateRingRotation() {
    ring.style.transform = `rotate(${currentRotation}deg)`;
    const cards = document.querySelectorAll('.orbit-card');
    cards.forEach(card => {
        const baseAngle = parseFloat(card.dataset.angle);
        card.style.transform = `rotate(${baseAngle}deg) translateY(-${radius}px) rotate(-${baseAngle + currentRotation}deg)`;
    });
}

// 4. Center Stage Interaction
const centerStage = document.getElementById('center-stage');

function loadLore(card) {
    centerStage.classList.remove('stage-active');
    
    setTimeout(() => {
        // Populate Data Strings
        document.getElementById('display-char').innerText = card.char;
        document.getElementById('display-title').innerText = card.title;
        document.getElementById('display-img').src = card.img;
        document.getElementById('display-duality').innerText = card.duality;
        document.getElementById('display-path').innerText = card.path;
        document.getElementById('display-story').innerText = card.story;
        
        // Mobile Specific Data Population
        document.getElementById('mobile-display-char').innerText = card.char;
        document.getElementById('mobile-display-title').innerText = card.title;
        document.getElementById('mobile-display-duality').innerText = card.duality; /* NEW */
        document.getElementById('mobile-display-path').innerText = card.path;       /* NEW */
        
        // --- DYNAMIC COLOR THEME ---
        const themeColor = card.color;
        
        // 1. Colorize the Path & Title Text
        document.getElementById('display-path').style.color = themeColor;
        document.getElementById('display-title').style.color = themeColor;
        document.getElementById('mobile-display-title').style.color = themeColor;
        document.getElementById('mobile-display-char').style.color = themeColor;
        document.getElementById('mobile-display-path').style.color = themeColor;    /* NEW */
        document.getElementById('mobile-display-duality').style.color = themeColor; /* NEW */
        
        // 2. Colorize the giant metallic character name gradient & shadow
        document.getElementById('display-char').style.backgroundImage = `linear-gradient(to bottom, #ffffff, ${themeColor})`;
        document.getElementById('display-char').style.filter = `drop-shadow(0 0 10px ${themeColor}80)`; 
        
        // 3. Find all the tiny labels ("The Concept", "The Path", etc.) and colorize them
        const smallLabels = centerStage.querySelectorAll('p.text-amber-500');
        smallLabels.forEach(label => {
            label.style.color = themeColor;
        });

        // 4. Colorize the Card Border and Glow
        const displayImg = document.getElementById('display-img');
        displayImg.style.borderColor = `${themeColor}66`; 
        displayImg.style.boxShadow = `0 0 40px ${themeColor}4D`; 

        // 5. Colorize the borders of the Lore Panels
        document.getElementById('panel-left').style.borderColor = `${themeColor}66`;
        document.getElementById('panel-right').style.borderColor = `${themeColor}66`;
        
        // Fade in
        centerStage.classList.add('stage-active');
    }, 400); 
}

// ADDED: Close Lore Function
function closeLore() {
    centerStage.classList.remove('stage-active');
}

/* ... Keep your initParticles function at the bottom ... */

// 5. Background Particles (Reused from lobby for consistency)
function initParticles() {
    const canvas = document.getElementById('particle-canvas');
    const ctx = canvas.getContext('2d');
    let width, height, particles = [];
    const colorBases = [{ r: 251, g: 191, b: 36 }, { r: 168, g: 85, b: 247 }, { r: 45, g: 212, b: 191 }, { r: 225, g: 29, b: 72 }];

    function resize() { width = canvas.width = window.innerWidth; height = canvas.height = window.innerHeight; }
    
    class Particle {
        constructor() {
            this.x = Math.random() * width; this.y = Math.random() * height;
            this.size = Math.random() * 3 + 1;
            this.speedX = (Math.random() - 0.5) * 0.3; this.speedY = (Math.random() - 0.5) * 0.3;
            this.baseColor = colorBases[Math.floor(Math.random() * colorBases.length)];
            this.alpha = Math.random() * 0.8; this.alphaMax = 0.4 + Math.random() * 0.5;
            this.alphaDir = Math.random() > 0.5 ? 1 : -1; this.fadeSpeed = 0.003 + Math.random() * 0.007;
        }
        update() {
            this.x += this.speedX; this.y += this.speedY;
            this.alpha += this.fadeSpeed * this.alphaDir;
            if (this.alpha >= this.alphaMax) { this.alpha = this.alphaMax; this.alphaDir = -1; }
            if (this.alpha <= 0) { this.alpha = 0; this.alphaDir = 1; this.x = Math.random() * width; this.y = Math.random() * height; }
            if (this.x < 0) this.x = width; if (this.x > width) this.x = 0;
            if (this.y < 0) this.y = height; if (this.y > height) this.y = 0;
        }
        draw() {
            if (this.alpha <= 0) return;
            ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${this.baseColor.r}, ${this.baseColor.g}, ${this.baseColor.b}, ${this.alpha})`;
            ctx.shadowBlur = 10; ctx.shadowColor = `rgba(${this.baseColor.r}, ${this.baseColor.g}, ${this.baseColor.b}, ${this.alpha})`;
            ctx.fill();
        }
    }
    
    function createParticles() { particles = []; for (let i = 0; i < Math.floor(window.innerWidth / 12); i++) particles.push(new Particle()); }
    function animate() { ctx.clearRect(0, 0, width, height); particles.forEach(p => { p.update(); p.draw(); }); requestAnimationFrame(animate); }
    
    window.addEventListener('resize', () => { resize(); createParticles(); });
    resize(); createParticles(); animate();
}

document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    // Initialize the cards perfectly upright
    updateRingRotation();
});