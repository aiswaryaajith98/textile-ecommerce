import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function Success() {
  return (
    <div className="ss-home">
      <Head>
        <title>Order Success | TextileX</title>
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
      {/* Main Success Content */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh', background: '#fafbfc' }}>
        <div style={{
          background: '#fff',
          borderRadius: 12,
          boxShadow: '0 2px 16px rgba(30,41,59,0.07)',
          padding: '40px 32px 32px 32px',
          maxWidth: 340,
          width: '100%',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 20
        }}>
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: 8 }}>
            <circle cx="28" cy="28" r="28" fill="#e8f9f1" />
            <circle cx="28" cy="28" r="20" fill="#22c55e" />
            <path d="M20 29.5L26 35L36 25" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div style={{ fontSize: 24, fontWeight: 700, color: '#22c55e', marginBottom: 4 }}>Order Placed!</div>
          <div style={{ color: '#475569', fontSize: 16, marginBottom: 12, lineHeight: 1.5 }}>
            Thank you for shopping with TextileX.<br />Your order has been placed successfully.
          </div>
          <Link href="/" legacyBehavior>
            <a style={{
              background: '#FFD600',
              color: '#181818',
              fontWeight: 600,
              borderRadius: 6,
              padding: '12px 0',
              fontSize: 16,
              width: '100%',
              boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
              textDecoration: 'none',
              transition: 'background 0.2s',
              display: 'block',
              marginTop: 8
            }}>
              Continue Shopping
            </a>
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
}

