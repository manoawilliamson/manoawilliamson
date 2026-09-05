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
    <link rel="stylesheet" href="../styles.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet">
</head>

<body>
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
