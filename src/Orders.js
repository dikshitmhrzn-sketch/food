import React, { useState, useEffect } from 'react';

const Orders = ({ onNavigate, orderItems, currentUser }) => {
  const [visibleActiveOrders, setVisibleActiveOrders] = useState([]);

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
      <div style={{ flex: 1, padding: '35px 45px' }}>
        
        {/* HEADER */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <div>
            <h2 style={{ fontSize: '28px', fontWeight: 'bold', margin: 0 }}>Order Name</h2>
            <p style={{ fontSize: '16px', color: '#666', margin: '5px 0 0 0' }}>{currentUser || 'Guest'}</p>
          </div>
          <button style={{ background: '#ff7a00', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '25px', cursor: 'pointer' }} onClick={handleRefresh}>Refresh List</button>
        </div>

        {/* TABLE HEADER */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', fontWeight: '500', marginBottom: '12px', marginLeft: '50px' }}>
          <div>Order Name</div>
          <div style={{ textAlign: 'center' }}>Customer Name</div>
          <div style={{ textAlign: 'center' }}>Time Status</div>
        </div>

        {/* ORDER ROWS */}
        {/* Show all orders */}
        {orderItems && orderItems.length > 0 ? (
          orderItems.map((item, index) => (
            <div key={item.id} style={{ background: '#fff', borderRadius: '30px', padding: '18px 25px', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', alignItems: 'center', marginBottom: '15px', marginLeft: '20px' }}>
              <div style={{ textAlign: 'left' }}>{item.name}</div>
              <div style={{ textAlign: 'center' }}>{currentUser || 'Guest'}</div>
              <div style={{ textAlign: 'center' }}>{new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</div>
            </div>
          ))
        ) : null}
        
        {/* Message when no orders */}
        {(!orderItems || orderItems.length === 0) && (
          <div style={{ background: '#fff', borderRadius: '30px', padding: '18px 25px', textAlign: 'center', marginBottom: '40px', marginLeft: '20px' }}>
            No orders placed yet
          </div>
        )}

        {/* ACTIVE ORDERS */}
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ fontSize: '24px', fontWeight: 'bold' }}>Order Name</h3>
        </div>

        <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
          {/* Show all active orders */}
          {orderItems && orderItems.length > 0 ? (
            orderItems.map((item, index) => (
              <div key={item.id} style={{ textAlign: 'center' }}>
                <img src={item.img} style={{ width: '110px', height: '110px', objectFit: 'cover', borderRadius: '20px' }} alt={item.name} />
                <p style={{ fontSize: '14px', fontWeight: 'bold', marginTop: '5px' }}>{item.name}</p>
              </div>
            ))
          ) : (
            <p>No active orders</p>
          )}
        </div>

      </div>
    </div>
  );
};

export default Orders;