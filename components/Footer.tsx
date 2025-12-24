
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t luxury-border py-24 mt-24">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-16">
        <div className="col-span-1 md:col-span-2 space-y-8">
           <div className="flex flex-col">
              <span className="text-2xl font-serif tracking-tighter text-white">CHRONOS LUXE</span>
              <span className="text-[8px] tracking-[0.4em] text-gold uppercase">Horlogerie Fine</span>
           </div>
           <p className="text-neutral-500 text-sm max-w-sm leading-relaxed tracking-wide">
             The world's premier destination for exclusive timepieces. 
             Connecting legendary heritage with the collectors of tomorrow.
           </p>
           <div className="flex space-x-6 text-gold uppercase tracking-[0.3em] text-[10px]">
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">YouTube</a>
           </div>
        </div>

        <div className="space-y-6">
           <h4 className="text-xs uppercase tracking-[0.3em] text-gold font-bold">The Boutique</h4>
           <ul className="space-y-4 text-[11px] uppercase tracking-widest text-neutral-400">
              <li><a href="#" className="hover:text-white transition-colors">Our Collection</a></li>
              <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Certified Pre-Owned</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Selling Your Watch</a></li>
           </ul>
        </div>

        <div className="space-y-6">
           <h4 className="text-xs uppercase tracking-[0.3em] text-gold font-bold">Concierge</h4>
           <ul className="space-y-4 text-[11px] uppercase tracking-widest text-neutral-400">
              <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Visit Our Showroom</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms & Privacy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Newsletter</a></li>
           </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
         <p className="text-[10px] text-neutral-600 uppercase tracking-widest">© 2024 Chronos Luxe. All Rights Reserved.</p>
         <div className="flex items-center gap-4">
            <img src="https://img.icons8.com/color/48/visa.png" className="h-4 grayscale opacity-30" alt="Visa" />
            <img src="https://img.icons8.com/color/48/mastercard.png" className="h-4 grayscale opacity-30" alt="Mastercard" />
            <img src="https://img.icons8.com/color/48/amex.png" className="h-4 grayscale opacity-30" alt="Amex" />
         </div>
      </div>
    </footer>
  );
};

export default Footer;
