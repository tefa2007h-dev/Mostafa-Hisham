
import React from 'react';
import { Package, MapPin, User, LogOut, Settings } from 'lucide-react';

interface DashboardProps {
  user: any;
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ user, onLogout }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-24 space-y-16">
      <div className="flex items-end justify-between border-b luxury-border pb-8">
        <div className="space-y-2">
           <p className="text-gold uppercase tracking-[0.5em] text-[10px]">Private Client</p>
           <h1 className="text-4xl font-serif italic">Bienvenue, {user.name}</h1>
        </div>
        <button onClick={onLogout} className="flex items-center gap-2 text-neutral-500 hover:text-red-500 transition-colors uppercase tracking-widest text-xs">
           <LogOut size={16} /> Sign Out
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <aside className="space-y-2">
          {['Portfolio', 'Addresses', 'Preferences', 'Concierge'].map((item, idx) => (
            <button 
              key={item}
              className={`w-full text-left px-6 py-4 text-xs uppercase tracking-[0.2em] transition-all border ${idx === 0 ? 'bg-neutral-900 border-gold text-gold' : 'border-white/5 hover:border-white/20'}`}
            >
              {item}
            </button>
          ))}
        </aside>

        <main className="md:col-span-3 space-y-12">
          {/* Order History */}
          <section className="space-y-6">
            <h2 className="text-xl font-serif flex items-center gap-2">
              <Package size={20} className="text-gold" /> Past Acquisitions
            </h2>
            <div className="space-y-4">
              <div className="bg-neutral-900/30 border luxury-border p-8 rounded-sm flex flex-col md:flex-row justify-between items-center gap-8 group hover:border-gold transition-colors">
                <div className="flex gap-6 items-center">
                   <div className="w-16 h-16 bg-black border luxury-border">
                      <img src="https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=200" alt="Watch" className="w-full h-full object-cover opacity-50" />
                   </div>
                   <div>
                      <p className="text-[10px] text-neutral-500 uppercase tracking-widest">Order #CX-90210 • May 14, 2024</p>
                      <h4 className="font-serif text-lg">Nautilus Chronograph</h4>
                      <p className="text-xs text-gold uppercase tracking-widest">Delivered</p>
                   </div>
                </div>
                <div className="text-right">
                   <p className="text-2xl font-serif">$85,000</p>
                   <button className="text-[10px] uppercase tracking-widest text-gold border-b border-gold mt-2">Download Certificate</button>
                </div>
              </div>
            </div>
          </section>

          {/* Profile Details */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-neutral-900/30 border luxury-border p-8 space-y-6">
              <h3 className="text-xs uppercase tracking-[0.3em] text-gold font-bold flex items-center gap-2">
                <User size={16} /> Personal Dossier
              </h3>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between border-b luxury-border pb-2">
                  <span className="text-neutral-500 uppercase text-[10px]">Name</span>
                  <span>{user.name}</span>
                </div>
                <div className="flex justify-between border-b luxury-border pb-2">
                  <span className="text-neutral-500 uppercase text-[10px]">Email</span>
                  <span>{user.email}</span>
                </div>
                <div className="flex justify-between border-b luxury-border pb-2">
                  <span className="text-neutral-500 uppercase text-[10px]">Member Since</span>
                  <span>January 2024</span>
                </div>
              </div>
              <button className="w-full border luxury-border py-3 text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all">Update Information</button>
            </div>

            <div className="bg-neutral-900/30 border luxury-border p-8 space-y-6">
              <h3 className="text-xs uppercase tracking-[0.3em] text-gold font-bold flex items-center gap-2">
                <MapPin size={16} /> Secure Locations
              </h3>
              <div className="space-y-2">
                <p className="text-sm font-bold">Primary Residence</p>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  742 Evergreen Terrace<br />
                  Beverly Hills, CA 90210<br />
                  United States
                </p>
              </div>
              <button className="w-full border luxury-border py-3 text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all">Manage Addresses</button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
