import React from 'react';

const Orders = ({ onNavigate, orderItems, currentUser }) => {
  const totalAmount = orderItems.reduce((sum, item) => sum + (item.price * item.quantity || 0), 0);
  const groupedOrders = orderItems.reduce((acc, item) => {
    const dateKey = item.date || 'Today';
    if (!acc[dateKey]) acc[dateKey] = [];
    acc[dateKey].push(item);
    return acc;
  }, {});

  const orderStatus = (item) => {
    if (item.status === 'delivered') return '✅ Delivered';
    if (item.status === 'preparing') return '🔥 Preparing';
    if (item.status === 'out-for-delivery') return '🚚 Out for Delivery';
    return '⏳ Processing';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-100 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <button 
            className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-full hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            onClick={() => onNavigate('dashboard')}
          >
            <span>←</span>
            <span>Back to Dashboard</span>
          </button>
          <div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-2">
              My Orders
            </h1>
            <p className="text-xl text-gray-600 text-center">{currentUser || 'User'}</p>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white/80 backdrop-blur-xl rounded-4xl shadow-2xl p-8 mb-12 border border-white/50">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <p className="text-3xl font-bold text-emerald-600">{orderItems.length}</p>
              <p className="text-lg text-gray-600 mt-1">Total Orders</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-600">${totalAmount.toFixed(2)}</p>
              <p className="text-lg text-gray-600 mt-1">Total Amount</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-purple-600">⭐ {Math.floor(totalAmount / 5)}</p>
              <p className="text-lg text-gray-600 mt-1">Loyalty Points</p>
            </div>
          </div>
        </div>

        {/* Orders List */}
        {Object.entries(groupedOrders).length > 0 ? (
          <div className="space-y-6">
            {Object.entries(groupedOrders).map(([date, orders]) => (
              <div key={date} className="bg-white/80 backdrop-blur-xl rounded-4xl shadow-2xl border border-white/50 overflow-hidden">
                <div className="bg-gradient-to-r from-emerald-500 to-green-500 px-8 py-6 text-white">
                  <h2 className="text-2xl font-bold">{date}</h2>
                  <p className="opacity-90">{orders.length} items • Total: ${orders.reduce((sum, item) => sum + (item.price * item.quantity || 0), 0).toFixed(2)}</p>
                </div>
                
                <div className="p-8">
                  <div className="space-y-4">
                    {orders.map((item, index) => (
                      <div key={item.id || index} className="flex items-center p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl hover:shadow-lg transition-all border border-gray-200">
                        <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-400 rounded-2xl flex items-center justify-center text-2xl font-bold mr-6 flex-shrink-0">
                          {item.emoji || '🍕'}
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-xl text-gray-800 truncate">{item.name}</h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                            <span>Qty: {item.quantity || 1}</span>
                            <span>${item.price ? (item.price * (item.quantity || 1)).toFixed(2) : '0.00'}</span>
                            <span className="ml-auto">{orderStatus(item)}</span>
                          </div>
                          {item.note && (
                            <p className="text-sm text-orange-600 mt-1 bg-orange-50 px-3 py-1 rounded-full inline-block">
                              {item.note}
                            </p>
                          )}
                        </div>
                        
                        <div className="text-right ml-6">
                          <p className="text-2xl font-bold text-emerald-600">
                            ${(item.price * (item.quantity || 1)).toFixed(2)}
                          </p>
                          <p className="text-sm text-gray-500">{item.time || 'Just now'}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <div className="text-8xl mb-8">📦</div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">No Orders Yet</h2>
            <p className="text-xl text-gray-600 mb-12">Your delicious orders will appear here once you start ordering!</p>
            <button 
              className="px-12 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-xl rounded-full hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 shadow-xl"
              onClick={() => onNavigate('menu')}
            >
              🍕 Browse Menu
            </button>
          </div>
        )}

        {/* Quick Actions */}
        <div className="flex flex-col sm:flex-row gap-4 mt-12">
          <button 
            className="flex-1 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-lg rounded-3xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            onClick={() => onNavigate('menu')}
          >
            🍕 Continue Shopping
          </button>
          <button 
            className="flex-1 px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold text-lg rounded-3xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            onClick={() => onNavigate('user')}
          >
            👤 Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Orders;

