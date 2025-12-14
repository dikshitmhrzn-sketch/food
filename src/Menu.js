import React, { useState } from 'react';

const Menu = ({ onNavigate, orderItems, addToOrder, removeFromOrder }) => {
  const [selectedCategory, setSelectedCategory] = useState('Show All');
  const [searchTerm, setSearchTerm] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);
  const [reportMessage, setReportMessage] = useState('');
  const [showOrderedPopup, setShowOrderedPopup] = useState(false);

  const handleReport = () => {
    setShowDropdown(false);
    setShowReportModal(true);
  };

  const submitReport = () => {
    if (reportMessage.trim()) {
      alert(`Report submitted: ${reportMessage}`);
      setReportMessage('');
      setShowReportModal(false);
    } else {
      alert('Please enter a message');
    }
  };

  const allItems = [
    { name: 'Chicken Burger', price: 50, category: 'Burger', img: 'chicken burger.webp' },
    { name: 'Mixed Pizza', price: 80, category: 'Pizza', img: 'mixed pizza.webp' },
    { name: 'Cucumber Salad', price: 200, category: 'Show All' },
    { name: 'Onion Rings', price: 30, category: 'Show All' },
    { name: 'Sandwich', price: 120, category: 'Sandwich' },
    { name: 'Fried Rice', price: 90, category: 'Rice', img: 'fried rice.webp' },
    { name: 'Pasta', price: 110, category: 'Show All' },
    { name: 'Noodles', price: 85, category: 'Show All' },
    { name: 'Mixed Rice', price: 70, category: 'Rice', img: 'mixed rice.webp' },
    { name: 'Chicken Biryani', price: 120, category: 'Rice', img: 'chicken biryani.webp' },
    { name: 'Vegetable Rice', price: 65, category: 'Rice', img: 'vegetable rice.webp' },
    { name: 'Steaming Biryani', price: 75, category: 'Rice', img: 'steaming Biryani.webp' },
    { name: 'Veg Biryani', price: 85, category: 'Rice', img: 'veg biryani.webp' },
    { name: 'Margherita Pizza', price: 75, category: 'Pizza', img: 'veg pizza.webp' },
    { name: 'Chicken Pizza', price: 95, category: 'Pizza', img: 'chicken pizza.webp' },
    { name: 'Cheese Pizza', price: 70, category: 'Pizza', img: 'cheese pizza.webp' },
    { name: 'BBQ Pizza', price: 105, category: 'Pizza', img: 'bbq chicken pizza.webp' },

    { name: 'Cucumber Salad', price: 200, category: 'Salads', img: 'cucumber salad.webp' },
    { name: 'Green Salad', price: 80, category: 'Salads', img: 'green salad.webp' },
    { name: 'Chicken Salad', price: 100, category: 'Salads', img: 'chicken salad.webp' },
    { name: 'Chopped Salad', price: 30, category: 'Salads', img: 'choppped salad.webp' },
    { name: 'Caesar Salad', price: 90, category: 'Salads', img: 'caeser salad.webp' },
    { name: 'Cheese Burger', price: 60, category: 'Burger', img: 'cheese burger.webp' },
    { name: 'Fish Burger', price: 65, category: 'Burger', img: 'fish burger.webp' },
    { name: 'Veg Burger', price: 55, category: 'Burger', img: 'veg burger.webp' },
    { name: 'Hamburger', price: 75, category: 'Burger', img: 'hamburger.webp' },
    { name: 'Club Sandwich', price: 140, category: 'Sandwich' },
    { name: 'Grilled Sandwich', price: 100, category: 'Sandwich' },
    { name: 'Chicken Sandwich', price: 110, category: 'Sandwich' }
  ];

  const showAllItems = [
    { name: 'Chicken Burger', price: 50, img: 'chicken burger.webp' },
    { name: 'Veg Pizza', price: 80, img: 'veg pizza.webp' },
    { name: 'Cucumber Salad', price: 200, img: 'cucumber salad.webp' },
    { name: 'Onion Rings', price: 30, img: 'onion.webp' },
    { name: 'Sandwich', price: 120, img: 'sand wich.webp' },
    { name: 'Fried Rice', price: 90, img: 'fried rice.webp' },
    { name: 'Pasta', price: 110, img: 'pasta.webp' },
    { name: 'Noodles', price: 85, img: 'Noodles.webp' }
  ];

  const getFilteredItems = () => {
    let filtered;
    
    if (selectedCategory === 'Show All') {
      filtered = showAllItems;
    } else {
      filtered = allItems.filter(item => item.category === selectedCategory);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return filtered;
  };

  const calculateTotal = () => {
    return orderItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div style={{ background: '#f5f4f2', display: 'flex', height: '100vh', margin: 0, padding: 0, boxSizing: 'border-box', fontFamily: 'Segoe UI, sans-serif' }}>
      
      {/* SIDEBAR */}
      <div style={{ width: '140px', background: '#ffffff', padding: '20px 10px', marginLeft: '10px' }}>
        <div style={{ fontSize: '22px', fontWeight: 700, color: 'orange', textAlign: 'center', marginBottom: '30px' }}>▲▲▲</div>
        <div style={{ padding: '12px 15px', borderRadius: '30px', marginBottom: '12px', cursor: 'pointer', background: '#fff', textAlign: 'center' }} onClick={() => onNavigate('dashboard')}>Dashboard</div>
        <div style={{ padding: '12px 15px', borderRadius: '30px', marginBottom: '12px', cursor: 'pointer', background: 'orange', color: '#fff', textAlign: 'center' }}>Menu</div>
        <div style={{ padding: '12px 15px', borderRadius: '30px', marginBottom: '12px', cursor: 'pointer', background: '#fff', textAlign: 'center' }} onClick={() => onNavigate('orders')}>Orders</div>
        <div style={{ padding: '12px 15px', borderRadius: '30px', marginBottom: '12px', cursor: 'pointer', background: '#fff', textAlign: 'center' }} onClick={() => onNavigate('user')}>User</div>
        <div style={{ padding: '12px 15px', borderRadius: '30px', marginBottom: '12px', cursor: 'pointer', background: '#fff', textAlign: 'center' }} onClick={() => onNavigate('home')}>Logout</div>
      </div>

      {/* MAIN */}
      <div style={{ flex: 1, padding: '30px 40px' }}>
        
        {/* TOP BAR */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
          <div style={{ position: 'relative', marginLeft: '80px' }}>
            <input style={{ width: '650px', padding: '12px 18px 12px 45px', borderRadius: '30px', border: 'none', outline: 'none', background: '#fff' }} type="text" placeholder="Search products" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            <div style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: '#666' }}>🔍</div>
          </div>
          <div style={{ marginRight: '50px', position: 'relative' }}>
            <button 
              style={{ border: 'none', padding: '10px 18px', borderRadius: '25px', cursor: 'pointer', background: '#fff', marginRight: '10px', fontSize: '18px', color: '#000' }}
              onClick={() => setShowDropdown(!showDropdown)}
            >
              ⚙️
            </button>
            {showDropdown && (
              <div style={{ position: 'absolute', top: '45px', left: '0', background: '#fff', border: '1px solid #ddd', borderRadius: '10px', padding: '10px', zIndex: 1000, minWidth: '120px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <button 
                  style={{ border: 'none', background: 'transparent', cursor: 'pointer', padding: '8px 12px', width: '100%', textAlign: 'left', borderRadius: '5px' }}
                  onClick={handleReport}
                  onMouseEnter={(e) => e.target.style.background = '#f5f5f5'}
                  onMouseLeave={(e) => e.target.style.background = 'transparent'}
                >
                  Report
                </button>
              </div>
            )}
            <button style={{ border: 'none', padding: '10px 18px', borderRadius: '25px', cursor: 'pointer', background: '#ff7a00', color: '#fff' }}>Add Items</button>
          </div>
        </div>

        {/* CATEGORIES */}
        <div style={{ marginBottom: '30px', marginTop: '60px', marginLeft: '80px' }}>
          <span 
            style={{ display: 'inline-block', padding: '10px 22px', borderRadius: '25px', background: selectedCategory === 'Show All' ? '#ff7a00' : '#fff', color: selectedCategory === 'Show All' ? '#fff' : '#000', marginRight: '10px', cursor: 'pointer' }}
            onClick={() => setSelectedCategory('Show All')}
          >
            Show All
          </span>
          <span 
            style={{ display: 'inline-block', padding: '10px 22px', borderRadius: '25px', background: selectedCategory === 'Rice' ? '#ff7a00' : '#fff', color: selectedCategory === 'Rice' ? '#fff' : '#000', marginRight: '10px', cursor: 'pointer' }}
            onClick={() => setSelectedCategory('Rice')}
          >
            Rice
          </span>
          <span 
            style={{ display: 'inline-block', padding: '10px 22px', borderRadius: '25px', background: selectedCategory === 'Salads' ? '#ff7a00' : '#fff', color: selectedCategory === 'Salads' ? '#fff' : '#000', marginRight: '10px', cursor: 'pointer' }}
            onClick={() => setSelectedCategory('Salads')}
          >
            Salads
          </span>
          <span 
            style={{ display: 'inline-block', padding: '10px 22px', borderRadius: '25px', background: selectedCategory === 'Pizza' ? '#ff7a00' : '#fff', color: selectedCategory === 'Pizza' ? '#fff' : '#000', marginRight: '10px', cursor: 'pointer' }}
            onClick={() => setSelectedCategory('Pizza')}
          >
            Pizza
          </span>
          <span 
            style={{ display: 'inline-block', padding: '10px 22px', borderRadius: '25px', background: selectedCategory === 'Burger' ? '#ff7a00' : '#fff', color: selectedCategory === 'Burger' ? '#fff' : '#000', marginRight: '10px', cursor: 'pointer' }}
            onClick={() => setSelectedCategory('Burger')}
          >
            Burger
          </span>
          <span 
            style={{ display: 'inline-block', padding: '10px 22px', borderRadius: '25px', background: selectedCategory === 'Sandwich' ? '#ff7a00' : '#fff', color: selectedCategory === 'Sandwich' ? '#fff' : '#000', marginRight: '10px', cursor: 'pointer' }}
            onClick={() => setSelectedCategory('Sandwich')}
          >
            Sandwich
          </span>
        </div>

        {/* PRODUCTS */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px', marginTop: '80px', marginLeft: '20px' }}>
          {getFilteredItems().map((item, index) => (
            <div key={index} style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: index >= 4 ? '30px' : '0' }}>
              {item.img ? (
                <img src={item.img} style={{ width: '100px', height: '100px', borderRadius: '15px', marginBottom: '8px', objectFit: 'cover' }} alt={item.name} />
              ) : (
                <div style={{ width: '100px', height: '100px', backgroundColor: '#f0f0f0', borderRadius: '15px', marginBottom: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#999' }}>Image</div>
              )}
              <h4 style={{ fontSize: '14px', marginBottom: '4px', textAlign: 'center', width: '100%' }}>{item.name}</h4>
              <p style={{ fontSize: '13px', color: '#666', marginBottom: '10px' }}>Rs:{item.price}</p>
              <button style={{ border: 'none', padding: '8px 30px', borderRadius: '25px', background: '#fff', cursor: 'pointer' }} onClick={() => { addToOrder(item); setShowOrderedPopup(true); setTimeout(() => setShowOrderedPopup(false), 2000); }}>Order</button>
            </div>
          ))}
        </div>
      </div>

      {/* CURRENT ORDER */}
      <div style={{ width: '300px', background: '#fff', borderRadius: '20px', padding: '20px' }}>
        <h3 style={{ marginBottom: '20px' }}>Current Order</h3>
        
        <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
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
                <div style={{ width: '50px', height: '50px', backgroundColor: '#ddd', borderRadius: '10px', marginRight: '10px' }}></div>
                <div style={{ flex: 1 }}>
                  {item.quantity > 1 ? `${item.quantity} ${item.name}` : item.name}<br /><span style={{ color: 'orange', fontSize: '14px' }}>Rs.{item.price}</span>
                </div>
                <button onClick={() => removeFromOrder(item.name)} style={{ background: '#ff4444', color: 'white', border: 'none', borderRadius: '5px', padding: '2px 6px', cursor: 'pointer', fontSize: '12px', marginLeft: '10px' }}>×</button>
              </div>
            ))
          )}
        </div>

        {/* SEPARATE SUMMARY BOXES */}
        <div style={{ marginTop: '20px' }}>
          <div style={{ background: '#f3f3f3', borderRadius: '15px', padding: '15px', marginBottom: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Sub Total</span>
              <span>{calculateTotal()}</span>
            </div>
          </div>
          <div style={{ background: '#f3f3f3', borderRadius: '15px', padding: '15px', marginBottom: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Discount</span>
              <span>Rs.0</span>
            </div>
          </div>
          <div style={{ background: '#f3f3f3', borderRadius: '15px', padding: '15px', marginBottom: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <b>Total</b>
              <b>{calculateTotal()}</b>
            </div>
          </div>
        </div>

        <button style={{ marginTop: '15px', background: 'orange', color: 'white', textAlign: 'center', padding: '14px', borderRadius: '30px', cursor: 'pointer', border: 'none', width: '100%' }}>Continue to Payment</button>
      </div>

      {/* Report Modal */}
      {showReportModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2000 }}>
          <div style={{ background: '#fff', padding: '30px', borderRadius: '15px', width: '400px', maxWidth: '90%' }}>
            <h3 style={{ marginBottom: '20px', textAlign: 'center' }}>Submit Report</h3>
            <textarea
              value={reportMessage}
              onChange={(e) => setReportMessage(e.target.value)}
              placeholder="Enter your report message..."
              style={{ width: '100%', height: '120px', padding: '10px', border: '1px solid #ddd', borderRadius: '8px', resize: 'none', outline: 'none' }}
            ></textarea>
            <div style={{ display: 'flex', gap: '10px', marginTop: '20px', justifyContent: 'center' }}>
              <button 
                onClick={() => setShowReportModal(false)}
                style={{ padding: '10px 20px', border: '1px solid #ddd', borderRadius: '8px', background: '#fff', cursor: 'pointer' }}
              >
                Cancel
              </button>
              <button 
                onClick={submitReport}
                style={{ padding: '10px 20px', border: 'none', borderRadius: '8px', background: '#ff7a00', color: '#fff', cursor: 'pointer' }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Ordered Popup */}
      {showOrderedPopup && (
        <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: '#4CAF50', color: 'white', padding: '20px 30px', borderRadius: '15px', zIndex: 1000, display: 'flex', alignItems: 'center', gap: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.3)' }}>
          <span style={{ fontSize: '24px' }}>✓</span>
          <span style={{ fontSize: '16px', fontWeight: 'bold' }}>Ordered!</span>
        </div>
      )}
    </div>
  );
};

export default Menu;