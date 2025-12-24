
import React, { useState, useMemo } from 'react';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';
import { WATCHES } from '../data';
import { Watch } from '../types';

interface ShopProps {
  onSelectProduct: (watch: Watch) => void;
}

const Shop: React.FC<ShopProps> = ({ onSelectProduct }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState<string>('All');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200000]);

  const categories = ['All', 'Classic', 'Sport', 'Complication', 'Vintage'];

  const filteredWatches = useMemo(() => {
    return WATCHES.filter(w => {
      const matchesSearch = w.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           w.brand.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = category === 'All' || w.category === category;
      const matchesPrice = w.price >= priceRange[0] && w.price <= priceRange[1];
      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [searchTerm, category, priceRange]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-24 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-serif">The Collection</h1>
        <p className="text-neutral-500 uppercase tracking-widest text-xs">Exquisite masterworks for the discerning collector</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Sidebar Filters */}
        <aside className="w-full md:w-64 space-y-8 sticky top-24">
          <div className="space-y-4">
            <h3 className="text-sm uppercase tracking-widest text-gold font-bold">Search</h3>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" size={16} />
              <input 
                type="text" 
                placeholder="Model, Brand..."
                className="w-full bg-neutral-900 border luxury-border px-10 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm uppercase tracking-widest text-gold font-bold">Category</h3>
            <div className="flex flex-wrap md:flex-col gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`text-left py-2 px-4 text-sm transition-all border ${category === cat ? 'bg-gold text-black border-gold' : 'border-white/5 hover:border-gold/50'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm uppercase tracking-widest text-gold font-bold">Price Range</h3>
            <div className="space-y-2">
              <input 
                type="range" 
                min="0" 
                max="150000" 
                step="5000"
                className="w-full accent-gold"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
              />
              <div className="flex justify-between text-[10px] text-neutral-500 uppercase tracking-widest">
                <span>$0</span>
                <span>Up to ${priceRange[1].toLocaleString()}</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <main className="flex-1">
          <div className="flex items-center justify-between mb-8 pb-4 border-b luxury-border">
            <p className="text-xs text-neutral-500 uppercase tracking-widest">{filteredWatches.length} Timepieces Found</p>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-400">
               <span>Sort By:</span>
               <select className="bg-transparent text-white focus:outline-none cursor-pointer">
                  <option className="bg-black">Newest Arrivals</option>
                  <option className="bg-black">Price: Low to High</option>
                  <option className="bg-black">Price: High to Low</option>
               </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {filteredWatches.map((watch) => (
              <div 
                key={watch.id} 
                className="group cursor-pointer flex flex-col"
                onClick={() => onSelectProduct(watch)}
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-neutral-900 border luxury-border mb-6">
                  <img 
                    src={watch.image} 
                    alt={watch.name} 
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                  <div className="absolute top-4 left-4">
                     <span className="bg-black/80 backdrop-blur-sm border luxury-border px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-gold">
                        {watch.category}
                     </span>
                  </div>
                </div>
                <p className="text-[10px] text-gold uppercase tracking-[0.3em] mb-2">{watch.brand}</p>
                <h3 className="text-xl font-serif mb-2 group-hover:text-gold transition-colors">{watch.name}</h3>
                <p className="font-serif text-lg text-neutral-300">${watch.price.toLocaleString()}</p>
                
                <button className="mt-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all border-b border-gold text-gold py-2 text-xs uppercase tracking-widest text-left inline-block w-fit">
                  View Specifications
                </button>
              </div>
            ))}
          </div>

          {filteredWatches.length === 0 && (
            <div className="text-center py-24 space-y-4">
              <p className="text-neutral-500 uppercase tracking-widest text-xs">No pieces matching your criteria.</p>
              <button onClick={() => { setSearchTerm(''); setCategory('All'); setPriceRange([0, 200000]); }} className="text-gold border-b border-gold pb-1 text-sm">Clear all filters</button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Shop;
