// Sample products data for DaniBrands
const products = [
    {
        id: 1,
        name: "Classic Cotton T-Shirt",
        category: "mens",
        price: 29.99,
        description: "Premium quality cotton t-shirt with a comfortable fit. Perfect for everyday wear, featuring breathable fabric and durable stitching.",
        image: "",
        sizes: ["S", "M", "L", "XL"],
        featured: true
    },
    {
        id: 2,
        name: "Elegant Summer Dress",
        category: "womens",
        price: 79.99,
        description: "Beautiful flowing summer dress with floral patterns. Lightweight and stylish, perfect for any summer occasion.",
        image: "",
        sizes: ["XS", "S", "M", "L"],
        featured: true
    },
    {
        id: 3,
        name: "Leather Crossbody Bag",
        category: "accessories",
        price: 89.99,
        description: "Genuine leather crossbody bag with adjustable strap. Multiple compartments for organized storage. Elegant and practical.",
        image: "",
        sizes: ["One Size"],
        featured: true
    },
    {
        id: 4,
        name: "Running Sneakers",
        category: "footwear",
        price: 119.99,
        description: "High-performance running sneakers with cushioned sole. Lightweight design with excellent grip and support.",
        image: "",
        sizes: ["7", "8", "9", "10", "11"],
        featured: true
    },
    {
        id: 5,
        name: "Denim Jacket",
        category: "mens",
        price: 89.99,
        description: "Classic denim jacket with a modern fit. Versatile piece that pairs well with any outfit. Premium denim material.",
        image: "",
        sizes: ["S", "M", "L", "XL", "XXL"],
        featured: false
    },
    {
        id: 6,
        name: "Knit Sweater",
        category: "womens",
        price: 59.99,
        description: "Cozy knit sweater perfect for cooler days. Soft fabric with ribbed cuffs and hem. Available in multiple colors.",
        image: "",
        sizes: ["XS", "S", "M", "L", "XL"],
        featured: true
    },
    {
        id: 7,
        name: "Aviator Sunglasses",
        category: "accessories",
        price: 49.99,
        description: "Classic aviator sunglasses with UV protection. Metal frame with gradient lenses. Timeless style.",
        image: "",
        sizes: ["One Size"],
        featured: false
    },
    {
        id: 8,
        name: "Ankle Boots",
        category: "footwear",
        price: 139.99,
        description: "Stylish ankle boots with side zipper. Comfortable heel height, perfect for all-day wear. Quality leather construction.",
        image: "",
        sizes: ["6", "7", "8", "9", "10"],
        featured: true
    },
    {
        id: 9,
        name: "Slim Fit Chinos",
        category: "mens",
        price: 69.99,
        description: "Modern slim-fit chinos in premium cotton blend. Comfortable stretch fabric with clean lines. Professional yet casual.",
        image: "",
        sizes: ["30", "32", "34", "36", "38"],
        featured: false
    },
    {
        id: 10,
        name: "Silk Blouse",
        category: "womens",
        price: 89.99,
        description: "Luxurious silk blouse with elegant draping. Professional and sophisticated, perfect for work or evening events.",
        image: "",
        sizes: ["XS", "S", "M", "L"],
        featured: false
    },
    {
        id: 11,
        name: "Leather Wallet",
        category: "accessories",
        price: 39.99,
        description: "Genuine leather wallet with multiple card slots. Slim design that fits easily in pockets. RFID protection included.",
        image: "",
        sizes: ["One Size"],
        featured: false
    },
    {
        id: 12,
        name: "Canvas Sneakers",
        category: "footwear",
        price: 59.99,
        description: "Classic canvas sneakers with comfortable rubber sole. Perfect for casual everyday wear. Timeless design.",
        image: "",
        sizes: ["6", "7", "8", "9", "10", "11"],
        featured: false
    },
    {
        id: 13,
        name: "Hooded Sweatshirt",
        category: "mens",
        price: 54.99,
        description: "Comfortable hooded sweatshirt in soft cotton blend. Kangaroo pocket and adjustable drawstring. Perfect for layering.",
        image: "",
        sizes: ["S", "M", "L", "XL", "XXL"],
        featured: false
    },
    {
        id: 14,
        name: "High-Waist Jeans",
        category: "womens",
        price: 79.99,
        description: "Flattering high-waist jeans with slight stretch. Classic five-pocket design with button fly. Versatile wardrobe staple.",
        image: "",
        sizes: ["24", "26", "28", "30", "32"],
        featured: false
    },
    {
        id: 15,
        name: "Minimalist Watch",
        category: "accessories",
        price: 149.99,
        description: "Elegant minimalist watch with leather strap. Japanese quartz movement. Water-resistant and scratch-resistant.",
        image: "",
        sizes: ["One Size"],
        featured: true
    },
    {
        id: 16,
        name: "Chelsea Boots",
        category: "footwear",
        price: 159.99,
        description: "Premium leather Chelsea boots with elastic side panels. Comfortable pull-on design. Perfect for smart-casual looks.",
        image: "",
        sizes: ["7", "8", "9", "10", "11", "12"],
        featured: false
    },
    {
        id: 17,
        name: "Polo Shirt",
        category: "mens",
        price: 44.99,
        description: "Classic polo shirt in pique cotton. Ribbed collar and cuffs with two-button placket. Smart-casual essential.",
        image: "",
        sizes: ["S", "M", "L", "XL"],
        featured: false
    },
    {
        id: 18,
        name: "Maxi Skirt",
        category: "womens",
        price: 64.99,
        description: "Flowing maxi skirt with elastic waistband. Lightweight fabric perfect for warm weather. Elegant and comfortable.",
        image: "",
        sizes: ["XS", "S", "M", "L", "XL"],
        featured: false
    },
    {
        id: 19,
        name: "Backpack",
        category: "accessories",
        price: 79.99,
        description: "Durable backpack with laptop compartment. Multiple pockets for organization. Water-resistant material.",
        image: "",
        sizes: ["One Size"],
        featured: false
    },
    {
        id: 20,
        name: "Loafers",
        category: "footwear",
        price: 99.99,
        description: "Classic leather loafers with cushioned insole. Slip-on design for easy wear. Perfect for business casual.",
        image: "",
        sizes: ["7", "8", "9", "10", "11"],
        featured: false
    }
];

// Category information
const categories = {
    mens: {
        name: "Men's Wear",
        description: "Stylish and comfortable clothing for men"
    },
    womens: {
        name: "Women's Wear",
        description: "Elegant and trendy fashion for women"
    },
    accessories: {
        name: "Accessories",
        description: "Complete your look with our accessories"
    },
    footwear: {
        name: "Footwear",
        description: "Step in style with our footwear collection"
    }
};