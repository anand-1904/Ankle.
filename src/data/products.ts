export type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  sizes?: string[];
  colors?: string[];
  featured?: boolean;
  bestSeller?: boolean;
  stock: number;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Men's Running Shoes",
    price: 1299,
    category: "Men",
    image: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Premium running shoes designed for comfort and performance. Lightweight construction with responsive cushioning for daily runners.",
    sizes: ["7", "8", "9", "10", "11"],
    colors: ["Black", "White", "Blue"],
    featured: true,
    bestSeller: true,
    stock: 25
  },
  {
    id: 2,
    name: "Women's Fashion Sneakers",
    price: 999,
    category: "Women",
    image: "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Stylish and comfortable sneakers for everyday wear. Perfect blend of fashion and function.",
    sizes: ["5", "6", "7", "8", "9"],
    colors: ["Pink", "White", "Grey"],
    featured: true,
    stock: 18
  },
  {
    id: 3,
    name: "Kids Sports Shoes",
    price: 699,
    category: "Kids",
    image: "https://images.pexels.com/photos/6153369/pexels-photo-6153369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Durable and comfortable sports shoes for active kids. Non-marking sole with extra cushioning.",
    sizes: ["3", "4", "5", "6"],
    colors: ["Blue", "Black", "Red"],
    stock: 30
  },
  {
    id: 4,
    name: "Men's Formal Shoes",
    price: 1599,
    category: "Men",
    image: "https://images.pexels.com/photos/267202/pexels-photo-267202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Classic formal shoes made with genuine leather. Perfect for business and formal occasions.",
    sizes: ["7", "8", "9", "10", "11"],
    colors: ["Black", "Brown"],
    bestSeller: true,
    stock: 15
  },
  {
    id: 5,
    name: "Women's Casual Flats",
    price: 899,
    category: "Women",
    image: "https://images.pexels.com/photos/3782786/pexels-photo-3782786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Comfortable casual flats with soft cushioning. Ideal for daily wear and light activities.",
    sizes: ["5", "6", "7", "8", "9"],
    colors: ["Beige", "Black", "Brown"],
    featured: true,
    stock: 22
  },
  {
    id: 6,
    name: "Unisex Sports Sandals",
    price: 599,
    category: "Unisex",
    image: "https://images.pexels.com/photos/6540927/pexels-photo-6540927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Durable sports sandals with adjustable straps. Perfect for outdoor activities and casual wear.",
    sizes: ["7", "8", "9", "10"],
    colors: ["Black", "Blue", "Grey"],
    stock: 40
  },
  {
    id: 7,
    name: "Men's Hiking Boots",
    price: 1899,
    category: "Men",
    image: "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Waterproof hiking boots with excellent traction. Designed for challenging terrains and long hikes.",
    sizes: ["8", "9", "10", "11"],
    colors: ["Brown", "Tan"],
    stock: 12
  },
  {
    id: 8,
    name: "Women's High Heels",
    price: 1299,
    category: "Women",
    image: "https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Elegant high heels for formal occasions. Features cushioned insole for added comfort.",
    sizes: ["5", "6", "7", "8"],
    colors: ["Black", "Red", "Nude"],
    bestSeller: true,
    stock: 15
  }
];

export function getProductById(id: number): Product | undefined {
  return products.find(product => product.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(product => product.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter(product => product.featured);
}

export function getBestSellerProducts(): Product[] {
  return products.filter(product => product.bestSeller);
}