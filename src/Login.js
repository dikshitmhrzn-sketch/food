import React from 'react';

export default function Login({ onBackToHome, onGoToRegister }) {
  return (
    <div style={{ margin: 0, padding: 0, background: '#ffffff', fontFamily: 'Arial, sans-serif', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{
        width: '350px',
        background: '#f49ad0',
        padding: '50px 40px',
        borderRadius: '40px',
        textAlign: 'center'
      }}>
        <h2 style={{
          color: 'white',
          fontSize: '26px',
          marginBottom: '35px',
          letterSpacing: '1px'
        }}>LOGIN</h2>

        <form style={{ textAlign: 'left' }}>
          <label style={{
            display: 'block',
            marginBottom: '5px',
            fontSize: '17px',
            color: 'white'
          }}>Name:</label>
          <input 
            type="text" 
            style={{
              width: '100%',
              padding: '12px 15px',
              marginBottom: '25px',
              border: 'none',
              borderRadius: '25px',
              outline: 'none',
              fontSize: '15px',
              boxSizing: 'border-box'
            }}
          />

          <label style={{
            display: 'block',
            marginBottom: '5px',
            fontSize: '17px',
            color: 'white'
          }}>Password:</label>
          <input 
            type="password" 
            style={{
              width: '100%',
              padding: '12px 15px',
              marginBottom: '25px',
              border: 'none',
              borderRadius: '25px',
              outline: 'none',
              fontSize: '15px',
              boxSizing: 'border-box'
            }}
          />

          <button 
            type="button"
            style={{
              display: 'block',
              width: '50%',
              padding: '12px',
              background: '#737373',
              color: 'white',
              border: 'none',
              borderRadius: '30px',
              margin: '15px auto 25px auto',
              cursor: 'pointer',
              fontSize: '17px'
            }}
            onMouseOver={(e) => e.target.style.opacity = '0.9'}
            onMouseOut={(e) => e.target.style.opacity = '1'}
          >
            Login
          </button>

          <div style={{
            width: '100%',
            height: '1px',
            background: '#444',
            margin: '10px 0 5px 0'
          }}></div>

          <p 
            style={{
              textAlign: 'center',
              fontSize: '13px',
              marginTop: '10px',
              color: 'blue',
              cursor: 'pointer',
              textDecoration: 'underline'
            }}
            onClick={() => {
              console.log('Navigating to register...');
              onGoToRegister();
            }}
          >
            Don't Have an Account? Register
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