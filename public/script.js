document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle functionality
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;

    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    html.setAttribute('data-theme', savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // Smooth scroll for anchor links
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

    // Floating nav active state
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.floating-nav a[href^="#"]');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Scroll-triggered reveal animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.case-study, .process-step, .client-logo');
    animatedElements.forEach(el => observer.observe(el));

    // Carousel functionality
    const carousels = document.querySelectorAll('.carousel-container');
    carousels.forEach(carousel => {
        const slides = carousel.querySelectorAll('.carousel-slide');
        let currentIndex = 0;
        
        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.remove('active');
                if (i === index) {
                    slide.classList.add('active');
                }
            });
        }
        
        function nextSlide() {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        }
        
        // Auto-rotate every 4 seconds
        setInterval(nextSlide, 4000);
    });
});

// Contact form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Simple validation
    if (!name || !email || !message) {
      alert('Please fill in all fields');
      return;
    }
    
    // In a real application, you would send this to a server
    // For now, we'll just show a success message
    alert(`Thank you ${name}! Your message has been received.`);
    contactForm.reset();
  });
}

// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Intelligent Blog Content Parser (Converts plain text to paragraphs)
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.post-content').forEach(div => {
    // Get raw text and split by double newlines for paragraphs
    const rawText = div.innerText.trim();
    if (!rawText) return;

    // Split into paragraphs, trim each, and wrap in <p> tags
    const paragraphs = rawText.split(/\n\s*\n/)
      .map(p => `<p>${p.trim().replace(/\n/g, ' ')}</p>`)
      .join('');
    
    div.innerHTML = paragraphs;
  });
});
