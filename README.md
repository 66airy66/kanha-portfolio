# Kanha Portfolio Reference Guide


open `index.html` in your web browser
   - Or use a local server: `python -m http.server 8000` (Python 3)
   - Or use: `npx serve` (Node.js)

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
## Customisation

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



