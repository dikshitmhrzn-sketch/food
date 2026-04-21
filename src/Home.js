import React, { useEffect } from 'react';

const Home = ({ onNavigate }) => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
      }

      body {
        background: linear-gradient(135deg, #4299e1 0%, #38a169 100%);
        min-height: 100vh;
      }

      /* NAVBAR */
      .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 80px;
        background: rgba(255,255,255,0.95);
        backdrop-filter: blur(10px);
        position: sticky;
        top: 0;
        z-index: 100;
        box-shadow: 0 4px 20px rgba(0,0,0,0.1);
      }

      .logo {
        font-size: 28px;
        font-weight: 900;
        background: linear-gradient(135deg, #4299e1, #38a169);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .nav-links {
        display: flex;
        gap: 40px;
        list-style: none;
      }

      .nav-links a {
        text-decoration: none;
        color: #333;
        font-weight: 600;
        font-size: 16px;
        transition: all 0.3s;
      }

      .nav-links a:hover {
        color: #4299e1;
        transform: translateY(-2px);
      }

      .nav-btn {
        padding: 12px 30px;
        border-radius: 50px;
        border: 2px solid #4299e1;
        background: #4299e1;
        color: white;
        cursor: pointer;
        font-weight: 700;
        font-size: 16px;
        transition: all 0.3s;
      }

      .nav-btn:hover {
        background: white;
        color: #4299e1;
        transform: translateY(-3px);
        box-shadow: 0 10px 30px rgba(66,153,225,0.4);
      }

      /* HERO SECTION */
      .hero {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 60px 80px;
        padding: 80px 60px;
        background: rgba(255,255,255,0.1);
        backdrop-filter: blur(20px);
        border-radius: 30px;
        color: white;
        position: relative;
        overflow: hidden;
        min-height: 70vh;
        box-shadow: 0 20px 60px rgba(0,0,0,0.2);
      }

      .hero-text {
        max-width: 50%;
      }

      .hero-text h1 {
        font-size: 52px;
        margin-bottom: 25px;
        line-height: 1.2;
        font-weight: 900;
      }

      .hero-text p {
        font-size: 20px;
        margin-bottom: 35px;
        line-height: 1.7;
        opacity: 0.95;
      }

      .hero-text button {
        padding: 18px 40px;
        border: none;
        border-radius: 50px;
        background: linear-gradient(135deg, #4299e1, #38a169);
        color: white;
        font-size: 18px;
        cursor: pointer;
        font-weight: 700;
        transition: all 0.4s;
        box-shadow: 0 10px 30px rgba(66,153,225,0.4);
      }

      .hero-text button:hover {
        transform: translateY(-5px) scale(1.05);
        box-shadow: 0 20px 50px rgba(66,153,225,0.6);
      }

      .hero-img img {
        width: 450px;
        height: 450px;
        border-radius: 30px;
        box-shadow: 0 30px 80px rgba(0,0,0,0.3);
        animation: float 6s ease-in-out infinite;
      }

      /* FLOATING MEDICAL ITEMS */
      .dish {
        position: absolute;
        background: rgba(255,255,255,0.2);
        color: white;
        padding: 15px 25px;
        border-radius: 20px;
        font-weight: 600;
        backdrop-filter: blur(10px);
        animation: float 4s ease-in-out infinite;
      }

      .dish1 { top: 80px; right: 300px; animation-delay: 0s; }
      .dish2 { top: 180px; right: 200px; animation-delay: 1.5s; }
      .dish3 { top: 280px; right: 280px; animation-delay: 3s; }

      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-15px) rotate(2deg); }
      }

      /* Responsive */
      @media (max-width: 1200px) {
        .navbar { padding: 20px 40px; }
        .hero {
          flex-direction: column;
          text-align: center;
          margin: 40px;
          padding: 60px 40px;
        }
        .hero-text { max-width: 100%; margin-bottom: 40px; }
        .hero-text h1 { font-size: 42px; }
        .hero-img img { width: 300px; height: 300px; }
        .dish1, .dish2, .dish3 { display: none; }
      }

      @media (max-width: 768px) {
        .nav-links { display: none; }
        .navbar { padding: 15px 30px; flex-direction: column; gap: 15px; }
        .hero { margin: 20px; padding: 40px 20px; }
        .hero-text h1 { font-size: 32px; }
      }
    `;
    document.head.appendChild(style);

    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">🩺 Medical Report Analysis</div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">Analysis</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <button 
          className="nav-btn" 
          onClick={() => onNavigate('login')}
        >
          Get Started
        </button>
      </nav>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-text">
          <h1>AI-Powered Medical Report Analysis</h1>
          <p>
            Upload your medical reports, MRI scans, and lab tests for instant AI analysis. 
            Get intelligent insights, doctor recommendations, and comprehensive health reports.
          </p>
          <button onClick={() => onNavigate('login')}>
            Analyze Now
          </button>
        </div>

        <div className="hero-img">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/3774/3774299.png" 
            alt="Medical Analysis" 
          />
        </div>

        {/* Floating Medical Items */}
        <div className="dish dish1">🩸 Blood Test</div>
        <div className="dish dish2">🩻 MRI Scan</div>
        <div className="dish dish3">📊 Lab Report</div>
      </section>
    </div>
  );
};

export default Home;

