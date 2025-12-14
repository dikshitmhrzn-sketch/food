import React, { useState } from "react";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import Dashboard from "./Dashboard";
import UserProfile from "./UserProfile";
import Menu from "./Menu";
import Orders from "./Orders";
import Cart from "./Cart";

// Add Poppins font
const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;900&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);

export default function NepaleseFoodUI() {
  // Initialize state from localStorage
  const [currentPage, setCurrentPage] = useState(() => {
    const savedPage = localStorage.getItem('currentPage');
    return savedPage || 'home';
  });
  
  const [orderItems, setOrderItems] = useState(() => {
    const savedItems = localStorage.getItem('orderItems');
    return savedItems ? JSON.parse(savedItems) : [];
  });
  
  const [currentUser, setCurrentUser] = useState(() => {
    const savedUser = localStorage.getItem('currentUser');
    return savedUser || '';
  });
  
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save to localStorage whenever state changes
  React.useEffect(() => {
    localStorage.setItem('currentPage', currentPage);
  }, [currentPage]);

  React.useEffect(() => {
    localStorage.setItem('orderItems', JSON.stringify(orderItems));
  }, [orderItems]);

  React.useEffect(() => {
    localStorage.setItem('currentUser', currentUser);
  }, [currentUser]);

  React.useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

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

  const addToCart = (item) => {
    setCartItems(prev => {
      const existingItem = prev.find(cartItem => cartItem.name === item.name);
      if (existingItem) {
        return prev.map(cartItem => 
          cartItem.name === item.name 
            ? { ...cartItem, quantity: (cartItem.quantity || 1) + 1 }
            : cartItem
        );
      }
      return [...prev, { ...item, quantity: 1, id: Date.now() }];
    });
  };

  const increaseQuantity = (itemName) => {
    setOrderItems(prev =>
      prev.map(item =>
        item.name === itemName
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (itemName) => {
    setOrderItems(prev =>
      prev.map(item =>
        item.name === itemName && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
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
    return <Dashboard onNavigate={setCurrentPage} orderItems={orderItems} addToOrder={addToOrder} removeFromOrder={removeFromOrder} addToCart={addToCart} currentUser={currentUser} />;
  }

  if (currentPage === 'user') {
    return <UserProfile onNavigate={setCurrentPage} orderItems={orderItems} currentUser={currentUser} addToOrder={addToOrder} updateUser={updateUser} />;
  }

  if (currentPage === 'menu') {
    return <Menu onNavigate={setCurrentPage} orderItems={orderItems} addToOrder={addToOrder} removeFromOrder={removeFromOrder} addToCart={addToCart} />;
  }

  if (currentPage === 'orders') {
    return <Orders onNavigate={setCurrentPage} orderItems={orderItems} currentUser={currentUser} />;
  }

  if (currentPage === 'cart') {
    const removeFromCart = (itemName) => {
      setCartItems(prev => prev.filter(item => item.name !== itemName));
    };
    const increaseCartQuantity = (itemName) => {
      setCartItems(prev =>
        prev.map(item =>
          item.name === itemName
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    };
    const decreaseCartQuantity = (itemName) => {
      setCartItems(prev =>
        prev.map(item =>
          item.name === itemName && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    };
    return <Cart onNavigate={setCurrentPage} cartItems={cartItems} increaseQuantity={increaseCartQuantity} decreaseQuantity={decreaseCartQuantity} removeFromOrder={removeFromCart} />;
  }

  return <Home onNavigate={setCurrentPage} />;
}