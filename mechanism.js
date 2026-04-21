// Background Particles (Matches the vibrant Lobby settings perfectly)
function initParticles() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];
    
    // All 4 vibrant magical colors
    const colorBases = [
        { r: 251, g: 191, b: 36 },  // Amber
        { r: 168, g: 85, b: 247 },  // Purple
        { r: 45, g: 212, b: 191 },  // Teal
        { r: 225, g: 29, b: 72 }    // Rose
    ];

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.size = Math.random() * 3 + 1; 
            
            this.speedX = (Math.random() - 0.5) * 0.3; 
            this.speedY = (Math.random() - 0.5) * 0.3;
            
            this.baseColor = colorBases[Math.floor(Math.random() * colorBases.length)];
            this.alpha = Math.random() * 0.8; 
            
            // Restored high opacity for bright visibility
            this.alphaMax = 0.4 + Math.random() * 0.5; 
            this.alphaDir = Math.random() > 0.5 ? 1 : -1; 
            this.fadeSpeed = 0.003 + Math.random() * 0.007; 
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            this.alpha += this.fadeSpeed * this.alphaDir;
            if (this.alpha >= this.alphaMax) {
                this.alpha = this.alphaMax;
                this.alphaDir = -1; 
            }
            if (this.alpha <= 0) {
                this.alpha = 0;
                this.alphaDir = 1; 
                this.x = Math.random() * width;
                this.y = Math.random() * height;
            }

            if (this.x < 0) this.x = width;
            if (this.x > width) this.x = 0;
            if (this.y < 0) this.y = height;
            if (this.y > height) this.y = 0;
        }

        draw() {
            if (this.alpha <= 0) return; 

            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${this.baseColor.r}, ${this.baseColor.g}, ${this.baseColor.b}, ${this.alpha})`;
            
            // Restored the glow effect!
            ctx.shadowBlur = 10;
            ctx.shadowColor = `rgba(${this.baseColor.r}, ${this.baseColor.g}, ${this.baseColor.b}, ${this.alpha})`;
            
            ctx.fill();
        }
    }

    function createParticles() {
        particles = [];
        const numParticles = Math.floor(window.innerWidth / 12); 
        for (let i = 0; i < numParticles; i++) {
            particles.push(new Particle());
        }
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', () => {
        resize();
        createParticles();
    });

    resize();
    createParticles();
    animate();
}

document.addEventListener('DOMContentLoaded', initParticles);
// ========================================================
// AUTOMATED SPREAD ANIMATION LOOPS
// ========================================================
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. THE POINT SPREAD ---
    const tablePoint = document.getElementById('table-point');
    const cardsPoint = document.querySelectorAll('.tarot-card[data-spread="point"]');
    
    async function runPointSpread() {
        if(!cardsPoint.length) return;
        const card = cardsPoint[0];
        
        // Deal (Slight pop out)
        card.style.opacity = '1';
        card.style.transform = `translate(0px, 0px) scale(1.1)`;
        await new Promise(r => setTimeout(r, 800));
        
        // Flip
        card.classList.add('is-flipped');
        await new Promise(r => setTimeout(r, 3000));
        
        // Unflip
        card.classList.remove('is-flipped');
        await new Promise(r => setTimeout(r, 600));
        
        // Undeal
        card.style.opacity = '0';
        card.style.transform = `translate(0px, 0px) scale(1)`;
        await new Promise(r => setTimeout(r, 1000));
        
        runPointSpread();
    }

    if(tablePoint) {
        const observerPoint = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                runPointSpread();
                observerPoint.disconnect();
            }
        }, { threshold: 0.5 });
        observerPoint.observe(tablePoint);
    }

    // --- 2. THE LINE SPREAD ---
    const tableLine = document.getElementById('table-line');
    const cardsLine = document.querySelectorAll('.tarot-card[data-spread="line"]');
    const layoutsLine = { 'left': -80, 'center': 0, 'right': 80 };

    async function runLineSpread() {
        if(!cardsLine.length) return;
        
        // Deal (Left to Right)
        cardsLine.forEach((card, i) => {
            const pos = card.getAttribute('data-pos');
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = `translate(${layoutsLine[pos]}px, 0px)`;
            }, i * 300);
        });
        await new Promise(r => setTimeout(r, 1200));

        // Flip (Left to Right sequentially)
        cardsLine.forEach((card, i) => {
            setTimeout(() => { card.classList.add('is-flipped'); }, i * 400);
        });
        await new Promise(r => setTimeout(r, 3500));

        // Unflip all
        cardsLine.forEach(card => card.classList.remove('is-flipped'));
        await new Promise(r => setTimeout(r, 800));

        // Undeal
        cardsLine.forEach((card) => {
            card.style.transform = `translate(0px, 0px)`;
            card.style.opacity = '0';
        });
        await new Promise(r => setTimeout(r, 1500));

        runLineSpread();
    }

    if(tableLine) {
        const observerLine = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                runLineSpread();
                observerLine.disconnect();
            }
        }, { threshold: 0.5 });
        observerLine.observe(tableLine);
    }

    // --- 3. THE CROSS SPREAD ---
    const tableCross = document.getElementById('table-cross');
    const cardsCross = document.querySelectorAll('.tarot-card[data-spread="cross"]');
    const layoutsCross = { 'center': {x:0, y:0}, 'top': {x:0, y:-90}, 'bottom': {x:0, y:90}, 'left': {x:-75, y:0}, 'right': {x:75, y:0} };

    async function runCrossSpread() {
        if(!cardsCross.length) return;
        
        // Deal outward
        cardsCross.forEach((card, index) => {
            const pos = card.getAttribute('data-pos');
            const target = layoutsCross[pos];
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = `translate(${target.x}px, ${target.y}px)`;
            }, index * 250);
        });
        await new Promise(r => setTimeout(r, 1800));

        // Flip
        cardsCross.forEach((card, index) => {
            setTimeout(() => { card.classList.add('is-flipped'); }, index * 400);
        });
        await new Promise(r => setTimeout(r, 4500));

        // Unflip
        cardsCross.forEach(card => card.classList.remove('is-flipped'));
        await new Promise(r => setTimeout(r, 800));

        // Undeal
        cardsCross.forEach((card) => {
            card.style.transform = `translate(0px, 0px)`;
            card.style.opacity = '0';
        });
        await new Promise(r => setTimeout(r, 1500));

        runCrossSpread();
    }

    if(tableCross) {
        const observerCross = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                runCrossSpread();
                observerCross.disconnect();
            }
        }, { threshold: 0.5 });
        observerCross.observe(tableCross);
    }
});
// ========================================================
// TEXT REVEAL: THE SHUFFLING RITUAL
// ========================================================
document.addEventListener('DOMContentLoaded', () => {
    const ritualContainer = document.getElementById('ritual-steps-container');
    const ritualSteps = document.querySelectorAll('.ritual-step');

    if (ritualContainer && ritualSteps.length > 0) {
        const observerRitual = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                ritualSteps.forEach((step, index) => {
                    // Stagger the fade-in of each step by 400ms
                    setTimeout(() => {
                        step.classList.add('step-visible');
                    }, index * 400); 
                });
                // Disconnect after it plays once so it doesn't replay when scrolling up
                observerRitual.disconnect(); 
            }
        }, { threshold: 0.2 });
        
        observerRitual.observe(ritualContainer);
    }
});