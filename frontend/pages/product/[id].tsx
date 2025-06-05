import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import { FaShippingFast } from "react-icons/fa";
import { GiComb } from "react-icons/gi";
import styles from "../../styles/home.css";

// Sample product data (should be replaced with API/backend in real app)
const sampleProducts = [
  {
    id: 1,
    name: "Men's Classic Shirt",
    price: 1199,
    image: "/images/men.jpg",
    description: "A timeless classic shirt for men. Comfortable, stylish, and perfect for any occasion.",
    category: "Men",
    colors: ["#222", "#2C6EFB", "#C62828"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 2,
    name: "Women's Summer Dress",
    price: 1499,
    image: "/images/women.jpg",
    description: "Lightweight summer dress for women. Stay cool and chic all day.",
    category: "Women",
    colors: ["#D84315", "#FFD600", "#43A047"],
    sizes: ["XS", "S", "M", "L"]
  },
  {
    id: 3,
    name: "Kids' Fun T-Shirt",
    price: 699,
    image: "/images/kid.jpg",
    gallery: ["/images/kid.jpg"],
    description: "Fun, bright t-shirt for kids. Soft cotton and playful design.",
    category: "Kids",
    colors: ["#1976D2", "#FFD600"],
    sizes: ["2-3Y", "4-5Y", "6-7Y"]
  },
  {
    id: 4,
    name: "Home Decor Cushion",
    price: 899,
    image: "/images/image4.jpg",
    description: "Add a pop of color and comfort to your home with this decor cushion.",
    category: "Home",
    colors: ["#FFD600", "#111"],
    sizes: ["16x16", "18x18"]
  },
  {
    id: 5,
    name: "Beauty Essentials Kit",
    price: 1299,
    image: "/images/coverable.jpg",
    description: "All-in-one beauty kit for your daily routine. Perfect for gifting!",
    category: "Beauty",
    colors: ["#FFD600"],
    sizes: ["One Size"]
  }
];

const serviceHighlights = [
  { icon: "https://img.icons8.com/ios-filled/50/000000/checked--v1.png", text: "Free Alterations" },
  { icon: "https://img.icons8.com/ios-filled/50/000000/exchange.png", text: "Easy Exchange & Return" },
  { icon: <FaShippingFast size={34} />, text: "Express Delivery" },
  { icon: <GiComb size={34} />, text: "Curated Styling Advice" },
  { icon: "https://img.icons8.com/ios-filled/50/000000/collect.png", text: "Click & Collect" },
];

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const product = sampleProducts.find(p => p.id === Number(id));
  const [selectedColor, setSelectedColor] = React.useState<string | null>(null);
  const [selectedSize, setSelectedSize] = React.useState<string | null>(null);
  const [mainImg, setMainImg] = React.useState<string>(product?.gallery?.[0] || product?.image || "");
  const [zoomOpen, setZoomOpen] = React.useState(false);

  if (!product) {
    return (
      <div className="ss-home">
        <Head><title>Product Not Found | TextileX</title></Head>
        <div className="ss-topbar">Product Not Found</div>
        <div style={{ padding: 40, textAlign: 'center' }}>
          <h2>Sorry, product not found.</h2>
          <Link href="/products">Back to Products</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="ss-home">
      <Head>
        <title>{product.name} | TextileX</title>
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

      {/* Product Detail Section */}
      <div className="ss-product-detail">
        <div className="ss-product-detail__imgwrap">
          <img
            src={mainImg}
            alt={product.name}
            className="ss-product-detail__img"
            style={{ cursor: 'zoom-in' }}
            onClick={() => setZoomOpen(true)}
          />
          {product.gallery && product.gallery.length > 1 && (
            <div className="ss-product-detail__gallery">
              {product.gallery.map((img: string, idx: number) => (
                <img
                  key={img}
                  src={img}
                  alt={`thumb-${idx}`}
                  className={`ss-product-detail__thumb${mainImg === img ? ' selected' : ''}`}
                  onClick={() => setMainImg(img)}
                />
              ))}
            </div>
          )}
          {/* Zoom Overlay */}
          {zoomOpen && (
            <div className="ss-product-detail__zoom-overlay" onClick={() => setZoomOpen(false)}>
              <img src={mainImg} alt="zoom" className="ss-product-detail__zoom-img" />
              <span className="ss-product-detail__zoom-close">×</span>
            </div>
          )}
        </div>
        <div className="ss-product-detail__info">
          <h1 className="ss-product-detail__name">{product.name}</h1>
          <div className="ss-product-detail__price">₹{product.price}</div>
          <div className="ss-product-detail__desc">{product.description}</div>

          {/* Color selection */}
          <div className="ss-product-detail__row">
            <span className="ss-product-detail__label">Color:</span>
            <div className="ss-product-detail__colors">
              {product.colors && product.colors.map((color: string) => (
                <span
                  key={color}
                  className={`ss-product-detail__color${selectedColor === color ? ' selected' : ''}`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                  title={color}
                />
              ))}
            </div>
          </div>
          {/* Size selection */}
          <div className="ss-product-detail__row">
            <span className="ss-product-detail__label">Size:</span>
            <div className="ss-product-detail__sizes">
              {product.sizes && product.sizes.map((size: string) => (
                <button
                  key={size}
                  className={`ss-product-detail__size${selectedSize === size ? ' selected' : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button
            className="ss-product-detail__cartbtn"
            disabled={!selectedColor || !selectedSize}
            style={{
              background: !selectedColor || !selectedSize ? '#FFD600' : 'linear-gradient(90deg,#FFD600 60%,#ffe066 100%)',
              color: '#181818',
              fontWeight: 900,
              fontSize: 18,
              border: 'none',
              borderRadius: 8,
              padding: '10px 36px',
              marginTop: 16,
              marginBottom: 12,
              cursor: !selectedColor || !selectedSize ? 'not-allowed' : 'pointer',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              opacity: !selectedColor || !selectedSize ? 0.6 : 1,
              transition: 'background 0.2s',
              outline: 'none',
              display: 'inline-block',
              width: '100%'
            }}
            onClick={() => {
              if (!selectedColor || !selectedSize) return;
              // Simulate add to cart and go to cart
              router.push('/cart');
            }}
            onMouseOver={e => {
              if (!e.currentTarget.disabled) e.currentTarget.style.background = '#ffe066';
            }}
            onMouseOut={e => {
              if (!e.currentTarget.disabled) e.currentTarget.style.background = 'linear-gradient(90deg,#FFD600 60%,#ffe066 100%)';
            }}
          >
            Add to Cart
          </button>
          <Link href="/products" legacyBehavior>
            <a className="ss-product-detail__back">← Back to Products</a>
          </Link>
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

export default ProductDetail;
