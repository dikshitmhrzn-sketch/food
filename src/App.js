import React, { useState } from "react";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import Dashboard from "./Dashboard";
import UserProfile from "./UserProfile";
import Menu from "./Menu";
import Orders from "./Orders";

// Add Poppins font
const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;900&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);

export default function NepaleseFoodUI() {
  const [currentPage, setCurrentPage] = useState('home');
  const [orderItems, setOrderItems] = useState([]);
  const [currentUser, setCurrentUser] = useState('');

  const addToOrder = (item) => {
    setOrderItems(prev => {
      const existingItem = prev.find(orderItem => orderItem.name === item.name);
      if (existingItem) {
        return prev.map(orderItem => 
          orderItem.name === item.name 
            ? { ...orderItem, quantity: (orderItem.quantity || 1) + 1 }
            : orderItem
        );
      }
      return [...prev, { ...item, quantity: 1, id: Date.now() }];
    });
  };

  const removeFromOrder = (itemName) => {
    setOrderItems(prev => prev.filter(item => item.name !== itemName));
  };

  const updateUser = (newUserName) => {
    setCurrentUser(newUserName);
  };

  if (currentPage === 'register') {
    return <Register onBackToHome={() => setCurrentPage('home')} onGoToLogin={() => setCurrentPage('login')} onRegisterSuccess={() => setCurrentPage('dashboard')} />;
  }

  if (currentPage === 'login') {
    return <Login onBackToHome={() => setCurrentPage('home')} onGoToRegister={() => setCurrentPage('register')} onLoginSuccess={(userName) => { setCurrentUser(userName); setCurrentPage('dashboard'); }} />;
  }

  if (currentPage === 'dashboard') {
    return <Dashboard onNavigate={setCurrentPage} orderItems={orderItems} addToOrder={addToOrder} removeFromOrder={removeFromOrder} currentUser={currentUser} />;
  }

  if (currentPage === 'user') {
    return <UserProfile onNavigate={setCurrentPage} orderItems={orderItems} currentUser={currentUser} addToOrder={addToOrder} updateUser={updateUser} />;
  }

  if (currentPage === 'menu') {
    return <Menu onNavigate={setCurrentPage} orderItems={orderItems} addToOrder={addToOrder} removeFromOrder={removeFromOrder} />;
  }

  if (currentPage === 'orders') {
    return <Orders onNavigate={setCurrentPage} orderItems={orderItems} currentUser={currentUser} />;
  }

  return <Home onNavigate={setCurrentPage} />;
}