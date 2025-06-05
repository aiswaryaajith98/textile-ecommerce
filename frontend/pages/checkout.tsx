import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import checkoutStyles from '../styles/checkout.module.css';
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
      <div className={checkoutStyles['checkout-bg']}>
        <div className={checkoutStyles['checkout-layout']}>
          <div style={{ width: '100%' }}>
            {/* Stepper */}
            <div className={checkoutStyles['checkout-stepper']}>
              {steps.map((step, idx) => (
                <div key={step} className={checkoutStyles['checkout-step']}>
                  <div className={
                    checkoutStyles['checkout-step-circle'] +
                    (idx === activeStep ? ' ' + checkoutStyles['active'] : '') +
                    (idx < activeStep ? ' ' + checkoutStyles['completed'] : '')
                  }>{idx + 1}</div>
                  <div className={
                    checkoutStyles['checkout-step-label'] +
                    (idx === activeStep ? ' ' + checkoutStyles['active'] : '')
                  }>{step}</div>
                  {idx < steps.length - 1 && (
                    <div className={
                      checkoutStyles['checkout-step-connector'] +
                      (idx < activeStep ? ' ' + checkoutStyles['completed'] : '')
                    } />
                  )}
                </div>
              ))}
            </div>
            {/* Step Cards */}
            {activeStep === 0 && (
              <form className={checkoutStyles['checkout-form']} onSubmit={e => { e.preventDefault(); setActiveStep(1); }}>
                <fieldset>
                  <legend>Delivery Address</legend>
                  <input name="name" value={address.name} onChange={handleAddressChange} required placeholder="Full Name" className={checkoutStyles['checkout-input']} />
                  <input name="address1" value={address.address1} onChange={handleAddressChange} required placeholder="Address Line 1" className={checkoutStyles['checkout-input']} />
                  <input name="address2" value={address.address2} onChange={handleAddressChange} placeholder="Address Line 2" className={checkoutStyles['checkout-input']} />
                  <input name="city" value={address.city} onChange={handleAddressChange} required placeholder="City" className={checkoutStyles['checkout-input']} />
                  <input name="state" value={address.state} onChange={handleAddressChange} required placeholder="State/Province" className={checkoutStyles['checkout-input']} />
                  <input name="pincode" value={address.pincode} onChange={handleAddressChange} required placeholder="Postal Code" className={checkoutStyles['checkout-input']} />
                  <input name="country" value={address.country} onChange={handleAddressChange} required placeholder="Country" className={checkoutStyles['checkout-input']} />
                </fieldset>
                <button type="submit" className={checkoutStyles['checkout-btn']}>Deliver Here</button>
              </form>
            )}
            {activeStep === 1 && (
              <div className={checkoutStyles['checkout-summary']}>
                <div style={{ background: '#f6f2ff', borderRadius: 8, padding: 16 }}>
                  <strong>Order Summary</strong>
                  <ul style={{ paddingLeft: 20, margin: '10px 0' }}>
                    <li>Men's Classic Shirt - ₹1199 x 1</li>
                    <li>Women's Summer Dress - ₹1499 x 2</li>
                  </ul>
                  <div style={{ fontWeight: 700, marginTop: 8 }}>Subtotal: ₹{subtotal}</div>
                </div>
                <button onClick={() => setActiveStep(2)} className={checkoutStyles['checkout-btn']}>Continue to Payment</button>
                <button onClick={() => setActiveStep(0)} className={checkoutStyles['checkout-btn'] + ' ' + checkoutStyles['secondary']}>Back to Address</button>
              </div>
            )}
            {activeStep === 2 && (
              <form className={checkoutStyles['checkout-payment']} onSubmit={handlePlaceOrder}>
                <fieldset>
                  <legend>Payment Options</legend>
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
                      <input required placeholder="Card Number" maxLength={16} className={checkoutStyles['checkout-input']} />
                      <div style={{ display: 'flex', gap: 8 }}>
                        <input required placeholder="MM/YY" maxLength={5} className={checkoutStyles['checkout-input']} />
                        <input required placeholder="CVV" maxLength={4} className={checkoutStyles['checkout-input']} />
                      </div>
                    </div>
                  )}
                </fieldset>
                <button type="submit" className={checkoutStyles['checkout-btn']}>Place Order</button>
                <button type="button" onClick={() => setActiveStep(1)} className={checkoutStyles['checkout-btn'] + ' ' + checkoutStyles['secondary']}>Back to Summary</button>
              </form>
            )}
            <Link href="/cart" legacyBehavior>
              <a className={checkoutStyles['checkout-link']}>Back to Cart</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
