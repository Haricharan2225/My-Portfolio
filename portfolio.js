const portfolioData = {
    personal: {
        name: "BHUPATHI HARICHARAN",
        tagline: "Web Developer & AI Specialist",
        description: "Passionate computer science student crafting innovative digital solutions and bringing ideas to life through code.",
        email: "haripatel2225@gmail.com",
        phone: "+91 9704113556",
        location: "Vadodara,gujarat,inida",
        profileImage: "https://res.cloudinary.com/dnuzyfts7/image/upload/v1755104081/WhatsApp_Image_2025-08-13_at_22.20.11_48cabf2d_gmrbo8.jpg",
        aboutImage: "https://res.cloudinary.com/dnuzyfts7/image/upload/v1754992197/WhatsApp_Image_2025-08-12_at_15.09.10_9f04ae68_euhygg.jpg"
    },
    about: {
        title: "Passionate About AI & Full-Stack Developer",
        description: "I’m Haricharan Bhupathi, an AI enthusiast studying at Parul University, and a trained Full Stack Web Developer (MERN stack). I’m passionate about merging machine learning with modern web technologies to build intelligent, scalable solutions that have a real-world impact.",
        currentStatus: "Currently pursuing my 3rd year of B.Tech in Artificial Intelligence at Parul University with a CGPA of 7.5. I’m open to internships, collaborative projects, and tech initiatives where I can contribute to solving meaningful problems.",
        funFact: "When I’m not coding, I enjoy exploring AI innovations, attending tech community events, and experimenting with creative design tools like Photoshop and Canva!"
    },
    education: {
        degree: "Bachelor of Technology",
        field: "Artificial Intelligence",
        institution: "Parul University, Vadodara, Gujarat, India",
        duration: "2023 - Present (3rd Year)",
        grade: "CGPA: 7.5/10",
        schoolDegree: "Intermediate (MPC)",
        schoolField: "Mathematics, Physics, Chemistry",
        schoolInstitution: "Sri Chaitanya College of Education",
        schoolDuration: "Completed",
        schoolGrade: "Grade: A"
    },
    social: {
        linkedin: "https://www.linkedin.com/in/haricharan-bhupathi-9247732ba",
        github: "https://github.com/haripatel2225",
        email: "haripatel2225@gmail.com",
        phone: "9704113556"
    },
    skills: [
        "HTML", "CSS", "JavaScript", "Git", "GitHub", "Bootstrap", "Node.js", "MongoDB", "SQL",
        "Python", "Flask", "Django", "Java (Basic DSA)", "React", "VS Code", "Excel",
        "Photoshop", "Canva"
    ],
    projects: [
        {
            name: "Movie Review App",
            description: "Developed using Python, Flask, Django, and SQL queries to allow users to submit and browse movie reviews."
        },
        {
            name: "Medical Diagnosis App",
            description: "AI-based application to analyze medical scans and provide accurate diagnostic insights for cancer detection."
        }
    ],
    certifications: [
        "Data Analytics Job Simulation - Forage",
        "Deloitte Certification"
    ],
    experience: [
        {
            role: "Intern",
            company: "Shadowfox",
            description: "Worked on AI and web-based solutions, enhancing my skills in both frontend and backend development."
        },
        {
            role: "GDG Event Participant",
            company: "Google Developers Group Baroda",
            description: "Attended AI and Cloud technology events led by top Google Developers."
        }
    ]
};
AOS.init({
    duration: 1000,
    easing: 'ease-out-quart',
    once: true,
    offset: 50
});

var typed = new Typed("#typed-role", {
        strings: [
            "Web Developer",
            "Passionate About AI",
            "Problem Solver",
            "Tech Explorer"
        ],
        typeSpeed: 70,
        backSpeed: 40,
        backDelay: 1500,
        loop: true
    });

document.addEventListener('DOMContentLoaded', function() {
    populatePortfolioData();
    handleNavbarScroll();
    initializeSmoothScrolling();
    initializeContactForm();
    initializeLazyLoading();
    initializeSkillBars();
    initializeTypingAnimation();
    initializeNavbarHighlighting();
    initializeTooltips();
    initializeCopyEmail();
    initializeCreativeAnimations();
});

function populatePortfolioData() {
    const heroName = document.querySelector('.display-4');
    if (heroName) {
        heroName.innerHTML = `Hi, I'm <span class="text-primary">${portfolioData.personal.name}</span>`;
    }

    const heroTagline = document.querySelector('.lead');
    if (heroTagline) {
        heroTagline.textContent = portfolioData.personal.tagline;
    }

    const heroDescription = document.querySelector('.hero-content p:last-of-type');
    if (heroDescription) {
        heroDescription.textContent = portfolioData.personal.description;
    }

    const profileImages = document.querySelectorAll('.profile-img');
    profileImages.forEach(img => {
        img.src = portfolioData.personal.profileImage;
        img.alt = `${portfolioData.personal.name} - Professional Photo`;
    });

    const aboutImage = document.querySelector('.about-img');
    if (aboutImage) {
        aboutImage.src = portfolioData.personal.aboutImage;
        aboutImage.alt = `${portfolioData.personal.name} - About Me`;
    }

    const aboutTitle = document.querySelector('#about h3');
    if (aboutTitle) {
        aboutTitle.textContent = portfolioData.about.title;
    }

    const aboutParagraphs = document.querySelectorAll('#about .about-content p');
    if (aboutParagraphs.length >= 3) {
        aboutParagraphs[0].textContent = portfolioData.about.description;
        aboutParagraphs[1].textContent = portfolioData.about.currentStatus;
        aboutParagraphs[2].innerHTML = `<strong>Fun fact:</strong> ${portfolioData.about.funFact}`;
    }

    const educationCards = document.querySelectorAll('.education-card');
    if (educationCards.length >= 2) {
        const universityCard = educationCards[0];
        universityCard.querySelector('h4').textContent = portfolioData.education.degree;
        universityCard.querySelector('h5').textContent = portfolioData.education.field;
        universityCard.querySelector('.institution').textContent = portfolioData.education.institution;
        universityCard.querySelector('.duration').textContent = portfolioData.education.duration;
        universityCard.querySelector('.grade').textContent = portfolioData.education.grade;

        const schoolCard = educationCards[1];
        schoolCard.querySelector('h4').textContent = portfolioData.education.schoolDegree;
        schoolCard.querySelector('h5').textContent = portfolioData.education.schoolField;
        schoolCard.querySelector('.institution').textContent = portfolioData.education.schoolInstitution;
        schoolCard.querySelector('.duration').textContent = portfolioData.education.schoolDuration;
        schoolCard.querySelector('.grade').textContent = portfolioData.education.schoolGrade;
    }

    const emailLink = document.getElementById('emailLink');
    if (emailLink) {
        emailLink.href = `mailto:${portfolioData.personal.email}`;
        emailLink.textContent = portfolioData.personal.email;
    }

    const phoneSpan = document.querySelector('.contact-item:nth-child(2) .text-white-50');
    if (phoneSpan) {
        phoneSpan.textContent = portfolioData.personal.phone;
    }

    const locationSpan = document.querySelector('.contact-item:nth-child(3) .text-white-50');
    if (locationSpan) {
        locationSpan.textContent = portfolioData.personal.location;
    }

    const socialLinks = document.querySelectorAll('.social-links a');
    if (socialLinks.length >= 4) {
        socialLinks[0].href = portfolioData.social.linkedin;
        socialLinks[1].href = portfolioData.social.github;
        socialLinks[2].href = portfolioData.social.twitter;
        socialLinks[3].href = portfolioData.social.instagram;
    }

    const footerText = document.querySelector('footer p:first-child');
    if (footerText) {
        footerText.innerHTML = `&copy; 2024 ${portfolioData.personal.name}. All rights reserved.`;
    }
}

function initializeCreativeAnimations() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroSection = document.querySelector('.hero-section');
        if (heroSection) {
            heroSection.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    const cards = document.querySelectorAll('.skill-card, .project-card, .education-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('floating-card');
    });

    createCursorEffect();
    createParticleSystem();
}

function createCursorEffect() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: radial-gradient(circle, rgba(0, 119, 255, 0.8) 0%, transparent 70%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.1s ease;
    `;
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
    });

    const interactiveElements = document.querySelectorAll('a, button, .btn');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(2)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
        });
    });
}

function createParticleSystem() {
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particle-system';
    particleContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
    `;

    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        heroSection.appendChild(particleContainer);

        for (let i = 0; i < 50; i++) {
            createParticle(particleContainer);
        }
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        background: rgba(255, 255, 255, 0.6);
        border-radius: 50%;
        animation: particleFloat ${Math.random() * 10 + 10}s linear infinite;
    `;

    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 10 + 's';

    container.appendChild(particle);

    if (!document.querySelector('#particle-styles')) {
        const style = document.createElement('style');
        style.id = 'particle-styles';
        style.textContent = `
            @keyframes particleFloat {
                0% { transform: translateY(100vh) scale(0); opacity: 0; }
                10% { opacity: 1; }
                90% { opacity: 1; }
                100% { transform: translateY(-100px) scale(1); opacity: 0; }
            }
            .floating-card {
                animation: cardFloat 6s ease-in-out infinite;
            }
            @keyframes cardFloat {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-10px); }
            }
        `;
        document.head.appendChild(style);
    }
}
function handleNavbarScroll() {
    const navbar = document.getElementById('mainNav');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

function initializeSmoothScrolling() {
    const smoothScrollLinks = document.querySelectorAll('.smooth-scroll, .nav-link[href^="#"]');

    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.offsetTop;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                    bsCollapse.hide();
                }
            }
        });
    });
}

function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const name = formData.get('name') || document.getElementById('name').value;
        const email = formData.get('email') || document.getElementById('email').value;
        const subject = formData.get('subject') || document.getElementById('subject').value;
        const message = formData.get('message') || document.getElementById('message').value;

        if (!name || !email || !subject || !message) {
            showAlert('Please fill in all fields.', 'warning');
            return;
        }

        if (!isValidEmail(email)) {
            showAlert('Please enter a valid email address.', 'warning');
            return;
        }

        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;

        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Sending...';
        submitButton.disabled = true;

        setTimeout(() => {
            showAlert('Thank you for your message! I\'ll get back to you soon.', 'success');
            contactForm.reset();

            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
        }, 2000);
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showAlert(message, type) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} alert-dismissible fade show mt-3`;
    alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;

    const contactForm = document.getElementById('contactForm');
    contactForm.appendChild(alertDiv);

    setTimeout(() => {
        if (alertDiv) {
            alertDiv.remove();
        }
    }, 5000);
}

function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('loading');
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => {
            img.classList.add('loading');
            imageObserver.observe(img);
        });
    } else {
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    }
}

function initializeSkillBars() {
    const progressBars = document.querySelectorAll('.progress-bar');

    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const width = progressBar.style.width;

                progressBar.style.width = '0%';

                setTimeout(() => {
                    progressBar.style.width = width;
                }, 200);

                progressObserver.unobserve(progressBar);
            }
        });
    }, { threshold: 0.5 });

    progressBars.forEach(bar => {
        progressObserver.observe(bar);
    });
}

function initializeTypingAnimation() {
    const typedText = document.querySelector('.display-4');
    if (typedText) {
        const text = typedText.textContent;
        typedText.textContent = '';

        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                typedText.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };

        setTimeout(typeWriter, 1000);
    }
}

function initializeNavbarHighlighting() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    const highlightNavLink = () => {
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };

    window.addEventListener('scroll', highlightNavLink);
    highlightNavLink();
}

function initializeTooltips() {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
}

function initializeCopyEmail() {
    window.copyEmail = function() {
        const email = portfolioData.personal.email;
        const copyBtn = document.getElementById('copyEmailBtn');

        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(email).then(() => {
                showCopySuccess(copyBtn);
            }).catch(() => {
                fallbackCopyTextToClipboard(email, copyBtn);
            });
        } else {
            fallbackCopyTextToClipboard(email, copyBtn);
        }
    };

    function fallbackCopyTextToClipboard(text, button) {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.top = '0';
        textArea.style.left = '0';
        textArea.style.position = 'fixed';

        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
            document.execCommand('copy');
            showCopySuccess(button);
        } catch (err) {
            console.error('Unable to copy', err);
        }

        document.body.removeChild(textArea);
    }

    function showCopySuccess(button) {
        const originalContent = button.innerHTML;
        button.innerHTML = '<i class="fas fa-check"></i>';
        button.classList.add('btn-success');
        button.classList.remove('btn-outline-light');

        setTimeout(() => {
            button.innerHTML = originalContent;
            button.classList.remove('btn-success');
            button.classList.add('btn-outline-light');
        }, 2000);
    }
}

function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction() {
        const context = this;
        const args = arguments;

        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };

        const callNow = immediate && !timeout;

        clearTimeout(timeout);
        timeout = setTimeout(later, wait);

        if (callNow) func.apply(context, args);
    };
}

const optimizedScrollHandler = debounce(() => {
    handleNavbarScroll();
    initializeNavbarHighlighting();
}, 10);

window.addEventListener('scroll', optimizedScrollHandler);

window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 300);
    }

    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
});

window.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found';
        e.target.alt = 'Image not found';
    }
}, true);

