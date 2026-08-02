// Product Database
const products = [
    {
        id: 1,
        name: "Maharani",
        desc: "Silk with zardozi embroidery",
        category: "mahotsavam",
        badge: "Premium"
    },
    {
        id: 3,
        name: "Eternal Elegance",
        desc: "Silk organza with hand embroidery",
        category: "designer",
        badge: "Exclusive"
    },
    {
        id: 4,
        name: "Royal Blush",
        desc: "Silk with gold accents",
        category: "vaibhavam",
        badge: "Popular"
    },
    {
        id: 6,
        name: "Golden Moments",
        desc: "Silk organza gotta",
        category: "designer",
        badge: "Premium"
    },
    {
        id: 7,
        name: "Imperial Pride",
        desc: "Heritage silk weave",
        category: "manthram",
        badge: "Heirloom"
    },
    {
        id: 9,
        name: "Royal Heritage",
        desc: "Traditional banarasi silk",
        category: "designer",
        badge: "Exclusive"
    }
];

// Gallery Functions
function openGallery(category = null) {
    if (category) {
        window.location.href = `gallery.html?category=${category}`;
    } else {
        window.location.href = `gallery.html`;
    }
}

function closeGallery() {
    const overlay = document.getElementById('galleryOverlay');
    const modal = document.getElementById('galleryModal');

    overlay.classList.remove('active');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function renderGallery(itemList) {
    const grid = document.getElementById('galleryGrid');
    grid.innerHTML = itemList.map(item => `
        <div class="gallery-item">
            <div class="gallery-item-placeholder">
                <div class="text-center">
                    <i class="fas fa-image text-3xl text-gray-400 mb-2"></i>
                    <p class="text-gray-600 text-sm font-semibold">${item.name}</p>
                </div>
            </div>
        </div>
    `).join('');
}

// Scroll Functions
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        updateActiveNav(sectionId);
    }
}

function updateActiveNav(sectionId) {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    // Find and activate the correct nav item
    const navItems = document.querySelectorAll('.nav-item');
    if (sectionId === 'home') navItems[0]?.classList.add('active');
    if (sectionId === 'catalog') navItems[1]?.classList.add('active');
    if (sectionId === 'contact') navItems[2]?.classList.add('active');
}

// WhatsApp Integration
function sendWhatsAppMessage() {
    const message = `Hi Kaaru! I'm interested in your bridal blouse collection. Can you share more details?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919629210802?text=${encodedMessage}`, '_blank');
}

// Close gallery on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeGallery();
        closeManthramModal();
    }
});

// Manthram Lightbox Modal Slider Logic
let currentSlideIndex = 0;

function openManthramModal() {
    const modal = document.getElementById('manthramModal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    currentSlideIndex = 0;
    updateModalSlider();
    document.body.style.overflow = 'hidden';
}

function closeManthramModal() {
    const modal = document.getElementById('manthramModal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = 'auto';
}

function updateModalSlider() {
    const slider = document.getElementById('modalSlider');
    if (slider) {
        slider.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
    }
}

function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % 2;
    updateModalSlider();
}

function prevSlide() {
    currentSlideIndex = (currentSlideIndex - 1 + 2) % 2;
    updateModalSlider();
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    console.log('Kaaru website loaded successfully');
});
