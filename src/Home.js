import React, { useEffect } from 'react';

const Home = ({ onNavigate }) => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Arial, sans-serif;
      }

      body {
        background: #f5f7fa;
      }

      /* NAVBAR */
      .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 80px;
        background: white;
        position: sticky;
        top: 0;
        z-index: 100;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      }

      .logo {
        font-size: 22px;
        font-weight: bold;
        color: #0083b0;
      }

      .nav-links {
        display: flex;
        gap: 30px;
      }

      .nav-links a {
        text-decoration: none;
        color: #333;
        font-size: 15px;
        transition: color 0.3s;
      }

      .nav-links a:hover {
        color: #0083b0;
      }

      .nav-btn {
        padding: 10px 18px;
        border-radius: 20px;
        border: none;
        background: #00b4db;
        color: white;
        cursor: pointer;
        font-weight: 500;
        transition: background 0.3s;
      }

      .nav-btn:hover {
        background: #0083b0;
      }

      /* HERO SECTION */
      .hero {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 40px 80px;
        padding: 60px;
        background: linear-gradient(135deg, #00b4db, #0083b0);
        border-radius: 20px;
        color: white;
        position: relative;
        overflow: hidden;
        min-height: 60vh;
      }

      .hero-text {
        max-width: 50%;
      }

      .hero-text h1 {
        font-size: 42px;
        margin-bottom: 20px;
        line-height: 1.2;
      }

      .hero-text p {
        font-size: 18px;
        margin-bottom: 25px;
        line-height: 1.6;
      }

      .hero-text button {
        padding: 12px 25px;
        border: none;
        border-radius: 25px;
        background: white;
        color: #0083b0;
        font-size: 16px;
        cursor: pointer;
        font-weight: 500;
        transition: transform 0.3s, box-shadow 0.3s;
      }

      .hero-text button:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
      }

      .hero-img img {
        width: 350px;
        height: 350px;
        border-radius: 20px;
        box-shadow: 0 20px 40px rgba(0,0,0,0.2);
      }

      /* FLOATING CARDS */
      .card {
        position: absolute;
        background: white;
        color: #333;
        padding: 10px 15px;
        border-radius: 10px;
        font-size: 14px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        animation: float 3s ease-in-out infinite;
      }

      .card1 {
        top: 60px;
        right: 250px;
        animation-delay: 0s;
      }

      .card2 {
        top: 140px;
        right: 180px;
        animation-delay: 1s;
      }

      .card3 {
        top: 220px;
        right: 240px;
        animation-delay: 2s;
      }

      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }

      /* Responsive */
      @media (max-width: 1200px) {
        .navbar {
          padding: 20px 40px;
        }
        .hero {
          flex-direction: column;
          text-align: center;
          margin: 20px 40px;
          padding: 40px 30px;
        }
        .hero-text {
          max-width: 100%;
          margin-bottom: 30px;
        }
        .hero-text h1 {
          font-size: 32px;
        }
        .hero-img img {
          width: 250px;
          height: 250px;
        }
        .card1, .card2, .card3 {
          display: none;
        }
      }

      @media (max-width: 768px) {
        .nav-links {
          display: none;
        }
        .navbar {
          padding: 15px 20px;
        }
        .hero {
          margin: 10px 20px;
          padding: 30px 20px;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* NAVBAR */}
      <div className="navbar">
        <div className="logo">MedAssist</div>

        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">How it Works</a>
          <a href="#">Reports</a>
          <a href="#">Contact</a>
        </div>

        <button className="nav-btn" onClick={() => onNavigate('register')}>Get Started</button>
      </div>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-text">
          <h1>Medical Report Assistance</h1>
          <p>
            Upload and analyze your medical reports easily. Get AI-based insights,
            doctor classifications, and better understanding of your health.
          </p>
          <button onClick={() => onNavigate('menu')}>Explore Now</button>
        </div>

        <div className="hero-img">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/3774/3774299.png" 
            alt="Doctor" 
          />
        </div>

        {/* Floating UI Cards */}
        <div className="card card1">✔ Report Uploaded</div>
        <div className="card card2">✔ MRI Classified</div>
        <div className="card card3">✔ AI Analysis Ready</div>
      </section>
    </div>
  );
};

export default Home;

