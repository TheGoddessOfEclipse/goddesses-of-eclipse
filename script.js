const tarotCards = [
    { char: "Crystal", img: "images/Crystal.jpg" },
    { char: "Psylocke", img: "images/Psylocke.jpg" },
    { char: "Songbird", img: "images/Songbird.png" },
    { char: "Polaris", img: "images/Polaris.jpg" },
    { char: "Madelyne Pryor", img: "images/Madelyne-Pryor.jpg" },
    { char: "Loki", img: "images/Loki.jpg" },
    { char: "Emma Frost", img: "images/Emma-Frost.jpg" },
    { char: "Invisible Woman", img: "images/Invisible-Woman.jpg" },
    { char: "Sersi", img: "images/Sersi.jpg" },
    { char: "Pixie", img: "images/Pixie.png" },
    { char: "Luna Snow", img: "images/Luna-Snow.jpg" },
    { char: "Killer Frost", img: "images/Killer-Frost.png" },
    { char: "Jennifer Kale", img: "images/Jennifer-Kale.jpg" },
    { char: "Halo", img: "images/Halo.jpg" },
    { char: "Black Canary", img: "images/Black-Canary.png" },
    { char: "Livewire", img: "images/Livewire.jpg" },
    { char: "Medusa", img: "images/Medusa.png" },
    { char: "Sindel", img: "images/Sindel.jpg" },
    { char: "Kelda", img: "images/Kelda.jpg" },
    { char: "Poison Ivy", img: "images/Poison-Ivy.png" },
    { char: "Gloriana", img: "images/Gloriana.png" },
    { char: "Sister Grimm", img: "images/Sister-Grimm.jpg" },
    { char: "Umar", img: "images/Umar.jpg" },
    { char: "Jean Grey", img: "images/Jean-Grey.jpg" },
    { char: "Singularity", img: "images/Singularity.jpg" },
    { char: "Hela", img: "images/Hela.jpg" },
    { char: "Scarlet Witch", img: "images/Scarlet-Witch.jpg" },
    { char: "White Fox", img: "images/White-Fox.png" },
    { char: "Cyclone", img: "images/Cyclone.jpg" },
    { char: "Black Mamba", img: "images/Black-Mamba.jpg" },
    { char: "Typhoid Mary", img: "images/Typhoid-Mary.png" },
    { char: "Selene Gallio", img: "images/Selene.jpg" },
    { char: "Golden Glider", img: "images/Golden-Glider.jpg" },
    { char: "Silver Swan", img: "images/Silver-Swan.png" },
    { char: "Amora", img: "images/Amora.jpg" },
    { char: "Silver Banshee", img: "images/Silver-Banshee.jpg" },
    { char: "Satana", img: "images/Satana.jpg" },
    { char: "Emerald Empress", img: "images/Emerald-Empress.jpg" },
    { char: "Enchantress", img: "images/Enchantress.png" },
    { char: "Morgan le Fay", img: "images/Morgan-Le-Fay.png" },
    { char: "Raven", img: "images/Raven.jpg" },
    { char: "Amethyst", img: "images/Amethyst.jpg" },
    { char: "Circe", img: "images/Circe.jpg" },
    { char: "Magik", img: "images/Magik.png" },
    { char: "Star Sapphire", img: "images/Star-Sapphire.jpg" },
    { char: "Storm", img: "images/Storm.png" },
    { char: "Karnilla", img: "images/Karnilla.png" },
    { char: "Clea", img: "images/Clea.png" }
];

function initCarousel() {
    const track = document.getElementById('lazy-susan-track');
    
    // Create an endless loop by duplicating the deck 3 times
    const endlessDeck = [...tarotCards, ...tarotCards, ...tarotCards];
    
    endlessDeck.forEach((card) => {
        const el = document.createElement('div');
        el.className = 'carousel-card cursor-pointer';
        el.innerHTML = `<img src="${card.img}" alt="${card.char}">`;
        
        el.onclick = () => {
            if (el.classList.contains('is-center')) {
                openModal(card.char, card.img);
            } else {
                el.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
            }
        };
        track.appendChild(el);
    });

    // Observer to handle Center Card logic
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.querySelectorAll('.carousel-card').forEach(c => c.classList.remove('is-center'));
                entry.target.classList.add('is-center');
            }
        });
    }, { root: track, threshold: 0.85 });

    document.querySelectorAll('.carousel-card').forEach(card => observer.observe(card));

    // --- MOUSE DRAG LOGIC ---
    let isDown = false;
    let startX;
    let scrollLeft;
    let isHovering = false; // Prevents auto-scroll when user is interacting

    track.addEventListener('mousedown', (e) => {
        isDown = true;
        isHovering = true;
        track.style.scrollSnapType = 'none'; 
        track.style.scrollBehavior = 'auto'; 
        startX = e.pageX - track.offsetLeft;
        scrollLeft = track.scrollLeft;
    });

    track.addEventListener('mouseleave', () => {
        isDown = false;
        isHovering = false;
        track.style.scrollSnapType = 'x mandatory'; 
        track.style.scrollBehavior = 'smooth';
    });

    track.addEventListener('mouseup', () => {
        isDown = false;
        track.style.scrollSnapType = 'x mandatory'; 
        track.style.scrollBehavior = 'smooth';
    });

    track.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - track.offsetLeft;
        const walk = (x - startX) * 2; 
        track.scrollLeft = scrollLeft - walk;
    });

    // Detect interactions to gracefully pause the continuous slide
    track.addEventListener('mouseenter', () => {
        isHovering = true;
        track.style.scrollSnapType = 'x mandatory'; // Snaps to the nearest card perfectly when hovering
    });
    
    track.addEventListener('touchstart', () => {
        isHovering = true;
        track.style.scrollSnapType = 'x mandatory';
    }, {passive: true});
    
    track.addEventListener('touchend', () => {
        setTimeout(() => { isHovering = false; }, 2000); // Wait 2 seconds after touching before gliding again
    });

    // --- INFINITE CYCLE LOGIC ---
    setTimeout(() => {
        // Start in the middle deck to allow scrolling both ways immediately
        const singleDeckWidth = track.scrollWidth / 3;
        track.scrollLeft = singleDeckWidth;
    }, 100);

    track.addEventListener('scroll', () => {
        if (isDown) return; 
        const singleDeckWidth = track.scrollWidth / 3;
        
        if (track.scrollLeft < singleDeckWidth / 2) {
            track.style.scrollBehavior = 'auto';
            track.scrollLeft += singleDeckWidth;
            track.style.scrollBehavior = 'smooth';
        } 
        else if (track.scrollLeft > singleDeckWidth * 2.5) {
            track.style.scrollBehavior = 'auto';
            track.scrollLeft -= singleDeckWidth;
            track.style.scrollBehavior = 'smooth';
        }
    });

    // --- CONTINUOUS SMOOTH AUTO-SCROLL ENGINE ---
    let autoScrollSpeed = 0.5; // Controls the speed of the glide. Lower is slower (0.5 is a nice, slow crawl)
    
    function smoothAutoScroll() {
        if (!isDown && !isHovering) {
            // Disable snapping so the engine can continuously push the cards pixel by pixel
            track.style.scrollSnapType = 'none'; 
            track.scrollLeft += autoScrollSpeed;
        }
        requestAnimationFrame(smoothAutoScroll); // Locks the animation to the monitor's 60hz refresh rate
    }
    
    smoothAutoScroll(); // Start the engine!
}

// 3. Modal logic
function openModal(charName, imgSrc) {
    document.getElementById('modal-char-name').innerText = charName;
    document.getElementById('modal-img').src = imgSrc;
    
    const modal = document.getElementById('card-modal');
    modal.classList.remove('hidden');
    setTimeout(() => { modal.classList.remove('opacity-0'); }, 10);
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('card-modal');
    modal.classList.add('opacity-0');
    setTimeout(() => {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }, 300);
}

// 4. Breathing Particles Engine
function initParticles() {
    const canvas = document.getElementById('particle-canvas');
    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];
    
    const colorBases = [
        { r: 251, g: 191, b: 36 },
        { r: 168, g: 85, b: 247 },
        { r: 45, g: 212, b: 191 },
        { r: 225, g: 29, b: 72 }
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

document.addEventListener('DOMContentLoaded', () => {
    initCarousel();
    initParticles();
});