// Slideshow functionality
let slideIndex = 1;
let slides = [];
let slideInterval;

function showSlides() {
    slides = document.getElementsByClassName("slide");
    let indicators = document.getElementsByClassName("indicator");
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.opacity = "0";
        indicators[i].classList.remove("active");
    }
    
    if (slideIndex > slides.length) { slideIndex = 1 }
    if (slideIndex < 1) { slideIndex = slides.length }
    
    slides[slideIndex - 1].style.opacity = "1";
    indicators[slideIndex - 1].classList.add("active");
}

function changeSlide(n) {
    slideIndex += n;
    showSlides();
    resetSlideInterval();
}

function currentSlide(n) {
    slideIndex = n;
    showSlides();
    resetSlideInterval();
}

function resetSlideInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(function() {
        slideIndex++;
        showSlides();
    }, 5000);
}

// Project data
const projects = [
    {
        id: 1,
        name: "Siddhar Nagar",
        image: "projects/siddhar-nagar.jpg",
        // image: "projects/siddhar-nagar.jpg",
        location: "Chennai, Tamil Nadu",
        mapLink: "https://maps.app.goo.gl/example1",
        rate: "₹ 25,000 per sq.ft",
        contact: "+91 9367936768"
    },
    {
        id: 2,
        name: "Satellite City",
        image: "projects/satellite-city.jpg",
        location: "ECR Township, Anupuram",
        mapLink: "https://maps.app.goo.gl/example2",
        rate: "₹ 30,000 per sq.ft",
        contact: "+91 9367936768"
    },
    {
        id: 3,
        name: "VSR Nagar",
        image: "projects/vsr-nagar.jpg",
        location: "Chengalpattu, NH 45",
        mapLink: "https://maps.app.goo.gl/example3",
        rate: "₹ 22,000 per sq.ft",
        contact: "+91 9367936768"
    },
    {
        id: 4,
        name: "Muthumala Murugan Temple Salem",
        image: "projects/muthumala-murugan-temple.jpg",
        location: "Salem, Tamil Nadu",
        mapLink: "https://maps.app.goo.gl/example4",
        rate: "₹ 18,000 per sq.ft",
        contact: "+91 9367936768"
    },
    {
        id: 5,
        name: "Green Valley",
        image: "projects/green-valley.jpg",
        location: "Coimbatore, Tamil Nadu",
        mapLink: "https://maps.app.goo.gl/example5",
        rate: "₹ 28,000 per sq.ft",
        contact: "+91 9367936768"
    },
    {
        id: 6,
        name: "Ocean View",
        image: "projects/ocean-view.jpg",
        location: "Pondicherry",
        mapLink: "https://maps.app.goo.gl/example6",
        rate: "₹ 35,000 per sq.ft",
        contact: "+91 9367936768"
    },
    {
        id: 7,
        name: "Hill Station",
        image: "projects/hill-station.jpg",
        location: "Ooty, Tamil Nadu",
        mapLink: "https://maps.app.goo.gl/example7",
        rate: "₹ 20,000 per sq.ft",
        contact: "+91 9367936768"
    },
    {
        id: 8,
        name: "Metro City",
        image: "projects/metro-city.jpg",
        location: "Madurai, Tamil Nadu",
        mapLink: "https://maps.app.goo.gl/example8",
        rate: "₹ 26,000 per sq.ft",
        contact: "+91 9367936768"
    },
    {
        id: 9,
        name: "River Side",
        image: "projects/river-side.jpg",
        location: "Trichy, Tamil Nadu",
        mapLink: "https://maps.app.goo.gl/example9",
        rate: "₹ 24,000 per sq.ft",
        contact: "+91 9367936768"
    },
    {
        id: 10,
        name: "Garden City",
        image: "projects/garden-city.jpg",
        location: "Tirunelveli, Tamil Nadu",
        mapLink: "https://maps.app.goo.gl/example10",
        rate: "₹ 21,000 per sq.ft",
        contact: "+91 9367936768"
    },
    {
        id: 11,
        name: "Tech Park",
        image: "projects/tech-park.jpg",
        location: "Bangalore, Karnataka",
        mapLink: "https://maps.app.goo.gl/example11",
        rate: "₹ 40,000 per sq.ft",
        contact: "+91 9367936768"
    },
    {
        id: 12,
        name: "Heritage",
        image: "projects/heritage.jpg",
        location: "Mysore, Karnataka",
        mapLink: "https://maps.app.goo.gl/example12",
        rate: "₹ 32,000 per sq.ft",
        contact: "+91 9367936768"
    },
    {
        id: 13,
        name: "Premium Villas",
        image: "projects/premium-villas.jpg",
        location: "Hyderabad, Telangana",
        mapLink: "https://maps.app.goo.gl/example13",
        rate: "₹ 45,000 per sq.ft",
        contact: "+91 9367936768"
    }
];

// Initialize projects gallery
function initializeProjects() {
    const projectsGrid = document.querySelector('.projects-grid');

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.onclick = () => openModal(project);

        // Create the image element separately to add event listeners
        const img = document.createElement('img');
        img.src = project.image;
        img.alt = project.name;
        img.style.cssText = 'width: 100%; height: 250px; object-fit: cover; border-radius: 15px 15px 0 0; transition: transform 0.3s ease, opacity 0.3s ease; opacity: 0; display: block;';

        img.onload = function() {
            this.style.opacity = '1';
            // Hide placeholder when image loads successfully
            const placeholder = projectCard.querySelector('.project-placeholder');
            if (placeholder) {
                placeholder.style.display = 'none';
            }
        };

        img.onerror = function() {
            // Hide image and show placeholder when image fails to load
            this.style.display = 'none';
            const placeholder = projectCard.querySelector('.project-placeholder');
            if (placeholder) {
                placeholder.style.display = 'flex';
            }
        };

        const placeholder = document.createElement('div');
        placeholder.className = 'project-placeholder';
        placeholder.style.cssText = `display: flex; background: linear-gradient(135deg, #${Math.floor(Math.random()*16777215).toString(16)}, #${Math.floor(Math.random()*16777215).toString(16)}); width: 100%; height: 250px; align-items: center; justify-content: center; color: white; font-size: 1.2rem; font-weight: 600; text-align: center; padding: 1rem; transition: transform 0.3s ease; cursor: pointer; border-radius: 15px 15px 0 0;`;
        placeholder.textContent = project.name;

        projectCard.appendChild(img);
        projectCard.appendChild(placeholder);

        // Add project info
        const projectInfo = document.createElement('div');
        projectInfo.className = 'project-info';
        projectInfo.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.location}</p>
        `;

        projectCard.appendChild(projectInfo);

        projectsGrid.appendChild(projectCard);
    });
}

// Modal functionality
function openModal(project) {
    const modal = document.getElementById('projectModal');
    const modalImageContainer = document.querySelector('.modal-image');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalLocation = document.getElementById('modalLocation');
    const modalRate = document.getElementById('modalRate');
    const modalContact = document.getElementById('modalContact');
    const modalMapLink = document.getElementById('modalMapLink');

    // Update the existing image or create a new one if needed
    if (modalImage) {
        // Clear any existing content first
        modalImage.style.display = 'none';
        modalImage.src = '';

        // Remove any existing placeholders
        const existingPlaceholder = modalImageContainer.querySelector('.project-placeholder');
        if (existingPlaceholder) {
            existingPlaceholder.remove();
        }

        // Set new image
        modalImage.src = project.image;
        modalImage.alt = project.name;
        modalImage.onload = function() {
            // Image loaded successfully
            modalImage.style.display = 'block';
            // Hide any existing placeholder in modal
            const modalPlaceholder = modalImageContainer.querySelector('.project-placeholder');
            if (modalPlaceholder) {
                modalPlaceholder.remove();
            }
        };

        modalImage.onerror = function() {
            // Image failed to load, show placeholder
            modalImage.style.display = 'none';
            const placeholder = document.createElement('div');
            placeholder.className = 'project-placeholder';
            placeholder.style.background = `linear-gradient(135deg, #${Math.floor(Math.random()*16777215).toString(16)}, #${Math.floor(Math.random()*16777215).toString(16)})`;
            placeholder.style.width = '100%';
            placeholder.style.height = '100%';
            placeholder.style.display = 'flex';
            placeholder.style.alignItems = 'center';
            placeholder.style.justifyContent = 'center';
            placeholder.style.color = 'white';
            placeholder.style.fontSize = '1.5rem';
            placeholder.style.fontWeight = '600';
            placeholder.style.borderRadius = '10px';
            placeholder.textContent = project.name;
            modalImageContainer.appendChild(placeholder);
        };
    }

    modalTitle.textContent = project.name;
    modalLocation.textContent = project.location;
    modalRate.textContent = project.rate;
    modalContact.textContent = project.contact;
    modalMapLink.href = project.mapLink;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    const modalImageContainer = document.querySelector('.modal-image');
    const modalImage = document.getElementById('modalImage');

    // Clear the image src and hide it
    if (modalImage) {
        modalImage.src = '';
        modalImage.style.display = 'none';
    }

    // Remove any placeholders in the modal
    const placeholders = modalImageContainer.querySelectorAll('.project-placeholder');
    placeholders.forEach(placeholder => placeholder.remove());

    // Close the modal
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Project details section toggle - REMOVED as requested
// Scroll to projects section
function scrollToProjects() {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Newsletter form
function handleNewsletterSubmit(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    
    if (email) {
        alert('Thank you for subscribing! We will keep you updated with our latest projects.');
        event.target.reset();
    }
}

// Initialize smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Mobile menu toggle
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
}

// Contact form submission (WhatsApp integration)
function initWhatsAppLinks() {
    const whatsappLinks = document.querySelectorAll('.whatsapp-btn, a[href*="wa.me"]');
    
    whatsappLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // The href already contains the WhatsApp link, so we don't need to modify it
            // But we can add some analytics or tracking here if needed
        });
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize slideshow
    showSlides();
    slideInterval = setInterval(function() {
        slideIndex++;
        showSlides();
    }, 5000);
    
    // Initialize projects gallery
    initializeProjects();
    
    // Initialize smooth scrolling
    initSmoothScrolling();
    
    // Initialize mobile menu
    initMobileMenu();
    
    // Initialize WhatsApp links
    initWhatsAppLinks();
    
    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    }
    
    // Close modal when clicking outside
    const modal = document.getElementById('projectModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 5px 30px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animations
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.project-card, .about-section, .video-card, .contact-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
});
