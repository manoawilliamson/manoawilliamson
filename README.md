# Minimal Personal Website

A clean, minimal personal website built with Node.js and Express, featuring a dark mode toggle.

## Features

- **Minimal Design**: Clean and focused layout with essential information only
- **Dark Mode**: Toggle between light and dark themes with smooth transitions
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Fast**: Lightweight and optimized for performance
- **Accessible**: Semantic HTML and proper ARIA labels

## Structure

```
minimal-website/
├── server.js          # Express server
├── package.json       # Node.js dependencies
├── scripts/
│   └── add-blog.js    # Automated blog generator
├── public/
│   ├── index.html     # Main HTML file
│   ├── styles.css     # CSS with dark mode support
│   ├── script.js      # JavaScript for theme toggle
│   └── blog/          # Individual blog post pages
└── README.md          # This file
```

## Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the server**:
   ```bash
   npm start
   ```

3. **Open your browser**:
   Navigate to `http://localhost:3000`

## Adding Blog Posts

Adding new writing is automated via a built-in script. Simply run:

```bash
node scripts/add-blog.js "Your Title" "Your plain text content here..."
```

This will automatically create a new HTML file in `public/blog/`, apply the minimalist styling, and insert the link into your main `index.html`.

## Customization

### Personal Information

Edit `public/index.html` to update:
- **Name**: Change "Your Name" in the `<h1 class="name">` tag
- **Bio**: Update the paragraph with class `bio`
- **Avatar**: Replace the image source in the avatar section
- **Projects**: Update project links and descriptions
- **Contact**: Update email and social media links

### Styling

The theme system uses CSS custom properties. You can modify colors in `public/styles.css`:
- Light theme colors are defined in `:root`
- Dark theme colors are in `[data-theme="dark"]`

### Adding New Projects

The project section uses **Box Cards** for a professional look. Update `public/index.html` in the `.project-cards` div:

```html
<a href="your-url" target="_blank" class="project-card">
    <div class="card-header">
        <h3 class="repo-name">Project Name</h3>
        <svg class="external-icon">...</svg>
    </div>
    <p class="repo-description">Project description</p>
</a>
```

## Technologies Used

- **Node.js**: JavaScript runtime
- **Express**: Web framework
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with custom properties
- **Vanilla JavaScript**: No additional dependencies

## Deployment

This website can be easily deployed to any platform that supports Node.js:
- Heroku
- Vercel
- Netlify (with serverless functions)
- DigitalOcean
- AWS

For static deployment, you can serve the `public` directory directly from any web server.
