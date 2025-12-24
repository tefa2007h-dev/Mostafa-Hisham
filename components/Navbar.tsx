
import React from 'react';
import { ShoppingBag, User, Search, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface NavbarProps {
  onOpenCart: () => void;
  onNavigate: (page: string) => void;
  currentUser: any;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenCart, onNavigate, currentUser }) => {
  const { totalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b luxury-border">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* Left Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm uppercase tracking-widest font-light">
          <button onClick={() => onNavigate('shop')} className="hover:text-gold transition-colors">Collection</button>
          <button onClick={() => onNavigate('about')} className="hover:text-gold transition-colors">Heritage</button>
        </div>

        {/* Logo */}
        <div 
          onClick={() => onNavigate('home')}
          className="cursor-pointer flex flex-col items-center group"
        >
          <span className="text-2xl font-serif tracking-tighter text-white group-hover:text-gold transition-colors">CHRONOS LUXE</span>
          <span className="text-[8px] tracking-[0.4em] text-gold uppercase -mt-1">Horlogerie Fine</span>
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-6">
          <button className="hidden md:block hover:text-gold transition-colors">
            <Search size={20} />
          </button>
          <button 
            onClick={() => onNavigate(currentUser ? 'dashboard' : 'login')}
            className="hover:text-gold transition-colors flex items-center gap-2"
          >
            <User size={20} />
            <span className="hidden lg:inline text-xs uppercase tracking-widest">
              {currentUser ? currentUser.name.split(' ')[0] : 'Account'}
            </span>
          </button>
          <button 
            onClick={onOpenCart}
            className="relative hover:text-gold transition-colors"
          >
            <ShoppingBag size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold text-black text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
          <button 
            className="md:hidden hover:text-gold transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-black border-b luxury-border py-8 px-4 flex flex-col space-y-6 text-center text-lg font-serif">
          <button onClick={() => { onNavigate('shop'); setIsMenuOpen(false); }}>Collection</button>
          <button onClick={() => { onNavigate('about'); setIsMenuOpen(false); }}>Heritage</button>
          <button onClick={() => { onNavigate('dashboard'); setIsMenuOpen(false); }}>Account</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
