# DaniBrands E-Commerce Website

A beautiful, modern, and fully responsive e-commerce website for fashion products built with HTML, CSS, and JavaScript.

## 🎯 Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Product Catalog** - Browse all products with category filtering
- **Product Details** - Detailed product pages with descriptions and sizes
- **Category System** - Organized by Men's Wear, Women's Wear, Accessories, and Footwear
- **Modern UI** - Beautiful gradient designs and smooth animations
- **Contact Form** - Get in touch with the business
- **About Page** - Learn about the brand
- **No Backend Required** - Pure frontend, easy to host anywhere

## 📁 Project Structure

```
danibrands/
├── index.html              # Homepage
├── shop.html              # All products page
├── product.html           # Product detail page
├── about.html             # About page
├── contact.html           # Contact page
├── css/
│   └── style.css          # All styles
├── js/
│   ├── products.js        # Product data
│   ├── main.js           # Homepage JavaScript
│   ├── shop.js           # Shop page JavaScript
│   ├── product-detail.js # Product detail JavaScript
│   └── contact.js        # Contact form JavaScript
└── README.md             # This file
```

## 🚀 Quick Start

### Option 1: Open Locally
1. Download all files
2. Open `index.html` in your web browser
3. That's it! No installation needed

### Option 2: Use a Local Server (Recommended)
1. Download all files
2. If you have Python installed:
   ```bash
   # Python 3
   python -m http.server 8000
   ```
3. Open browser to `http://localhost:8000`

### Option 3: VS Code Live Server
1. Open folder in VS Code
2. Install "Live Server" extension
3. Right-click `index.html` → "Open with Live Server"

## 🌐 Deploy for FREE (Make it Accessible to Others)

### Option 1: GitHub Pages (Easiest - Recommended)

1. **Create GitHub Account** (if you don't have one)
   - Go to https://github.com
   - Sign up for free

2. **Create New Repository**
   - Click "+" → "New repository"
   - Name: `danibrands-website`
   - Make it Public
   - Click "Create repository"

3. **Upload Your Files**
   - Click "uploading an existing file"
   - Drag and drop ALL your files
   - Click "Commit changes"

4. **Enable GitHub Pages**
   - Go to Settings → Pages
   - Source: Select "main" branch
   - Click Save

5. **Your Site is Live! 🎉**
   - URL: `https://YOUR-USERNAME.github.io/danibrands-website/`
   - Share this URL with anyone!

### Option 2: Netlify (Super Easy Drag & Drop)

1. Go to https://www.netlify.com
2. Sign up (free)
3. Drag your entire `danibrands` folder onto Netlify
4. Get instant URL like: `https://danibrands.netlify.app`
5. Done! 🚀

### Option 3: Vercel

1. Go to https://vercel.com
2. Sign up with GitHub
3. Click "New Project"
4. Import your repository
5. Click "Deploy"
6. Get URL like: `https://danibrands.vercel.app`

### Option 4: Render

1. Go to https://render.com
2. Sign up (free)
3. New → Static Site
4. Connect your GitHub repo
5. Deploy!

## 📝 Customizing Your Site

### Change Products

Edit `js/products.js`:

```javascript
{
    id: 21,
    name: "Your Product Name",
    category: "mens", // or womens, accessories, footwear
    price: 49.99,
    description: "Your product description",
    image: "", // Add image URL when you have one
    sizes: ["S", "M", "L", "XL"],
    featured: true // Show on homepage
}
```

### Change Colors

Edit `css/style.css`:

```css
:root {
    --primary-color: #667eea;    /* Main color */
    --secondary-color: #764ba2;  /* Secondary color */
}
```

### Add Your Logo

Replace the text logo in all HTML files:
```html
<a href="index.html" class="logo">DaniBrands</a>
```

With an image:
```html
<a href="index.html" class="logo">
    <img src="path/to/your/logo.png" alt="DaniBrands" height="40">
</a>
```

### Add Product Images

1. Create an `images` folder
2. Add your product images there
3. Update the `image` property in `js/products.js`:
   ```javascript
   image: "images/product1.jpg"
   ```

### Change Contact Information

Edit `contact.html` - find the contact info section and update:
- Email address
- Phone number
- Physical address
- Business hours

### Update Social Links

In all HTML files footer section:
```html
<a href="https://facebook.com/yourpage" class="social-link">Facebook</a>
<a href="https://instagram.com/yourpage" class="social-link">Instagram</a>
```

## 🎨 Design Features

- **Gradient Backgrounds** - Modern purple/blue gradients
- **Smooth Animations** - Hover effects and transitions
- **Card Design** - Clean product cards with shadows
- **Mobile Menu** - Responsive hamburger menu
- **Grid Layouts** - Flexible product grids
- **Custom Fonts** - Google Fonts (Poppins)

## 📱 Mobile Responsive

The site automatically adjusts for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🔧 Future Enhancements

Want to add more features? Here are some ideas:

1. **Shopping Cart** - Add localStorage cart functionality
2. **Search Bar** - Filter products by name
3. **Product Reviews** - Customer ratings and reviews
4. **Image Gallery** - Multiple images per product
5. **Size Guide** - Size chart popup
6. **Wishlist** - Save favorite products
7. **Newsletter** - Email collection integration
8. **Payment Gateway** - Stripe/PayPal integration
9. **User Accounts** - Login/signup functionality
10. **Backend** - Connect to database for dynamic content

## 🆘 Troubleshooting

**Problem:** Products not showing
**Solution:** Check that `js/products.js` is loaded correctly

**Problem:** Styles not working
**Solution:** Verify `css/style.css` path is correct

**Problem:** Mobile menu not working
**Solution:** Make sure `js/main.js` is included

**Problem:** Contact form doesn't work
**Solution:** This is demo only - add backend or email service

## 📚 Resources

- **HTML/CSS/JS Help:** https://www.w3schools.com
- **Free Images:** https://unsplash.com or https://pexels.com
- **Icons:** https://fontawesome.com
- **Hosting:** GitHub Pages, Netlify, Vercel (all free!)

## 📄 License

This is a template project. Feel free to use it for your business!

## 🤝 Support

Need help? Common questions:

1. **How do I add more products?** - Edit `js/products.js`
2. **Can I sell products?** - Yes! Add payment gateway later
3. **Is it really free?** - Yes! Hosting is free on GitHub Pages/Netlify
4. **Do I need coding knowledge?** - Basic HTML/CSS helps but not required
5. **Can I change the design?** - Absolutely! Edit `css/style.css`

## 🎉 You're All Set!

Your DaniBrands website is ready to launch. Just follow the deployment steps above and share your link with the world!

**Built with ❤️ for fashion entrepreneurs**

---

### Quick Deploy Checklist

- [ ] Customize products in `js/products.js`
- [ ] Update contact information
- [ ] Add your logo
- [ ] Change colors if desired
- [ ] Add product images
- [ ] Update social media links
- [ ] Test on mobile device
- [ ] Deploy to GitHub Pages or Netlify
- [ ] Share your link!

Good luck with your fashion business! 🚀👗👔