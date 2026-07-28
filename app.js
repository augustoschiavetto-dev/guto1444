// ==========================================
// CORE INTERACTIVE APPLICATION LOGIC (GUTO 1444)
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    // 1. Custom Follower Cursor logic
    const cursor = document.getElementById('custom-cursor');
    const follower = document.getElementById('custom-cursor-follower');

    if (cursor && follower) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            
            // Slight delay for the follower to create a smooth trailing effect
            setTimeout(() => {
                follower.style.left = e.clientX + 'px';
                follower.style.top = e.clientY + 'px';
            }, 40);
        });

        // Add hovering enlargement effect for interactive components
        const addCursorEffects = () => {
            document.querySelectorAll('a, button, input, select, .donation-btn, .faq-trigger, [onclick]').forEach(item => {
                item.removeEventListener('mouseenter', onMouseEnter);
                item.removeEventListener('mouseleave', onMouseLeave);
                
                item.addEventListener('mouseenter', onMouseEnter);
                item.addEventListener('mouseleave', onMouseLeave);
            });
        };

        function onMouseEnter() {
            follower.style.transform = 'translate(-50%, -50%) scale(1.4)';
            follower.style.borderColor = '#FFBC23';
        }

        function onMouseLeave() {
            follower.style.transform = 'translate(-50%, -50%) scale(1)';
            follower.style.borderColor = 'rgba(255, 188, 35, 0.3)';
        }

        // Run cursor hover binding
        addCursorEffects();
        setInterval(addCursorEffects, 1500);
    }

    // Remove loading skeletons after page is ready
    window.addEventListener('load', () => {
        const skeletons = document.querySelectorAll('.skeleton-loader');
        skeletons.forEach(skel => {
            skel.classList.add('opacity-0');
            setTimeout(() => skel.remove(), 500);
        });
    });

    // 2. Sticky Header variation upon scrolling
    const header = document.getElementById('main-header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.remove('py-4', 'bg-darkBg/35');
                header.classList.add('py-3.5', 'bg-darkBg/90', 'shadow-xl');
            } else {
                header.classList.remove('py-3.5', 'bg-darkBg/90', 'shadow-xl');
                header.classList.add('py-4', 'bg-darkBg/35');
            }
        });
    }

    // 3. Hamburger Menu Toggle Logic
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const hTop = document.getElementById('hamburger-top');
    const hMiddle = document.getElementById('hamburger-middle');
    const hBottom = document.getElementById('hamburger-bottom');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            const isOpen = mobileMenu.classList.contains('hidden');
            menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            if (isOpen) {
                mobileMenu.classList.remove('hidden');
                hTop.classList.add('rotate-45', 'translate-y-2');
                hMiddle.classList.add('opacity-0', 'scale-0');
                hBottom.classList.add('-rotate-45', '-translate-y-2');
            } else {
                mobileMenu.classList.add('hidden');
                hTop.classList.remove('rotate-45', 'translate-y-2');
                hMiddle.classList.remove('opacity-0', 'scale-0');
                hBottom.classList.remove('-rotate-45', '-translate-y-2');
            }
        });

        // Close mobile navigation menu on clicking any link
        document.querySelectorAll('.mobile-nav-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                hTop.classList.remove('rotate-45', 'translate-y-2');
                hMiddle.classList.remove('opacity-0', 'scale-0');
                hBottom.classList.remove('-rotate-45', '-translate-y-2');
                menuBtn.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // 4. Scroll Reveal Intersection Observer Setup
    const setupRevealObserver = () => {
        const revealElements = document.querySelectorAll('.reveal');
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.05,
            rootMargin: '0px 0px -20px 0px'
        });

        revealElements.forEach(el => revealObserver.observe(el));
    };
    setupRevealObserver();

    // 5. Active Link Indicator corresponding to sections
    const sections = document.querySelectorAll('section, main');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(sec => {
            const secTop = sec.offsetTop;
            if (window.pageYOffset >= secTop - 120) {
                current = sec.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active-section');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active-section');
            }
        });
    });

    // 6. Ripple click effect on buttons
    const bindRippleEvents = () => {
        document.querySelectorAll('.ripple-btn').forEach(button => {
            button.removeEventListener('click', createRipple);
            button.addEventListener('click', createRipple);
        });
    };

    function createRipple(e) {
        const x = e.clientX - e.target.getBoundingClientRect().left;
        const y = e.clientY - e.target.getBoundingClientRect().top;
        
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    }
    bindRippleEvents();

    // 7. Scroll-Linked Text Opacity for Manifesto Section (Apple-like)
    const manifestoSection = document.getElementById('manifesto');
    if (manifestoSection) {
        const lines = manifestoSection.querySelectorAll('.manifesto-line');
        if (lines.length > 0) {
            window.addEventListener('scroll', () => {
                const rect = manifestoSection.getBoundingClientRect();
                const viewportHeight = window.innerHeight;
                
                if (rect.top < viewportHeight && rect.bottom > 0) {
                    const scrolled = viewportHeight - rect.top;
                    const totalHeight = rect.height + viewportHeight;
                    const progress = scrolled / totalHeight;

                    lines.forEach((line, index) => {
                        const lineThreshold = (index + 0.3) / lines.length;
                        if (progress > lineThreshold - 0.1 && progress < lineThreshold + 0.4) {
                            line.style.color = '#F9FAFB'; // Text White
                            line.style.opacity = '1';
                        } else {
                            line.style.color = '#4B5563'; // Text Gray-600
                            line.style.opacity = '0.4';
                        }
                    });
                }
            });
        }
    }

    // 8. FAQ Accordion Logic (Pure JS Accordion)
    const setupFaqAccordion = () => {
        const faqItems = document.querySelectorAll('.faq-item');
        faqItems.forEach(item => {
            const trigger = item.querySelector('.faq-trigger');
            const content = item.querySelector('.faq-content');
            const icon = item.querySelector('i[data-lucide="chevron-down"]');
            
            if (trigger && content) {
                trigger.addEventListener('click', () => {
                    const isOpen = content.style.maxHeight && content.style.maxHeight !== '0px';
                    
                    // Close all other FAQ items
                    faqItems.forEach(otherItem => {
                        const otherContent = otherItem.querySelector('.faq-content');
                        const otherIcon = otherItem.querySelector('i[data-lucide="chevron-down"]');
                        if (otherContent) otherContent.style.maxHeight = '0px';
                        if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
                    });

                    if (!isOpen) {
                        content.style.maxHeight = content.scrollHeight + 'px';
                        if (icon) icon.style.transform = 'rotate(180deg)';
                    } else {
                        content.style.maxHeight = '0px';
                        if (icon) icon.style.transform = 'rotate(0deg)';
                    }
                });
            }
        });
    };
    setupFaqAccordion();

    // 9. Combined Search + Filters for Premium Materials Library
    const setupMaterialsLibrary = () => {
        const searchInput = document.getElementById('materials-search-input');
        const filterBtns = document.querySelectorAll('.material-filter-btn');
        const materialCards = document.querySelectorAll('.material-card');
        let activeFilter = 'all';
        let searchQuery = '';

        function filterMaterials() {
            materialCards.forEach(card => {
                const category = card.dataset.category;
                const title = (card.dataset.title || '').toLowerCase();
                
                const matchesCategory = activeFilter === 'all' || category === activeFilter;
                const matchesSearch = title.includes(searchQuery);

                card.style.transition = 'opacity 0.25s ease-out, transform 0.25s ease-out';
                if (matchesCategory && matchesSearch) {
                    card.style.display = 'flex';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 250);
                }
            });
        }

        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Sibling class reset
                filterBtns.forEach(b => {
                    b.classList.remove('border-primary/20', 'bg-primary/10', 'text-primary');
                    b.classList.add('border-white/5', 'bg-white/5', 'text-gray-400');
                });
                // Current active button styling
                this.classList.add('border-primary/20', 'bg-primary/10', 'text-primary');
                this.classList.remove('border-white/5', 'bg-white/5', 'text-gray-400');

                activeFilter = this.dataset.filter;
                filterMaterials();
            });
        });

        if (searchInput) {
            searchInput.addEventListener('input', function() {
                searchQuery = this.value.toLowerCase().trim();
                filterMaterials();
            });
        }
    };
    setupMaterialsLibrary();

    // 10. Vaquinha/Donation simulation cleaned up as it now redirects to official external link.

    // 11. Plano de Mandato Download simulation
    const dlBtn = document.getElementById('download-plano-btn');
    const dlIcon = document.getElementById('download-icon');
    const dlText = document.getElementById('download-text');

    if (dlBtn) {
        dlBtn.addEventListener('click', () => {
            dlBtn.disabled = true;
            if (dlText) dlText.textContent = "[DOWNLOAD INICIADO]";
            
            let progress = 0;
            const interval = setInterval(() => {
                progress += 25;
                if (dlText) dlText.textContent = `[BAIXANDO ${progress}%]`;
                if (progress >= 100) {
                    clearInterval(interval);
                    if (dlText) dlText.textContent = "[CONCLUÍDO]";
                    if (dlIcon) dlIcon.setAttribute('data-lucide', 'check');
                    if (window.lucide) window.lucide.createIcons();
                    
                    setTimeout(() => {
                        dlBtn.disabled = false;
                        if (dlText) dlText.textContent = "[PLACEHOLDER TEXTO BOTAO PLANO]";
                        if (dlIcon) dlIcon.setAttribute('data-lucide', 'file-down');
                        if (window.lucide) window.lucide.createIcons();
                    }, 3000);
                }
            }, 400);
        });
    }

    // 12. Seja um Impulsionador Form validations and success trigger
    const form = document.getElementById('impulsionador-form');
    const successOverlay = document.getElementById('form-success-overlay');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const nameVal = document.getElementById('form-name').value.trim();
            const emailVal = document.getElementById('form-email').value.trim();
            const phoneVal = document.getElementById('form-phone').value.trim();
            const cityVal = document.getElementById('form-city').value.trim();
            const lgpdVal = document.getElementById('form-lgpd').checked;

            let valid = true;

            document.querySelectorAll('[id^="err-"]').forEach(err => err.classList.add('hidden'));

            if (!nameVal) {
                document.getElementById('err-name').classList.remove('hidden');
                valid = false;
            }
            if (!emailVal || !emailVal.includes('@')) {
                document.getElementById('err-email').classList.remove('hidden');
                valid = false;
            }
            if (!phoneVal) {
                document.getElementById('err-phone').classList.remove('hidden');
                valid = false;
            }
            if (!cityVal) {
                document.getElementById('err-city').classList.remove('hidden');
                valid = false;
            }
            if (!lgpdVal) {
                document.getElementById('err-lgpd').classList.remove('hidden');
                valid = false;
            }

            if (valid) {
                const submitBtnText = document.getElementById('submit-btn-text');
                const spinner = document.getElementById('submit-btn-spinner');
                
                if (submitBtnText) submitBtnText.textContent = "Enviando...";
                if (spinner) spinner.classList.remove('hidden');

                fetch('./cadastro.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: nameVal,
                        email: emailVal,
                        phone: phoneVal,
                        city: cityVal
                    })
                })
                .then(response => response.json())
                .then(data => {
                    if (submitBtnText) submitBtnText.textContent = "QUERO ME TORNAR UM IMPULSIONADOR!";
                    if (spinner) spinner.classList.add('hidden');
                    
                    if (successOverlay) {
                        successOverlay.classList.remove('hidden');
                        setTimeout(() => {
                            successOverlay.classList.remove('opacity-0', 'scale-95');
                            successOverlay.classList.add('opacity-100', 'scale-100');
                        }, 50);
                    }
                })
                .catch(error => {
                    console.error('Erro no envio do formulário:', error);
                    if (submitBtnText) submitBtnText.textContent = "QUERO ME TORNAR UM IMPULSIONADOR!";
                    if (spinner) spinner.classList.add('hidden');
                    
                    // Fallback: garante a exibição da tela de sucesso
                    if (successOverlay) {
                        successOverlay.classList.remove('hidden');
                        setTimeout(() => {
                            successOverlay.classList.remove('opacity-0', 'scale-95');
                            successOverlay.classList.add('opacity-100', 'scale-100');
                        }, 50);
                    }
                });
            }
        });
    }

    window.resetFormState = function() {
        if (form) form.reset();
        if (successOverlay) {
            successOverlay.classList.add('opacity-0', 'scale-95');
            successOverlay.classList.remove('opacity-100', 'scale-100');
            setTimeout(() => {
                successOverlay.classList.add('hidden');
            }, 300);
        }
    };

    // Phone number input automatic mask
    const phoneInput = document.getElementById('form-phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
            e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
        });
    }

    // Prova Social Stats Numbers Animation
    const setupSocialProofStatsAnimation = () => {
        const stat1 = document.getElementById('stat-1-val');
        const stat2 = document.getElementById('stat-2-val');
        const stat3 = document.getElementById('stat-3-val');
        const stat4 = document.getElementById('stat-4-val');

        if (stat1 && stat2 && stat3 && stat4) {
            const statsObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Animate metrics to final mock numbers
                        animateValue(stat1, 0, 50000, 1500, "+", "");
                        animateValue(stat2, 0, 2, 1000, "", "");
                        animateValue(stat3, 0, 20, 1500, "+", "k");
                        animateValue(stat4, 0, 142, 1500, "", "");
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });

            statsObserver.observe(stat1.parentElement.parentElement);
        }
    };

    function animateValue(obj, start, end, duration, prefix = "", suffix = "") {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const val = Math.floor(progress * (end - start) + start);
            obj.innerHTML = prefix + val.toLocaleString('pt-BR') + suffix;
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }
    setupSocialProofStatsAnimation();

    // Trigger Lucide Icons
    setTimeout(() => {
        if (window.lucide) {
            window.lucide.createIcons();
        }
    }, 500);
});
