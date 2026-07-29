/* ========================================
   Open Weights Letter — Interactive Script
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {

    // Progress Bar
    const progressBar = document.getElementById('progressBar');

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile nav toggle
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        navToggle.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
    });

    // Close mobile nav on link click
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            navToggle.textContent = '☰';
        });
    });

    // Animated counter for stats
    const animateCounter = (el) => {
        const target = parseInt(el.dataset.target);
        const duration = 2000;
        const start = performance.now();

        const update = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.floor(easeOut * target);

            if (progress < 1) {
                requestAnimationFrame(update);
            }
        };

        requestAnimationFrame(update);
    };

    // Intersection Observer for counters
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const nums = entry.target.querySelectorAll('.stat-num');
                nums.forEach(animateCounter);
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        statsObserver.observe(heroStats);
    }

    // Reveal on scroll
    const revealElements = document.querySelectorAll('.timeline-item, .pillar-card, .sig-card, .big-quote');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');

                // Stagger children if it's a grid
                const parent = entry.target.parentElement;
                if (parent && (parent.classList.contains('pillars-grid') || parent.classList.contains('signatories-grid'))) {
                    const siblings = Array.from(parent.children);
                    const index = siblings.indexOf(entry.target);
                    entry.target.style.transitionDelay = `${index * 0.05}s`;
                }

                revealObserver.unobserve(entry.target);
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => {
        el.classList.add('reveal');
        revealObserver.observe(el);
    });

    // Parallax effect for floating weights
    const floatingWeights = document.querySelectorAll('.floating-weight');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        floatingWeights.forEach((weight, index) => {
            const speed = 0.1 + (index * 0.05);
            weight.style.transform = `translateY(${scrollY * speed}px) rotate(${scrollY * 0.02}deg)`;
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Typing effect for hero title (optional enhancement)
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.style.opacity = '0';
        heroTitle.style.transform = 'translateY(30px)';
        heroTitle.style.transition = 'all 1s ease';

        setTimeout(() => {
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateY(0)';
        }, 300);
    }

    // Easter egg: Konami code
    let konamiCode = [];
    const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

    document.addEventListener('keydown', (e) => {
        konamiCode.push(e.key);
        konamiCode = konamiCode.slice(-10);

        if (konamiCode.join(',') === konamiSequence.join(',')) {
            document.body.style.filter = 'hue-rotate(180deg)';
            setTimeout(() => {
                document.body.style.filter = '';
            }, 3000);

            // Create a fun message
            const msg = document.createElement('div');
            msg.textContent = '🎉 You found the secret! Open weights for everyone!';
            msg.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: linear-gradient(135deg, #00d4ff, #8b5cf6);
                color: #0a0e27;
                padding: 20px 40px;
                border-radius: 16px;
                font-family: 'Space Grotesk', sans-serif;
                font-weight: 700;
                font-size: 1.2rem;
                z-index: 100000;
                box-shadow: 0 20px 60px rgba(0,0,0,0.5);
                animation: popIn 0.5s ease;
            `;
            document.body.appendChild(msg);

            setTimeout(() => {
                msg.style.animation = 'popOut 0.5s ease forwards';
                setTimeout(() => msg.remove(), 500);
            }, 2500);
        }
    });

    // Add popIn/popOut animations dynamically
    const style = document.createElement('style');
    style.textContent = `
        @keyframes popIn {
            from { transform: translate(-50%, -50%) scale(0); opacity: 0; }
            to { transform: translate(-50%, -50%) scale(1); opacity: 1; }
        }
        @keyframes popOut {
            from { transform: translate(-50%, -50%) scale(1); opacity: 1; }
            to { transform: translate(-50%, -50%) scale(0); opacity: 0; }
        }
    `;
    document.head.appendChild(style);

    // Letter body paragraphs fade in
    const letterParagraphs = document.querySelectorAll('.letter-body p');
    const letterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                letterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    letterParagraphs.forEach((p, index) => {
        p.style.opacity = '0';
        p.style.transform = 'translateY(20px)';
        p.style.transition = `all 0.6s ease ${index * 0.1}s`;
        letterObserver.observe(p);
    });

    console.log('%c⚖️ Open Weights Letter', 'font-size: 24px; font-weight: bold; color: #00d4ff;');
    console.log('%cBuilt for the open-source community. Share freely.', 'font-size: 14px; color: #94a3b8;');
    console.log('%cTry the Konami code ↑↑↓↓←→←→BA', 'font-size: 12px; color: #64748b; font-style: italic;');
});
