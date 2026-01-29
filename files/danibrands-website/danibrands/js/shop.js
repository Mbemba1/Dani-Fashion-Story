// Shop page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');
    
    // Load all products initially
    let currentCategory = categoryParam || 'all';
    loadProducts(currentCategory);
    
    // Set active filter button
    setActiveFilter(currentCategory);
    
    // Filter button click handlers
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            currentCategory = category;
            
            // Update active state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Load filtered products
            loadProducts(category);
            
            // Update URL without page reload
            const newUrl = category === 'all' ? 'shop.html' : `shop.html?category=${category}`;
            window.history.pushState({}, '', newUrl);
        });
    });
});

function setActiveFilter(category) {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        if (button.getAttribute('data-category') === category) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

function loadProducts(category) {
    const container = document.getElementById('productsContainer');
    const noProductsMsg = document.getElementById('noProducts');
    
    // Filter products
    let filteredProducts = category === 'all' 
        ? products 
        : products.filter(product => product.category === category);
    
    // Show/hide no products message
    if (filteredProducts.length === 0) {
        container.style.display = 'none';
        noProductsMsg.style.display = 'block';
        return;
    } else {
        container.style.display = 'grid';
        noProductsMsg.style.display = 'none';
    }
    
    // Render products
    container.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
}

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

function goToProduct(productId) {
    window.location.href = `product.html?id=${productId}`;
}