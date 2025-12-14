import React, { useState } from 'react';

export default function Register({ onBackToHome, onGoToLogin, onRegisterSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    password: '',
    email: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.address && formData.phone && formData.password && formData.email) {
      onRegisterSuccess();
    }
  };

  const styles = {
    body: {
      margin: 0,
      minHeight: '100vh',
      background: '#f5f5f5',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '"Segoe UI", sans-serif'
    },
    container: {
      width: '1100px',
      height: '700px',
      display: 'flex',
      background: '#fff',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
    },
    imageSection: {
      flex: 1,
      backgroundImage: 'url("back ground.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    },
    registerSection: {
      flex: 1,
      background: '#fdfdfd',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    registerBox: {
      width: '380px',
      background: '#ffffff',
      borderRadius: '25px',
      padding: '25px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
      textAlign: 'center'
    },
    h2: {
      marginBottom: '20px',
      fontWeight: 500,
      color: '#333',
      letterSpacing: '2px'
    },
    inputGroup: {
      textAlign: 'left',
      marginBottom: '12px'
    },
    label: {
      display: 'block',
      marginBottom: '8px',
      fontSize: '14px',
      color: '#555'
    },
    input: {
      width: '100%',
      padding: '10px 15px',
      borderRadius: '30px',
      border: '1px solid #ddd',
      outline: 'none',
      fontSize: '14px',
      boxSizing: 'border-box'
    },
    registerBtn: {
      width: '100%',
      padding: '10px',
      background: '#ff7a00',
      color: '#fff',
      border: 'none',
      borderRadius: '30px',
      fontSize: '16px',
      cursor: 'pointer',
      margin: '15px 0 10px 0',
      transition: 'background 0.3s'
    },
    loginText: {
      fontSize: '13px',
      color: '#555'
    },
    link: {
      color: '#ff7a00',
      textDecoration: 'none',
      marginLeft: '5px',
      cursor: 'pointer'
    }
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <div style={styles.imageSection}></div>
        <div style={styles.registerSection}>
          <div style={styles.registerBox}>
            <h2 style={styles.h2}>REGISTER</h2>
            <form onSubmit={handleSubmit}>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Name:</label>
                <input 
                  type="text" 
                  placeholder="Enter your name"
                  style={styles.input}
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  onFocus={(e) => e.target.style.borderColor = '#ff7a00'}
                  onBlur={(e) => e.target.style.borderColor = '#ddd'}
                  required
                />
              </div>

              <div style={styles.inputGroup}>
                <label style={styles.label}>Address:</label>
                <input 
                  type="text" 
                  placeholder="Enter your address"
                  style={styles.input}
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  onFocus={(e) => e.target.style.borderColor = '#ff7a00'}
                  onBlur={(e) => e.target.style.borderColor = '#ddd'}
                  required
                />
              </div>

              <div style={styles.inputGroup}>
                <label style={styles.label}>Phone no:</label>
                <input 
                  type="number" 
                  placeholder="Enter phone number"
                  style={styles.input}
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  onFocus={(e) => e.target.style.borderColor = '#ff7a00'}
                  onBlur={(e) => e.target.style.borderColor = '#ddd'}
                  required
                />
              </div>

              <div style={styles.inputGroup}>
                <label style={styles.label}>Password:</label>
                <input 
                  type="password" 
                  placeholder="Enter password"
                  style={styles.input}
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  onFocus={(e) => e.target.style.borderColor = '#ff7a00'}
                  onBlur={(e) => e.target.style.borderColor = '#ddd'}
                  required
                />
              </div>

              <div style={styles.inputGroup}>
                <label style={styles.label}>Email:</label>
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  style={styles.input}
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  onFocus={(e) => e.target.style.borderColor = '#ff7a00'}
                  onBlur={(e) => e.target.style.borderColor = '#ddd'}
                  required
                />
              </div>

              <button 
                type="submit"
                style={styles.registerBtn}
                onMouseOver={(e) => e.target.style.background = '#e56c00'}
                onMouseOut={(e) => e.target.style.background = '#ff7a00'}
              >
                Register
              </button>

              <div style={styles.loginText}>
                Already Have an Account?
                <span style={styles.link} onClick={onGoToLogin}>Login</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}