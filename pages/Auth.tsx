
import React, { useState } from 'react';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';

interface AuthProps {
  onLogin: (user: any) => void;
  type: 'login' | 'register' | 'forgot';
  onSwitch: (type: 'login' | 'register' | 'forgot') => void;
}

const Auth: React.FC<AuthProps> = ({ onLogin, type, onSwitch }) => {
  const [formData, setFormData] = useState({ email: '', password: '', name: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (type === 'forgot') {
        alert('Password reset link sent to your email.');
        onSwitch('login');
      } else {
        onLogin({
          id: '1',
          email: formData.email,
          name: formData.name || 'Julian Sterling',
          role: 'user'
        });
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px]" />
      
      <div className="w-full max-w-md space-y-12 relative z-10">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-serif">
            {type === 'login' && 'Private Access'}
            {type === 'register' && 'Become a Client'}
            {type === 'forgot' && 'Account Recovery'}
          </h2>
          <p className="text-neutral-500 uppercase tracking-widest text-[10px]">
            {type === 'login' && 'Enter your credentials to manage your collection'}
            {type === 'register' && 'Experience the world of fine horology'}
            {type === 'forgot' && 'Securing your assets through identity verification'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {type === 'register' && (
            <div className="relative group">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within:text-gold transition-colors" size={18} />
              <input
                required
                type="text"
                placeholder="Full Name"
                className="w-full bg-neutral-900/50 border luxury-border p-4 pl-12 text-sm focus:outline-none focus:border-gold transition-all"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
          )}
          
          <div className="relative group">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within:text-gold transition-colors" size={18} />
            <input
              required
              type="email"
              placeholder="Email Address"
              className="w-full bg-neutral-900/50 border luxury-border p-4 pl-12 text-sm focus:outline-none focus:border-gold transition-all"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          {type !== 'forgot' && (
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 group-focus-within:text-gold transition-colors" size={18} />
              <input
                required
                type="password"
                placeholder="Secure Password"
                className="w-full bg-neutral-900/50 border luxury-border p-4 pl-12 text-sm focus:outline-none focus:border-gold transition-all"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>
          )}

          <button 
            type="submit" 
            disabled={loading}
            className="w-full luxury-gradient py-4 text-black font-bold uppercase tracking-[0.2em] text-xs hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
          >
            {loading ? 'Processing...' : (
              <>
                {type === 'login' && 'Sign In'}
                {type === 'register' && 'Create Account'}
                {type === 'forgot' && 'Reset Password'}
                <ArrowRight size={16} />
              </>
            )}
          </button>
        </form>

        <div className="flex flex-col items-center gap-4 text-[10px] uppercase tracking-widest text-neutral-500">
          {type === 'login' ? (
            <>
              <button onClick={() => onSwitch('forgot')} className="hover:text-gold transition-colors">Forgot your password?</button>
              <div className="flex items-center gap-2">
                <span>Don't have an account?</span>
                <button onClick={() => onSwitch('register')} className="text-gold font-bold">Join us</button>
              </div>
            </>
          ) : (
            <button onClick={() => onSwitch('login')} className="hover:text-gold transition-colors">Back to Login</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
