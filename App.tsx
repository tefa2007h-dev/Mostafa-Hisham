
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import Checkout from './pages/Checkout';
import { CartProvider } from './context/CartContext';
import { Watch } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState<Watch | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>(() => {
    const saved = localStorage.getItem('chronos_user');
    return saved ? JSON.parse(saved) : null;
  });
  const [authType, setAuthType] = useState<'login' | 'register' | 'forgot'>('login');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const navigate = (page: string) => {
    setCurrentPage(page);
    setSelectedProduct(null);
  };

  const handleProductSelect = (watch: Watch) => {
    setSelectedProduct(watch);
    setCurrentPage('product');
  };

  const handleLogin = (user: any) => {
    setCurrentUser(user);
    localStorage.setItem('chronos_user', JSON.stringify(user));
    navigate('dashboard');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('chronos_user');
    navigate('home');
  };

  const renderPage = () => {
    if (currentPage === 'product' && selectedProduct) {
      return <ProductDetails watch={selectedProduct} onBack={() => navigate('shop')} />;
    }

    switch (currentPage) {
      case 'home':
        return <Home onNavigate={navigate} onSelectProduct={handleProductSelect} />;
      case 'shop':
        return <Shop onSelectProduct={handleProductSelect} />;
      case 'login':
      case 'register':
      case 'forgot':
        return <Auth onLogin={handleLogin} type={authType} onSwitch={(t) => { setAuthType(t); navigate(t); }} />;
      case 'dashboard':
        return currentUser ? <Dashboard user={currentUser} onLogout={handleLogout} /> : <Auth onLogin={handleLogin} type="login" onSwitch={setAuthType} />;
      case 'checkout':
        return <Checkout onSuccess={() => navigate('success')} onCancel={() => navigate('shop')} />;
      case 'success':
        return (
          <div className="min-h-[70vh] flex items-center justify-center text-center px-4">
            <div className="space-y-8 animate-in fade-in zoom-in duration-700">
               <div className="w-20 h-20 bg-green-500/10 border border-green-500/50 rounded-full flex items-center justify-center mx-auto text-green-500">
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
               </div>
               <h1 className="text-5xl font-serif">Acquisition Confirmed</h1>
               <p className="text-neutral-500 max-w-md mx-auto leading-relaxed">
                 Your investment has been secured. Our concierge team will contact you shortly to arrange specialized delivery.
               </p>
               <button onClick={() => navigate('home')} className="luxury-gradient px-12 py-4 text-black font-bold uppercase tracking-widest text-xs">Return Home</button>
            </div>
          </div>
        );
      default:
        return <Home onNavigate={navigate} onSelectProduct={handleProductSelect} />;
    }
  };

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col selection:bg-gold/30">
        <Navbar 
          onOpenCart={() => setIsCartOpen(true)} 
          onNavigate={(p) => {
            if (p === 'login' || p === 'register') setAuthType(p as any);
            navigate(p);
          }}
          currentUser={currentUser}
        />
        
        <main className="flex-1 pt-20">
          {renderPage()}
        </main>

        <Footer />

        <CartDrawer 
          isOpen={isCartOpen} 
          onClose={() => setIsCartOpen(false)} 
          onCheckout={() => { setIsCartOpen(false); navigate('checkout'); }}
        />
      </div>
    </CartProvider>
  );
};

export default App;
