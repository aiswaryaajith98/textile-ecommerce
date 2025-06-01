import React, { useState } from "react";
import Head from "next/head";
import styles from '../styles/home.css';
import { FaMale, FaFemale, FaChild, FaHeart, FaHome, FaShippingFast } from "react-icons/fa";
import { GiComb } from "react-icons/gi";
import Link from "next/link";


// Placeholder data for banners and categories
const heroBanners = [
  {
    img: "images/Main-Banner1.jpg",
    alt: "Main Banner 1"
  },
  {
    img: "images/Main-Banner2.jpg",
    alt: "Main Banner 2"
  }
];



const categories = [
  { name: "Men", icon: <FaMale size={48} /> },
  { name: "Women", icon: <FaFemale size={48} /> },
  { name: "Kids", icon: <FaChild size={48} /> },
  { name: "Beauty", icon: <FaHeart size={48} /> },
  { name: "Home", icon: <FaHome size={48} /> },
];

const promoBanners = [
  {
    img: "https://sslimages.shoppersstop.com/sys-master/root/hc8/hc9/31564810752030/Promo-Banner-1.jpg",
    alt: "Promo 1"
  },
  {
    img: "https://sslimages.shoppersstop.com/sys-master/root/hf7/hca/31564810817566/Promo-Banner-2.jpg",
    alt: "Promo 2"
  }
];

const serviceHighlights = [
  { icon: "https://img.icons8.com/ios-filled/50/000000/checked--v1.png", text: "Free Alterations" },
  { icon: "https://img.icons8.com/ios-filled/50/000000/exchange.png", text: "Easy Exchange & Return" },
  { icon: <FaShippingFast size={34} />, text: "Express Delivery" },
  { icon: <GiComb size={34} />, text: "Curated Styling Advice" },
  { icon: "https://img.icons8.com/ios-filled/50/000000/collect.png", text: "Click & Collect" },
];

const Home = () => {
  const [bannerIdx, setBannerIdx] = useState(0);

  // Simple auto-advance for hero carousel
  React.useEffect(() => {
    const interval = setInterval(() => {
      setBannerIdx((prev) => (prev + 1) % heroBanners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="ss-home">
      <Head>
        <title>TextileX</title>
        <meta name="description" content="TextileX style homepage" />
        <link rel="icon" href="/favicon.ico" />
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
      {/* Hero Banner Carousel */}
      <section className="ss-hero">
        <img src={heroBanners[bannerIdx].img} alt={heroBanners[bannerIdx].alt} className="ss-hero__img" />
        <div className="ss-hero__dots">
          {heroBanners.map((_, idx) => (
            <span
              key={idx}
              className={bannerIdx === idx ? "ss-hero__dot active" : "ss-hero__dot"}
              onClick={() => setBannerIdx(idx)}
            ></span>
          ))}
        </div>
      
      </section>
      {/* Category Carousel */}
      <section className="ss-categories">
        <h2>Shop by Category</h2>
        <div className="ss-categories__row">
          {categories.map((cat, idx) => (
            <Link href="/products" legacyBehavior key={idx}>
              <a className="ss-category" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="ss-category__icon">{cat.icon}</div>
                <span>{cat.name}</span>
              </a>
            </Link>
          ))}
        </div>
      </section>

      {/* Homegrown Brands 3D Carousel */}
      <section className="ss-homegrown-brands">
        <h2 className="ss-homegrown-title">
          <span className="ss-homegrown-title__muted">Our </span>
          <span className="ss-homegrown-title__main">Homegrown</span>
          <span className="ss-homegrown-title__muted"> Brands</span>
        </h2>
        <HomegrownCarousel />
      </section>

      {/* Covetable Beauty Banner */}
      <section className="ss-covetable-beauty" style={{ margin: "40px 0", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: "90%", background: "#fff", borderRadius: "12px", boxShadow: "0 2px 8px rgba(0,0,0,0.07)", display: "flex", alignItems: "center", padding: "32px 0", gap: "48px", flexWrap: "wrap", justifyContent: "center" }}>
          <div>
            <h2 style={{ fontWeight: 600, fontSize: "2rem", marginBottom: "24px" }}>
              <span style={{ color: "#b1b1b1" }}>Covetable</span> <span style={{ color: "#222" }}>Beauty</span>
            </h2>
            <img src="images/Coverable.png" style={{ maxWidth: "350px", borderRadius: "8px" }} />
          </div>
          <div style={{ textAlign: "center" }}>
            <img src="images/IMAGE1.jpg" alt="Anastasia" style={{ maxWidth: "250px", marginBottom: "16px", borderRadius: "8px" }} />
            <div style={{ fontFamily: "serif", fontSize: "1.5rem", fontWeight: "bold", marginBottom: "8px" }}>ANASTASIA</div>
            <div style={{ fontWeight: 400, letterSpacing: "2px", marginBottom: "16px" }}>BEVERLY HILLS</div>
            <div style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "16px" }}>UP TO 40% OFF</div>
            <button style={{ padding: "12px 24px", background: "#111", color: "#fff", border: "none", borderRadius: "6px", fontWeight: "bold", fontSize: "1rem" }}>SHOP NOW</button>
          </div>
        </div>
      </section>

      {/* Intune Store Section */}
      <section className="ss-intune-store" style={{ margin: "40px 0", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: "95%", display: "flex", alignItems: "center", gap: "32px" }}>
          <div style={{ minWidth: 210, textAlign: "left" }}>
            <div style={{ fontFamily: 'serif', fontWeight: 600, fontSize: '2.2rem', lineHeight: 1.1, marginBottom: 12 }}>
              <span style={{ fontStyle: 'italic', color: '#222' }}>The</span><br />
              <span style={{ color: '#FFD600', fontWeight: 700, fontSize: '2.4rem', letterSpacing: 1 }}>Rhythm</span><br />
              <span style={{ color: '#222', fontWeight: 700, fontSize: '2.1rem' }}>STORE</span>
            </div>
          </div>
          <div style={{ display: "flex", gap: "28px", flexWrap: "wrap", justifyContent: "center", flex: 1 }}>
            {/* Card 1 */}
            <div style={{ background: '#fff', borderRadius: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', overflow: 'hidden', width: 250, position: 'relative' }}>
              <img src="images/Women.png" style={{ width: '100%', height: 260, objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: 16, left: 0, right: 0, background: 'rgba(255,255,255,0.95)', padding: '8px 0', textAlign: 'center', fontWeight: 700, fontSize: '1.2rem', letterSpacing: 1, borderRadius: '8px', margin: '0 12px' }}>
                STARTING ₹249
              </div>
            </div>
            {/* Card 2 */}
            <div style={{ background: '#fff', borderRadius: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', overflow: 'hidden', width: 250, position: 'relative' }}>
              <img src="images/Kid.png" style={{ width: '100%', height: 260, objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: 16, left: 0, right: 0, background: 'rgba(255,255,255,0.95)', padding: '8px 0', textAlign: 'center', fontWeight: 700, fontSize: '1.2rem', letterSpacing: 1, borderRadius: '8px', margin: '0 12px' }}>
                STARTING ₹249
              </div>
            </div>
            {/* Card 3 */}
            <div style={{ background: '#fff', borderRadius: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', overflow: 'hidden', width: 250, position: 'relative' }}>
              <img src="images/Men.png" style={{ width: '100%', height: 260, objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: 16, left: 0, right: 0, background: 'rgba(255,255,255,0.95)', padding: '8px 0', textAlign: 'center', fontWeight: 700, fontSize: '1.2rem', letterSpacing: 1, borderRadius: '8px', margin: '0 12px' }}>
                STARTING ₹399
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Brands */}
      <section className="ss-featured-brands">
        <h2><span className="ss-featured-brands__title">Featured</span> <span className="ss-featured-brands__bold">Brands</span></h2>
        <div className="ss-featured-brands__carousel-wrapper">
          <button className="ss-featured-brands__arrow left" aria-label="Scroll left">&#60;</button>
          <div className="ss-featured-brands__carousel">
            {/* Cards */}
            <div className="ss-featured-brand-card">
              <img src="images/IMAGE1.jpg" alt="Calvin Klein" />
              <div className="ss-featured-brand-card__info">
                <span className="ss-featured-brand-card__brand">Calvin Klein</span>
              </div>
            </div>
            <div className="ss-featured-brand-card">
              <img src="images/IMAGE2.jpg" alt="Chloé" />
              <div className="ss-featured-brand-card__info">
                <span className="ss-featured-brand-card__brand">Chloé</span>
              </div>
            </div>
            <div className="ss-featured-brand-card">
              <img src="images/IMAGE3.jpg" alt="Fashor" />
              <div className="ss-featured-brand-card__info">
                <span className="ss-featured-brand-card__brand">FASHOR</span>
                <span className="ss-featured-brand-card__offer">UP TO 40% OFF</span>
              </div>
            </div>
            <div className="ss-featured-brand-card">
              <img src="images/IMAGE4.jpg" alt="Versace" />
              <div className="ss-featured-brand-card__info">
                <span className="ss-featured-brand-card__brand">VERSACE</span>
                <span className="ss-featured-brand-card__offer">UP TO 20% OFF</span>
              </div>
            </div>
            <div className="ss-featured-brand-card">
              <img src="images/IMAGE5.jpg" alt="Forever New" />
              <div className="ss-featured-brand-card__info">
                <span className="ss-featured-brand-card__brand">FOREVER NEW</span>
              </div>
            </div>
            
          </div>
          <button className="ss-featured-brands__arrow right" aria-label="Scroll right">&#62;</button>
        </div>
      </section>

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

// Homegrown Brands Carousel as a component
function HomegrownCarousel() {
  const brands = [
    { name: "FRATINI", icon: "images/IMAGE1.jpg", offer: "UP TO 20% OFF" },
    { name: "KASHISH", icon: "images/IMAGE2.jpg", offer: "UP TO 30% OFF" },
    { name: "HAUTE CURRY", icon: "images/IMAGE3.jpg", offer: "UP TO 40% OFF" },
    { name: "LIFE", icon: "images/IMAGE4.jpg", offer: "UP TO 50% OFF" },
    { name: "VETTORIO FRATINI", icon: "images/IMAGE5.jpg", offer: "UP TO 25% OFF" },
    { name: "STOP", icon: "images/IMAGE6.jpg", offer: "UP TO 20% OFF" },
    { name: "F", icon: "images/IMAGE4.jpg", offer: "UP TO 35% OFF" },
  ];
  const [centerIdx, setCenterIdx] = React.useState(3);
  const handleLeft = () => setCenterIdx(i => (i - 1 + brands.length) % brands.length);
  const handleRight = () => setCenterIdx(i => (i + 1) % brands.length);
  function cardClass(idx: number) {
    const offset = idx - centerIdx;
    if (offset === 0) return "ss-homegrown-card center";
    if (offset === -1 || (offset === brands.length - 1 && centerIdx === 0)) return "ss-homegrown-card left1";
    if (offset === 1 || (offset === -(brands.length - 1) && centerIdx === brands.length - 1)) return "ss-homegrown-card right1";
    if (offset === -2 || (offset === brands.length - 2 && centerIdx <= 1)) return "ss-homegrown-card left2";
    if (offset === 2 || (offset === -(brands.length - 2) && centerIdx >= brands.length - 2)) return "ss-homegrown-card right2";
    return "ss-homegrown-card hidden";
  }
  return (
    <div className="ss-homegrown-carousel-wrapper">
      <button className="ss-homegrown-arrow left" onClick={handleLeft} aria-label="Scroll left">&#60;</button>
      <div className="ss-homegrown-carousel">
        {brands.map((brand, idx: number) => (
          <div className={cardClass(idx)} key={brand.name}>
            <img src={brand.icon} alt={brand.name} />
            <div className="ss-homegrown-card__info">
              <span className="ss-homegrown-card__brand">{brand.name}</span>
              <span className="ss-homegrown-card__offer">{brand.offer}</span>
            </div>
          </div>
        ))}
      </div>
      <button className="ss-homegrown-arrow right" onClick={handleRight} aria-label="Scroll right">&#62;</button>
    </div>
  );
}

export default Home;
