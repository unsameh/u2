# Personal Portfolio Website

A modern, elegant personal portfolio website featuring a black and orange color scheme with blurry/glossy effects and smooth animations.

## Features

- **Modern Design**: Clean, professional layout with glass morphism effects
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: CSS and JavaScript animations for enhanced user experience
- **Interactive Elements**: Hover effects, scroll animations, and interactive components
- **Contact Form**: Functional contact form with validation
- **Dark Theme**: Elegant black background with orange accents
- **Blurry/Glossy Effects**: Modern glass morphism design elements

## Color Scheme

- **Primary**: Orange (#ff6b35)
- **Secondary**: Light Orange (#ff8c42)
- **Accent**: Orange (#ffa726)
- **Background**: Black (#0a0a0a)
- **Text**: White (#ffffff)

## Sections

1. **Hero Section**: Introduction with animated background and typing effect
2. **About Section**: Personal information and statistics
3. **Projects Section**: Showcase of featured projects
4. **Skills Section**: Technical skills and technologies
5. **Contact Section**: Contact information and form
6. **Footer**: Additional links and copyright

## Customization

### Personal Information

Edit the following in `index.html`:

```html
<!-- Update name -->
<span class="title-name">Your Name</span>

<!-- Update role -->
<span class="title-role">Your Role</span>

<!-- Update description -->
<p class="hero-description">Your description here</p>

<!-- Update about section -->
<p class="about-description">Your about text here</p>

<!-- Update statistics -->
<div class="stat-item">
    <span class="stat-number">Your Number</span>
    <span class="stat-label">Your Label</span>
</div>

<!-- Update contact information -->
<span class="method-value">your.email@example.com</span>
<span class="method-value">+1 (555) 123-4567</span>
<span class="method-value">Your Location</span>
```

### Projects

Replace the project cards in the projects section:

```html
<div class="project-card">
    <div class="project-image">
        <!-- Add your project image or icon -->
    </div>
    <div class="project-content">
        <h3 class="project-title">Your Project Title</h3>
        <p class="project-description">Your project description</p>
        <div class="project-tech">
            <span class="tech-tag">Technology 1</span>
            <span class="tech-tag">Technology 2</span>
        </div>
        <div class="project-links">
            <a href="your-demo-link" class="project-link">Live Demo</a>
            <a href="your-github-link" class="project-link">GitHub</a>
        </div>
    </div>
</div>
```

### Skills

Update the skills section with your technologies:

```html
<div class="skill-item">
    <div class="skill-icon">
        <i class="fab fa-your-icon"></i>
    </div>
    <span class="skill-name">Your Skill</span>
</div>
```

### Colors

Modify the color scheme in `styles.css`:

```css
:root {
    --primary-color: #your-primary-color;
    --secondary-color: #your-secondary-color;
    --accent-color: #your-accent-color;
    /* ... other colors */
}
```

## Animations

The website includes several animations:

- **Typing Effect**: Hero title types out character by character
- **Scroll Animations**: Elements fade in as you scroll
- **Hover Effects**: Interactive hover animations on cards and buttons
- **Parallax**: Background elements move at different speeds
- **Particle Effects**: Floating particles in the background
- **Cursor Trail**: Orange dots follow your mouse cursor

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## File Structure

```
personal-website/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Getting Started

1. Download or clone the files
2. Open `index.html` in your web browser
3. Customize the content to match your information
4. Deploy to your preferred hosting service

## Deployment

You can deploy this portfolio to:

- **GitHub Pages**: Free hosting for static websites
- **Netlify**: Easy deployment with drag and drop
- **Vercel**: Fast deployment with Git integration
- **Any web hosting service**: Upload the files to your server

## Customization Tips

1. **Images**: Replace placeholder icons with your actual project images
2. **Fonts**: Change the Google Fonts import to use different fonts
3. **Icons**: Use Font Awesome icons or replace with your own
4. **Content**: Update all text content to reflect your experience and projects
5. **Links**: Add your actual social media and project links

## Performance

The website is optimized for performance with:

- Minimal external dependencies
- Efficient CSS animations
- Optimized JavaScript
- Responsive images
- Fast loading times

## License

This project is open source and available under the MIT License.

## Support

If you need help customizing the portfolio, feel free to:

1. Check the code comments for guidance
2. Modify the CSS variables for easy color changes
3. Update the HTML structure to match your needs
4. Add or remove sections as required

Enjoy your new portfolio website! 🚀