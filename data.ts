
import { Watch } from './types';

export const WATCHES: Watch[] = [
  {
    id: '1',
    name: 'Aethelgard Heritage',
    brand: 'Vacheron Constantin',
    price: 42500,
    description: 'A masterpiece of understated elegance, featuring a handcrafted enamel dial and an ultra-thin automatic movement.',
    category: 'Classic',
    image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=800&auto=format&fit=crop',
    specs: {
      movement: 'Calibre 2460 Q5',
      case: '18K Pink Gold',
      strap: 'Alligator Leather',
      waterResistance: '30m'
    }
  },
  {
    id: '2',
    name: 'Nautilus Chronograph',
    brand: 'Patek Philippe',
    price: 85000,
    description: 'The pinnacle of luxury sports watches, with its distinctive octagonal bezel and exquisite blue sunburst dial.',
    category: 'Sport',
    image: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=800&auto=format&fit=crop',
    specs: {
      movement: 'Calibre CH 28-520 C',
      case: 'Stainless Steel',
      strap: 'Integrated Bracelet',
      waterResistance: '120m'
    }
  },
  {
    id: '3',
    name: 'Royal Oak Offshore',
    brand: 'Audemars Piguet',
    price: 38900,
    description: 'Bold and revolutionary, this timepiece combines ceramic materials with a high-performance flyback chronograph.',
    category: 'Sport',
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=800&auto=format&fit=crop',
    specs: {
      movement: 'Calibre 4401',
      case: 'Black Ceramic',
      strap: 'Rubber',
      waterResistance: '100m'
    }
  },
  {
    id: '4',
    name: 'Celestial Grand',
    brand: 'Lange & Söhne',
    price: 125000,
    description: 'A mechanical wonder featuring a moon phase display and a perpetual calendar, finished with German silver bridges.',
    category: 'Complication',
    image: 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=800&auto=format&fit=crop',
    specs: {
      movement: 'L095.3 Manual',
      case: 'Platinum',
      strap: 'Hand-stitched Leather',
      waterResistance: 'Splash Proof'
    }
  },
  {
    id: '5',
    name: 'Submariner Date',
    brand: 'Rolex',
    price: 14500,
    description: 'The archetype of the diver\'s watch, featuring a ceramic Cerachrom bezel and Chromalight display.',
    category: 'Sport',
    image: 'https://images.unsplash.com/photo-1587836374828-4dbaba94cf0e?q=80&w=800&auto=format&fit=crop',
    specs: {
      movement: 'Perpetual 3235',
      case: 'Oystersteel',
      strap: 'Oyster Bracelet',
      waterResistance: '300m'
    }
  },
  {
    id: '6',
    name: 'Luminor Marina',
    brand: 'Panerai',
    price: 9200,
    description: 'A tribute to the history of the Italian Navy, known for its sandwich dial and iconic crown guard.',
    category: 'Vintage',
    image: 'https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?q=80&w=800&auto=format&fit=crop',
    specs: {
      movement: 'P.9010 Calibre',
      case: 'Brushed Steel',
      strap: 'Scamosciato Leather',
      waterResistance: '300m'
    }
  }
];
