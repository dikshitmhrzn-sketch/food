import React from 'react';
import './Home.css';

const Home = ({ onNavigate }) => {
  const styles = {
    body: {
      margin: 0,
      fontFamily: "'Poppins', sans-serif",
      background: '#f6f6f6',
      textAlign: 'center'
    },
    navbar: {
      display: 'flex',
      justifyContent: 'center',
      padding: '35px 0 25px 0'
    },
    navLinks: {
      display: 'flex',
      alignItems: 'center'
    },
    navLink: {
      textDecoration: 'none',
      margin: '0 25px',
      fontSize: '22px',
      fontWeight: 500,
      color: 'black'
    },
    active: {
      background: 'orange',
      padding: '8px 18px',
      borderRadius: '20px'
    },
    hero: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 80px'
    },
    heroH1: {
      fontSize: '32px',
      fontWeight: 700,
      textAlign: 'left'
    },
    textLeft: {
      flex: 1
    },
    rightFoodImg: {
      display: 'flex',
      justifyContent: 'flex-start',
      marginLeft: '-50px'
    },
    heroImage: {
      width: '250px',
      height: '250px',
      borderRadius: '50%',
      objectFit: 'cover',
      boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    },
    buttons: {
      marginTop: '20px',
      textAlign: 'left'
    },
    btn: {
      background: 'orange',
      border: 'none',
      padding: '10px 25px',
      borderRadius: '15px',
      marginRight: '15px',
      cursor: 'pointer',
      fontSize: '16px'
    },
    sectionTitle: {
      fontSize: '26px',
      fontWeight: 700,
      marginTop: '-100px'
    },

    centerBtn: {
      marginTop: '30px'
    },
    startBtn: {
      background: 'orange',
      border: 'none',
      padding: '12px 40px',
      fontSize: '22px',
      borderRadius: '25px',
      cursor: 'pointer'
    },
    footerTitle: {
      margin: '50px 0',
      fontSize: '26px',
      fontWeight: 700
    }
  };

  return (
    <div style={styles.body}>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <div style={styles.navLinks}>
          <a style={{...styles.navLink, ...styles.active}} href="#">Home</a>
          <a style={styles.navLink} href="#">Drinks</a>
          <a style={styles.navLink} href="#">Menu</a>
          <a style={styles.navLink} href="#">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section style={styles.hero}>
        <div style={styles.textLeft}>
          <h1 style={styles.heroH1}>Your Favorites Food,<br />One Click Away</h1>
          <div style={styles.buttons}>
            <button style={styles.btn}>Our Menu</button>
            <button style={styles.btn}>Our Drinks</button>
          </div>
        </div>
        <div style={styles.rightFoodImg}>
          <img 
            style={styles.heroImage} 
            src="momos.webp" 
            alt="Food Image"
            onMouseOver={(e) => {
              e.target.style.transform = 'scale(1.05)';
              e.target.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
            }}
          />
        </div>
      </section>

      {/* Title */}
      <h2 style={styles.sectionTitle}>Enjoy Your Delicious Foods</h2>

      {/* Food Cards */}
      <div className="food-cards">
        <div className="card">
          <img src="/chicken burger.webp" alt="Burger" />
          <div className="tab"></div>
          <div className="stars">
            <span className="star-dot"></span>
            <span className="star-dot"></span>
            <span className="star-dot"></span>
            <span className="star-dot"></span>
          </div>
          <div className="card-title">Burger</div>
          <div className="order-now">Order Now</div>
        </div>

        <div className="card">
          <img src="/chicken thukpa.webp" alt="Thukpa" />
          <div className="tab"></div>
          <div className="stars">
            <span className="star-dot"></span>
            <span className="star-dot"></span>
            <span className="star-dot"></span>
            <span className="star-dot"></span>
          </div>
          <div className="card-title">Thukpa</div>
          <div className="order-now">Order Now</div>
        </div>

        <div className="card">
          <img src="/veg pizza.webp" alt="Pizza" />
          <div className="tab"></div>
          <div className="stars">
            <span className="star-dot"></span>
            <span className="star-dot"></span>
            <span className="star-dot"></span>
            <span className="star-dot"></span>
          </div>
          <div className="card-title">Pizza</div>
          <div className="order-now">Order Now</div>
        </div>
      </div>

      {/* Get Started Button */}
      <div style={styles.centerBtn}>
        <button style={styles.startBtn} onClick={() => onNavigate('register')}>Get Started</button>
      </div>

      {/* Footer Title */}
      <h2 style={styles.footerTitle}>Discover The True Meaning<br />Of Taste</h2>
    </div>
  );
};

export default Home;