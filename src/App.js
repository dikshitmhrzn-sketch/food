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

export default function MedicalReportApp() {
  // Initialize state from localStorage
  const [currentPage, setCurrentPage] = useState(() => {
    const savedPage = localStorage.getItem('currentPage');
    return savedPage || 'home';
  });
  
  const [reportsList, setReportsList] = useState(() => {
    const savedItems = localStorage.getItem('reportsList');
    return savedItems ? JSON.parse(savedItems) : [];
  });
  
  const [currentPatient, setCurrentPatient] = useState(() => {
    const savedPatient = localStorage.getItem('currentPatient');
    return savedPatient || '';
  });
  
  const [testResults, setTestResults] = useState(() => {
    const savedTests = localStorage.getItem('testResults');
    return savedTests ? JSON.parse(savedTests) : [];
  });

  // Save to localStorage whenever state changes
  React.useEffect(() => {
    localStorage.setItem('currentPage', currentPage);
  }, [currentPage]);

  React.useEffect(() => {
    localStorage.setItem('reportsList', JSON.stringify(reportsList));
  }, [reportsList]);

  React.useEffect(() => {
    localStorage.setItem('currentPatient', currentPatient);
  }, [currentPatient]);

  React.useEffect(() => {
    localStorage.setItem('testResults', JSON.stringify(testResults));
  }, [testResults]);

  const addReport = (item) => {
    setReportsList(prev => {
      const existingItem = prev.find(report => report.name === item.name);
      if (existingItem) {
        return prev.map(report => 
          report.name === item.name 
            ? { ...report, quantity: (report.quantity || 1) + 1 }
            : report
        );
      }
      return [...prev, { ...item, quantity: 1, id: Date.now() }];
    });
  };

  const removeReport = (reportName) => {
    setReportsList(prev => prev.filter(item => item.name !== reportName));
  };

  const addTestResult = (item) => {
    setTestResults(prev => {
      const existingItem = prev.find(test => test.name === item.name);
      if (existingItem) {
        return prev.map(test => 
          test.name === item.name 
            ? { ...test, quantity: (test.quantity || 1) + 1 }
            : test
        );
      }
      return [...prev, { ...item, quantity: 1, id: Date.now() }];
    });
  };

  const increaseQuantity = (reportName) => {
    setReportsList(prev =>
      prev.map(item =>
        item.name === reportName
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (reportName) => {
    setReportsList(prev =>
      prev.map(item =>
        item.name === reportName && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const updatePatient = (newPatientName) => {
    setCurrentPatient(newPatientName);
  };

  if (currentPage === 'register') {
    return <Register onBackToHome={() => setCurrentPage('home')} onGoToLogin={() => setCurrentPage('login')} onRegisterSuccess={() => setCurrentPage('dashboard')} />;
  }

  if (currentPage === 'login') {
    return <Login onBackToHome={() => setCurrentPage('home')} onGoToRegister={() => setCurrentPage('register')} onLoginSuccess={(patientName) => { setCurrentPatient(patientName); setCurrentPage('dashboard'); }} />;
  }

  if (currentPage === 'dashboard') {
    return <Dashboard onNavigate={setCurrentPage} reportsList={reportsList} addReport={addReport} removeReport={removeReport} addTestResult={addTestResult} currentPatient={currentPatient} />;
  }

  if (currentPage === 'user') {
    return <UserProfile onNavigate={setCurrentPage} reportsList={reportsList} currentPatient={currentPatient} addReport={addReport} updatePatient={updatePatient} />;
  }

  if (currentPage === 'menu') {
    return <Menu onNavigate={setCurrentPage} reportsList={reportsList} addReport={addReport} removeReport={removeReport} addTestResult={addTestResult} />;
  }

  if (currentPage === 'orders') {
    return <Orders onNavigate={setCurrentPage} reportsList={reportsList} currentPatient={currentPatient} />;
  }

  if (currentPage === 'cart') {
    const removeFromTests = (testName) => {
      setTestResults(prev => prev.filter(item => item.name !== testName));
    };
    const increaseTestQuantity = (testName) => {
      setTestResults(prev =>
        prev.map(item =>
          item.name === testName
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    };
    const decreaseTestQuantity = (testName) => {
      setTestResults(prev =>
        prev.map(item =>
          item.name === testName && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    };
    return <Cart onNavigate={setCurrentPage} testResults={testResults} increaseQuantity={increaseTestQuantity} decreaseQuantity={decreaseTestQuantity} removeFromOrder={removeFromTests} />;
  }

  return <Home onNavigate={setCurrentPage} />;
}

