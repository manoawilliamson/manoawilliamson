// Theme toggle functionality
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Check for saved theme preference or default to light
const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const theme = html.getAttribute('data-theme');
    const newTheme = theme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });
}

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
      target.scrollIntoView({ behavior: 'smooth' });
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
