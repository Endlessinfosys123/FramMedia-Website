export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: "premade" | "custom" | "gift";
  description: string;
  size?: string[];
  colors?: string[];
  isFeatured?: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Classic Oak Portrait",
    price: 1299,
    image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=2080&auto=format&fit=crop",
    category: "premade",
    description: "Handcrafted natural oak frame with a timeless finish.",
    size: ["4x6", "5x7", "8x10"],
    colors: ["Natural", "Dark Oak", "White Wash"],
    isFeatured: true,
  },
  {
    id: "2",
    name: "Modern Charcoal Square",
    price: 1599,
    image: "https://images.unsplash.com/photo-1544411047-c491574abbde?q=80&w=2070&auto=format&fit=crop",
    category: "premade",
    description: "Sleek minimalist frame in deep charcoal for modern spaces.",
    size: ["8x8", "10x10", "12x12"],
    colors: ["Charcoal", "Matte Black"],
    isFeatured: true,
  },
  {
    id: "3",
    name: "Vintage Gold Filigree",
    price: 2499,
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=2070&auto=format&fit=crop",
    category: "gift",
    description: "Ornate gold-finished frame with intricate floral patterns.",
    size: ["5x7", "8x10"],
    colors: ["Classic Gold", "Antique Gold"],
    isFeatured: true,
  },
  {
    id: "4",
    name: "Rosewood Memory Box",
    price: 3499,
    image: "https://images.unsplash.com/photo-1534349762230-e0cadf78f5db?q=80&w=2070&auto=format&fit=crop",
    category: "gift",
    description: "Premium rosewood box to store your most cherished items.",
    isFeatured: true,
  },
  {
    id: "5",
    name: "Brushed Silver Gallery",
    price: 1899,
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1974&auto=format&fit=crop",
    category: "premade",
    description: "Contemporary brushed silver frame for a professional gallery look.",
    size: ["11x14", "16x20"],
    isFeatured: true,
  },
  {
    id: "6",
    name: "Bespoke Engraved Walnut",
    price: 4999,
    image: "https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?q=80&w=2070&auto=format&fit=crop",
    category: "custom",
    description: "Fully customizable walnut frame with personalized laser engraving.",
    isFeatured: true,
  },
];
