# Personal Portfolio

A personal portfolio for showcasing selected work, services, and contact information.

## Features

- **Minimal Design**: Clean and focused layout with essential information only
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Fast**: Lightweight and optimized for performance
- **Accessible**: Semantic HTML and proper ARIA labels

## Structure

```
minimal-website/
├── server.js          # Express server
├── package.json       # Node.js dependencies
├── public/
│   ├── index.html     # Portfolio homepage
│   ├── styles.css     # Shared portfolio styles
│   ├── script.js      # Navigation and contact interactions
│   ├── images/        # Portfolio and project images
│   └── projects/      # Individual project pages
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

## Customization

Edit `public/index.html` to update your introduction, projects, services, and contact links. Add project details in `public/projects/` and update the selected work cards on the homepage. Modify the color and layout rules in `public/styles.css`.

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
