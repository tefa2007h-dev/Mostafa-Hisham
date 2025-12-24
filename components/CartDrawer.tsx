
import React from 'react';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onCheckout: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, onCheckout }) => {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-md bg-neutral-900 h-full flex flex-col border-l luxury-border animate-in slide-in-from-right duration-300">
        <div className="p-6 border-b luxury-border flex items-center justify-between">
          <h2 className="text-xl font-serif">Your Collection</h2>
          <button onClick={onClose} className="hover:text-gold"><X size={24} /></button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center space-y-4 text-neutral-500">
              <ShoppingBag size={48} strokeWidth={1} />
              <p className="font-light tracking-widest uppercase">Your cart is empty</p>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex gap-4 group">
                <div className="w-24 h-24 bg-black overflow-hidden border border-white/5">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex-1 flex flex-col">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-sm font-semibold text-white tracking-wide">{item.name}</h3>
                      <p className="text-xs text-gold uppercase">{item.brand}</p>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="text-neutral-500 hover:text-red-500 transition-colors">
                      <Trash2 size={16} />
                    </button>
                  </div>
                  <div className="mt-auto flex justify-between items-center">
                    <div className="flex items-center space-x-3 bg-black px-2 py-1 border luxury-border">
                      <button onClick={() => updateQuantity(item.id, -1)} className="hover:text-gold"><Minus size={14} /></button>
                      <span className="text-sm w-4 text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)} className="hover:text-gold"><Plus size={14} /></button>
                    </div>
                    <p className="font-serif text-gold">${(item.price * item.quantity).toLocaleString()}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 bg-black border-t luxury-border space-y-4">
            <div className="flex justify-between items-center text-lg">
              <span className="font-light text-neutral-400 uppercase tracking-widest text-xs">Total Estimated</span>
              <span className="font-serif text-gold">${totalPrice.toLocaleString()}</span>
            </div>
            <button 
              onClick={onCheckout}
              className="w-full luxury-gradient py-4 text-black font-bold uppercase tracking-[0.2em] text-sm hover:opacity-90 transition-opacity"
            >
              Proceed to Secure Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

import { ShoppingBag } from 'lucide-react';

export default CartDrawer;
