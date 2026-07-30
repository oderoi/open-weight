/* ========================================
   Open Weights Letter — Interactive Script
   133 signatories. Real logos. Real links.
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {

    // Progress Bar
    const progressBar = document.getElementById('progressBar');
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        progressBar.style.width = (scrollTop / docHeight) * 100 + '%';
    });

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Mobile nav toggle
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.querySelector('.nav-links');
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        navToggle.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
    });
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
            if (progress < 1) requestAnimationFrame(update);
        };
        requestAnimationFrame(update);
    };

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll('.stat-num').forEach(animateCounter);
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) statsObserver.observe(heroStats);

    // Reveal on scroll
    const revealElements = document.querySelectorAll('.timeline-item, .pillar-card, .sig-card, .big-quote');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                const parent = entry.target.parentElement;
                if (parent && (parent.classList.contains('pillars-grid') || parent.classList.contains('signatories-grid'))) {
                    const siblings = Array.from(parent.children);
                    entry.target.style.transitionDelay = `${siblings.indexOf(entry.target) * 0.03}s`;
                }
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.05, rootMargin: '0px 0px -30px 0px' });
    revealElements.forEach(el => { el.classList.add('reveal'); revealObserver.observe(el); });

    // Parallax for floating weights
    const floatingWeights = document.querySelectorAll('.floating-weight');
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        floatingWeights.forEach((weight, index) => {
            weight.style.transform = `translateY(${scrollY * (0.1 + index * 0.05)}px) rotate(${scrollY * 0.02}deg)`;
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    // Hero title entrance
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.style.opacity = '0'; heroTitle.style.transform = 'translateY(30px)'; heroTitle.style.transition = 'all 1s ease';
        setTimeout(() => { heroTitle.style.opacity = '1'; heroTitle.style.transform = 'translateY(0)'; }, 300);
    }

    // Preload logo images for signatories (silent background loading)
    const logoImages = document.querySelectorAll('.sig-logo-img');
    logoImages.forEach(img => {
        const preload = new Image();
        preload.src = img.src;
    });

    // Konami code easter egg
    let konamiCode = [];
    const konamiSequence = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
    document.addEventListener('keydown', (e) => {
        konamiCode.push(e.key); konamiCode = konamiCode.slice(-10);
        if (konamiCode.join(',') === konamiSequence.join(',')) {
            document.body.style.filter = 'hue-rotate(180deg)';
            setTimeout(() => document.body.style.filter = '', 3000);
            const msg = document.createElement('div');
            msg.textContent = '🎉 You found the secret! Open weights for everyone!';
            msg.style.cssText = `position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:linear-gradient(135deg,#00d4ff,#8b5cf6);color:#0a0e27;padding:20px 40px;border-radius:16px;font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:1.2rem;z-index:100000;box-shadow:0 20px 60px rgba(0,0,0,0.5);animation:popIn 0.5s ease;`;
            document.body.appendChild(msg);
            setTimeout(() => { msg.style.animation = 'popOut 0.5s ease forwards'; setTimeout(() => msg.remove(), 500); }, 2500);
        }
    });

    const style = document.createElement('style');
    style.textContent = `@keyframes popIn{from{transform:translate(-50%,-50%) scale(0);opacity:0}to{transform:translate(-50%,-50%) scale(1);opacity:1}}@keyframes popOut{from{transform:translate(-50%,-50%) scale(1);opacity:1}to{transform:translate(-50%,-50%) scale(0);opacity:0}}`;
    document.head.appendChild(style);

    // Letter body paragraphs fade in
    const letterParagraphs = document.querySelectorAll('.letter-body p');
    const letterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1'; entry.target.style.transform = 'translateY(0)';
                letterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    letterParagraphs.forEach((p, index) => {
        p.style.opacity = '0'; p.style.transform = 'translateY(20px)'; p.style.transition = `all 0.6s ease ${index * 0.1}s`;
        letterObserver.observe(p);
    });

    console.log('%c⚖️ Open Weights Letter', 'font-size:24px;font-weight:bold;color:#00d4ff;');
    console.log('%c133 signatories. Real logos. Real links. Real impact.', 'font-size:14px;color:#94a3b8;');
    console.log('%cTry the Konami code ↑↑↓↓←→←→BA', 'font-size:12px;color:#64748b;font-style:italic;');
});
