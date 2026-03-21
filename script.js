// =====================
// Form Submission Handler
// =====================

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = form.querySelector('input[placeholder="Your Name"]').value;
            const email = form.querySelector('input[placeholder="Your Email"]').value;
            const message = form.querySelector('textarea[placeholder="Your Message"]').value;
            
            // Simple validation
            if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
                alert('Please fill in all fields');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            // Show success message
            alert('Thank you for your message! We will get back to you soon.');
            
            // Reset form
            form.reset();
        });
    }
});

// =====================
// Smooth Scroll Enhancement
// =====================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Don't prevent default for the WhatsApp button
        if (href !== '#' && !this.classList.contains('whatsapp-button')) {
            e.preventDefault();
            
            const target = document.querySelector(href);
            if (target) {
                const offset = 80; // Account for navbar height
                const targetPosition = target.offsetTop - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// =====================
// Add Active Nav Link Class
// =====================

window.addEventListener('scroll', function() {
    let current = '';
    
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// =====================
// Add Fade In Animation on Scroll
// =====================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all catalog cards and feature boxes
document.querySelectorAll('.catalog-card, .feature, .contact-form, .contact-info').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// =====================
// Mobile Menu (if needed in future)
// =====================

// This is a placeholder for future mobile menu functionality
// You can expand this if you add a hamburger menu

// =====================
// Prevent Form Spam
// =====================

let formSubmitCount = 0;
const form = document.querySelector('form');

if (form) {
    const originalSubmit = form.onsubmit;
    
    form.addEventListener('submit', function(e) {
        formSubmitCount++;
        
        if (formSubmitCount > 1) {
            // Disable multiple rapid submissions
            const submitButton = form.querySelector('.submit-button');
            const originalText = submitButton.textContent;
            
            submitButton.disabled = true;
            submitButton.textContent = 'Sending...';
            
            setTimeout(() => {
                submitButton.disabled = false;
                submitButton.textContent = originalText;
                formSubmitCount = 0;
            }, 2000);
        }
    });
}

// =====================
// WhatsApp Button Tracking
// =====================

const whatsappButton = document.querySelector('.whatsapp-button');
if (whatsappButton) {
    whatsappButton.addEventListener('click', function() {
        console.log('User clicked WhatsApp button');
        // You can add analytics or tracking here
    });
}

// =====================
// Log Page Load
// =====================

window.addEventListener('load', function() {
    console.log('The Wedding Blouse by Karunya - Website loaded successfully');
});
