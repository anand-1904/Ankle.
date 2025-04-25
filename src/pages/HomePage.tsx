import React from 'react';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import { Link } from 'react-router-dom';
import { Check, TruckIcon, RefreshCw, ShieldCheck } from 'lucide-react';
import { getBestSellerProducts } from '../data/products';
import ProductCard from '../components/ProductCard';

const HomePage = () => {
  const bestSellers = getBestSellerProducts();

  return (
    <div>
      <Hero />
      
      {/* Categories Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop By Category</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse our extensive collection of footwear for every occasion and style
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link 
              to="/products?category=Men" 
              className="group relative h-64 overflow-hidden rounded-lg shadow-md"
            >
              <img 
                src="https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Men's Shoes" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <h3 className="text-white text-xl font-bold">Men's Collection</h3>
              </div>
            </Link>
            
            <Link 
              to="/products?category=Women" 
              className="group relative h-64 overflow-hidden rounded-lg shadow-md"
            >
              <img 
                src="https://images.pexels.com/photos/3782788/pexels-photo-3782788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Women's Shoes" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <h3 className="text-white text-xl font-bold">Women's Collection</h3>
              </div>
            </Link>
            
            <Link 
              to="/products?category=Kids" 
              className="group relative h-64 overflow-hidden rounded-lg shadow-md"
            >
              <img 
                src="https://images.pexels.com/photos/6153369/pexels-photo-6153369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Kids' Shoes" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <h3 className="text-white text-xl font-bold">Kids' Collection</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>
      
      <FeaturedProducts />
      
      {/* Best Sellers Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Best Sellers</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our most popular products that customers love
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <TruckIcon className="h-10 w-10 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Free Shipping</h3>
              <p className="text-gray-600">On all orders above ₹999</p>
            </div>
            
            <div className="text-center p-6">
              <ShieldCheck className="h-10 w-10 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Secure Payments</h3>
              <p className="text-gray-600">100% secure payment</p>
            </div>
            
            <div className="text-center p-6">
              <RefreshCw className="h-10 w-10 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Easy Returns</h3>
              <p className="text-gray-600">10 days return policy</p>
            </div>
            
            <div className="text-center p-6">
              <Check className="h-10 w-10 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Quality Products</h3>
              <p className="text-gray-600">Premium quality assured</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;