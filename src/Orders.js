import React, { useState, useEffect } from 'react';

const Orders = ({ onNavigate, orderItems, currentUser }) => {
  const [visibleActiveOrders, setVisibleActiveOrders] = useState([]);
  const [readyOrders, setReadyOrders] = useState({});
  const [orderStatus, setOrderStatus] = useState('preparing');

  useEffect(() => {
    if (orderItems && orderItems.length > 0 && visibleActiveOrders.length === 0) {
      setVisibleActiveOrders([orderItems[0]]);
    }
  }, [orderItems, visibleActiveOrders.length]);

  const handleRefresh = () => {
    if (orderItems) {
      setVisibleActiveOrders([...orderItems]);
    }
  };

  const markAsReady = () => {
    if (orderItems && orderItems.length > 0) {
      const readyIndex = Object.keys(readyOrders).length;
      if (readyIndex < orderItems.length) {
        setReadyOrders({ ...readyOrders, [orderItems[readyIndex].id]: true });
      }
    }
  };

  // Filter out ready orders for display
  const pendingOrders = orderItems ? orderItems.filter(item => !readyOrders[item.id]) : [];

  return (
    <div style={{ background: '#f4f3f1', display: 'flex', height: '100vh', margin: 0, padding: 0, boxSizing: 'border-box', fontFamily: 'Segoe UI, sans-serif' }}>
      
      {/* SIDEBAR */}
      <div style={{ width: '140px', background: '#ffffff', padding: '20px 10px', marginLeft: '10px' }}>
        <div style={{ fontSize: '22px', fontWeight: 700, color: 'orange', textAlign: 'center', marginBottom: '30px' }}>▲▲▲</div>

        <div>
          <div style={{ padding: '12px 18px', borderRadius: '25px', marginBottom: '12px', cursor: 'pointer', textAlign: 'center' }} onClick={() => onNavigate('dashboard')}>Dashboard</div>
          <div style={{ padding: '12px 18px', borderRadius: '25px', marginBottom: '12px', cursor: 'pointer', textAlign: 'center' }} onClick={() => onNavigate('menu')}>Menu</div>
          <div style={{ padding: '12px 18px', borderRadius: '25px', marginBottom: '12px', cursor: 'pointer', background: '#ff7a00', color: '#fff', textAlign: 'center' }}>Orders</div>
          <div style={{ padding: '12px 18px', borderRadius: '25px', marginBottom: '12px', cursor: 'pointer', textAlign: 'center' }} onClick={() => onNavigate('user')}>User</div>
          <div style={{ padding: '12px 18px', borderRadius: '25px', marginBottom: '12px', cursor: 'pointer', textAlign: 'center' }} onClick={() => onNavigate('home')}>Logout</div>
        </div>
      </div>

      {/* MAIN */}
      <div style={{ flex: 1, padding: '35px 45px', display: 'flex', flexDirection: 'column' }}>
        
        {/* HEADER */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <div>
            <h2 style={{ fontSize: '28px', fontWeight: 'bold', margin: 0 }}>Order Name</h2>
            <p style={{ fontSize: '16px', color: '#666', margin: '5px 0 0 0' }}>{currentUser || 'Guest'}</p>
          </div>
          <button style={{ background: '#ff7a00', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '25px', cursor: 'pointer' }} onClick={handleRefresh}>Refresh List</button>
        </div>

        {/* CONTENT WRAPPER */}
        <div style={{ display: 'flex', gap: '30px', flex: 1 }}>
          {/* LEFT SECTION - ORDERS TABLE */}
          <div style={{ flex: 1, overflowY: 'auto' }}>
            {/* TABLE HEADER */}
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', fontWeight: '500', marginBottom: '12px', marginLeft: '50px' }}>
              <div>Order Name</div>
              <div style={{ textAlign: 'center' }}>Customer Name</div>
              <div style={{ textAlign: 'center' }}>Time Status</div>
            </div>

            {/* ORDER ROWS */}
            {/* Show all pending orders */}
            {pendingOrders && pendingOrders.length > 0 ? (
              pendingOrders.map((item, index) => (
                <div key={item.id} style={{ background: '#fff', borderRadius: '30px', padding: '18px 25px', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', alignItems: 'center', marginBottom: '15px', marginLeft: '20px' }}>
                  <div style={{ textAlign: 'left' }}>{item.name}</div>
                  <div style={{ textAlign: 'center' }}>{currentUser || 'Guest'}</div>
                  <div style={{ textAlign: 'center' }}>{new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</div>
                </div>
              ))
            ) : null}
            
            {/* Message when no pending orders */}
            {(!pendingOrders || pendingOrders.length === 0) && (
              <div style={{ background: '#fff', borderRadius: '30px', padding: '18px 25px', textAlign: 'center', marginBottom: '40px', marginLeft: '20px' }}>
                No orders pending
              </div>
            )}

            {/* ACTIVE ORDERS */}
            <div style={{ marginBottom: '20px' }}>
              <h3 style={{ fontSize: '24px', fontWeight: 'bold' }}>Order Name</h3>
            </div>

            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
              {/* Show all pending orders as thumbnails */}
              {pendingOrders && pendingOrders.length > 0 ? (
                pendingOrders.map((item, index) => (
                  <div key={item.id} style={{ textAlign: 'center' }}>
                    <img src={item.img} style={{ width: '110px', height: '110px', objectFit: 'cover', borderRadius: '20px' }} alt={item.name} />
                    <p style={{ fontSize: '14px', fontWeight: 'bold', marginTop: '5px' }}>{item.name}</p>
                  </div>
                ))
              ) : (
                <p>No pending orders</p>
              )}
            </div>
          </div>

          {/* RIGHT SECTION - YOUR CURRENT ORDER BOX */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', marginBottom: '20px' }}>
            <div style={{ width: '280px', background: '#fff', borderRadius: '20px', padding: '20px', textAlign: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
              <h3>📦 Current Order</h3>
              {pendingOrders && pendingOrders.length > 0 ? (
                <div>
                  <img src={pendingOrders[0]?.img} style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '12px', marginBottom: '12px' }} alt="order-item" />
                  <h4>{pendingOrders[0]?.name}</h4>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button onClick={() => setOrderStatus('preparing')} style={{ background: orderStatus === 'preparing' ? '#ff9800' : '#e0e0e0', border: 'none', padding: '10px 15px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>🍳 Preparing</button>
                    <button onClick={() => { setOrderStatus('ready'); setTimeout(() => { markAsReady(); setOrderStatus('preparing'); }, 1000); }} style={{ background: orderStatus === 'ready' ? '#4CAF50' : '#e0e0e0', border: 'none', padding: '10px 15px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>✓ Ready</button>
                  </div>
                </div>
              ) : (
                <p>No current orders</p>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Orders;