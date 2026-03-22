const fs = require('fs');
const path = require('path');

const title = process.argv[2];
const content = process.argv[3];

if (!title || !content) {
  console.log('Usage: node scripts/add-blog.js "Title" "Content"');
  process.exit(1);
}

const slug = title.toLowerCase()
  .replace(/[^\w\s-]/g, '')
  .replace(/\s+/g, '-')
  .replace(/-+/g, '-');

const date = new Date().toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'short',
  day: 'numeric'
});

const blogDir = path.join(__dirname, '../public/blog');
const indexPath = path.join(__dirname, '../public/index.html');
const fileName = `${slug}.html`;
const filePath = path.join(blogDir, fileName);

const template = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} - Manoa Williamson</title>
    <script>
        (function () {
            const theme = localStorage.getItem('theme') || 'light';
            document.documentElement.setAttribute('data-theme', theme);
        })();
    </script>
    <link rel="stylesheet" href="../styles.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
</head>

<body>
    <button class="theme-toggle" id="themeToggle" aria-label="Toggle dark mode">
        <svg class="sun-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2">
            <circle cx="12" cy="12" r="3" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
        <svg class="moon-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
    </button>
    <div class="container">
        <nav class="nav">
            <a href="../index.html" class="back-link">← Back</a>
        </nav>
        
        <main class="main-content">
            <article class="post">
                <header class="post-header">
                    <h1 class="post-title">${title}</h1>
                    <time class="post-date">${date}</time>
                </header>
                
<div class="post-content">${content}</div>
            </article>
        </main>
        
        <footer class="footer">
            <hr class="separator">
            <div class="footer-links">
                <a href="https://github.com/manoawilliamson" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://twitter.com/manoawilliamson" target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href="#" target="_blank" rel="noopener noreferrer">Discord</a>
                <a href="#" target="_blank" rel="noopener noreferrer">Telegram</a>
            </div>
        </footer>
    </div>
    <script src="../script.js"></script>
</body>

</html>`;

// Write the blog file
fs.writeFileSync(filePath, template);
console.log(`Created: ${filePath}`);

// Update index.html
let indexContent = fs.readFileSync(indexPath, 'utf8');
const linkItem = `                    <div class="list-item">
                        <a href="blog/${fileName}" class="item-name">${title}</a>
                        <span class="item-detail">${date}</span>
                    </div>\n`;

const marker = '<!-- BLOG_POSTS_START -->';
indexContent = indexContent.replace(marker, `${marker}\n${linkItem}`);

fs.writeFileSync(indexPath, indexContent);
console.log(`Updated: ${indexPath}`);
