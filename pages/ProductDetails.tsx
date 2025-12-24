
import React, { useEffect, useState } from 'react';
import { ArrowLeft, ShieldCheck, Clock, Award, Check } from 'lucide-react';
import { Watch } from '../types';
import { useCart } from '../context/CartContext';
import { getExpertInsight } from '../services/gemini';

interface ProductDetailsProps {
  watch: Watch;
  onBack: () => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ watch, onBack }) => {
  const { addToCart } = useCart();
  const [insight, setInsight] = useState<string>('Summoning our horological expert...');
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    const fetchInsight = async () => {
      const text = await getExpertInsight(watch);
      setInsight(text);
    };
    fetchInsight();
    window.scrollTo(0, 0);
  }, [watch]);

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(watch);
    setTimeout(() => setIsAdding(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-24">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-neutral-500 hover:text-gold mb-12 uppercase tracking-widest text-xs transition-colors"
      >
        <ArrowLeft size={16} /> Back to Collection
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left: Images */}
        <div className="space-y-4">
          <div className="aspect-[4/5] bg-neutral-900 border luxury-border overflow-hidden">
            <img src={watch.image} alt={watch.name} className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="aspect-square bg-neutral-900 border luxury-border overflow-hidden cursor-pointer hover:border-gold transition-colors">
                <img src={watch.image} alt={`${watch.name} view ${i}`} className="w-full h-full object-cover opacity-60" />
              </div>
            ))}
          </div>
        </div>

        {/* Right: Info */}
        <div className="space-y-10">
          <div className="space-y-4">
            <p className="text-gold uppercase tracking-[0.4em] text-xs font-bold">{watch.brand}</p>
            <h1 className="text-5xl font-serif">{watch.name}</h1>
            <p className="text-3xl font-serif text-white tracking-wider">${watch.price.toLocaleString()}</p>
          </div>

          <div className="p-8 bg-neutral-900/50 border luxury-border relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-3 opacity-20">
              <Award size={64} className="text-gold" />
            </div>
            <h3 className="text-xs uppercase tracking-widest text-gold mb-4 flex items-center gap-2">
              <Award size={14} /> Connoisseur's Insight
            </h3>
            <p className="text-lg font-serif italic text-neutral-300 leading-relaxed italic">
              "{insight}"
            </p>
          </div>

          <div className="space-y-6">
            <p className="text-neutral-400 leading-relaxed">{watch.description}</p>
            <div className="grid grid-cols-2 gap-8 border-t border-b luxury-border py-8">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-neutral-500 mb-1">Movement</p>
                <p className="text-sm">{watch.specs.movement}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-neutral-500 mb-1">Case Material</p>
                <p className="text-sm">{watch.specs.case}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-neutral-500 mb-1">Strap</p>
                <p className="text-sm">{watch.specs.strap}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-neutral-500 mb-1">Resistance</p>
                <p className="text-sm">{watch.specs.waterResistance}</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <button 
              onClick={handleAddToCart}
              disabled={isAdding}
              className={`flex-1 luxury-gradient py-5 text-black font-bold uppercase tracking-[0.2em] text-sm hover:opacity-90 transition-all flex items-center justify-center gap-2 ${isAdding ? 'bg-green-500' : ''}`}
            >
              {isAdding ? <><Check size={18} /> Piece Reserved</> : 'Add to Collection'}
            </button>
            <button className="p-5 border luxury-border hover:bg-white hover:text-black transition-all">
              <ShieldCheck size={20} />
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-8 border-t luxury-border">
             <div className="flex flex-col items-center text-center space-y-2">
                <ShieldCheck size={20} className="text-gold" />
                <span className="text-[8px] uppercase tracking-[0.15em] text-neutral-500">Insured Shipping</span>
             </div>
             <div className="flex flex-col items-center text-center space-y-2">
                <Clock size={20} className="text-gold" />
                <span className="text-[8px] uppercase tracking-[0.15em] text-neutral-500">Concierge Support</span>
             </div>
             <div className="flex flex-col items-center text-center space-y-2">
                <Award size={20} className="text-gold" />
                <span className="text-[8px] uppercase tracking-[0.15em] text-neutral-500">Auth. Certified</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
