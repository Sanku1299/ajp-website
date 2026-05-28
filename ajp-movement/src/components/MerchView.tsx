import React, { useState } from 'react';
import antHead from '../assets/ant_head.png';
import antFlag from '../assets/ant_flag.png';
import { ShoppingBag, ShoppingCart, Trash2, X, AlertCircle, CheckCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

interface Product {
  id: number;
  name: string;
  desc: string;
  price: number;
  image: string;
  category: string;
}

interface CartItem {
  product: Product;
  quantity: number;
}

export default function MerchView() {
  const [balance, setBalance] = useState(1500000); // 15 Lakhs satirical note reference!
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [paymentMode, setPaymentMode] = useState('satirical-15lakh');
  const [orderComplete, setOrderComplete] = useState(false);

  const products: Product[] = [
    {
      id: 1,
      name: "The AJP Overthinking Hoodie",
      desc: "Keeps you warm while you analyze why your boss replied 'Okay' instead of 'Okay!' at 7 PM.",
      price: 1500,
      image: antHead,
      category: "Apparel"
    },
    {
      id: 2,
      name: "The Anti-Jumla Cap",
      desc: "100% protection against false political promises, hollow resume templates, and corporate seminars.",
      price: 600,
      image: antHead,
      category: "Apparel"
    },
    {
      id: 3,
      name: "The Emotional Support Mug",
      desc: "Holds 400ml of coffee or tears, whichever is higher in volume. Dishwasher safe, existential panic ready.",
      price: 450,
      image: antHead,
      category: "Drinkware"
    },
    {
      id: 4,
      name: "Unity Ant Metal Keyring",
      desc: "A heavy-duty steel keychain showing the Ant Mascot carrying a flag. Keeps your house keys from procrastinating.",
      price: 250,
      image: antFlag,
      category: "Accessories"
    },
    {
      id: 5,
      name: "Resignation Letter Sticker Pack",
      desc: "Laptops stickers featuring phrases like 'This could have been an email', 'Living on caffeine and regret', 'Gen-Z Union'.",
      price: 150,
      image: antFlag,
      category: "Accessories"
    }
  ];

  const addToCart = (product: Product) => {
    setCart(prev => {
      const idx = prev.findIndex(item => item.product.id === product.id);
      if (idx > -1) {
        return prev.map((item, i) => i === idx ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { product, quantity: 1 }];
    });
    setCartOpen(true);
  };

  const removeFromCart = (productId: number) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
  };

  const adjustQty = (productId: number, amount: number) => {
    setCart(prev => prev.map(item => {
      if (item.product.id === productId) {
        const nQty = item.quantity + amount;
        return { ...item, quantity: nQty > 0 ? nQty : 1 };
      }
      return item;
    }));
  };

  const totalCartPrice = cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (balance < totalCartPrice) return;

    setBalance(prev => prev - totalCartPrice);
    setCart([]);
    setCheckoutOpen(false);
    setOrderComplete(true);

    confetti({
      particleCount: 200,
      spread: 90,
      origin: { y: 0.5 },
      colors: ['#FF7A00', '#00e5ff', '#FFFFFF']
    });
  };

  return (
    <div className="merch-view container">
      <header className="merch-header text-center">
        <span className="section-tag">AJP Store</span>
        <h1 className="glitch-text" data-text="Satirical Merch">Satirical Merch</h1>
        <p className="merch-intro-desc">
          Official propaganda gear. Rebellious on the outside, hilarious on the inside. Spend your mock currency here.
        </p>
        
        {/* Wallet Balance widget */}
        <div className="wallet-widget card-glow-orange mt-20">
          <span className="wallet-label">My Anti-Jumla Balance</span>
          <h3 className="text-orange">Rs. {balance.toLocaleString()}</h3>
          <span className="wallet-note">*(Funded by the legendary Rs. 15 Lakh political promise)</span>
        </div>
      </header>

      {/* Cart Button floating on right */}
      <button className="floating-cart-btn btn-orange" onClick={() => setCartOpen(true)}>
        <ShoppingCart size={20} />
        <span>Cart ({cart.reduce((s, i) => s + i.quantity, 0)})</span>
      </button>

      {/* Product List */}
      <section className="products-section">
        <div className="products-grid">
          {products.map(p => (
            <div key={p.id} className="product-card card-glow-orange flex-col">
              <span className="product-cat-tag">{p.category}</span>
              <div className="product-img-frame">
                <img src={p.image} alt={p.name} className="product-img" />
              </div>
              <h3 className="product-name">{p.name}</h3>
              <p className="product-desc">{p.desc}</p>
              <div className="product-footer">
                <span className="product-price">Rs. {p.price}</span>
                <button className="btn-orange text-xs" onClick={() => addToCart(p)}>
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cart Sidebar Modal */}
      {cartOpen && (
        <div className="sidebar-backdrop" onClick={() => setCartOpen(false)}>
          <div className="cart-sidebar" onClick={e => e.stopPropagation()}>
            <div className="sidebar-header">
              <h3 className="flex-align text-orange">
                <ShoppingBag size={22} className="mr-8" /> Shopping Cart
              </h3>
              <button className="close-sidebar-btn" onClick={() => setCartOpen(false)}>
                <X size={20} />
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="empty-cart-view flex-col flex-center">
                <ShoppingCart size={48} className="text-gray-dark mb-15" />
                <p>Your cart is currently empty.</p>
                <button className="btn-orange mt-20" onClick={() => setCartOpen(false)}>
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="cart-content flex-col">
                <div className="cart-items-list">
                  {cart.map(item => (
                    <div key={item.product.id} className="cart-item-row">
                      <div className="cart-item-img-frame">
                        <img src={item.product.image} alt={item.product.name} />
                      </div>
                      <div className="cart-item-details">
                        <h4>{item.product.name}</h4>
                        <span className="text-orange font-bold text-sm">Rs. {item.product.price}</span>
                        <div className="qty-controls mt-10">
                          <button className="qty-btn" onClick={() => adjustQty(item.product.id, -1)}>-</button>
                          <span className="qty-val">{item.quantity}</span>
                          <button className="qty-btn" onClick={() => adjustQty(item.product.id, 1)}>+</button>
                        </div>
                      </div>
                      <button className="remove-item-btn" onClick={() => removeFromCart(item.product.id)}>
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="cart-summary-block">
                  <div className="summary-row">
                    <span>Subtotal</span>
                    <span>Rs. {totalCartPrice}</span>
                  </div>
                  <div className="summary-row font-bold text-lg text-orange">
                    <span>Total</span>
                    <span>Rs. {totalCartPrice}</span>
                  </div>
                  <button 
                    className="btn-orange w-full text-center mt-20 flex-center"
                    onClick={() => {
                      setCartOpen(false);
                      setCheckoutOpen(true);
                    }}
                  >
                    Proceed To Satirical Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Satirical Checkout Modal */}
      {checkoutOpen && (
        <div className="modal-backdrop flex-center" onClick={() => setCheckoutOpen(false)}>
          <div className="modal-card card-glow-orange" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Satirical Payment Gateway</h3>
              <button className="close-sidebar-btn" onClick={() => setCheckoutOpen(false)}>
                <X size={20} />
              </button>
            </div>
            
            <div className="checkout-summary-box mb-20">
              <p>Paying: <span className="font-bold text-orange">Rs. {totalCartPrice}</span></p>
              <p>Current Balance: <span>Rs. {balance.toLocaleString()}</span></p>
            </div>

            <form onSubmit={handleCheckout} className="checkout-form">
              <div className="control-group">
                <label>Choose Sarcastic Payment Method</label>
                <div className="payment-modes-list">
                  <label className={`payment-mode-item ${paymentMode === 'satirical-15lakh' ? 'active' : ''}`}>
                    <input 
                      type="radio" 
                      name="payment-mode" 
                      value="satirical-15lakh"
                      checked={paymentMode === 'satirical-15lakh'}
                      onChange={() => setPaymentMode('satirical-15lakh')}
                    />
                    <div>
                      <strong>Satirical Note (Rs. 15 Lakh)</strong>
                      <p>Deducts from the pre-loaded political promises.</p>
                    </div>
                  </label>

                  <label className={`payment-mode-item ${paymentMode === 'empty-promises' ? 'active' : ''}`}>
                    <input 
                      type="radio" 
                      name="payment-mode" 
                      value="empty-promises"
                      checked={paymentMode === 'empty-promises'}
                      onChange={() => setPaymentMode('empty-promises')}
                    />
                    <div>
                      <strong>Empty Promises Voucher</strong>
                      <p>Pays via rhetorical speech cards and hollow vibes.</p>
                    </div>
                  </label>

                  <label className={`payment-mode-item ${paymentMode === 'sarcastic-iou' ? 'active' : ''}`}>
                    <input 
                      type="radio" 
                      name="payment-mode" 
                      value="sarcastic-iou"
                      checked={paymentMode === 'sarcastic-iou'}
                      onChange={() => setPaymentMode('sarcastic-iou')}
                    />
                    <div>
                      <strong>Sarcastic IOU note</strong>
                      <p>Written on a sticky note saying 'I will work 80 hours next week' (Signed: HR).</p>
                    </div>
                  </label>
                </div>
              </div>

              <div className="checkout-buttons">
                <button type="submit" className="btn-orange w-full text-center">
                  Authorize Satirical Transaction 💸
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Order Complete Modal */}
      {orderComplete && (
        <div className="modal-backdrop flex-center" onClick={() => setOrderComplete(false)}>
          <div className="modal-card text-center card-glow-orange p-40" onClick={e => e.stopPropagation()}>
            <CheckCircle size={56} className="text-green mx-auto mb-20" />
            <h2 className="text-orange">Order Placed Successfully!</h2>
            <p className="mt-10 text-gray-light">
              Your satirical merchandise is now being packed by highly overworked ant interns. 
              Deductions were made using currency that doesn't exist, to buy items that represent your frustration.
            </p>
            <div className="warning-note mt-20 flex-align justify-center">
              <AlertCircle size={16} className="text-orange mr-8" /> 
              <span>Note: This is a satirical store. No actual physical items will ship. Stay rebellious!</span>
            </div>
            <button className="btn-orange mt-30" onClick={() => setOrderComplete(false)}>
              Back To Store 🛍️
            </button>
          </div>
        </div>
      )}

      <style>{`
        .merch-view {
          padding: 60px 0;
          position: relative;
        }

        .merch-header {
          margin-bottom: 60px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .merch-intro-desc {
          max-width: 700px;
          margin: 15px auto 0 auto;
          color: var(--text-gray-light);
        }

        .wallet-widget {
          padding: 16px 28px;
          border-radius: var(--border-radius-md);
          display: inline-flex;
          flex-direction: column;
          align-items: center;
        }

        .wallet-label {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-gray);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .wallet-note {
          font-size: 0.65rem;
          color: var(--text-gray-dark);
          font-style: italic;
          margin-top: 4px;
        }

        /* Floating cart button */
        .floating-cart-btn {
          position: fixed;
          bottom: 30px;
          right: 30px;
          z-index: 99;
          border-radius: 50px;
          padding: 14px 24px;
          box-shadow: 0 4px 20px rgba(255, 122, 0, 0.4);
        }

        /* Product Grid */
        .products-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .product-card {
          padding: 24px;
          border-radius: var(--border-radius-lg);
          min-height: 420px;
        }

        .product-cat-tag {
          align-self: flex-start;
          font-family: var(--font-heading);
          font-size: 0.65rem;
          font-weight: 800;
          text-transform: uppercase;
          color: var(--accent-blue);
          background: rgba(0, 229, 255, 0.1);
          padding: 2px 8px;
          border-radius: 4px;
          margin-bottom: 15px;
        }

        .product-img-frame {
          width: 100%;
          aspect-ratio: 1.2;
          background: var(--bg-navy-dark);
          border-radius: var(--border-radius-sm);
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          border: 1px solid rgba(255,255,255,0.05);
        }

        .product-img {
          max-height: 80%;
          width: auto;
          object-fit: contain;
        }

        .product-name {
          font-size: 1.1rem;
          margin-bottom: 10px;
          letter-spacing: 0.01em;
        }

        .product-desc {
          font-size: 0.8rem;
          color: var(--text-gray);
          line-height: 1.4;
          margin-bottom: 20px;
          flex-grow: 1;
        }

        .product-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid rgba(255,255,255,0.05);
          padding-top: 15px;
        }

        .product-price {
          font-family: var(--font-heading);
          font-weight: 900;
          font-size: 1.15rem;
          color: var(--primary-orange);
        }

        .text-xs {
          font-size: 0.75rem;
          padding: 6px 14px;
        }

        /* Cart Sidebar Styles */
        .sidebar-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(4px);
          z-index: 100;
          display: flex;
          justify-content: flex-end;
        }

        .cart-sidebar {
          width: 100%;
          max-width: 420px;
          height: 100%;
          background: var(--bg-navy-main);
          border-left: 2px solid var(--primary-orange);
          display: flex;
          flex-direction: column;
          padding: 30px;
          box-shadow: -10px 0 30px rgba(0,0,0,0.5);
        }

        .sidebar-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          padding-bottom: 20px;
          margin-bottom: 20px;
        }

        .close-sidebar-btn {
          background: none;
          border: none;
          color: var(--text-gray);
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .close-sidebar-btn:hover {
          color: var(--primary-orange);
        }

        .empty-cart-view {
          flex: 1;
        }

        .cart-content {
          flex: 1;
          justify-content: space-between;
          overflow: hidden;
        }

        .cart-items-list {
          flex: 1;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding-right: 5px;
        }

        .cart-item-row {
          display: grid;
          grid-template-columns: 70px 1fr 30px;
          gap: 15px;
          align-items: center;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.05);
          padding: 12px;
          border-radius: var(--border-radius-sm);
        }

        .cart-item-img-frame {
          width: 70px;
          aspect-ratio: 1;
          background: var(--bg-navy-dark);
          border-radius: 4px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cart-item-img-frame img {
          max-height: 80%;
          width: auto;
        }

        .cart-item-details h4 {
          font-size: 0.85rem;
          margin-bottom: 2px;
          color: var(--text-white);
        }

        .qty-controls {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .qty-btn {
          width: 24px;
          height: 24px;
          background: var(--bg-navy-dark);
          border: 1px solid rgba(255,255,255,0.1);
          color: var(--text-white);
          cursor: pointer;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .qty-val {
          font-size: 0.85rem;
          font-weight: bold;
        }

        .remove-item-btn {
          background: none;
          border: none;
          color: var(--text-gray-dark);
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .remove-item-btn:hover {
          color: #ef4444;
        }

        .cart-summary-block {
          border-top: 1px solid rgba(255,255,255,0.08);
          padding-top: 20px;
          margin-top: 20px;
        }

        .summary-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.95rem;
          margin-bottom: 8px;
        }

        .text-lg {
          font-size: 1.15rem;
        }

        /* Modal backdrops */
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.7);
          backdrop-filter: blur(5px);
          z-index: 101;
        }

        .modal-card {
          width: 90%;
          max-width: 500px;
          padding: 30px;
          background: var(--bg-navy-main);
          border-radius: var(--border-radius-lg);
          position: relative;
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          padding-bottom: 12px;
        }

        .checkout-summary-box {
          background: var(--bg-navy-dark);
          padding: 15px;
          border-radius: var(--border-radius-sm);
          font-size: 0.9rem;
        }

        .payment-modes-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 10px;
        }

        .payment-mode-item {
          display: flex;
          gap: 15px;
          align-items: flex-start;
          background: var(--bg-navy-dark);
          border: 1px solid rgba(255,255,255,0.05);
          padding: 12px;
          border-radius: var(--border-radius-sm);
          cursor: pointer;
          transition: var(--transition-smooth);
        }

        .payment-mode-item input {
          margin-top: 4px;
        }

        .payment-mode-item div strong {
          font-size: 0.85rem;
          display: block;
        }

        .payment-mode-item div p {
          font-size: 0.75rem;
          color: var(--text-gray);
        }

        .payment-mode-item.active {
          border-color: var(--primary-orange);
          background: rgba(255,122,0,0.05);
        }

        .warning-note {
          background: rgba(255,122,0,0.1);
          border: 1px solid var(--primary-orange);
          padding: 10px;
          border-radius: 4px;
          font-size: 0.75rem;
          color: var(--text-gray-light);
        }

        .mx-auto {
          margin-left: auto;
          margin-right: auto;
        }

        /* Responsiveness */
        @media (max-width: 1024px) {
          .products-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .products-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
