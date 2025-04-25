import React from 'react';
import { Link } from 'react-router-dom';

type Category = {
  name: string;
  image: string;
  link: string;
};

const categories: Category[] = [
  {
    name: "Men's Collection",
    image: "https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "/products?category=Men"
  },
  {
    name: "Women's Collection",
    image: "https://images.pexels.com/photos/3782788/pexels-photo-3782788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "/products?category=Women"
  },
  {
    name: "Kids' Collection",
    image: "https://images.pexels.com/photos/6153369/pexels-photo-6153369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "/products?category=Kids"
  }
];

const CategorySection = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop By Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our extensive collection of footwear for every occasion and style
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link 
              key={index}
              to={category.link} 
              className="group relative h-64 overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-1"
            >
              <img 
                src={category.image}
                alt={category.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <h3 className="text-white text-xl font-bold">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;