
export interface Watch {
  id: string;
  name: string;
  brand: string;
  price: number;
  description: string;
  category: 'Classic' | 'Sport' | 'Complication' | 'Vintage';
  image: string;
  specs: {
    movement: string;
    case: string;
    strap: string;
    waterResistance: string;
  };
}

export interface CartItem extends Watch {
  quantity: number;
}

export interface Order {
  id: string;
  date: string;
  items: CartItem[];
  total: number;
  status: 'Pending' | 'Shipped' | 'Delivered' | 'Cancelled';
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
  addresses: string[];
}
