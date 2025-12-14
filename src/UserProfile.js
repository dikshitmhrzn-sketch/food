import React, { useState } from 'react';

const UserProfile = ({ onNavigate, orderItems, currentUser, addToOrder, updateUser }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState(currentUser ? currentUser.split(' ')[0] : 'John');
  const [lastName, setLastName] = useState(currentUser ? currentUser.split(' ')[1] || 'S' : 'S');
  const [email, setEmail] = useState('');
  const [showSaveMessage, setShowSaveMessage] = useState(false);
  const [readyOrders, setReadyOrders] = useState({});
  const [orderStatus, setOrderStatus] = useState('preparing');

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    setShowSaveMessage(true);
    const fullName = `${firstName} ${lastName}`;
    updateUser(fullName);
    setTimeout(() => {
      setShowSaveMessage(false);
    }, 3000);
  };
  return (
    <div style={{ background: '#ececec', margin: 0, padding: 0, boxSizing: 'border-box', fontFamily: 'Segoe UI, sans-serif', height: '100vh' }}>
      <div style={{ width: 'calc(100vw - 20px)', height: 'calc(100vh - 20px)', background: '#f7f7f7', margin: '10px', borderRadius: '20px', display: 'flex', overflow: 'hidden' }}>
        
        {/* SIDEBAR */}
        <div style={{ width: '140px', background: '#fff', padding: '20px 10px' }}>
          <div style={{ fontSize: '22px', fontWeight: 700, color: 'orange', marginBottom: '50px', textAlign: 'center' }}>▲▲▲</div>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            <li style={{ padding: '12px 20px', marginBottom: '15px', borderRadius: '30px', cursor: 'pointer', textAlign: 'center' }} onClick={() => onNavigate('dashboard')}>Dashboard</li>
            <li style={{ padding: '12px 20px', marginBottom: '15px', borderRadius: '30px', cursor: 'pointer', textAlign: 'center' }}>Menu</li>
            <li style={{ padding: '12px 20px', marginBottom: '15px', borderRadius: '30px', cursor: 'pointer', textAlign: 'center' }} onClick={() => onNavigate('orders')}>Orders</li>
            <li style={{ padding: '12px 20px', marginBottom: '15px', borderRadius: '30px', cursor: 'pointer', background: 'orange', color: '#fff', textAlign: 'center' }}>User</li>
            <li style={{ padding: '12px 20px', marginBottom: '15px', borderRadius: '30px', cursor: 'pointer', textAlign: 'center' }} onClick={() => onNavigate('home')}>Logout</li>
          </ul>
        </div>

        {/* MAIN */}
        <div style={{ flex: 1, padding: '40px 50px', position: 'relative' }}>
          
          {/* Save Message */}
          {showSaveMessage && (
            <div style={{
              position: 'fixed',
              top: '20px',
              right: '20px',
              background: '#4CAF50',
              color: 'white',
              padding: '15px 25px',
              borderRadius: '10px',
              zIndex: 1000,
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
            }}>
              Changes saved successfully!
            </div>
          )}
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2>Welcome {firstName} {lastName}</h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <span>Profile</span>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' }}>💀</div>
              <button 
                onClick={handleEdit}
                style={{ padding: '8px 25px', borderRadius: '30px', border: 'none', cursor: 'pointer', fontSize: '14px', background: '#ff7a00', color: '#fff' }}
              >
                Edit
              </button>
              <button 
                onClick={handleSave}
                style={{ padding: '8px 25px', borderRadius: '30px', border: 'none', cursor: 'pointer', fontSize: '14px', background: '#ff7a00', color: '#fff', marginLeft: '10px' }}
              >
                Save
              </button>
            </div>
          </div>

          {/* FORM */}
          <div style={{ marginTop: '40px', width: '500px' }}>
            <div style={{ marginBottom: '25px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '15px' }}>First Name</label>
              <input 
                type="text" 
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                disabled={!isEditing}
                style={{ 
                  width: '100%', 
                  padding: '12px 18px', 
                  borderRadius: '30px', 
                  border: 'none', 
                  background: isEditing ? '#fff' : '#e1e1e1', 
                  outline: 'none',
                  cursor: isEditing ? 'text' : 'not-allowed'
                }} 
              />
            </div>

            <div style={{ marginBottom: '25px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '15px' }}>Last Name</label>
              <input 
                type="text" 
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                disabled={!isEditing}
                style={{ 
                  width: '100%', 
                  padding: '12px 18px', 
                  borderRadius: '30px', 
                  border: 'none', 
                  background: isEditing ? '#fff' : '#e1e1e1', 
                  outline: 'none',
                  cursor: isEditing ? 'text' : 'not-allowed'
                }} 
              />
            </div>

            <div style={{ marginBottom: '25px' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '15px' }}>Email</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={!isEditing}
                style={{ 
                  width: '100%', 
                  padding: '12px 18px', 
                  borderRadius: '30px', 
                  border: 'none', 
                  background: isEditing ? '#fff' : '#e1e1e1', 
                  outline: 'none',
                  cursor: isEditing ? 'text' : 'not-allowed'
                }} 
              />
            </div>
          </div>

          {/* ORDER SECTION */}
          <div style={{ position: 'absolute', right: '100px', bottom: '80px', display: 'flex', gap: '30px' }}>

            <div style={{ width: '280px', background: '#fff', borderRadius: '20px', padding: '20px', textAlign: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
              <h3 style={{ marginBottom: '15px', fontWeight: 600, fontSize: '15px' }}>📦 Current Order</h3>
              {orderItems && orderItems.length > 0 && Object.keys(readyOrders).length < orderItems.length ? (
                <div>
                  {Object.keys(readyOrders).map(id => readyOrders[id]).filter(Boolean).length < orderItems.length && (
                    <>
                      <img 
                        src={orderItems[Object.keys(readyOrders).length]?.img} 
                        alt={orderItems[Object.keys(readyOrders).length]?.name}
                        style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '12px', marginBottom: '12px' }}
                      />
                      <h4 style={{ margin: '10px 0', fontSize: '14px', fontWeight: 'bold' }}>{orderItems[Object.keys(readyOrders).length]?.name}</h4>
                      <p style={{ margin: '5px 0', fontSize: '12px', color: '#666' }}>Qty: {orderItems[Object.keys(readyOrders).length]?.quantity}</p>
                      
                      <div style={{ marginTop: '15px', marginBottom: '12px' }}>
                        <p style={{ margin: '0 0 10px 0', fontSize: '11px', fontWeight: 'bold', textAlign: 'center' }}>Order Status</p>
                        <div style={{ display: 'flex', gap: '8px' }}>
                          <button 
                            onClick={() => setOrderStatus('preparing')}
                            style={{
                              flex: 1,
                              padding: '8px 10px',
                              background: orderStatus === 'preparing' ? '#ff9800' : '#e0e0e0',
                              color: orderStatus === 'preparing' ? '#fff' : '#666',
                              border: 'none',
                              borderRadius: '8px',
                              cursor: 'pointer',
                              fontSize: '11px',
                              fontWeight: 'bold'
                            }}
                          >
                            🍳 Preparing
                          </button>
                          <button
                            onClick={() => {
                              setOrderStatus('ready');
                              setTimeout(() => {
                                const currentItem = orderItems[Object.keys(readyOrders).length];
                                setReadyOrders(prev => ({
                                  ...prev,
                                  [currentItem.id]: true
                                }));
                                setOrderStatus('preparing');
                              }, 1000);
                            }}
                            style={{
                              flex: 1,
                              padding: '8px 10px',
                              background: orderStatus === 'ready' ? '#4CAF50' : '#e0e0e0',
                              color: orderStatus === 'ready' ? '#fff' : '#666',
                              border: 'none',
                              borderRadius: '8px',
                              cursor: 'pointer',
                              fontSize: '11px',
                              fontWeight: 'bold'
                            }}
                          >
                            ✓ Ready
                          </button>
                        </div>
                      </div>
                      
                      <div style={{
                        background: orderStatus === 'preparing' ? '#fff3e0' : '#e8f5e9',
                        padding: '10px',
                        borderRadius: '10px',
                        fontSize: '11px',
                        color: orderStatus === 'preparing' ? '#f57c00' : '#2e7d32',
                        fontWeight: 'bold'
                      }}>
                        {orderStatus === 'preparing' ? '⏱️ Preparing...' : '✅ Ready for pickup!'}
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <p style={{ fontSize: '12px', color: '#999', marginTop: '20px' }}>No current orders</p>
              )}
            </div>

            <div style={{ width: '320px', background: '#fff', borderRadius: '25px', padding: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '15px' }}>
                <button 
                  style={{ padding: '8px 18px', border: 'none', borderRadius: '30px', background: '#ff7a00', color: '#fff', fontSize: '12px', cursor: 'pointer' }}
                  onClick={() => onNavigate('menu')}
                >
                  Add Orders
                </button>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                {orderItems && orderItems.length > 0 ? (
                  orderItems.slice(0, 2).map((item, index) => (
                    <div key={item.id} style={{ textAlign: 'center' }}>
                      <img src={item.img} style={{ width: '120px', height: '120px', borderRadius: '15px', objectFit: 'cover' }} alt={item.name} />
                      <p style={{ marginTop: '8px', fontSize: '13px' }}>{item.name}</p>
                    </div>
                  ))
                ) : (
                  <div style={{ textAlign: 'center', width: '100%' }}>
                    <p>No orders to display</p>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;