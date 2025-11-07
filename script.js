// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const navbar = document.querySelector('.navbar');
        
        if (target) {
            const offsetTop = target.offsetTop;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            const navMenu = document.querySelector('.nav-menu');
            const hamburger = document.querySelector('.hamburger');
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            
            // Hide navbar if scrolling to home section
            setTimeout(() => {
                if (this.getAttribute('href') === '#home' || window.scrollY < window.innerHeight * 0.3) {
                    navbar.classList.remove('visible');
                }
            }, 100);
        }
    });
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Navbar visibility on scroll
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Show navbar when scrolling down past the hero section
    if (scrollTop > window.innerHeight * 0.3) {
        navbar.classList.add('visible');
        if (scrollTop > 50) {
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    } else {
        // Hide navbar when at the top
        navbar.classList.remove('visible');
    }
    
    lastScrollTop = scrollTop;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe work items and gallery items
document.querySelectorAll('.work-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(item);
});

// Simple image lightbox functionality (for when images are added)
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
        // This will be enhanced when actual images are added
        console.log('Gallery item clicked - ready for lightbox implementation');
    });
});

// Handle hero image loading
const heroImage = document.getElementById('heroImage');
const heroPlaceholder = document.getElementById('heroPlaceholder');
const hero = document.querySelector('.hero');
const heroImageWrapper = document.querySelector('.hero-image-wrapper');

// Darken the area around the hero text when hovering the photo
if (hero && heroImageWrapper) {
    heroImageWrapper.addEventListener('mouseenter', () => {
        hero.classList.add('image-hover');
    });
    heroImageWrapper.addEventListener('mouseleave', () => {
        hero.classList.remove('image-hover');
    });
}

if (heroImage) {
    heroImage.addEventListener('load', function() {
        this.style.display = 'block';
        if (heroPlaceholder) {
            heroPlaceholder.style.display = 'none';
        }
    });
    
    heroImage.addEventListener('error', function() {
        this.style.display = 'none';
        if (heroPlaceholder) {
            heroPlaceholder.style.display = 'flex';
        }
    });
    
    // Check if image is already loaded
    if (heroImage.complete && heroImage.naturalHeight !== 0) {
        heroImage.style.display = 'block';
        if (heroPlaceholder) {
            heroPlaceholder.style.display = 'none';
        }
    }
}
