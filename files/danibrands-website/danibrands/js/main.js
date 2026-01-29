// Main JavaScript for DaniBrands

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    // Newsletter form submission
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            alert(`Thank you for subscribing! We'll send updates to ${email}`);
            this.reset();
        });
    }

    // Load featured products on homepage
    const featuredContainer = document.getElementById('featuredProducts');
    if (featuredContainer) {
        loadFeaturedProducts();
    }
});

// Load featured products
function loadFeaturedProducts() {
    const featuredContainer = document.getElementById('featuredProducts');
    const featuredProducts = products.filter(product => product.featured);
    
    if (featuredProducts.length === 0) {
        featuredContainer.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 3rem; background: white; border-radius: 12px;">
                <h3>No featured products yet!</h3>
                <p style="margin: 1rem 0; color: #4a5568;">Check back soon for our latest collection.</p>
            </div>
        `;
        return;
    }
    
    featuredContainer.innerHTML = featuredProducts.map(product => createProductCard(product)).join('');
}

// Create product card HTML
function createProductCard(product) {
    const categoryInfo = categories[product.category];
    
    return `
        <div class="product-card" onclick="goToProduct(${product.id})">
            <div class="product-image">
                ${product.image ? `<img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover;">` : 'No Image'}
            </div>
            <div class="product-info">
                <span class="category-badge">${categoryInfo.name}</span>
                <h3 class="product-title">${product.name}</h3>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <button class="btn btn-primary" onclick="event.stopPropagation(); goToProduct(${product.id})">View Details</button>
            </div>
        </div>
    `;
}

// Navigate to product detail page
function goToProduct(productId) {
    window.location.href = `product.html?id=${productId}`;
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});