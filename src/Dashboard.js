import React from 'react';

const Dashboard = ({ onNavigate, reportsList, addReport, removeReport, addTestResult, currentPatient }) => {
  const totalReports = reportsList.reduce((sum, item) => sum + (item.price * item.quantity || 0), 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent mb-2">
              Welcome Back, {currentPatient || 'Patient'}!
            </h1>
            <p className="text-xl text-gray-600">Your health analysis dashboard</p>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold text-emerald-600">${totalReports.toFixed(2)}</p>
            <p className="text-lg text-gray-500">Total Analysis Value</p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/50 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Active Reports</h3>
            <p className="text-3xl font-bold text-blue-600">{reportsList.length}</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/50 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4">🧬</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">AI Analysis</h3>
            <p className="text-xl text-gray-600">Run AI diagnostics</p>
          </div>

          <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/50 hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-4">🩺</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Patient Profile</h3>
            <p className="text-xl text-gray-600">Manage health data</p>
          </div>
        </div>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div 
            className="group bg-gradient-to-br from-blue-500 to-emerald-500 text-white p-8 rounded-3xl shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            onClick={() => onNavigate('menu')}
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📈</div>
            <h3 className="text-2xl font-bold mb-2">AI Analysis</h3>
            <p className="opacity-90">Analyze medical reports</p>
          </div>

          <div 
            className="group bg-gradient-to-br from-emerald-500 to-teal-500 text-white p-8 rounded-3xl shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            onClick={() => onNavigate('orders')}
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📋</div>
            <h3 className="text-2xl font-bold mb-2">Reports History</h3>
            <p className="opacity-90">View past analyses</p>
          </div>

          <div 
            className="group bg-gradient-to-br from-indigo-500 to-purple-500 text-white p-8 rounded-3xl shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            onClick={() => onNavigate('user')}
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🩺</div>
            <h3 className="text-2xl font-bold mb-2">Patient Profile</h3>
            <p className="opacity-90">Update medical info</p>
          </div>

          <div 
            className="group bg-gradient-to-br from-purple-500 to-pink-500 text-white p-8 rounded-3xl shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            onClick={() => onNavigate('cart')}
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🧪</div>
            <h3 className="text-2xl font-bold mb-2">Lab Results</h3>
            <p className="opacity-90">Review test results</p>
          </div>
        </div>

        {/* Logout Button */}
        <div className="mt-12 text-center">
          <button 
            className="px-12 py-4 bg-gray-200 text-gray-800 font-bold rounded-full text-xl hover:bg-gray-300 transition-all duration-300 shadow-xl hover:shadow-2xl"
            onClick={() => {
              localStorage.clear();
              onNavigate('home');
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

