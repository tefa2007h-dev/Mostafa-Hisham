
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Watch } from '../types';
import { WATCHES } from '../data';

interface HomeProps {
  onNavigate: (page: string) => void;
  onSelectProduct: (watch: Watch) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate, onSelectProduct }) => {
  const featured = WATCHES.slice(0, 3);

  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=2000&auto=format&fit=crop" 
            alt="Hero Watch" 
            className="w-full h-full object-cover opacity-60 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
        </div>
        
        <div className="relative z-10 text-center space-y-8 px-4 max-w-4xl mx-auto">
          <p className="text-gold tracking-[0.5em] uppercase text-xs md:text-sm animate-pulse">Since 1845</p>
          <h1 className="text-5xl md:text-8xl font-serif font-light leading-tight italic">
            Timeless Elegance <br /> <span className="not-italic text-white">Defined by Precision</span>
          </h1>
          <p className="text-neutral-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed tracking-wide">
            Explore our curated selection of the world's most prestigious timepieces. 
            From historic horology to modern complications.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <button 
              onClick={() => onNavigate('shop')}
              className="luxury-gradient px-12 py-4 text-black font-bold uppercase tracking-widest text-xs hover:scale-105 transition-transform"
            >
              Explore Collection
            </button>
            <button className="border border-white/20 px-12 py-4 text-white uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all">
              Our Story
            </button>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
          <div className="space-y-4">
            <h2 className="text-4xl font-serif italic">The Curated Selection</h2>
            <div className="h-px w-24 bg-gold" />
          </div>
          <button 
            onClick={() => onNavigate('shop')}
            className="group flex items-center gap-2 text-gold uppercase tracking-widest text-xs"
          >
            View All Pieces <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {featured.map((watch) => (
            <div 
              key={watch.id} 
              className="group cursor-pointer"
              onClick={() => onSelectProduct(watch)}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-neutral-900 mb-6 border luxury-border">
                <img 
                  src={watch.image} 
                  alt={watch.name} 
                  className="w-full h-full object-cover opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
                   <p className="text-xs uppercase tracking-widest text-gold mb-2">View Details</p>
                </div>
              </div>
              <p className="text-xs text-gold uppercase tracking-widest mb-1">{watch.brand}</p>
              <h3 className="text-xl font-serif mb-2 group-hover:text-gold transition-colors">{watch.name}</h3>
              <p className="font-serif text-lg tracking-wider">${watch.price.toLocaleString()}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Heritage Split */}
      <section className="bg-neutral-900 py-24">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 space-y-8">
             <h2 className="text-5xl font-serif italic">Artistry in Every Movement</h2>
             <p className="text-neutral-400 leading-loose">
               Every Chronos Luxe timepiece is selected for its unparalleled craftsmanship. 
               We collaborate with master watchmakers to bring you limited editions and 
               historic pieces that are more than just watches—they are investments in legacy.
             </p>
             <ul className="space-y-4">
                <li className="flex items-center gap-4">
                   <div className="w-8 h-px bg-gold" />
                   <span className="text-xs uppercase tracking-widest">Lifetime Warranty</span>
                </li>
                <li className="flex items-center gap-4">
                   <div className="w-8 h-px bg-gold" />
                   <span className="text-xs uppercase tracking-widest">Certified Authenticity</span>
                </li>
                <li className="flex items-center gap-4">
                   <div className="w-8 h-px bg-gold" />
                   <span className="text-xs uppercase tracking-widest">Bespoke Concierge</span>
                </li>
             </ul>
          </div>
          <div className="order-1 md:order-2 aspect-square overflow-hidden border-8 border-black shadow-2xl">
            <img src="https://images.unsplash.com/photo-1509114397022-ed747cca3f65?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover" alt="Craftsmanship" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
