export interface Product {
  id: number;
  name: string;
  brand: string;
  image: string;
  price: string;
  rating: number;
  features: Record<string, string>;
}
//sample data
export const productsData: Product[] = [
  {
    id: 1,
    name: 'iPhone 15 Pro',
    brand: 'Apple',
    image: 'https://images.unsplash.com/photo-1702289613007-8b830e2520b0?q=80&w=1170&auto=format&fit=crop',
    price: '₹78,999',
    rating: 4.8,
    features: {
      'Battery Life': '23 hours video',
      'Screen Size': '6.1 inches',
      'Storage': '128GB',
      'Camera': '48MP Triple',
      'Processor': 'A17 Pro',
      'RAM': '8GB',
      'Weight': '187g'
    }
  },
  {
    id: 2,
    name: 'Galaxy S24 Ultra',
    brand: 'Samsung',
    image: 'https://images.unsplash.com/photo-1707438095940-1eee18e85400?w=600&auto=format&fit=crop',
    price: '₹1,20,999',
    rating: 4.7,
    features: {
      'Battery Life': '28 hours video',
      'Screen Size': '6.8 inches',
      'Storage': '256GB',
      'Camera': '200MP Quad',
      'Processor': 'Snapdragon 8 Gen 3',
      'RAM': '12GB',
      'Weight': '232g'
    }
  },
  // {
  //   id: 3,
  //   name: 'Galaxy 21 FE',
  //   brand: 'Samsung',
  //   image: '',
  //   price: '₹45,000',
  //   rating: 4.0,
  //   features: {
  //     'Battery Life': '20 hours video',
  //     'Screen Size': '5.7 inches',
  //     'Storage': '256GB',
  //     'Camera': '40MP Dual',
  //     'Processor': 'Snapdragon 8+ Gen 1',
  //     'RAM': '12GB',
  //     'Weight': '201g'
  //   }
  // },
  {
    id: 3,
    name: 'Pixel 8 Pro',
    brand: 'Google',
    image: 'https://images.unsplash.com/photo-1706412703794-d944cd3625b3?w=600&auto=format&fit=crop',
    price: '₹69,999',
    rating: 4.6,
    features: {
      'Battery Life': '24 hours video',
      'Screen Size': '6.7 inches',
      'Storage': '128GB',
      'Camera': '50MP Triple',
      'Processor': 'Tensor G3',
      'RAM': '12GB',
      'Weight': '210g'
    }
  },
  {
    id: 4,
    name: 'OnePlus 12',
    brand: 'OnePlus',
    image: 'https://images.unsplash.com/photo-1527747471697-174c755627dd?w=600&auto=format&fit=crop',
    price: '₹68,999',
    rating: 4.5,
    features: {
      'Battery Life': '26 hours video',
      'Screen Size': '6.82 inches',
      'Storage': '256GB',
      'Camera': '50MP Triple',
      'Processor': 'Snapdragon 8 Gen 3',
      'RAM': '16GB',
      'Weight': '220g'
    }
  },
  {
    id: 5,
    name: 'Xperia 1 V',
    brand: 'Sony',
    image: 'https://images.unsplash.com/photo-1626427329308-a5dab712aea1?w=600&auto=format&fit=crop',
    price: '₹58,000',
    rating: 4.4,
    features: {
      'Battery Life': '22 hours video',
      'Screen Size': '6.5 inches',
      'Storage': '256GB',
      'Camera': '48MP Triple',
      'Processor': 'Snapdragon 8 Gen 2',
      'RAM': '12GB',
      'Weight': '187g'
    }
  },
  {
    id: 6,
    name: 'iPhone 15',
    brand: 'Apple',
    image: 'https://images.unsplash.com/photo-1695048133021-be2def43f3b2?w=600&auto=format&fit=crop',
    price: '₹71,000',
    rating: 4.7,
    features: {
      'Battery Life': '20 hours video',
      'Screen Size': '6.1 inches',
      'Storage': '128GB',
      'Camera': '48MP Dual',
      'Processor': 'A16 Bionic',
      'RAM': '6GB',
      'Weight': '171g'
    }
  },
  {
    id: 7,
    name: 'Galaxy S24',
    brand: 'Samsung',
    image: 'https://images.unsplash.com/photo-1719069162715-6bf88f5a2d52?w=600&auto=format&fit=crop',
    price: '₹88,800',
    rating: 4.5,
    features: {
      'Battery Life': '25 hours video',
      'Screen Size': '6.2 inches',
      'Storage': '128GB',
      'Camera': '50MP Triple',
      'Processor': 'Snapdragon 8 Gen 3',
      'RAM': '8GB',
      'Weight': '167g'
    }
  },
  {
    id: 8,
    name: 'Nothing Phone (2)',
    brand: 'Nothing',
    image: 'https://images.unsplash.com/photo-1721059537602-e844ccc60c94?w=600&auto=format&fit=crop',
    price: '₹65,000',
    rating: 4.3,
    features: {
      'Battery Life': '29 hours video',
      'Screen Size': '6.7 inches',
      'Storage': '256GB',
      'Camera': '50MP Dual',
      'Processor': 'Snapdragon 8+ Gen 1',
      'RAM': '12GB',
      'Weight': '201g'
    }
  }
];
