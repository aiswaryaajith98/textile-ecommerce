import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/home.css";
import { FaMale, FaFemale, FaChild, FaHeart, FaHome, FaShippingFast } from "react-icons/fa";
import { GiComb } from "react-icons/gi";

// Sample product data (replace with API data later)
const sampleProducts = [
  {
    id: 1,
    name: "Men's Classic Shirt",
    price: 1199,
    image: "images/Men.png",
    category: "Men"
  },
  {
    id: 2,
    name: "Women's Summer Dress",
    price: 1499,
    image: "images/Women.png",
    category: "Women"
  },
  {
    id: 3,
    name: "Kids' Fun T-Shirt",
    price: 699,
    image: "images/Kid.png",
    category: "Kids"
  },
  {
    id: 4,
    name: "Home Decor Cushion",
    price: 899,
    image: "images/IMAGE4.jpg",
    category: "Home"
  },
  {
    id: 5,
    name: "Beauty Essentials Kit",
    price: 1299,
    image: "images/Coverable.png",
    category: "Beauty"
  }
];

const categories = ["All", "Men", "Women", "Kids", "Home", "Beauty"];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? sampleProducts
      : sampleProducts.filter(p => p.category === selectedCategory);

  // Service highlights (copied from homepage)
  const serviceHighlights = [
    { icon: "https://img.icons8.com/ios-filled/50/000000/checked--v1.png", text: "Free Alterations" },
    { icon: "https://img.icons8.com/ios-filled/50/000000/exchange.png", text: "Easy Exchange & Return" },
    { icon: <FaShippingFast size={34} />, text: "Express Delivery" },
    { icon: <GiComb size={34} />, text: "Curated Styling Advice" },
    { icon: "https://img.icons8.com/ios-filled/50/000000/collect.png", text: "Click & Collect" },
  ];

  return (
    <div className="ss-home">
      <Head>
        <title>Products | TextileX</title>
      </Head>
      {/* Top Utility Bar */}
      <div className="ss-topbar">
        <div>First Citizen Club</div>
        <div>Help & Support</div>
        <div>App Download</div>
        <div>Login</div>
      </div>
      {/* Header/Main Nav */}
      <header className="ss-header">
        <div className="ss-header__logo">
          <span style={{ fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 900, fontSize: 32, color: '#111', letterSpacing: 2 }}>
            Textile<span style={{ color: '#FFD600' }}>X</span>
          </span>
        </div>
        <nav className="ss-header__nav">
          <ul>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Beauty</li>
            <li>Home</li>
            <li>Luxe</li>
            <li>Brands</li>
            <li>Gift Card</li>
          </ul>
        </nav>
        <div className="ss-header__actions">
          <input type="text" placeholder="Search for products, brands & more" className="ss-header__search" />
          <img src="https://img.icons8.com/ios-filled/24/000000/like--v1.png" alt="Wishlist" className="ss-header__icon" />
          <img src="https://img.icons8.com/ios-filled/24/000000/shopping-cart.png" alt="Cart" className="ss-header__icon" />
          <img src="https://img.icons8.com/ios-filled/24/000000/user.png" alt="Profile" className="ss-header__icon" />
        </div>
      </header>
      {/* Service Highlights */}
      <section className="ss-services">
        {serviceHighlights.map((s, idx) => (
          <div className="ss-service" key={idx}>
            {typeof s.icon === "string"
              ? <img src={s.icon} alt="service" />
              : s.icon}
            <span>{s.text}</span>
          </div>
        ))}
      </section>
      {/* Product Listing */}
      <div className="ss-products">
        <h1 className="ss-products__title">Products</h1>
        <div className="ss-products__categories">
          {categories.map(cat => (
            <button
              key={cat}
              className={`ss-products__cat-btn${selectedCategory === cat ? " active" : ""}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="ss-products__grid">
          {filteredProducts.map(product => (
            <div className="ss-product-card" key={product.id}>
              <img src={product.image} alt={product.name} className="ss-product-card__img" />
              <div className="ss-product-card__info">
                <div className="ss-product-card__name">{product.name}</div>
                <div className="ss-product-card__price">₹{product.price}</div>
                <Link href={`/product/${product.id}`} legacyBehavior>
                  <a className="ss-product-card__btn">View Details</a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Footer */}
      <footer className="ss-footer">
        <div className="ss-footer__links">
          <div>
            <h4>Customer Care</h4>
            <ul>
              <li>Contact Us</li>
              <li>Help & FAQs</li>
              <li>Track Order</li>
              <li>Returns & Exchange</li>
            </ul>
          </div>
          <div>
            <h4>About Us</h4>
            <ul>
              <li>Our Story</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Store Locator</li>
            </ul>
          </div>
          <div>
            <h4>Policy</h4>
            <ul>
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
              <li>Shipping Policy</li>
              <li>Cancellation Policy</li>
            </ul>
          </div>
          <div>
            <h4>Follow Us</h4>
            <ul className="ss-footer__social">
              <li><img src="https://img.icons8.com/ios-filled/24/000000/facebook-new.png" alt="Facebook" /></li>
              <li><img src="https://img.icons8.com/ios-filled/24/000000/instagram-new.png" alt="Instagram" /></li>
              <li><img src="https://img.icons8.com/ios-filled/24/000000/twitter.png" alt="Twitter" /></li>
              <li><img src="https://img.icons8.com/ios-filled/24/000000/youtube-play.png" alt="YouTube" /></li>
            </ul>
          </div>
        </div>
        <div className="ss-footer__copyright">
          2025 Textile E-Commerce. Replica for demo purposes.
        </div>
      </footer>
    </div>
  );
};

export default Products;
