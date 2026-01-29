// Product detail page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Get product ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    
    if (!productId) {
        window.location.href = 'shop.html';
        return;
    }
    
    // Find product
    const product = products.find(p => p.id === productId);
    
    if (!product) {
        window.location.href = 'shop.html';
        return;
    }
    
    // Display product details
    displayProductDetail(product);
    
    // Display related products
    displayRelatedProducts(product);
});

function displayProductDetail(product) {
    const container = document.getElementById('productDetail');
    const categoryInfo = categories[product.category];
    
    const sizesHTML = product.sizes.length > 0 
        ? `
            <div>
                <h3 style="margin-bottom: 1rem; font-size: 1.2rem;">Available Sizes</h3>
                <div class="sizes">
                    ${product.sizes.map(size => `<span class="size-badge">${size}</span>`).join('')}
                </div>
            </div>
        `
        : '';
    
    container.innerHTML = `
        <div>
            <div class="product-image-large">
                ${product.image ? `<img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 12px;">` : 'No Image Available'}
            </div>
        </div>
        
        <div class="product-details-content">
            <h1 class="product-title-large">${product.name}</h1>
            
            <div>
                <span class="category-badge" style="padding: 0.6rem 1.2rem; font-size: 1rem;">
                    ${categoryInfo.name}
                </span>
            </div>
            
            <p class="product-price-large">$${product.price.toFixed(2)}</p>
            
            <div>
                <h3 style="margin-bottom: 0.8rem; font-size: 1.2rem;">Description</h3>
                <p class="product-description" style="line-height: 1.8;">
                    ${product.description}
                </p>
            </div>
            
            ${sizesHTML}
            
            <div style="padding: 1.2rem; background: #f0fdf4; border-radius: 8px; color: #166534; font-weight: 500;">
                ✓ In Stock & Ready to Ship
            </div>
            
            <button class="btn btn-primary" style="width: 100%; font-size: 1.1rem; padding: 1.1rem;" onclick="addToCart(${product.id})">
                Add to Cart (Coming Soon)
            </button>
        </div>
    `;
}

function displayRelatedProducts(currentProduct) {
    const container = document.getElementById('relatedProducts');
    
    // Get related products from same category, excluding current product
    const relatedProducts = products
        .filter(p => p.category === currentProduct.category && p.id !== currentProduct.id)
        .slice(0, 4);
    
    if (relatedProducts.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #4a5568;">No related products found.</p>';
        return;
    }
    
    container.innerHTML = relatedProducts.map(product => {
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
    }).join('');
}

function goToProduct(productId) {
    window.location.href = `product.html?id=${productId}`;
}

function addToCart(productId) {
    alert('Shopping cart feature coming soon! Product ID: ' + productId);
    // This is where you'd add cart functionality in the future
}