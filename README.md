# Kanha Portfolio - MVP

A modern, responsive portfolio website showcasing your work and photographs.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Scrolling**: Navigation with smooth scroll animations
- **Work Showcase**: Display your projects with descriptions
- **Photo Gallery**: Visual showcase of your work
- **Modern UI**: Clean, professional design with gradient accents
- **Mobile Menu**: Hamburger menu for mobile navigation

## Getting Started

1. **Open the website**: Simply open `index.html` in your web browser
   - Or use a local server: `python -m http.server 8000` (Python 3)
   - Or use: `npx serve` (Node.js)

2. **Customize Content**:
   - Edit `index.html` to update:
     - Your name and personal information
     - Project descriptions in the Work section
     - Contact information (email, LinkedIn, GitHub)
     - About section text

3. **Add Your Images**:
   - Create an `images` folder in the project root
   - Add your project images and photos
   - Update the HTML to replace placeholder divs with actual `<img>` tags:
     ```html
     <img src="images/your-image.jpg" alt="Project description">
     ```

## File Structure

```
kanha-portfolio/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # JavaScript functionality
├── README.md           # This file
└── images/             # (Create this folder for your images)
    ├── projects/       # Project images
    └── gallery/        # Gallery photos
```

## Customization Guide

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    /* ... */
}
```

### Adding Images
Replace placeholder divs with actual images:
```html
<!-- Before -->
<div class="work-image-placeholder">
    <span>Project Image</span>
</div>

<!-- After -->
<img src="images/projects/project1.jpg" alt="Project 1" class="work-image">
```

### Adding More Projects
Copy a `.work-item` block and update the content:
```html
<div class="work-item">
    <img src="images/projects/new-project.jpg" alt="New Project">
    <div class="work-info">
        <h3>New Project Title</h3>
        <p>Project description...</p>
    </div>
</div>
```

## Next Steps for Optimization

- Add image optimization (compress images, use WebP format)
- Implement lazy loading for images
- Add a lightbox for gallery images
- Consider using a static site generator (Next.js, Gatsby)
- Add analytics
- Implement SEO best practices
- Add animations library (Framer Motion, GSAP)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Personal portfolio - feel free to customize as needed!

