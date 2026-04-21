import React, { useState } from 'react';

const UserProfile = ({ onNavigate, orderItems, currentUser, addToOrder, updateUser }) => {
  const [editMode, setEditMode] = useState(false);
  const [newUserName, setNewUserName] = useState(currentUser);
  const [showOrders, setShowOrders] = useState(false);

  const totalSpent = orderItems.reduce((sum, item) => sum + (item.price * item.quantity || 0), 0);
  const orderCount = orderItems.length;

  const handleUpdateName = () => {
    updateUser(newUserName);
    setEditMode(false);
  };

  const recentOrders = orderItems.slice(-5); // Last 5 orders

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header with Navigation */}
        <div className="flex justify-between items-center mb-12">
          <button 
            className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-full hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            onClick={() => onNavigate('dashboard')}
          >
            <span>←</span>
            <span>Back to Dashboard</span>
          </button>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Profile
          </h1>
        </div>

        {/* Profile Card */}
        <div className="bg-white/80 backdrop-blur-xl rounded-4xl shadow-2xl p-12 mb-12 border border-white/50">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-red-400 rounded-full flex items-center justify-center text-4xl font-bold shadow-2xl">
              {currentUser ? currentUser[0].toUpperCase() : 'U'}
            </div>
            
            <div className="flex-1 text-center md:text-left">
              {editMode ? (
                <div className="space-y-4">
                  <input
                    type="text"
                    value={newUserName}
                    onChange={(e) => setNewUserName(e.target.value)}
                    className="w-full md:w-96 px-6 py-4 text-2xl font-bold border-2 border-gray-200 rounded-3xl focus:border-orange-500 focus:outline-none transition-all duration-300 text-center"
                    placeholder="Enter your name"
                  />
                  <div className="flex gap-4 justify-center md:justify-start">
                    <button
                      className="px-8 py-3 bg-green-500 text-white font-bold rounded-2xl hover:bg-green-600 transition-all duration-300"
                      onClick={handleUpdateName}
                    >
                      Save
                    </button>
                    <button
                      className="px-8 py-3 bg-gray-300 text-gray-700 font-bold rounded-2xl hover:bg-gray-400 transition-all duration-300"
                      onClick={() => {
                        setEditMode(false);
                        setNewUserName(currentUser);
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <h2 className="text-4xl font-bold text-gray-800 mb-2">{currentUser || 'Guest'}</h2>
                  <p className="text-xl text-gray-600 mb-6">Food Lover Extraordinaire</p>
                  <button
                    className="px-8 py-3 border-2 border-orange-500 text-orange-500 font-bold rounded-2xl hover:bg-orange-500 hover:text-white transition-all duration-300"
                    onClick={() => setEditMode(true)}
                  >
                    Edit Profile
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-white/50 text-center">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Total Spent</h3>
            <p className="text-3xl font-bold text-green-600">${totalSpent.toFixed(2)}</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-white/50 text-center">
            <div className="text-4xl mb-4">📦</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Total Orders</h3>
            <p className="text-3xl font-bold text-blue-600">{orderCount}</p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-white/50 text-center">
            <div className="text-4xl mb-4">⭐</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Loyalty Points</h3>
            <p className="text-3xl font-bold text-purple-600">{Math.floor(totalSpent / 10)}</p>
          </div>
        </div>

        {/* Recent Orders Toggle */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/50 mb-12">
          <button
            className="flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-gray-500 to-gray-600 text-white font-bold rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full md:w-auto"
            onClick={() => setShowOrders(!showOrders)}
          >
            {showOrders ? '👆 Hide Recent Orders' : '👇 Show Recent Orders'}
          </button>
          
          {showOrders && (
            <div className="mt-6">
              {recentOrders.length > 0 ? (
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Recent Orders</h3>
                  {recentOrders.map((item) => (
                    <div key={item.id} className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all">
                      <div>
                        <h4 className="font-bold text-lg">{item.name}</h4>
                        <p className="text-gray-600">Qty: {item.quantity} × ${item.price}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-xl text-green-600">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-center py-8 text-gray-500 text-xl">No orders yet. Start ordering from the menu!</p>
              )}
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <button 
            className="p-8 bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-3xl shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-300 font-bold text-xl"
            onClick={() => onNavigate('menu')}
          >
            🍕 Order More Food
          </button>
          <button 
            className="p-8 bg-gradient-to-br from-emerald-500 to-green-500 text-white rounded-3xl shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-300 font-bold text-xl"
            onClick={() => onNavigate('orders')}
          >
            📋 View All Orders
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

