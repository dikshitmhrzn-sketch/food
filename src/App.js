import React, { useState } from "react";
import Register from "./Register";
import Login from "./Login";

// Add Poppins font
const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;900&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);

export default function NepaleseFoodUI() {
  const [currentPage, setCurrentPage] = useState('home');

  if (currentPage === 'register') {
    return <Register onBackToHome={() => setCurrentPage('home')} onGoToLogin={() => setCurrentPage('login')} />;
  }

  if (currentPage === 'login') {
    return <Login onBackToHome={() => setCurrentPage('home')} onGoToRegister={() => setCurrentPage('register')} />;
  }

  return (
    <div style={{ margin: 0, padding: 0, fontFamily: '"Poppins", sans-serif', background: 'linear-gradient(135deg, #ecbcdaff 0%, #764ba2 100%)', minHeight: '100vh' }}>
      {/* Hero Section */}
      <div style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        padding: '40px 60px',
        justifyContent: 'space-between',
        background: 'rgba(255,255,255,0.95)',
        borderRadius: '0 0 30px 30px',
        boxShadow: '0 8px 25px rgba(0,0,0,0.1)'
      }}>
        <div>
          <h1 style={{ fontSize: '50px', margin: 0, fontWeight: 900, color: '#2d3748', lineHeight: '1.2' }}>Your Favorites Food,<br />One Click Away</h1>

          <div>
            <button style={{
              padding: '12px 24px',
              borderRadius: '25px',
              border: 'none',
              marginRight: '15px',
              marginTop: '25px',
              background: 'linear-gradient(45deg, #5b5c61ff, #6c6163ff)',
              color: 'white',
              fontWeight: '600',
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
              transition: 'all 0.3s ease'
            }}>Our Menu</button>
            <button style={{
              padding: '12px 24px',
              borderRadius: '25px',
              border: 'none',
              marginRight: '10px',
              marginTop: '25px',
              background: 'linear-gradient(45deg, #5b5c61ff, #6c6163ff)',
              color: 'white',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}>Our Drinks</button>
          </div>
        </div>

        <div style={{
          width: '280px',
          height: '280px',
          borderRadius: '50%',
          overflow: 'hidden',
          border: '6px solid #667eea',
          boxShadow: '0 15px 30px rgba(102, 126, 234, 0.3)'
        }}>
          <img 
            src="https://i.ibb.co/JcpnZfN/momo.jpg" 
            alt="Momo Image"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>
      </div>

      {/* Center Get Started Button */}
      <div style={{ textAlign: 'center', marginTop: '25px' }}>
        <button 
          onClick={() => setCurrentPage('register')}
          style={{
            padding: '18px 50px',
            background: 'linear-gradient(45deg, #6c6163ff, #6c6163ff)',
            color: 'white',
            borderRadius: '50px',
            border: 'none',
            fontSize: '24px',
            fontWeight: '700',
            cursor: 'pointer',
            boxShadow: '0 8px 25px rgba(255, 107, 107, 0.4)',
            transform: 'translateY(0)',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.target.style.transform = 'translateY(-3px)';
            e.target.style.boxShadow = '0 12px 35px rgba(255, 107, 107, 0.6)';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 8px 25px rgba(255, 107, 107, 0.4)';
          }}
        >
          🚀 Get Started
        </button>
      </div>

      {/* Popular Dishes */}
      <h3 style={{
        textAlign: 'center',
        marginTop: '40px',
        fontSize: '26px',
        fontWeight: 700,
        color: 'white',
        textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
        marginBottom: '25px'
      }}>🍽️ Popular Dishes</h3>

      <div style={{
        display: 'flex',
        gap: '25px',
        justifyContent: 'center',
        marginTop: '15px',
        flexWrap: 'wrap',
        paddingBottom: '30px'
      }}>
        {/* Momo */}
        <div style={{ 
          width: '200px', 
          padding: '15px',
          background: '#5b5c61ff',
          borderRadius: '20px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
          transition: 'all 0.3s ease',
          cursor: 'pointer'
        }}>
          <div style={{
            width: '100%',
            height: '140px',
            borderRadius: '15px',
            overflow: 'hidden',
            background: '#000'
          }}>
            <img 
              src="https://i.ibb.co/JcpnZfN/momo.jpg"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
          <div style={{
            textAlign: 'center',
            marginTop: '12px',
            fontSize: '18px',
            fontWeight: 700,
            color: 'white'
          }}>🥟 Momo</div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '10px',
            fontSize: '16px'
          }}>
            <span style={{ fontWeight: '600', color: '#667eea' }}>Rs: 50</span>
            <button style={{
              background: 'linear-gradient(45deg, #10ac84, #00d2d3)',
              color: 'white',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: '600',
              cursor: 'pointer'
            }}>Order Now</button>
          </div>
          <div style={{
            textAlign: 'center',
            marginTop: '8px',
            fontSize: '16px',
            color: '#f39c12'
          }}>★★★★☆</div>
        </div>

        {/* Thukpa */}
        <div style={{ 
          width: '200px', 
          padding: '15px',
          background: '#5b5c61ff',
          borderRadius: '20px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
          transition: 'all 0.3s ease',
          cursor: 'pointer'
        }}>
          <div style={{
            width: '100%',
            height: '140px',
            borderRadius: '15px',
            overflow: 'hidden',
            background: '#000'
          }}>
            <img 
              src="https://i.ibb.co/hV8npZ6/thukpa.jpg"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
          <div style={{
            textAlign: 'center',
            marginTop: '12px',
            fontSize: '18px',
            fontWeight: 700,
            color: 'white'
          }}>🍜 Thukpa</div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '10px',
            fontSize: '16px'
          }}>
            <span style={{ fontWeight: '600', color: '#667eea' }}>Rs: 60</span>
            <button style={{
              background: 'linear-gradient(45deg, #10ac84, #00d2d3)',
              color: 'white',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: '600',
              cursor: 'pointer'
            }}>Order Now</button>
          </div>
          <div style={{
            textAlign: 'center',
            marginTop: '8px',
            fontSize: '16px',
            color: '#f39c12'
          }}>★★★★☆</div>
        </div>

        {/* Yomari */}
        <div style={{ 
          width: '200px', 
          padding: '15px',
          background: '#5b5c61ff',
          borderRadius: '20px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
          transition: 'all 0.3s ease',
          cursor: 'pointer'
        }}>
          <div style={{
            width: '100%',
            height: '140px',
            borderRadius: '15px',
            overflow: 'hidden',
            background: '#000'
          }}>
            <img 
              src="https://i.ibb.co/FH2JjVH/yomari.jpg"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
          <div style={{
            textAlign: 'center',
            marginTop: '12px',
            fontSize: '18px',
            fontWeight: 700,
            color: 'white'
          }}>🥮 Yomari</div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '10px',
            fontSize: '16px'
          }}>
            <span style={{ fontWeight: '600', color: '#667eea' }}>Rs: 100</span>
            <button style={{
              background: 'linear-gradient(45deg, #10ac84, #00d2d3)',
              color: 'white',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: '600',
              cursor: 'pointer'
            }}>Order Now</button>
          </div>
          <div style={{
            textAlign: 'center',
            marginTop: '8px',
            fontSize: '16px',
            color: '#f39c12'
          }}>★★★☆☆</div>
        </div>
      </div>

      {/* Discover Section */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 60px',
        marginTop: '60px',
        gap: '60px',
        background: 'rgba(255,255,255,0.95)',
        borderRadius: '50px 50px 0 0',
        boxShadow: '0 -10px 30px rgba(0,0,0,0.1)'
      }}>
        <div style={{
          width: '200px',
          height: '200px',
          background: 'linear-gradient(135deg, #424347fe, #764ba2)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '60px',
          boxShadow: '0 20px 40px rgba(102, 126, 234, 0.3)'
        }}>🍽️</div>

        <div>
          <h1 style={{
            fontSize: '42px',
            fontWeight: 900,
            lineHeight: '50px',
            color: '#2d3748',
            textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
          }}>
            Discover The True Meaning <br />
            <span style={{ color: '#2d3748' }}>Of Taste</span> ✨
          </h1>
        </div>
      </div>
    </div>
  );
}