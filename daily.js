// 1. The Complete Oracle Database (Now with Daily Guidance)
const meaningsData = [
    // SEQUENCE
    { id: 1, title: "The Initiator", char: "Crystal", duality: "Simplicity", path: "Sequence", color: "#cbd5e1", img: "images/Crystal.jpg", 
      guidance: "Focus on the basics today. Strip away overthinking and tackle your tasks with pure, unburdened intention. Avoid getting entangled in other people's complex drama." },
    { id: 2, title: "The Executioner", char: "Psylocke", duality: "Proximity", path: "Sequence", color: "#a855f7", img: "images/Psylocke.jpg", 
      guidance: "Stop worrying about the distant future. Your power today lies in handling what is immediately in front of you. Cut through distractions with absolute precision." },
    { id: 3, title: "The Artist", char: "Songbird", duality: "Repulsion", path: "Sequence", color: "#ec4899", img: "images/Songbird.png", 
      guidance: "It is time to set firm boundaries. Protect your energy and say no to unreasonable demands. Expect someone to push your limits—stand your ground." },
    { id: 4, title: "The Frustrated", char: "Polaris", duality: "Attraction", path: "Sequence", color: "#22c55e", img: "images/Polaris.jpg", 
      guidance: "You will draw both positive and chaotic energies to yourself today. Be highly selective about what you choose to hold onto. Avoid acting purely on magnetic impulses." },
    { id: 5, title: "The Lost", char: "Madelyne Pryor", duality: "Destruction", path: "Sequence", color: "#ef4444", img: "images/Madelyne-Pryor.jpg", 
      guidance: "A false reality or bad habit needs to be burned away. Do not fear the sudden end of a project or mindset; this ruin makes space for your true self to emerge." },
    { id: 6, title: "The Wayfarer", char: "Loki", duality: "Time", path: "Sequence", color: "#10b981", img: "images/Loki.jpg", 
      guidance: "Be entirely adaptable today. Your schedule will likely shift without warning. Use these unexpected pockets of time to your advantage rather than fighting the clock." },
    { id: 7, title: "The Thinker", char: "Emma Frost", duality: "Addition", path: "Sequence", color: "#f8fafc", img: "images/Emma-Frost.jpg", 
      guidance: "Demand perfection from your own intellect today. It is a day for strategic planning and intellectual growth. Avoid emotional outbursts; rely on cold, diamond-sharp logic." },
    { id: 8, title: "The Returnee", char: "Invisible Woman", duality: "Space", path: "Sequence", color: "#3b82f6", img: "images/Invisible-Woman.jpg", 
      guidance: "Create a safe haven for yourself or a loved one. Step back and manipulate the space between you and a stressful situation. Sometimes, the best action is to remain unseen." },
    { id: 9, title: "The Enlightened", char: "Sersi", duality: "Creation", path: "Sequence", color: "#10b981", img: "images/Sersi.jpg", 
      guidance: "Your artistic and creative sparks are fully ignited. Transmute your ordinary tasks into something beautiful. Do not accept the mundane—shape reality to your will." },
    { id: 10, title: "The Apprentice", char: "Pixie", duality: "Abstraction", path: "Sequence", color: "#d946ef", img: "images/Pixie.png", 
      guidance: "Step outside your comfort zone and approach problems with boundless imagination. Expect bizarre or unusual solutions to work best today. Avoid rigid, traditional thinking." },
    { id: 11, title: "The Daywalker", char: "Luna Snow", duality: "Positivity", path: "Sequence", color: "#93c5fd", img: "images/Luna-Snow.jpg", 
      guidance: "Radiate hope to those around you. You have the power to mend a broken situation through pure optimism. Avoid sinking into despair, even if the night feels dark." },
    { id: 12, title: "The Destitute", char: "Killer Frost", duality: "Deficiency", path: "Sequence", color: "#60a5fa", img: "images/Killer-Frost.png", 
      guidance: "You are operating on minimum resources today. Conserve your energy, money, and warmth. Do not overextend yourself for others until your own cup is full." },
    { id: 13, title: "The Looker-Back", char: "Jennifer Kale", duality: "Origin", path: "Sequence", color: "#8b5cf6", img: "images/Jennifer-Kale.jpg", 
      guidance: "Look to the past to solve today's problem. Old journals, ancient advice, or childhood memories hold the key. Do not rush forward without understanding your roots." },
    { id: 14, title: "The Stargazer", char: "Halo", duality: "External", path: "Sequence", color: "#facc15", img: "images/Halo.jpg", 
      guidance: "Go outside and explore the vast horizons of the world. Seek meaning in new environments and conversations. Avoid staying locked in your own internal bubble." },
    { id: 15, title: "The Warrior", char: "Black Canary", duality: "Symbiosis", path: "Sequence", color: "#60a5fa", img: "images/Black-Canary.png", 
      guidance: "True strength today is found in partnership. Reach out to an ally or collaborate on a difficult task. Avoid trying to fight your battles entirely alone." },
    { id: 16, title: "The Charioteer", char: "Livewire", duality: "Change", path: "Sequence", color: "#38bdf8", img: "images/Livewire.jpg", 
      guidance: "Move quickly! Sudden, shocking shifts are coming your way today. Ride the momentum of change rather than resisting it. Expect the unexpected." },
    { id: 17, title: "The Ruler", char: "Medusa", duality: "Totality", path: "Sequence", color: "#ea580c", img: "images/Medusa.png", 
      guidance: "You must carry the weight of leadership today. Take absolute responsibility for your domain. Do not delegate the hard choices; your indomitable will is required." },
    { id: 18, title: "The Strategist", char: "Sindel", duality: "Conflict", path: "Sequence", color: "#c084fc", img: "images/Sindel.jpg", 
      guidance: "Do not shy away from a necessary confrontation. Use your voice and assert your authority to command the room. Peace will only come after the storm is addressed." },
    { id: 19, title: "The Rester", char: "Kelda", duality: "Cycle", path: "Sequence", color: "#e2e8f0", img: "images/Kelda.jpg", 
      guidance: "Patience is your greatest tool today. If things are moving slowly, it is because they are resting for the next season. Avoid forcing progress; allow yourself to rest and rejuvenate." },
    { id: 20, title: "The Gardener", char: "Poison Ivy", duality: "Excess", path: "Sequence", color: "#16a34a", img: "images/Poison-Ivy.png", 
      guidance: "You are surrounded by overwhelming abundance, but beware of toxic overgrowth. Weed out the excess in your life—too many tasks, too much indulgence. Cultivate only what serves you." },
    { id: 21, title: "The Preacher", char: "Gloriana", duality: "Giving", path: "Sequence", color: "#fde047", img: "images/Gloriana.png", 
      guidance: "Elevate someone else today. Share your wisdom, your time, or your resources without expecting anything in return. Avoid hoarding your gifts." },
    { id: 22, title: "The Ferryman", char: "Sister Grimm", duality: "Infinity", path: "Sequence", color: "#dc2626", img: "images/Sister-Grimm.jpg", 
      guidance: "You are navigating a profound transition. Trust the process as you walk between the old you and the new you. Do not let fear paralyze your spiritual growth." },
    { id: 23, title: "The Onlooker", char: "Umar", duality: "Acceptance", path: "Sequence", color: "#14b8a6", img: "images/Umar.jpg", 
      guidance: "Observe the chaos around you with detached amusement. It is not your job to fix everything. Practice absolute acceptance and refuse to intervene in other people's drama." },
    { id: 24, title: "The Hermit", char: "Jean Grey", duality: "Order", path: "Sequence", color: "#f97316", img: "images/Jean-Grey.jpg", 
      guidance: "You have earned your internal peace. Impose absolute order on your mind and your surroundings today. Avoid letting external anxieties disrupt your mastery." },

    // WILD CARDS
    { id: 25, title: "The Infant", char: "Singularity", duality: "Void", path: "Wild Card", color: "#3b82f6", img: "images/Singularity.jpg", 
      guidance: "You are entering a space where the rules have not been written. Embrace the terrifying, infinite potential of not knowing the answer. Avoid rushing to define the situation." },
    { id: 26, title: "The Deceased", char: "Hela", duality: "Malice", path: "Wild Card", color: "#10b981", img: "images/Hela.jpg", 
      guidance: "Accept the harsh truth that something must end today. Let it wither. Enforce your boundaries strictly and do not try to resuscitate what is already gone." },
    { id: 27, title: "The Ronin", char: "Scarlet Witch", duality: "Chaos", path: "Wild Card", color: "#dc2626", img: "images/Scarlet-Witch.jpg", 
      guidance: "You hold the wild power to rewrite your reality today. Harness the chaos around you to manifest a miracle. Avoid trying to control everything tightly—let the storm work for you." },
    { id: 28, title: "The Scholar", char: "White Fox", duality: "Evolution", path: "Wild Card", color: "#94a3b8", img: "images/White-Fox.png", 
      guidance: "Rely entirely on sharp calculation and observation. Map your path forward using logic and keen senses. Do not let emotional bias cloud your theoretical knowledge." },
    { id: 29, title: "The Avoider", char: "Cyclone", duality: "Freedom", path: "Wild Card", color: "#93c5fd", img: "images/Cyclone.jpg", 
      guidance: "You will feel a sudden urge to flee your responsibilities. While you should seek liberation, ensure you aren't just running away from growth. Ride the wind carefully." },
    { id: 30, title: "The Hunter", char: "Black Mamba", duality: "Restriction", path: "Wild Card", color: "#6b7280", img: "images/Black-Mamba.jpg", 
      guidance: "Trust your sharpest instincts today; danger may be hidden in illusions. Beware of unseen traps or restrictive contracts. Do not blindly trust beautiful promises." },
    { id: 31, title: "The Mercenary", char: "Typhoid Mary", duality: "Unknown", path: "Wild Card", color: "#ef4444", img: "images/Typhoid-Mary.png", 
      guidance: "You will need to adapt your stance rapidly today. Shift allegiances or change your mind if it ensures your survival in an unpredictable situation. Avoid rigid loyalty to a sinking ship." },
    { id: 32, title: "The Gravedigger", char: "Selene Gallio", duality: "Lack", path: "Wild Card", color: "#9f1239", img: "images/Selene.jpg", 
      guidance: "You may feel a deep hunger or sense of scarcity today. Do not indulge in dark thoughts or drain the lifeforce of others to fill your void. Sit quietly with the shadows." },
    { id: 33, title: "The Nightcrawler", char: "Golden Glider", duality: "Concrete", path: "Wild Card", color: "#fbbf24", img: "images/Golden-Glider.jpg", 
      guidance: "Focus on tangible, concrete success today. Look for clever shortcuts or manipulate the board slightly in your favor, as long as the results are real. Avoid vague promises." },
    { id: 34, title: "The Passenger", char: "Silver Swan", duality: "Reduction", path: "Wild Card", color: "#cbd5e1", img: "images/Silver-Swan.png", 
      guidance: "You may feel like you are drifting on currents you cannot control. Do not surrender to passive victimhood. Find the one small thing you *can* control and fight back." },
    { id: 35, title: "The Prospector", char: "Amora", duality: "Illusion", path: "Wild Card", color: "#22c55e", img: "images/Amora.jpg", 
      guidance: "You are holding blinding allure today. Use your charm to twist situations in your favor, but beware of deceiving yourself in the process. Avoid trusting things that look too good to be true." },
    { id: 36, title: "The Drowning", char: "Silver Banshee", duality: "Negative", path: "Wild Card", color: "#f8fafc", img: "images/Silver-Banshee.jpg", 
      guidance: "Unresolved grief or frustration may try to surface today. Do not sink so deeply into your sorrow that you lash out at those around you. Express the pain, but do not become it." },
    { id: 37, title: "The Thief", char: "Satana", duality: "Ending", path: "Wild Card", color: "#dc2626", img: "images/Satana.jpg", 
      guidance: "Snatch the victory that rightfully belongs to you. Do not let others feed on your hard work today. Be bold, be slightly selfish, and secure your final prize." },
    { id: 38, title: "The Vagrant", char: "Emerald Empress", duality: "Fragment", path: "Wild Card", color: "#10b981", img: "images/Emerald-Empress.jpg", 
      guidance: "Ensure your identity isn't entirely bound to a single obsession, project, or person. If you feel hollow, it is time to build your core. Avoid putting all your power in one place." },
    { id: 39, title: "The Patient", char: "Enchantress", duality: "Atrophy", path: "Wild Card", color: "#16a34a", img: "images/Enchantress.png", 
      guidance: "Beware of stagnation today. A slow, maddening creep of laziness or spiritual sickness is trying to take root. Break your routine immediately before the rot sets in." },
    { id: 40, title: "The Politician", char: "Morgan le Fay", duality: "Complexity", path: "Wild Card", color: "#7e22ce", img: "images/Morgan-Le-Fay.png", 
      guidance: "Play the grand game today. The situation is incredibly complex, requiring strategic maneuvering. Think five steps ahead and orchestrate your power play perfectly." },
    { id: 41, title: "The Redeemer", char: "Raven", duality: "Inner", path: "Wild Card", color: "#4c1d95", img: "images/Raven.jpg", 
      guidance: "Look inward and meditate. You are carrying heavy emotional baggage that needs to be kept in check. Courageously seek the light and do not let your inner demons dictate your actions." },
    { id: 42, title: "The Pretender", char: "Amethyst", duality: "Presence", path: "Wild Card", color: "#a855f7", img: "images/Amethyst.jpg", 
      guidance: "You are carrying the burden of living a double life. Maintain your presence and ground yourself in the mundane world, but do not forget the profound truths you hold inside." },
    { id: 43, title: "The Instigator", char: "Circe", duality: "Known", path: "Wild Card", color: "#d946ef", img: "images/Circe.jpg", 
      guidance: "Use the known weaknesses of a bad situation to dismantle it completely. You are the catalyst for destructive, necessary change today. Avoid playing nice when old empires need to fall." },
    { id: 44, title: "The Prophet", char: "Magik", duality: "Distance", path: "Wild Card", color: "#eab308", img: "images/Magik.png", 
      guidance: "You may foresee a tragic outcome but feel too distant to prevent it. Protect your own soul first. Avoid taking on the crushing burden of trying to save everyone." },
    { id: 45, title: "The Heir", char: "Star Sapphire", duality: "Sufficiency", path: "Wild Card", color: "#d946ef", img: "images/Star-Sapphire.jpg", 
      guidance: "You are enough. You have inherited a grand legacy or heavy task—do not let the fear of inadequacy stop you. Your vulnerability is the actual source of your power today." },
    { id: 46, title: "The Martyr", char: "Storm", duality: "Benefit", path: "Wild Card", color: "#cbd5e1", img: "images/Storm.png", 
      guidance: "Voluntary sacrifice will bring great benefit to the whole today. Command your atmosphere and bring rain to the desert. Avoid acting purely for self-interest." },
    { id: 47, title: "The Gatekeeper", char: "Karnilla", duality: "Static", path: "Wild Card", color: "#4ade80", img: "images/Karnilla.png", 
      guidance: "Refuse to change today. Stubbornly guard your boundaries and maintain the eternal status quo. Do not let others pressure you into altering a system that is perfectly working for you." },
    { id: 48, title: "The Mirror-Bearer", char: "Clea", duality: "Reality", path: "Wild Card", color: "#c084fc", img: "images/Clea.png", 
      guidance: "Look into the mirror. The answers you are seeking are already known to you. Stop looking for outside validation and force yourself to face your own reality." }
];

// 2. Element Setup
const fogContainer = document.getElementById('fog-container');
const drawBtn = document.getElementById('draw-btn');
const drawContainer = document.getElementById('draw-container');
const revealStage = document.getElementById('reveal-stage');
const lightsCanvas = document.getElementById('magic-lights-canvas');
const ctx = lightsCanvas.getContext('2d');

// 3. Entrance Animation: Form the Fog
window.addEventListener('DOMContentLoaded', () => {
    // Wait half a second, then gently fade the fog in
    setTimeout(() => {
        fogContainer.classList.add('fog-active');
    }, 500);
});

// 4. Magic Lights Animation Engine (Canvas)
let animationId;
let width, height;
let orbs = [];

// Celestial/Magical colors for the light storm
const orbColors = ['#fde68a', '#38bdf8', '#a855f7', '#fbbf24', '#f43f5e'];

function resizeCanvas() {
    // 1. Set the physical internal resolution of the canvas
    width = lightsCanvas.width = window.innerWidth;
    height = lightsCanvas.height = window.innerHeight;
    
    // 2. Force CSS dimensions to override any weird layout constraints
    lightsCanvas.style.position = 'fixed';
    lightsCanvas.style.top = '0';
    lightsCanvas.style.left = '0';
    lightsCanvas.style.width = '100vw';
    lightsCanvas.style.height = '100vh';
}

class MagicOrb {
    constructor() {
        this.angle = Math.random() * Math.PI * 2;
        // Start far away from center
        this.radius = Math.max(width, height); 
        this.speed = 0.02 + Math.random() * 0.05; // Orbit speed
        this.pull = 2 + Math.random() * 5; // Speed pulling towards center
        this.size = Math.random() * 4 + 2;
        this.color = orbColors[Math.floor(Math.random() * orbColors.length)];
    }
    
    update() {
        // Spin around
        this.angle += this.speed;
        // Get sucked into the center
        if (this.radius > 5) {
            this.radius -= this.pull;
        }
        
        this.x = (width / 2) + Math.cos(this.angle) * this.radius;
        this.y = (height / 2) + Math.sin(this.angle) * this.radius;
    }
    
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 15;
        ctx.shadowColor = this.color;
        ctx.fill();
    }
}

function startLightStorm() {
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Spawn 150 orbs
    orbs = [];
    for (let i = 0; i < 150; i++) {
        orbs.push(new MagicOrb());
    }
    
    function animate() {
        // Creates a slight trailing effect
        ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
        ctx.fillRect(0, 0, width, height);
        
        orbs.forEach(orb => {
            orb.update();
            orb.draw();
        });
        animationId = requestAnimationFrame(animate);
    }
    animate();
}

// 5. The Drawing Sequence
drawBtn.addEventListener('click', () => {
    
    // Step A: Hide the draw button
    drawContainer.style.opacity = '0';
    drawContainer.style.pointerEvents = 'none';
    
    // Step B: Start the Light Storm inside the fog
    lightsCanvas.style.opacity = '1';
    startLightStorm();
    
    // Step C: Dissipate the Fog after 2.5 seconds
    setTimeout(() => {
        fogContainer.classList.remove('fog-active');
        fogContainer.classList.add('fog-dissipate');
    }, 2500);
    
    // Step D: Reveal the Card after the storm clears (4.5 seconds)
    setTimeout(() => {
        // Fade out lights and stop rendering
        lightsCanvas.style.opacity = '0';
        setTimeout(() => cancelAnimationFrame(animationId), 1000);
        
        revealCard();
    }, 4500);
});

// 6. Reveal & Populate Logic
function revealCard() {
    // Pick a random card from the 48
    const randomCard = meaningsData[Math.floor(Math.random() * meaningsData.length)];
    const themeColor = randomCard.color;
    
    // Populate text
    document.getElementById('daily-char').innerText = randomCard.char;
    document.getElementById('daily-title').innerText = randomCard.title;
    document.getElementById('daily-img').src = randomCard.img;
    document.getElementById('daily-duality').innerText = randomCard.duality;
    document.getElementById('daily-path').innerText = randomCard.path;
    document.getElementById('daily-story').innerText = randomCard.guidance;
    
    // Apply dynamic theme colors
    document.getElementById('daily-char').style.backgroundImage = `linear-gradient(to bottom, #ffffff, ${themeColor})`;
    document.getElementById('daily-char').style.filter = `drop-shadow(0 0 15px ${themeColor}80)`;
    
    document.getElementById('daily-duality').style.color = themeColor;
    document.getElementById('daily-card-border').style.borderColor = `${themeColor}66`;
    document.getElementById('daily-card-border').style.boxShadow = `0 0 50px ${themeColor}4D`;
    document.getElementById('daily-panel').style.borderColor = `${themeColor}66`;
    
    // Colorize the small UI labels
    const smallLabels = document.querySelectorAll('.theme-text');
    smallLabels.forEach(label => {
        label.style.color = themeColor;
    });

    // Fade in the stage
    revealStage.classList.add('reveal-active');
}