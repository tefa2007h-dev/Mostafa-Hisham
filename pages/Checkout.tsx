
import React, { useState } from 'react';
import { ShieldCheck, Lock, CreditCard } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CheckoutProps {
  onSuccess: () => void;
  onCancel: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ onSuccess, onCancel }) => {
  const { cart, totalPrice, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      clearCart();
      onSuccess();
    }, 2000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-24 flex flex-col lg:flex-row gap-16">
      <div className="flex-1 space-y-12">
        <h1 className="text-4xl font-serif">Secure Checkout</h1>
        
        <form onSubmit={handleSubmit} className="space-y-12">
          {/* Shipping Info */}
          <div className="space-y-6">
            <h3 className="text-xs uppercase tracking-[0.3em] text-gold font-bold">1. Delivery Destination</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 md:col-span-1">
                <input required type="text" placeholder="First Name" className="w-full bg-neutral-900 border luxury-border p-4 text-sm focus:outline-none focus:border-gold" />
              </div>
              <div className="col-span-2 md:col-span-1">
                <input required type="text" placeholder="Last Name" className="w-full bg-neutral-900 border luxury-border p-4 text-sm focus:outline-none focus:border-gold" />
              </div>
              <div className="col-span-2">
                <input required type="text" placeholder="Street Address" className="w-full bg-neutral-900 border luxury-border p-4 text-sm focus:outline-none focus:border-gold" />
              </div>
              <div className="col-span-1">
                <input required type="text" placeholder="City" className="w-full bg-neutral-900 border luxury-border p-4 text-sm focus:outline-none focus:border-gold" />
              </div>
              <div className="col-span-1">
                <input required type="text" placeholder="Postal Code" className="w-full bg-neutral-900 border luxury-border p-4 text-sm focus:outline-none focus:border-gold" />
              </div>
            </div>
          </div>

          {/* Payment Info */}
          <div className="space-y-6">
            <h3 className="text-xs uppercase tracking-[0.3em] text-gold font-bold">2. Payment Method</h3>
            <div className="bg-neutral-900/30 border luxury-border p-6 rounded-sm space-y-4">
              <div className="flex items-center gap-4 text-gold mb-4">
                <CreditCard size={20} />
                <span className="text-sm font-bold uppercase">Credit / Debit Card</span>
              </div>
              <div className="space-y-4">
                <input required type="text" placeholder="Card Number" className="w-full bg-neutral-900 border luxury-border p-4 text-sm focus:outline-none focus:border-gold" />
                <div className="grid grid-cols-2 gap-4">
                  <input required type="text" placeholder="MM/YY" className="w-full bg-neutral-900 border luxury-border p-4 text-sm focus:outline-none focus:border-gold" />
                  <input required type="text" placeholder="CVV" className="w-full bg-neutral-900 border luxury-border p-4 text-sm focus:outline-none focus:border-gold" />
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col gap-4">
             <button 
              type="submit"
              disabled={isProcessing}
              className="w-full luxury-gradient py-5 text-black font-bold uppercase tracking-[0.3em] text-sm flex items-center justify-center gap-3 disabled:opacity-50"
             >
                {isProcessing ? 'Authenticating Secure Transaction...' : <><Lock size={18} /> Confirm Luxury Acquisition</>}
             </button>
             <button 
              type="button" 
              onClick={onCancel}
              className="text-neutral-500 uppercase tracking-widest text-[10px] hover:text-white transition-colors"
             >
               Return to Boutique
             </button>
          </div>
        </form>
      </div>

      {/* Summary */}
      <div className="w-full lg:w-96">
        <div className="bg-neutral-900 border luxury-border p-8 space-y-8 sticky top-24">
          <h3 className="text-lg font-serif">Order Summary</h3>
          <div className="space-y-6">
            {cart.map(item => (
              <div key={item.id} className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <p className="text-xs font-bold text-white mb-1 uppercase tracking-wider">{item.name}</p>
                  <p className="text-[10px] text-neutral-500 uppercase tracking-widest">{item.brand} × {item.quantity}</p>
                </div>
                <p className="text-xs font-serif text-gold">${(item.price * item.quantity).toLocaleString()}</p>
              </div>
            ))}
          </div>

          <div className="border-t luxury-border pt-6 space-y-2">
            <div className="flex justify-between text-[10px] uppercase tracking-widest text-neutral-500">
              <span>Subtotal</span>
              <span>${totalPrice.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-[10px] uppercase tracking-widest text-neutral-500">
              <span>Insured Shipping</span>
              <span className="text-green-500 uppercase font-bold">Complimentary</span>
            </div>
            <div className="flex justify-between text-xl font-serif text-gold pt-4">
              <span>Total</span>
              <span>${totalPrice.toLocaleString()}</span>
            </div>
          </div>

          <div className="pt-6 flex items-start gap-3 text-[10px] text-neutral-500 leading-relaxed uppercase tracking-tighter">
            <ShieldCheck size={16} className="text-gold flex-shrink-0" />
            <span>Transactions are encrypted with industry-standard 256-bit SSL. Your personal data is never shared.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
