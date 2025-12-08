import React from 'react';

export default function Register({ onBackToHome, onGoToLogin }) {
  const inputStyle = {
    width: '100%',
    padding: '12px 15px',
    marginBottom: '20px',
    border: 'none',
    borderRadius: '25px',
    outline: 'none',
    fontSize: '15px',
    boxSizing: 'border-box'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '6px',
    fontSize: '16px',
    color: 'white'
  };

  return (
    <div style={{ margin: 0, padding: 0, background: '#ffffff', fontFamily: 'Arial, sans-serif', minHeight: '100vh' }}>
      <div style={{
        width: '350px',
        background: '#f49ad0',
        padding: '40px',
        borderRadius: '40px',
        margin: '40px auto',
        textAlign: 'center'
      }}>
        <h2 style={{
          color: 'white',
          fontSize: '26px',
          marginBottom: '25px'
        }}>Register</h2>

        <form style={{ textAlign: 'left' }}>
          <label style={labelStyle}>Name:</label>
          <input type="text" style={inputStyle} />

          <label style={labelStyle}>Address:</label>
          <input type="text" style={inputStyle} />

          <label style={labelStyle}>Phone no:</label>
          <input type="text" style={inputStyle} />

          <label style={labelStyle}>Password:</label>
          <input type="password" style={inputStyle} />

          <label style={labelStyle}>Email:</label>
          <input type="email" style={inputStyle} />

          <button 
            type="button"
            style={{
              display: 'block',
              width: '60%',
              padding: '12px',
              background: '#737373',
              color: 'white',
              border: 'none',
              borderRadius: '30px',
              margin: '10px auto 20px auto',
              cursor: 'pointer',
              fontSize: '17px'
            }}
            onMouseOver={(e) => e.target.style.opacity = '0.9'}
            onMouseOut={(e) => e.target.style.opacity = '1'}
          >
            Register
          </button>

          <p 
            style={{
              textAlign: 'center',
              marginTop: '10px',
              fontSize: '13px',
              color: 'blue',
              cursor: 'pointer',
              textDecoration: 'underline'
            }}
            onClick={onGoToLogin}
          >
            Already Have an Account? Login
          </p>
        </form>

        <button 
          onClick={onBackToHome}
          style={{
            background: '#737373',
            color: 'white',
            border: 'none',
            borderRadius: '20px',
            padding: '8px 16px',
            cursor: 'pointer',
            marginTop: '10px'
          }}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}