import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = ({ onNavigate, orderItems, addToOrder, removeFromOrder, currentUser }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [showOrderButton, setShowOrderButton] = useState(null);
  const [showOrderedPopup, setShowOrderedPopup] = useState(false);

  const foodItems = {
    All: [
      { name: 'Chicken Burger', price: 50, img: 'chicken burger.webp' },
      { name: 'Mixed Pizza', price: 80, img: 'mixed pizza.webp' },
      { name: 'Veg Rice', price: 110, img: 'mixed rice.webp' },
      { name: 'Onion Rings', price: 30, img: 'onion.webp' },
      { name: 'Sandwich', price: 120, img: 'sand wich.webp' },
      { name: 'Fried Rice', price: 90, img: 'fried rice.webp' },
      { name: 'Pasta', price: 110, img: 'pasta.webp' },
      { name: 'Noodles', price: 85, img: 'Noodles.webp' }
    ],
    Burger: [
      { name: 'Chicken Burger', price: 50, img: 'chicken burger.webp' },
      { name: 'Cheese Burger', price: 60, img: 'cheese burger.webp' },
      { name: 'Fish Burger', price: 65, img: 'fish burger.webp' },
      { name: 'Veg Burger', price: 55, img: 'veg burger.webp' },
      { name: 'Hamburger', price: 75, img: 'hamburger.webp' }
    ],
    Pizza: [
      { name: 'Mixed Pizza', price: 80, img: 'mixed pizza.webp' },
      { name: 'Veg Pizza', price: 60, img: 'veg pizza.webp' },
      { name: 'Margherita Pizza', price: 75, img: 'veg pizza.webp' },
      { name: 'Chicken Pizza', price: 95, img: 'chicken pizza.webp' },
      { name: 'Cheese Pizza', price: 105, img: 'cheese pizza.webp' }
    ],
    Rice: [
      { name: 'Fried Rice', price: 90, img: 'fried rice.webp' },
      { name: 'Vegetable Rice', price: 65, img: 'vegetable rice.webp' },
      { name: 'Steaming Biryani', price: 75, img: 'steaming Biryani.webp' },
      { name: 'Chicken Biryani', price: 120, img: 'chicken biryani.webp' },
      { name: 'Veg Biryani', price: 85, img: 'veg biryani.webp' }
    ],
    Sandwich: [
      { name: 'Sandwich', price: 120, img: 'sand wich.webp' },
      { name: 'Club Sandwich', price: 140, img: 'sand wich.webp' },
      { name: 'Grilled Sandwich', price: 100, img: 'sand wich.webp' },
      { name: 'Chicken Sandwich', price: 110, img: 'sand wich.webp' },
      { name: 'Tuna Sandwich', price: 130, img: 'sand wich.webp' }
    ]
  };


  return (
    <div className="dashboard-body">
      <div className="dashboard-app">
        {/* SIDEBAR */}
        <div className="dashboard-sidebar">
          <div className="dashboard-logo">▲▲▲</div>
          <ul className="dashboard-sidebar-ul">
            <li className="dashboard-sidebar-li-active">Dashboard</li>
            <li className="dashboard-sidebar-li" onClick={() => onNavigate('menu')}>Menu</li>
            <li className="dashboard-sidebar-li" onClick={() => onNavigate('orders')}>Orders</li>
            <li className="dashboard-sidebar-li" onClick={() => onNavigate('cart')}>🛒 Cart</li>
            <li className="dashboard-sidebar-li" onClick={() => onNavigate('user')}>User</li>
            <li className="dashboard-sidebar-li" onClick={() => onNavigate('home')}>Logout</li>
          </ul>
        </div>

        {/* MAIN */}
        <div className="dashboard-main">
          <div className="dashboard-header">
            <div className="dashboard-welcome">
              <h1>Welcome, {currentUser || 'Guest'}</h1>
              <p>Discover whatever you need easily.</p>
            </div>
            <div className="dashboard-search-container">
              <span className="dashboard-search-icon">🔍</span>
              <input className="dashboard-search" placeholder="Search products" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
          </div>

          <div className="dashboard-category">
            <h2>Category</h2>
            <div className="dashboard-cat-list">
              <div className={selectedCategory === 'All' ? 'dashboard-cat-active' : 'dashboard-cat'} onClick={() => setSelectedCategory('All')}>⭐ All</div>
              <div className={selectedCategory === 'Burger' ? 'dashboard-cat-active' : 'dashboard-cat'} onClick={() => setSelectedCategory('Burger')}>🍔 Burger</div>
              <div className={selectedCategory === 'Pizza' ? 'dashboard-cat-active' : 'dashboard-cat'} onClick={() => setSelectedCategory('Pizza')}>🍕 Pizza</div>
              <div className={selectedCategory === 'Rice' ? 'dashboard-cat-active' : 'dashboard-cat'} onClick={() => setSelectedCategory('Rice')}>🍚 Rice</div>
              <div className={selectedCategory === 'Sandwich' ? 'dashboard-cat-active' : 'dashboard-cat'} onClick={() => setSelectedCategory('Sandwich')}>🥪 Sandwich</div>
            </div>
          </div>

          <div className="dashboard-foods">
            <h2>Popular Dishes</h2>
            <div className="dashboard-food-grid">
              {(searchTerm ? 
                Object.values(foodItems).flat().filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase())) :
                foodItems[selectedCategory]
              ).map((item, index) => (
                  <div key={index} className="dashboard-card">
                    <img className="dashboard-card-img" src={item.img} alt={item.name} onClick={() => setShowOrderButton(showOrderButton === index ? null : index)} style={{ cursor: 'pointer' }} />
                    <p className="dashboard-card-p">{item.name}<br />Rs.{item.price}</p>
                    {showOrderButton === index && (
                      <button style={{ border: 'none', padding: '8px 30px', borderRadius: '25px', background: '#fff', cursor: 'pointer', marginTop: '10px' }} onClick={() => { addToOrder(item); setShowOrderButton(null); setShowOrderedPopup(true); setTimeout(() => setShowOrderedPopup(false), 2000); }}>Order</button>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* CURRENT ORDER */}
        <div style={{ width: '300px', background: '#fff', borderRadius: '20px', padding: '20px', display: 'flex', flexDirection: 'column', height: '100%', boxSizing: 'border-box' }}>
          <h3 style={{ marginBottom: '20px' }}>Current Order</h3>

          {/* FIRST ORDER ITEM BOX WITH IMAGE */}
          {orderItems.length > 0 && (
            <div style={{ background: '#f9f9f9', borderRadius: '15px', padding: '12px', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', marginBottom: '15px' }}>
              <img src={orderItems[0]?.img} style={{ width: '100%', height: '80px', objectFit: 'cover', borderRadius: '10px', marginBottom: '8px' }} alt="current-order" />
              <h4 style={{ margin: '6px 0', fontSize: '13px' }}>{orderItems[0]?.name}</h4>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: 'bold', fontSize: '12px' }}>Rs.{orderItems[0]?.price * orderItems[0]?.quantity}</span>
                {orderItems[0]?.quantity > 1 && (
                  <span style={{ background: '#ff9800', color: 'white', padding: '2px 8px', borderRadius: '12px', fontSize: '11px', fontWeight: 'bold' }}>+{orderItems[0]?.quantity - 1}</span>
                )}
              </div>
            </div>
          )}

          <div style={{ maxHeight: '250px', overflowY: 'auto', flex: 1 }}>
            {orderItems.length === 0 ? (
              <>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                  <div style={{ width: '50px', height: '50px', backgroundColor: '#ddd', borderRadius: '10px', marginRight: '10px' }}></div>
                  <div>No items<br /><span style={{ color: 'orange', fontSize: '14px' }}>Rs.0</span></div>
                </div>
              </>
            ) : (
              orderItems.map((item, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                  <img src={item.img} style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '10px', marginRight: '10px' }} alt={item.name} />
                  <div style={{ flex: 1 }}>
                    {item.quantity > 1 ? `${item.quantity} ${item.name}` : item.name}<br /><span style={{ color: 'orange', fontSize: '14px' }}>Rs.{item.price * item.quantity}</span>
                  </div>
                  <button onClick={() => removeFromOrder(item.name)} style={{ background: '#ff4444', color: 'white', border: 'none', borderRadius: '5px', padding: '2px 6px', cursor: 'pointer', fontSize: '12px', marginLeft: '10px' }}>×</button>
                </div>
              ))
            )}
          </div>

          {/* SUMMARY BOXES - MOVED DOWN */}
          <div style={{ marginTop: 'auto', paddingTop: '5px' }}>
            {/* SUBTOTAL AND DISCOUNT IN ONE BOX */}
            <div style={{ background: '#f3f3f3', borderRadius: '15px', padding: '20px', marginBottom: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span style={{ fontSize: '15px' }}>Sub Total</span>
                <span style={{ fontSize: '15px', fontWeight: 'bold' }}>Rs.{orderItems.reduce((total, item) => total + (item.price * item.quantity), 0)}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '15px' }}>Discount</span>
                <span style={{ fontSize: '15px', fontWeight: 'bold' }}>Rs.0</span>
              </div>
            </div>

            {/* TOTAL IN SEPARATE BOX */}
            <div style={{ background: '#f3f3f3', borderRadius: '15px', padding: '18px', marginBottom: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <b style={{ fontSize: '16px' }}>Total</b>
                <b style={{ fontSize: '16px', color: '#ff9800' }}>Rs.{orderItems.reduce((total, item) => total + (item.price * item.quantity), 0)}</b>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <button style={{ background: 'orange', color: 'white', textAlign: 'center', padding: '10px', borderRadius: '30px', cursor: 'pointer', border: 'none', flex: 1, fontSize: '15px', fontWeight: 'bold' }}>Checkout</button>
              <span style={{ fontSize: '20px', marginLeft: '10px' }}>🛒</span>
            </div>
          </div>
        </div>

        {/* Ordered Popup */}
        {showOrderedPopup && (
          <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: '#4CAF50', color: 'white', padding: '20px 30px', borderRadius: '15px', zIndex: 1000, display: 'flex', alignItems: 'center', gap: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.3)' }}>
            <span style={{ fontSize: '24px' }}>✓</span>
            <span style={{ fontSize: '16px', fontWeight: 'bold' }}>Ordered!</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;