import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/cart.module.css';
import { useRouter } from 'next/router';


const steps = [
  'Delivery Address',
  'Order Summary',
  'Payment Options',
];

const Checkout = () => {
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(0);
  const [address, setAddress] = useState({
    name: '', address1: '', address2: '', city: '', state: '', pincode: '', country: '',
  });
  const [billing, setBilling] = useState({ email: '', phone: '' });
  const [payment, setPayment] = useState('cod');
  const subtotal = 1199 * 1 + 1499 * 2;

  function handleAddressChange(e: React.ChangeEvent<HTMLInputElement>) {
    setAddress({ ...address, [e.target.name]: e.target.value });
  }
  function handleBillingChange(e: React.ChangeEvent<HTMLInputElement>) {
    setBilling({ ...billing, [e.target.name]: e.target.value });
  }
  function handlePaymentChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPayment(e.target.value);
  }
 

function handlePlaceOrder(e: React.FormEvent) {
    e.preventDefault();
    router.push('/success');
}
  return (
    <div className="ss-home">
      <Head>
        <title>Checkout | TextileX</title>
      </Head>
      {/* Header/Main Nav (copied from cart.tsx) */}
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
      {/* Main layout, use cart style */}
      <div className={styles['ss-cart-bg-premium']}>
        <div className={styles['ss-cart-premium-layout']}>
          <div className={styles['ss-cart__main-col']} style={{ maxWidth: 600, margin: '0 auto', width: '100%' }}>
            {/* Stepper */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 32 }}>
              {steps.map((step, idx) => (
                <div key={step} style={{ flex: 1, textAlign: 'center', position: 'relative' }}>
                  <div style={{
                    width: 32, height: 32, borderRadius: '50%',
                    background: idx === activeStep ? '#FFD600' : '#eee',
                    color: idx === activeStep ? '#111' : '#888',
                    fontWeight: 900, fontSize: 18, lineHeight: '32px', margin: '0 auto',
                    border: idx < activeStep ? '2px solid #FFD600' : '2px solid #eee',
                    zIndex: 1,
                  }}>{idx + 1}</div>
                  <div style={{ fontWeight: idx === activeStep ? 800 : 500, color: idx === activeStep ? '#FFD600' : '#888', marginTop: 8 }}>{step}</div>
                  {idx < steps.length - 1 && (
                    <div style={{ position: 'absolute', top: 16, right: -32, width: 64, height: 2, background: idx < activeStep ? '#FFD600' : '#eee', zIndex: 0 }} />
                  )}
                </div>
              ))}
            </div>
        {/* Step Cards */}
        {activeStep === 0 && (
          <form style={{ display: 'flex', flexDirection: 'column', gap: 20 }} onSubmit={e => { e.preventDefault(); setActiveStep(1); }}>
            <fieldset style={{ border: 'none', marginBottom: 16 }}>
              <legend style={{ fontWeight: 700, marginBottom: 8 }}>Delivery Address</legend>
              <input name="name" value={address.name} onChange={handleAddressChange} required placeholder="Full Name" style={{ width: '100%', padding: 8, marginBottom: 8 }} />
              <input name="address1" value={address.address1} onChange={handleAddressChange} required placeholder="Address Line 1" style={{ width: '100%', padding: 8, marginBottom: 8 }} />
              <input name="address2" value={address.address2} onChange={handleAddressChange} placeholder="Address Line 2" style={{ width: '100%', padding: 8, marginBottom: 8 }} />
              <input name="city" value={address.city} onChange={handleAddressChange} required placeholder="City" style={{ width: '100%', padding: 8, marginBottom: 8 }} />
              <input name="state" value={address.state} onChange={handleAddressChange} required placeholder="State/Province" style={{ width: '100%', padding: 8, marginBottom: 8 }} />
              <input name="pincode" value={address.pincode} onChange={handleAddressChange} required placeholder="Postal Code" style={{ width: '100%', padding: 8, marginBottom: 8 }} />
              <input name="country" value={address.country} onChange={handleAddressChange} required placeholder="Country" style={{ width: '100%', padding: 8, marginBottom: 8 }} />
            </fieldset>
            <button type="submit" style={{ background: 'linear-gradient(90deg,#FFD600 60%,#ffe066 100%)', color: '#181818', fontWeight: 900, fontSize: 18, border: 'none', borderRadius: 8, padding: '14px 0', marginTop: 12, cursor: 'pointer' }}>Deliver Here</button>
          </form>
        )}
        {activeStep === 1 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{ background: '#f6f2ff', borderRadius: 8, padding: 16 }}>
              <strong>Order Summary</strong>
              <ul style={{ paddingLeft: 20, margin: '10px 0' }}>
                <li>Men's Classic Shirt - ₹1199 x 1</li>
                <li>Women's Summer Dress - ₹1499 x 2</li>
              </ul>
              <div style={{ fontWeight: 700, marginTop: 8 }}>Subtotal: ₹{subtotal}</div>
            </div>
            <button onClick={() => setActiveStep(2)} style={{ background: 'linear-gradient(90deg,#FFD600 60%,#ffe066 100%)', color: '#181818', fontWeight: 900, fontSize: 18, border: 'none', borderRadius: 8, padding: '14px 0', marginTop: 12, cursor: 'pointer' }}>Continue to Payment</button>
            <button onClick={() => setActiveStep(0)} style={{ color: '#FFD600', fontWeight: 700, background: 'none', border: 'none', marginTop: 0, cursor: 'pointer' }}>Back to Address</button>
          </div>
        )}
        {activeStep === 2 && (
          <form style={{ display: 'flex', flexDirection: 'column', gap: 20 }} onSubmit={handlePlaceOrder}>
            <fieldset style={{ border: 'none', marginBottom: 16 }}>
              <legend style={{ fontWeight: 700, marginBottom: 8 }}>Payment Options</legend>
              <label style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                <input type="radio" name="payment" value="cod" checked={payment === 'cod'} onChange={handlePaymentChange} />
                Cash on Delivery
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                <input type="radio" name="payment" value="card" checked={payment === 'card'} onChange={handlePaymentChange} />
                Card (Demo)
              </label>
              {payment === 'card' && (
                <div style={{ margin: '8px 0 0 0', padding: 12, background: '#f9f7fa', borderRadius: 8 }}>
                  <input required placeholder="Card Number" maxLength={16} style={{ width: '100%', padding: 8, marginBottom: 8 }} />
                  <div style={{ display: 'flex', gap: 8 }}>
                    <input required placeholder="MM/YY" maxLength={5} style={{ flex: 1, padding: 8, marginBottom: 8 }} />
                    <input required placeholder="CVV" maxLength={4} style={{ flex: 1, padding: 8, marginBottom: 8 }} />
                  </div>
                </div>
              )}
            </fieldset>
            <button type="submit" style={{ background: 'linear-gradient(90deg,#FFD600 60%,#ffe066 100%)', color: '#181818', fontWeight: 900, fontSize: 18, border: 'none', borderRadius: 8, padding: '14px 0', marginTop: 12, cursor: 'pointer' }}>Place Order</button>
            <button onClick={() => setActiveStep(1)} style={{ color: '#FFD600', fontWeight: 700, background: 'none', border: 'none', marginTop: 0, cursor: 'pointer' }}>Back to Summary</button>
          </form>
        )}
        <Link href="/cart" legacyBehavior>
          <a style={{ color: '#FFD600', fontWeight: 700, display: 'inline-block', marginTop: 16 }}>Back to Cart</a>
        </Link>
      </div>
    </div>
    </div>
  </div>

 
  );
}

export default Checkout;
