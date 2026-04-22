// ========================================================
// THE DIVINATION ENGINE (Phase 1-4)
// ========================================================

const meaningsData = [
    // THE PROGRESSION
    { id: 1, title: "The Initiator", char: "Crystal", duality: "Simplicity", path: "Progression", color: "#fac974", img: "images/Crystal.jpg", guidance: "Focus on the basics today. Strip away overthinking and tackle your tasks with pure, unburdened intention." },
    { id: 2, title: "The Executioner", char: "Psylocke", duality: "Proximity", path: "Progression", color: "#a855f7", img: "images/Psylocke.jpg", guidance: "Stop worrying about the distant future. Your power today lies in handling what is immediately in front of you." },
    { id: 3, title: "The Artist", char: "Songbird", duality: "Repulsion", path: "Progression", color: "#ec4899", img: "images/Songbird.png", guidance: "It is time to set firm boundaries. Protect your energy and say no to unreasonable demands." },
    { id: 4, title: "The Frustrated", char: "Polaris", duality: "Attraction", path: "Progression", color: "#22c55e", img: "images/Polaris.jpg", guidance: "You will draw both positive and chaotic energies to yourself today. Be highly selective about what you choose." },
    { id: 5, title: "The Lost", char: "Madelyne Pryor", duality: "Destruction", path: "Progression", color: "#ef4444", img: "images/Madelyne-Pryor.jpg", guidance: "A false reality or bad habit needs to be burned away. Do not fear the sudden end of a project." },
    { id: 6, title: "The Wayfarer", char: "Loki", duality: "Time", path: "Progression", color: "#10b981", img: "images/Loki.jpg", guidance: "Be entirely adaptable today. Your schedule will likely shift without warning. Use these pockets of time." },
    { id: 7, title: "The Thinker", char: "Emma Frost", duality: "Addition", path: "Progression", color: "#87c0f8", img: "images/Emma-Frost.jpg", guidance: "Demand perfection from your own intellect today. Avoid emotional outbursts; rely on cold logic." },
    { id: 8, title: "The Returnee", char: "Invisible Woman", duality: "Space", path: "Progression", color: "#3b82f6", img: "images/Invisible-Woman.jpg", guidance: "Create a safe haven for yourself or a loved one. Step back and manipulate the space between you." },
    { id: 9, title: "The Enlightened", char: "Sersi", duality: "Creation", path: "Progression", color: "#ea57f8", img: "images/Sersi.jpg", guidance: "Your artistic and creative sparks are fully ignited. Transmute your ordinary tasks into something beautiful." },
    { id: 10, title: "The Apprentice", char: "Pixie", duality: "Abstraction", path: "Progression", color: "#d946ef", img: "images/Pixie.png", guidance: "Step outside your comfort zone and approach problems with boundless imagination." },
    { id: 11, title: "The Daywalker", char: "Luna Snow", duality: "Positivity", path: "Progression", color: "#93c5fd", img: "images/Luna-Snow.jpg", guidance: "Radiate hope to those around you. You have the power to mend a broken situation through pure optimism." },
    { id: 12, title: "The Destitute", char: "Killer Frost", duality: "Deficiency", path: "Progression", color: "#60a5fa", img: "images/Killer-Frost.png", guidance: "You are operating on minimum resources today. Conserve your energy, money, and warmth." },
    { id: 13, title: "The Looker-Back", char: "Jennifer Kale", duality: "Origin", path: "Progression", color: "#c55cf6", img: "images/Jennifer-Kale.jpg", guidance: "Look to the past to solve today's problem. Old journals, ancient advice, or childhood memories hold the key." },
    { id: 14, title: "The Stargazer", char: "Halo", duality: "External", path: "Progression", color: "#facc15", img: "images/Halo.jpg", guidance: "Go outside and explore the vast horizons of the world. Seek meaning in new environments." },
    { id: 15, title: "The Warrior", char: "Black Canary", duality: "Symbiosis", path: "Progression", color: "#fadb60", img: "images/Black-Canary.png", guidance: "True strength today is found in partnership. Reach out to an ally or collaborate on a difficult task." },
    { id: 16, title: "The Charioteer", char: "Livewire", duality: "Change", path: "Progression", color: "#ce1660", img: "images/Livewire.jpg", guidance: "Move quickly! Sudden, shocking shifts are coming your way today. Ride the momentum." },
    { id: 17, title: "The Ruler", char: "Medusa", duality: "Totality", path: "Progression", color: "#ea580c", img: "images/Medusa.png", guidance: "You must carry the weight of leadership today. Take absolute responsibility for your domain." },
    { id: 18, title: "The Strategist", char: "Sindel", duality: "Conflict", path: "Progression", color: "#c084fc", img: "images/Sindel.jpg", guidance: "Do not shy away from a necessary confrontation. Use your voice and assert your authority." },
    { id: 19, title: "The Rester", char: "Kelda", duality: "Cycle", path: "Progression", color: "#edb6ed", img: "images/Kelda.jpg", guidance: "Patience is your greatest tool today. If things are moving slowly, allow yourself to rest." },
    { id: 20, title: "The Gardener", char: "Poison Ivy", duality: "Excess", path: "Progression", color: "#16a34a", img: "images/Poison-Ivy.png", guidance: "You are surrounded by overwhelming abundance, but beware of toxic overgrowth. Weed out the excess." },
    { id: 21, title: "The Preacher", char: "Gloriana", duality: "Giving", path: "Progression", color: "#fde047", img: "images/Gloriana.png", guidance: "Elevate someone else today. Share your wisdom, your time, or your resources without expecting anything." },
    { id: 22, title: "The Ferryman", char: "Sister Grimm", duality: "Infinity", path: "Progression", color: "#9c26dc", img: "images/Sister-Grimm.jpg", guidance: "You are navigating a profound transition. Trust the process as you walk between the old you and the new." },
    { id: 23, title: "The Onlooker", char: "Umar", duality: "Acceptance", path: "Progression", color: "#4514b8", img: "images/Umar.jpg", guidance: "Observe the chaos around you with detached amusement. It is not your job to fix everything." },
    { id: 24, title: "The Hermit", char: "Jean Grey", duality: "Order", path: "Progression", color: "#f97316", img: "images/Jean-Grey.jpg", guidance: "You have earned your internal peace. Impose absolute order on your mind and your surroundings." },

    // THE DIRECTION
    { id: 25, title: "The Infant", char: "Singularity", duality: "Void", path: "Direction", color: "#129e72", img: "images/Singularity.jpg", guidance: "You are entering a space where the rules have not been written. Embrace the terrifying, infinite potential." },
    { id: 26, title: "The Deceased", char: "Hela", duality: "Malice", path: "Direction", color: "#10b981", img: "images/Hela.jpg", guidance: "Accept the harsh truth that something must end today. Let it wither. Enforce your boundaries strictly." },
    { id: 27, title: "The Ronin", char: "Scarlet Witch", duality: "Chaos", path: "Direction", color: "#dc2626", img: "images/Scarlet-Witch.jpg", guidance: "You hold the wild power to rewrite your reality today. Harness the chaos around you to manifest a miracle." },
    { id: 28, title: "The Scholar", char: "White Fox", duality: "Evolution", path: "Direction", color: "#80a4d6", img: "images/White-Fox.png", guidance: "Rely entirely on sharp calculation and observation. Map your path forward using logic." },
    { id: 29, title: "The Avoider", char: "Cyclone", duality: "Freedom", path: "Direction", color: "#049f38", img: "images/Cyclone.jpg", guidance: "You will feel a sudden urge to flee your responsibilities. Ensure you aren't just running away from growth." },
    { id: 30, title: "The Hunter", char: "Black Mamba", duality: "Restriction", path: "Direction", color: "#04721c", img: "images/Black-Mamba.jpg", guidance: "Trust your sharpest instincts today; danger may be hidden in illusions. Beware of unseen traps." },
    { id: 31, title: "The Mercenary", char: "Typhoid Mary", duality: "Unknown", path: "Direction", color: "#ef4444", img: "images/Typhoid-Mary.png", guidance: "You will need to adapt your stance rapidly today. Shift allegiances or change your mind if it ensures survival." },
    { id: 32, title: "The Gravedigger", char: "Selene Gallio", duality: "Lack", path: "Direction", color: "#9f1239", img: "images/Selene.jpg", guidance: "You may feel a deep hunger or sense of scarcity today. Do not indulge in dark thoughts." },
    { id: 33, title: "The Nightcrawler", char: "Golden Glider", duality: "Concrete", path: "Direction", color: "#fbbf24", img: "images/Golden-Glider.jpg", guidance: "Focus on tangible, concrete success today. Look for clever shortcuts or manipulate the board slightly." },
    { id: 34, title: "The Passenger", char: "Silver Swan", duality: "Reduction", path: "Direction", color: "#cbd5e1", img: "images/Silver-Swan.png", guidance: "You may feel like you are drifting on currents you cannot control. Do not surrender to passive victimhood." },
    { id: 35, title: "The Prospector", char: "Amora", duality: "Illusion", path: "Direction", color: "#22c55e", img: "images/Amora.jpg", guidance: "You are holding blinding allure today. Use your charm to twist situations in your favor." },
    { id: 36, title: "The Drowning", char: "Silver Banshee", duality: "Negative", path: "Direction", color: "#f8fafc", img: "images/Silver-Banshee.jpg", guidance: "Unresolved grief or frustration may try to surface today. Express the pain, but do not become it." },
    { id: 37, title: "The Thief", char: "Satana", duality: "Ending", path: "Direction", color: "#dc2626", img: "images/Satana.jpg", guidance: "Snatch the victory that rightfully belongs to you. Do not let others feed on your hard work today." },
    { id: 38, title: "The Vagrant", char: "Emerald Empress", duality: "Fragment", path: "Direction", color: "#10b981", img: "images/Emerald-Empress.jpg", guidance: "Ensure your identity isn't entirely bound to a single obsession. If you feel hollow, it is time to build your core." },
    { id: 39, title: "The Patient", char: "Enchantress", duality: "Atrophy", path: "Direction", color: "#16a34a", img: "images/Enchantress.png", guidance: "Beware of stagnation today. Break your routine immediately before the rot sets in." },
    { id: 40, title: "The Politician", char: "Morgan le Fay", duality: "Complexity", path: "Direction", color: "#7e22ce", img: "images/Morgan-Le-Fay.png", guidance: "Play the grand game today. Think five steps ahead and orchestrate your power play perfectly." },
    { id: 41, title: "The Redeemer", char: "Raven", duality: "Inner", path: "Direction", color: "#4c1d95", img: "images/Raven.jpg", guidance: "Look inward and meditate. Courageously seek the light and do not let your inner demons dictate your actions." },
    { id: 42, title: "The Pretender", char: "Amethyst", duality: "Presence", path: "Direction", color: "#a855f7", img: "images/Amethyst.jpg", guidance: "Maintain your presence and ground yourself in the mundane world, but do not forget the truths you hold inside." },
    { id: 43, title: "The Instigator", char: "Circe", duality: "Known", path: "Direction", color: "#dc227c", img: "images/Circe.jpg", guidance: "Use the known weaknesses of a bad situation to dismantle it completely. You are the catalyst for change." },
    { id: 44, title: "The Prophet", char: "Magik", duality: "Distance", path: "Direction", color: "#eab308", img: "images/Magik.png", guidance: "You may foresee a tragic outcome but feel too distant to prevent it. Protect your own soul first." },
    { id: 45, title: "The Heir", char: "Star Sapphire", duality: "Sufficiency", path: "Direction", color: "#d946ef", img: "images/Star-Sapphire.jpg", guidance: "You are enough. Do not let the fear of inadequacy stop you. Your vulnerability is your power." },
    { id: 46, title: "The Martyr", char: "Storm", duality: "Benefit", path: "Direction", color: "#cbd5e1", img: "images/Storm.png", guidance: "Voluntary sacrifice will bring great benefit to the whole today. Command your atmosphere." },
    { id: 47, title: "The Gatekeeper", char: "Karnilla", duality: "Static", path: "Direction", color: "#0c8f3c", img: "images/Karnilla.png", guidance: "Refuse to change today. Stubbornly guard your boundaries and maintain the eternal status quo." },
    { id: 48, title: "The Mirror-Bearer", char: "Clea", duality: "Reality", path: "Direction", color: "#6817b9", img: "images/Clea.png", guidance: "Look into the mirror. The answers you are seeking are already known to you. Face your own reality." }
];

const phaseAltar = document.getElementById('phase-altar');
const phaseTable = document.getElementById('phase-table');
const vortexContainer = document.getElementById('vortex-container');
const vortexEngine = document.getElementById('vortex-engine');
const dealEngine = document.getElementById('deal-engine');
const shuffleInstructions = document.getElementById('shuffle-instructions');
const shuffleProgress = document.getElementById('shuffle-progress');

let currentSpread = '';
let isShuffling = false;
let shuffleCharge = 0;
let animationFrameId;
let vortexAngle = 0;
let vortexCards = [];
let hasDealt = false;

function hexToRgba(hex, alpha) {
    const r = parseInt(hex.substring(1, 3), 16);
    const g = parseInt(hex.substring(3, 5), 16);
    const b = parseInt(hex.substring(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function getLayouts() {
    const vh = window.innerHeight;
    const vw = window.innerWidth;
    const targetHeight = vh * 0.60; 
    
    const baseW = 100; 
    const baseH = 220; 

    let layouts = {};

    let pointScale = targetHeight / baseH;
    if (baseW * pointScale > vw * 0.85) pointScale = (vw * 0.85) / baseW; 
    layouts['point'] = {
        scale: pointScale,
        positions: [ { x: 0, y: 0, label: 'CORE ADVICE' } ]
    };

    let lineScale = targetHeight / baseH;
    let gapX_line = 30; 
    let totalW_line = 3 * (baseW * lineScale) + 2 * gapX_line;
    if (totalW_line > vw * 0.9) {
        lineScale = (vw * 0.9 - 2 * gapX_line) / (3 * baseW); 
    }
    let sX_line = (baseW * lineScale) + gapX_line;
    layouts['line'] = {
        scale: lineScale,
        positions: [
            { x: -sX_line, y: 0, label: 'PAST' },
            { x: 0, y: 0, label: 'PRESENT' },
            { x: sX_line, y: 0, label: 'FUTURE' }
        ]
    };

    let gapY_cross = 25; 
    let crossScale = (targetHeight - 2 * gapY_cross) / (3 * baseH); 
    let gapX_cross = 25;
    let totalW_cross = 3 * (baseW * crossScale) + 2 * gapX_cross;
    if (totalW_cross > vw * 0.9) {
        crossScale = (vw * 0.9 - 2 * gapX_cross) / (3 * baseW); 
    }
    let sX_cross = (baseW * crossScale) + gapX_cross;
    let sY_cross = (baseH * crossScale) + gapY_cross;
    
    layouts['cross'] = {
        scale: crossScale,
        positions: [
            { x: 0, y: -sY_cross, label: 'UNCONTROLLABLE (INTERNAL)' }, 
            { x: -sX_cross, y: 0, label: 'UNCONTROLLABLE (EXTERNAL)' }, 
            { x: 0, y: 0, label: 'ROOT' },         
            { x: sX_cross, y: 0, label: 'CONTROLLABLE (EXTERNAL)' },  
            { x: 0, y: sY_cross, label: 'CONTROLLABLE (INTERNAL)' }   
        ]
    };

    return layouts;
}

function startRitual(spreadType, event) {
    currentSpread = spreadType;
    const clickedBtn = event.currentTarget;
    const allBtns = document.querySelectorAll('.spread-btn');
    
    allBtns.forEach(btn => {
        if (btn !== clickedBtn) {
            btn.style.transition = 'opacity 0.5s, transform 0.5s';
            btn.style.opacity = '0';
            btn.style.transform = 'scale(0.8)';
        }
    });

    clickedBtn.style.transition = 'transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94), filter 1s';
    clickedBtn.style.transform = 'scale(1.8)';
    clickedBtn.style.filter = 'brightness(1.5)';

// --- NEW: MANDALA ACCELERATION EFFECT ---
    const outerRings = document.querySelectorAll('.altar-circle-outer');
    const innerRings = document.querySelectorAll('.altar-circle-inner');
    
    outerRings.forEach(ring => {
        ring.style.transition = 'all 1.5s cubic-bezier(0.5, 0, 1, 1)';
        ring.style.animation = 'spin-slow-altar 1.5s cubic-bezier(0.5, 0, 1, 1) infinite';
        ring.style.transform = 'scale(1.3)';
        ring.style.filter = 'brightness(2.5)';
    });

    innerRings.forEach(ring => {
        ring.style.transition = 'all 1.5s cubic-bezier(0.5, 0, 1, 1)';
        ring.style.animation = 'spin-reverse-altar 1s cubic-bezier(0.5, 0, 1, 1) infinite';
        ring.style.transform = 'scale(1.3)';
        ring.style.filter = 'brightness(2.5)';
    });
    // ----------------------------------------

    let flashColor = '';
    if (spreadType === 'point') flashColor = 'rgba(168, 85, 247, 0.9)'; 
    else if (spreadType === 'line') flashColor = 'rgba(45, 212, 191, 0.9)'; 
    else if (spreadType === 'cross') flashColor = 'rgba(251, 191, 36, 0.9)'; 

    const flashOverlay = document.getElementById('transition-flash');
    
    setTimeout(() => {
        flashOverlay.style.backgroundColor = flashColor;
        flashOverlay.style.opacity = '1';
        
        setTimeout(() => {
            phaseAltar.style.display = 'none'; 
            phaseTable.style.opacity = '1';
            phaseTable.style.pointerEvents = 'auto';
            flashOverlay.style.opacity = '0';
            initVortex();
        }, 800); 

    }, 800); 
}

function initVortex() {
    vortexEngine.innerHTML = '';
    vortexCards = [];
    hasDealt = false;
    
    shuffleInstructions.style.display = 'block';
    shuffleInstructions.style.opacity = '1';
    
    for (let i = 0; i < 48; i++) {
        const card = document.createElement('div');
        card.className = 'vortex-card';
        vortexEngine.appendChild(card);
        vortexCards.push({
            el: card,
            offset: Math.random() * Math.PI * 2,
            radius: 80 + Math.random() * 150,
            yOffset: (Math.random() - 0.5) * 150,
            speedMod: 0.5 + Math.random()
        });
    }

    shuffleInstructions.classList.add('shuffle-pulse');
    animateVortex();

    shuffleInstructions.querySelector('h3').innerText = "Hold to Shuffle";
    shuffleProgress.style.width = '0%';

    vortexContainer.addEventListener('mousedown', startShuffleCharge);
    vortexContainer.addEventListener('mouseup', releaseShuffle);
    vortexContainer.addEventListener('mouseleave', releaseShuffle);
    vortexContainer.addEventListener('touchstart', (e) => { e.preventDefault(); startShuffleCharge(); }, {passive: false});
    vortexContainer.addEventListener('touchend', releaseShuffle);
}

function animateVortex() {
    vortexAngle += isShuffling ? 0.05 : 0.005; 

    vortexCards.forEach((c, i) => {
        const angle = vortexAngle * c.speedMod + c.offset;
        const currentRadius = isShuffling ? c.radius * (1 - (shuffleCharge/200)) : c.radius;
        const currentY = c.yOffset + (Math.sin(angle * 2) * 20);
        const x = Math.cos(angle) * currentRadius;
        const z = Math.sin(angle) * currentRadius;
        
        c.el.style.transform = `translate3d(${x}px, ${currentY}px, ${z}px) rotateY(${-angle}rad) rotateX(${Math.sin(vortexAngle)*20}deg)`;
    });

    if (isShuffling) {
        shuffleCharge = Math.min(shuffleCharge + 1, 100);
        shuffleProgress.style.width = `${shuffleCharge}%`;
    }

    animationFrameId = requestAnimationFrame(animateVortex);
}

function startShuffleCharge() {
    if (hasDealt) return; 
    if (shuffleCharge >= 100) return; 
    
    isShuffling = true;
    shuffleInstructions.querySelector('h3').innerText = "Channeling...";
}

function releaseShuffle() {
    if (!isShuffling) return;
    isShuffling = false;
    
    if (shuffleCharge > 30) {
        cancelAnimationFrame(animationFrameId);
        triggerDeal();
    } else {
        shuffleCharge = 0;
        shuffleProgress.style.width = '0%';
        shuffleInstructions.querySelector('h3').innerText = "Hold to Shuffle";
    }
}

// --- PHASE 3: THE SNAP DEAL & APPENDED READINGS ---
function triggerDeal() {
    hasDealt = true; 
    
    shuffleInstructions.style.display = 'none';
    shuffleInstructions.style.opacity = '0';

    vortexCards.forEach(c => {
        c.el.style.transition = 'all 0.5s cubic-bezier(0.8, 0, 0.2, 1)';
        c.el.style.transform = `translate3d(0, 0, 0) scale(0)`;
        c.el.style.opacity = '0';
    });

    const activeLayouts = getLayouts();
    const activeConfig = activeLayouts[currentSpread];
    const requiredCards = activeConfig.positions.length;
    
    let shuffledDeck = [...meaningsData].sort(() => 0.5 - Math.random());
    let drawnCards = shuffledDeck.slice(0, requiredCards);

    const readingSection = document.getElementById('reading-section');
    readingSection.innerHTML = `
        <div class="text-center mb-16 w-full">
            <h3 class="font-mythic text-3xl md:text-5xl text-amber-400 tracking-[0.2em] drop-shadow-md">The Divine Revelation</h3>
            <p class="font-body text-slate-400 italic text-lg mt-4">Scroll down to explore the profound messages of your spread.</p>
            <i class="ph ph-caret-down text-amber-500/50 text-4xl mt-8 animate-bounce"></i>
        </div>
        <div id="readings-container" class="w-full flex flex-col gap-16"></div>
    `;
    readingSection.classList.remove('hidden'); 

    setTimeout(() => {
        
        vortexEngine.style.display = 'none'; 
        dealEngine.style.pointerEvents = 'auto'; 
        
        // CRITICAL FOR MOBILE FLIPPING: Remove the touch-none class so user touches aren't blocked!
        vortexContainer.classList.remove('touch-none');

        const readingsContainer = document.getElementById('readings-container');

        activeConfig.positions.forEach((pos, index) => {
            const cardData = drawnCards[index];
            const isReversed = Math.random() > 0.5;
            
            const colorFull = hexToRgba(cardData.color, 1);
            const colorDim = hexToRgba(cardData.color, 0.4);
            
            const cardHTML = `
                <div class="tarot-card 3d-card absolute" style="opacity: 0; width: 100px; height: auto; top: 50%; left: 50%; transform: translate(-50%, -50%) scale(0);" data-id="${cardData.id}">
                    <div class="card-inner relative w-full h-full">
                        
                        <img src="${cardData.img}" class="w-full h-auto opacity-0 block pointer-events-none" />
                        
                        <div class="card-front absolute inset-0 bg-black border border-amber-500/40 shadow-[0_0_15px_rgba(251,191,36,0.2)] rounded-md overflow-hidden">
                            <img src="images/card-back.jpg" class="w-full h-full object-fill" />
                        </div>
                        
                        <div class="card-back absolute inset-0 bg-black rounded-md transition-all duration-1000" style="--theme-color: ${colorFull}; --theme-color-dim: ${colorDim}; border: 1px solid rgba(255,255,255,0.2);">
                            <img src="${cardData.img}" class="w-full h-full object-fill rounded-md ${isReversed ? 'rotate-180' : ''}" />
                        </div>
                        
                    </div>
                </div>
            `;
            dealEngine.insertAdjacentHTML('beforeend', cardHTML);
            const newCard = dealEngine.lastElementChild;

            const contextPrefixes = {
                'CORE ADVICE': "The central truth of your inquiry is clear:",
                'PAST': "Looking back, the roots of your situation were forged by this force:",
                'PRESENT': "In this exact moment, the universe demands this of you:",
                'FUTURE': "If you continue on this trajectory, your fate is pulling you toward this outcome:",
                'ROOT': "Beneath the surface, the true, hidden core of this matter is:",
                'UNCONTROLLABLE (INTERNAL)': "Deep in your subconscious, you are currently being tested by this shadow:",
                'UNCONTROLLABLE (EXTERNAL)': "Outside forces entirely beyond your command are imposing this reality upon you:",
                'CONTROLLABLE (INTERNAL)': "You hold the absolute, conscious power to shift your mindset toward this:",
                'CONTROLLABLE (EXTERNAL)': "In your physical, waking environment, you must actively enforce this action:"
            };
            const dynamicPrefix = contextPrefixes[pos.label] || "";
            
            let finalGuidance = "";
            if (isReversed) {
                finalGuidance = `<strong style="color: #ef4444; font-family: 'Cinzel', serif; letter-spacing: 0.1em; font-style: normal;">[BLOCKED]</strong><br><br>${dynamicPrefix}<br><br>You are currently resisting the natural flow of this cosmic force. Reflect deeply on this blockage:<br><br>${cardData.guidance}`;
            } else {
                finalGuidance = `<strong style="color: ${cardData.color}; font-family: 'Cinzel', serif; letter-spacing: 0.1em; font-style: normal;">[ACTIVE]</strong><br><br>${dynamicPrefix}<br><br>${cardData.guidance}`;
            }

            const loreHTML = `
                <div id="reading-block-${index}" class="opacity-0 translate-y-10 transition-all duration-1000 flex flex-col md:flex-row gap-10 items-start border-t border-white/10 pt-16">
                    <div class="flex-none w-full md:w-64 rounded-xl overflow-hidden border border-white/20" style="box-shadow: 0 0 40px ${cardData.color}40;">
                        <img src="${cardData.img}" class="w-full h-auto object-contain ${isReversed ? 'rotate-180' : ''}">
                    </div>
                    <div class="flex-1 w-full pt-4">
                        <p class="text-sm text-amber-500 tracking-[0.2em] font-mythic uppercase mb-2 drop-shadow-md">${pos.label}</p>
                        <h2 class="font-mythic text-5xl md:text-6xl font-black tracking-widest text-transparent bg-clip-text pb-2" style="background-image: linear-gradient(to bottom, #ffffff, ${cardData.color});">${cardData.char}</h2>
                        <h3 class="font-mythic text-lg tracking-[0.3em] uppercase mb-10 drop-shadow-md" style="color: ${isReversed ? '#ef4444' : cardData.color};">${isReversed ? 'Reversed' : 'Upright'}</h3>
                        
                        <div class="grid grid-cols-2 gap-8 mb-10 border-b border-white/10 pb-10">
                            <div>
                                <p class="text-xs text-slate-500 uppercase tracking-[0.2em] font-mythic mb-3">Macroscopic System</p>
                                <p class="font-mythic text-2xl drop-shadow-md" style="color: ${cardData.color};">${cardData.duality}</p>
                            </div>
                            <div class="border-l border-white/5 pl-8">
                                <p class="text-xs text-slate-500 uppercase tracking-[0.2em] font-mythic mb-3">Microscopic System</p>
                                <p class="font-mythic text-2xl drop-shadow-md" style="color: ${cardData.color};">${cardData.title}</p>
                            </div>
                        </div>

                        <div class="bg-white/[0.02] p-8 rounded-xl border border-white/5 shadow-inner">
                            <p class="text-xs text-white/40 uppercase tracking-widest font-mythic mb-6">Divine Interpretation</p>
                            <p class="font-body text-lg text-slate-300 leading-loose italic">${finalGuidance}</p>
                        </div>
                    </div>
                </div>
            `;
            readingsContainer.insertAdjacentHTML('beforeend', loreHTML);

            setTimeout(() => {
                newCard.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                newCard.style.opacity = '1';
                newCard.style.transform = `translate(calc(-50% + ${pos.x}px), calc(-50% + ${pos.y}px)) scale(${activeConfig.scale})`;
            }, index * 300);

            // ========================================================
            // SMART TAP ENGINE (Scroll Safe & Mobile Friendly)
            // ========================================================
            const handleReveal = function() {
                if (this.classList.contains('is-flipped')) return;

                this.classList.add('is-flipped');
                this.style.pointerEvents = 'none'; 
                
                const backFace = this.querySelector('.card-back');
                backFace.classList.add('beaming-glow');
                
                this.style.zIndex = "50";
                this.style.transform = `translate(calc(-50% + ${pos.x}px), calc(-50% + ${pos.y}px)) scale(${activeConfig.scale + 0.2})`;
                
                setTimeout(() => {
                    this.style.transform = `translate(calc(-50% + ${pos.x}px), calc(-50% + ${pos.y}px)) scale(${activeConfig.scale})`;
                    this.style.zIndex = "10";
                }, 600); 

                setTimeout(() => {
                    const block = document.getElementById(`reading-block-${index}`);
                    if (block) {
                        block.classList.remove('opacity-0', 'translate-y-10');
                    }
                }, 800); 
            };

            // 1. Mouse Clicks (Desktop)
            newCard.addEventListener('click', handleReveal);
            
            // 2. Smart Taps (Mobile): Detects if finger tapped vs scrolled
            let touchStartX = 0;
            let touchStartY = 0;

            newCard.addEventListener('touchstart', function(e) {
                touchStartX = e.touches[0].clientX;
                touchStartY = e.touches[0].clientY;
            }, { passive: true }); // Passive true ensures scrolling is NEVER blocked!

            newCard.addEventListener('touchend', function(e) {
                const touchEndX = e.changedTouches[0].clientX;
                const touchEndY = e.changedTouches[0].clientY;
                const moveX = Math.abs(touchEndX - touchStartX);
                const moveY = Math.abs(touchEndY - touchStartY);
                
                // If the finger moved less than 10 pixels, it's a tap! If more, it's a page scroll!
                if (moveX < 10 && moveY < 10) {
                    handleReveal.call(this);
                }
            });
        });

    }, 600);
}

// ========================================================
// ATMOSPHERIC EFFECTS: SCATTERED TABLE & REPELLING PARTICLES
// ========================================================

document.addEventListener('DOMContentLoaded', () => {
    scatterBackgroundCards();
    initRepellingParticles();
});

function scatterBackgroundCards() {
    const bgContainer = document.getElementById('scattered-cards-bg');
    if (!bgContainer) return;

    const numCards = Math.min(30, meaningsData.length); 
    const screenW = window.innerWidth;
    const screenH = window.innerHeight;

    const shuffledDeck = [...meaningsData].sort(() => 0.5 - Math.random());
    const uniqueCards = shuffledDeck.slice(0, numCards);

    uniqueCards.forEach((cardData) => {
        const wrapper = document.createElement('div');
        wrapper.className = 'scattered-wrapper';
        
        const posX = Math.random() * screenW;
        const posY = Math.random() * screenH;
        const rotation = (Math.random() - 0.5) * 120; 
        const scale = 0.7 + (Math.random() * 0.6); 
        
        wrapper.style.left = `${posX}px`;
        wrapper.style.top = `${posY}px`;
        wrapper.style.transform = `rotate(${rotation}deg) scale(${scale})`;
        
        const inner = document.createElement('div');
        inner.className = 'scattered-card-inner';
        inner.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url('${cardData.img}')`;
        inner.style.animationDuration = `${15 + Math.random() * 25}s`; 
        inner.style.animationDirection = Math.random() > 0.5 ? 'normal' : 'reverse';

        wrapper.appendChild(inner);
        bgContainer.appendChild(wrapper);
    });
}

function initRepellingParticles() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];
    let portalRects = [];
    
    const colorBases = [
        { r: 251, g: 191, b: 36 },  
        { r: 168, g: 85, b: 247 },  
        { r: 45, g: 212, b: 191 },  
        { r: 225, g: 29, b: 72 }    
    ];

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        updatePortalPositions();
    }

    function updatePortalPositions() {
        const portals = document.querySelectorAll('.spread-btn .rounded-full');
        portalRects = Array.from(portals).map(p => {
            const rect = p.getBoundingClientRect();
            return {
                x: rect.left + rect.width / 2,
                y: rect.top + rect.height / 2,
                radius: rect.width 
            };
        });
    }

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.size = Math.random() * 3 + 1; 
            
            this.baseVX = (Math.random() - 0.5) * 0.5; 
            this.baseVY = (Math.random() - 0.5) * 0.5;
            this.vx = this.baseVX;
            this.vy = this.baseVY;
            
            this.baseColor = colorBases[Math.floor(Math.random() * colorBases.length)];
            this.alpha = Math.random() * 0.8; 
            this.alphaMax = 0.4 + Math.random() * 0.5; 
            this.alphaDir = Math.random() > 0.5 ? 1 : -1; 
            this.fadeSpeed = 0.003 + Math.random() * 0.007; 
        }

        update() {
            this.vx += (this.baseVX - this.vx) * 0.05; 
            this.vy += (this.baseVY - this.vy) * 0.05;

            if (phaseAltar.style.opacity !== '0') {
                portalRects.forEach(portal => {
                    const dx = this.x - portal.x;
                    const dy = this.y - portal.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < portal.radius + 60) {
                        const force = (portal.radius + 60 - distance) / (portal.radius + 60);
                        
                        const pushX = (dx / distance) * force * 1.5;
                        const pushY = (dy / distance) * force * 1.5;
                        
                        const swirlX = (-dy / distance) * force * 2;
                        const swirlY = (dx / distance) * force * 2;

                        this.vx += pushX + swirlX;
                        this.vy += pushY + swirlY;
                    }
                });
            }

            this.vx *= 0.96;
            this.vy *= 0.96;

            this.x += this.vx;
            this.y += this.vy;
            
            this.alpha += this.fadeSpeed * this.alphaDir;
            if (this.alpha >= this.alphaMax) { this.alpha = this.alphaMax; this.alphaDir = -1; }
            if (this.alpha <= 0) {
                this.alpha = 0; this.alphaDir = 1; 
                this.x = Math.random() * width; this.y = Math.random() * height;
            }

            if (this.x < 0) this.x = width; if (this.x > width) this.x = 0;
            if (this.y < 0) this.y = height; if (this.y > height) this.y = 0;
        }

        draw() {
            if (this.alpha <= 0) return; 
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${this.baseColor.r}, ${this.baseColor.g}, ${this.baseColor.b}, ${this.alpha})`;
            ctx.shadowBlur = 10;
            ctx.shadowColor = `rgba(${this.baseColor.r}, ${this.baseColor.g}, ${this.baseColor.b}, ${this.alpha})`;
            ctx.fill();
        }
    }

    function createParticles() {
        particles = [];
        const numParticles = Math.floor(window.innerWidth / 10); 
        for (let i = 0; i < numParticles; i++) particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);
        particles.forEach(p => { p.update(); p.draw(); });
        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', resize);
    setInterval(updatePortalPositions, 1000); 
    
    resize();
    createParticles();
    animate();
}