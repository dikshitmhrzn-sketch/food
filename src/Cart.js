import React from 'react';

const Cart = ({ cartItems, onNavigate, increaseQuantity, decreaseQuantity, removeFromOrder }) => {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = 80;
  const total = subtotal - discount;

  const styles = {
    body: {
      background: '#ececec',
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
      fontFamily: 'Segoe UI, sans-serif',
      height: '100vh'
    },
    app: {
      width: 'calc(100vw - 20px)',
      height: 'calc(100vh - 20px)',
      margin: '10px',
      background: '#f7f7f7',
      borderRadius: '20px',
      display: 'flex',
      overflow: 'hidden'
    },
    sidebar: {
      width: '140px',
      padding: '30px 10px',
      background: '#fff'
    },
    logo: {
      fontSize: '22px',
      fontWeight: 700,
      color: 'orange',
      textAlign: 'center'
    },
    sidebarUl: {
      listStyle: 'none',
      marginTop: '50px',
      paddingLeft: '0'
    },
    sidebarLi: {
      padding: '12px 15px',
      marginBottom: '12px',
      borderRadius: '30px',
      cursor: 'pointer',
      background: '#fff'
    },
    sidebarLiActive: {
      background: 'orange',
      color: '#fff',
      padding: '12px 15px',
      marginBottom: '12px',
      borderRadius: '30px',
      cursor: 'pointer'
    },
    main: {
      flex: 1,
      padding: '30px 40px'
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    backButton: {
      background: 'orange',
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '30px',
      cursor: 'pointer'
    },
    order: {
      width: '300px',
      height: '100%',
      background: '#fff',
      borderRadius: '20px',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column'
    },
    orderH3: {
      marginBottom: '20px'
    },
    orderItem: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '15px'
    },
    orderItemImg: {
      width: '50px',
      height: '50px',
      borderRadius: '10px',
      marginRight: '10px'
    },
    price: {
      color: 'orange',
      fontSize: '14px'
    },
    summary: {
      marginTop: '20px',
      background: '#f3f3f3',
      borderRadius: '15px',
      padding: '15px'
    },
    summaryDiv: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '10px'
    },
    pay: {
      marginTop: '20px',
      background: 'orange',
      color: 'white',
      textAlign: 'center',
      padding: '14px',
      borderRadius: '30px',
      cursor: 'pointer',
      border: 'none',
      width: '100%'
    }
  };

  return (
    <div style={styles.body}>
      <div style={styles.app}>
        {/* SIDEBAR */}
        <div style={styles.sidebar}>
          <div style={styles.logo}>▲▲▲</div>
          <ul style={styles.sidebarUl}>
            <li style={styles.sidebarLi} onClick={() => onNavigate('dashboard')}>Dashboard</li>
            <li style={styles.sidebarLi} onClick={() => onNavigate('menu')}>Menu</li>
            <li style={styles.sidebarLi} onClick={() => onNavigate('orders')}>Orders</li>
            <li style={styles.sidebarLi} onClick={() => onNavigate('user')}>User</li>
            <li style={styles.sidebarLiActive}>Cart</li>
            <li style={styles.sidebarLi} onClick={() => onNavigate('home')}>Logout</li>
          </ul>
        </div>

        {/* MAIN */}
        <div style={styles.main}>
          <div style={styles.header}>
            <div>
              <h2>Your Cart</h2>
              <p>Review your selected items</p>
            </div>
            <button style={styles.backButton} onClick={() => onNavigate('dashboard')}>Back to Dashboard</button>
          </div>

          <div style={{ marginTop: '40px' }}>
            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <div>
                {cartItems.map((item) => (
                  <div key={item.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', background: '#fff', padding: '15px', borderRadius: '10px' }}>
                    <img style={{ width: '80px', height: '80px', borderRadius: '10px', marginRight: '15px' }} src={item.img} alt={item.name} />
                    <div style={{ flex: 1 }}>
                      <h4>{item.name}</h4>
                      <p style={{ color: 'orange', fontWeight: 'bold' }}>Rs. {item.price}</p>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <button onClick={() => decreaseQuantity(item.name)} style={{ background: 'orange', color: 'white', border: 'none', borderRadius: '5px', padding: '5px 10px', cursor: 'pointer' }}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => increaseQuantity(item.name)} style={{ background: 'orange', color: 'white', border: 'none', borderRadius: '5px', padding: '5px 10px', cursor: 'pointer' }}>+</button>
                        <button onClick={() => removeFromOrder(item.name)} style={{ background: 'red', color: 'white', border: 'none', borderRadius: '5px', padding: '5px 10px', cursor: 'pointer' }}>Remove</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ORDER SUMMARY */}
        <div style={styles.order}>
          <h3 style={styles.orderH3}>Order Summary</h3>
          <div style={{ flex: 1, overflowY: 'auto' }}>
            {cartItems.map((item) => (
              <div key={item.id} style={styles.orderItem}>
                <button
                  onClick={() => increaseQuantity(item.name)}
                  style={{
                    background: 'orange',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '8px 16px',
                    fontSize: '12px',
                    cursor: 'pointer',
                    marginRight: '10px'
                  }}
                >
                  +
                </button>
                <img style={styles.orderItemImg} src={item.img} />
                <div style={{flex: 1}}>
                  {item.name} x{item.quantity}<br /><span style={styles.price}>Rs.{item.price * item.quantity}</span>
                </div>
              </div>
            ))}
          </div>
          <div style={styles.summary}>
            <div style={styles.summaryDiv}>
              <span>Sub Total</span>
              <span>Rs.{subtotal}</span>
            </div>
            <div style={styles.summaryDiv}>
              <span>Discount</span>
              <span>Rs.{discount}</span>
            </div>
            <div style={styles.summaryDiv}>
              <b>Total</b>
              <b>Rs.{total}</b>
            </div>
          </div>
          <button style={styles.pay}>Continue to Payment</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
