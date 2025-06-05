import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from '../styles/cart.module.css';
import { FaShippingFast } from "react-icons/fa";
import { GiComb } from "react-icons/gi";

// Sample cart data (replace with real cart state in a real app)
const sampleCart = [
  {
    id: 1,
    name: "Men's Classic Shirt",
    price: 1199,
    image: "/images/men.jpg",
    color: "#222",
    size: "L",
    qty: 1
  },
  {
    id: 2,
    name: "Women's Summer Dress",
    price: 1499,
    image: "/images/women.jpg",
    color: "#FFD600",
    size: "M",
    qty: 2
  }
];

const serviceHighlights = [
  { icon: "https://img.icons8.com/ios-filled/50/000000/checked--v1.png", text: "Free Alterations" },
  { icon: "https://img.icons8.com/ios-filled/50/000000/exchange.png", text: "Easy Exchange & Return" },
  { icon: <FaShippingFast size={34} />, text: "Express Delivery" },
  { icon: <GiComb size={34} />, text: "Curated Styling Advice" },
  { icon: "https://img.icons8.com/ios-filled/50/000000/collect.png", text: "Click & Collect" },
];

const Cart = () => {
  const router = useRouter();
  const [cart, setCart] = React.useState(sampleCart);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleQtyChange = (id: number, qty: number) => {
    setCart(cart => cart.map(item =>
      item.id === id ? { ...item, qty: Math.max(1, qty) } : item
    ));
  };

  const handleRemove = (id: number) => {
    setCart(cart => cart.filter(item => item.id !== id));
  };

  return (
    <div className="ss-home">
      <Head>
        <title>Cart | TextileX</title>
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
      {/* Cart Content */}
      <div className={styles['ss-cart-bg-premium']}>
        <div className={styles['ss-cart-premium-layout']}>
          <div className={styles['ss-cart__main-col']}>
            <h1 className={styles['ss-cart__title']}>Shopping Cart</h1>
            {cart.length === 0 ? (
              <div className={styles['ss-cart__empty']}>
                <p>Your cart is empty.</p>
                <Link href="/products" legacyBehavior>
                  <a className={styles['ss-cart__back']}>Continue Shopping</a>
                </Link>
              </div>
            ) : (
              <div className={styles['ss-cart__items']}>
                {cart.map(item => (
                  <div className={styles['ss-cart__item']} key={item.id} aria-label="Cart Item">
                    <img src={item.image} alt={item.name} className={styles['ss-cart__item-img']} />
                    <div className={styles['ss-cart__item-info']}>
                      <div className={styles['ss-cart__item-name']}>{item.name}</div>
                      <div className={styles['ss-cart__item-meta']}>
                        <span className={styles['ss-cart__item-color']} style={{ backgroundColor: item.color }} title={item.color}></span>
                        <span className={styles['ss-cart__item-size']}>{item.size}</span>
                      </div>
                      <div className={styles['ss-cart__item-price']}>₹{item.price}</div>
                      <div className={styles['ss-cart__item-qty']} aria-label="Quantity Selector">
                        <button aria-label="Decrease Quantity" onClick={() => handleQtyChange(item.id, item.qty - 1)}>-</button>
                        <span>{item.qty}</span>
                        <button aria-label="Increase Quantity" onClick={() => handleQtyChange(item.id, item.qty + 1)}>+</button>
                      </div>
                      <button className={styles['ss-cart__item-remove']} onClick={() => handleRemove(item.id)} aria-label="Remove Item">Remove</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className={styles['ss-cart__side-col']}>
            <div className={styles['ss-cart__summary-premium']} aria-label="Cart Summary">
              <div className={styles['ss-cart__subtotal']}>
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              <button className={styles['ss-cart__checkout-btn']} onClick={() => router.push('/checkout')}>Proceed to Checkout</button>
              <div className={styles['ss-cart__summary-note']}>Shipping, taxes, and discounts calculated at checkout.</div>
            </div>
          </div>
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

export default Cart;

