document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form submission handling
    const leadForm = document.getElementById('lead-form');
    if (leadForm) {
        leadForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = leadForm.querySelector('button[type="submit"]');
            const originalText = btn.innerText;
            
            btn.innerText = "Sending Proposal...";
            btn.style.opacity = "0.8";
            btn.disabled = true;

            // Simulate API call
            setTimeout(() => {
                btn.innerText = "Proposal Requested!";
                btn.style.backgroundColor = "#10b981"; // Success green
                btn.style.boxShadow = "0 4px 15px rgba(16, 185, 129, 0.6)";
                leadForm.reset();
                
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.style.backgroundColor = "";
                    btn.style.boxShadow = "";
                    btn.style.opacity = "1";
                    btn.disabled = false;
                }, 3000);
            }, 1500);
        });
    }

    // Number counter animation for Results section
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // Lower is faster
    
    const animateCounters = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const inc = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 10);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    };

    // Intersection Observer to trigger counter animation when in view
    const resultsSection = document.getElementById('results');
    if (resultsSection && counters.length > 0) {
        let animated = false;
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !animated) {
                animateCounters();
                animated = true;
            }
        }, { threshold: 0.5 });
        
        observer.observe(resultsSection);
    }

    // BorderGlow implementation
    const parseHSL = (hslStr) => {
        const match = hslStr.match(/([\d.]+)\s*([\d.]+)%?\s*([\d.]+)%?/);
        if (!match) return { h: 40, s: 80, l: 80 };
        return { h: parseFloat(match[1]), s: parseFloat(match[2]), l: parseFloat(match[3]) };
    };

    const buildGlowVars = (glowColor, intensity) => {
        const { h, s, l } = parseHSL(glowColor);
        const base = `${h}deg ${s}% ${l}%`;
        const opacities = [100, 60, 50, 40, 30, 20, 10];
        const keys = ['', '-60', '-50', '-40', '-30', '-20', '-10'];
        const vars = {};
        for (let i = 0; i < opacities.length; i++) {
            vars[`--glow-color${keys[i]}`] = `hsl(${base} / ${Math.min(opacities[i] * intensity, 100)}%)`;
        }
        return vars;
    };

    const GRADIENT_POSITIONS = ['80% 55%', '69% 34%', '8% 6%', '41% 38%', '86% 85%', '82% 18%', '51% 4%'];
    const GRADIENT_KEYS = ['--gradient-one', '--gradient-two', '--gradient-three', '--gradient-four', '--gradient-five', '--gradient-six', '--gradient-seven'];
    const COLOR_MAP = [0, 1, 2, 0, 1, 2, 1];

    const buildGradientVars = (colors) => {
        const vars = {};
        for (let i = 0; i < 7; i++) {
            const c = colors[Math.min(COLOR_MAP[i], colors.length - 1)];
            vars[GRADIENT_KEYS[i]] = `radial-gradient(at ${GRADIENT_POSITIONS[i]}, ${c} 0px, transparent 50%)`;
        }
        vars['--gradient-base'] = `linear-gradient(${colors[0]} 0 100%)`;
        return vars;
    };

    const initBorderGlow = () => {
        const cards = document.querySelectorAll('.border-glow-card');
        const edgeSensitivity = 30;
        const glowColor = '220 100 50'; // HSL equivalent for #0055ff
        const backgroundColor = 'rgba(10, 25, 47, 0.7)';
        const borderRadius = 16;
        const glowRadius = 40;
        const glowIntensity = 1.0;
        const coneSpread = 25;
        const fillOpacity = 0.5;
        const colors = ['#0055ff', '#00e5ff', '#0033cc']; // electric blue gradient colors
        
        const glowVars = buildGlowVars(glowColor, glowIntensity);
        const gradientVars = buildGradientVars(colors);
        
        cards.forEach(card => {
            // Set static styles
            card.style.setProperty('--card-bg', backgroundColor);
            card.style.setProperty('--edge-sensitivity', edgeSensitivity);
            card.style.setProperty('--border-radius', `${borderRadius}px`);
            card.style.setProperty('--glow-padding', `${glowRadius}px`);
            card.style.setProperty('--cone-spread', coneSpread);
            card.style.setProperty('--fill-opacity', fillOpacity);
            
            for (const [k, v] of Object.entries(glowVars)) card.style.setProperty(k, v);
            for (const [k, v] of Object.entries(gradientVars)) card.style.setProperty(k, v);
            
            // Mouse move logic
            const getCenterOfElement = (el) => {
                const rect = el.getBoundingClientRect();
                return [rect.width / 2, rect.height / 2];
            };

            const getEdgeProximity = (el, x, y) => {
                const [cx, cy] = getCenterOfElement(el);
                const dx = x - cx;
                const dy = y - cy;
                let kx = Infinity;
                let ky = Infinity;
                if (dx !== 0) kx = cx / Math.abs(dx);
                if (dy !== 0) ky = cy / Math.abs(dy);
                return Math.min(Math.max(1 / Math.min(kx, ky), 0), 1);
            };

            const getCursorAngle = (el, x, y) => {
                const [cx, cy] = getCenterOfElement(el);
                const dx = x - cx;
                const dy = y - cy;
                if (dx === 0 && dy === 0) return 0;
                const radians = Math.atan2(dy, dx);
                let degrees = radians * (180 / Math.PI) + 90;
                if (degrees < 0) degrees += 360;
                return degrees;
            };

            card.addEventListener('pointermove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const edge = getEdgeProximity(card, x, y);
                const angle = getCursorAngle(card, x, y);

                card.style.setProperty('--edge-proximity', `${(edge * 100).toFixed(3)}`);
                card.style.setProperty('--cursor-angle', `${angle.toFixed(3)}deg`);
            });
            
            // Reset state on leave to avoid stuck glowing edges sometimes
            card.addEventListener('pointerleave', () => {
                card.style.setProperty('--edge-proximity', '0');
            });
        });
    };

    // Initialize BorderGlow on load
    initBorderGlow();

    // Scroll Reveal Logic
    const revealElements = document.querySelectorAll('.scroll-reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    revealElements.forEach(el => revealObserver.observe(el));

    // Typing Effect Logic
    const typingText = document.querySelector('.typing-text');
    if (typingText) {
        const words = ['SEO', 'PPC', 'Social Media', 'Web Design'];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        const type = () => {
            const currentWord = words[wordIndex];
            
            if (isDeleting) {
                typingText.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingText.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
            }

            let typeSpeed = isDeleting ? 50 : 100;

            if (!isDeleting && charIndex === currentWord.length) {
                typeSpeed = 2000; // Pause at end of word
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                typeSpeed = 500; // Pause before new word
            }

            setTimeout(type, typeSpeed);
        };
        
        setTimeout(type, 1000); // Start delay
    }

});
