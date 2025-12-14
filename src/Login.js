import React, { useState } from 'react';

export default function Login({ onBackToHome, onGoToRegister, onLoginSuccess }) {
  const [loginData, setLoginData] = useState({
    name: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loginData.name && loginData.password) {
      onLoginSuccess(loginData.name);
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
      height: '600px',
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
    loginSection: {
      flex: 1,
      background: '#fdfdfd',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    loginBox: {
      width: '380px',
      background: '#ffffff',
      borderRadius: '25px',
      padding: '40px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
      textAlign: 'center'
    },
    h2: {
      marginBottom: '30px',
      fontWeight: 500,
      color: '#ccc',
      letterSpacing: '2px'
    },
    inputGroup: {
      textAlign: 'left',
      marginBottom: '20px'
    },
    label: {
      display: 'block',
      marginBottom: '8px',
      fontSize: '14px',
      color: '#555'
    },
    input: {
      width: '100%',
      padding: '12px 15px',
      borderRadius: '30px',
      border: '1px solid #ddd',
      outline: 'none',
      fontSize: '14px',
      boxSizing: 'border-box'
    },
    loginBtn: {
      width: '100%',
      padding: '12px',
      background: '#ff7a00',
      color: '#fff',
      border: 'none',
      borderRadius: '30px',
      fontSize: '16px',
      cursor: 'pointer',
      margin: '20px 0',
      transition: 'background 0.3s'
    },
    register: {
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
        <div style={styles.loginSection}>
          <div style={styles.loginBox}>
            <h2 style={styles.h2}>LOGIN</h2>
            <form onSubmit={handleSubmit}>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Name:</label>
                <input 
                  type="text" 
                  placeholder="Enter your name"
                  style={styles.input}
                  value={loginData.name}
                  onChange={(e) => setLoginData({...loginData, name: e.target.value})}
                  onFocus={(e) => e.target.style.borderColor = '#ff7a00'}
                  onBlur={(e) => e.target.style.borderColor = '#ddd'}
                  required
                />
              </div>

              <div style={styles.inputGroup}>
                <label style={styles.label}>Password:</label>
                <input 
                  type="password" 
                  placeholder="Enter your password"
                  style={styles.input}
                  value={loginData.password}
                  onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                  onFocus={(e) => e.target.style.borderColor = '#ff7a00'}
                  onBlur={(e) => e.target.style.borderColor = '#ddd'}
                  required
                />
              </div>

              <button 
                type="submit"
                style={styles.loginBtn}
                onMouseOver={(e) => e.target.style.background = '#e56c00'}
                onMouseOut={(e) => e.target.style.background = '#ff7a00'}
              >
                Login
              </button>

              <div style={styles.register}>
                Don't have an account?
                <span style={styles.link} onClick={onGoToRegister}>Register</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}