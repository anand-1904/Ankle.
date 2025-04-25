import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Sliders, X } from 'lucide-react';

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filterCategory, setFilterCategory] = useState<string | null>(categoryParam);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  const [showFilters, setShowFilters] = useState(false);
  
  // Extract all available categories from products
  const categories = Array.from(new Set(products.map(product => product.category)));

  useEffect(() => {
    // Reset filter categories if URL param changes
    setFilterCategory(categoryParam);
  }, [categoryParam]);

  useEffect(() => {
    let result = [...products];
    
    // Apply category filter
    if (filterCategory) {
      result = result.filter(product => product.category === filterCategory);
    }
    
    // Apply price range filter
    result = result.filter(
      product => product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    setFilteredProducts(result);
  }, [filterCategory, priceRange]);

  const clearFilters = () => {
    setFilterCategory(null);
    setPriceRange([0, 2000]);
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">
            {filterCategory ? `${filterCategory}'s Shoes` : 'All Products'}
          </h1>
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center text-indigo-600 bg-indigo-50 px-4 py-2 rounded-md md:hidden"
          >
            <Sliders className="w-5 h-5 mr-2" />
            Filters
          </button>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters - Desktop */}
          <div className="hidden md:block w-64 flex-shrink-0">
            <div className="sticky top-20">
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                  <button 
                    onClick={clearFilters}
                    className="text-sm text-indigo-600 hover:text-indigo-800"
                  >
                    Clear all
                  </button>
                </div>
                
                {/* Category Filter */}
                <div className="mb-6">
                  <h3 className="text-md font-medium text-gray-900 mb-3">Category</h3>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <div key={category} className="flex items-center">
                        <input
                          id={`category-${category}`}
                          name="category"
                          type="radio"
                          checked={filterCategory === category}
                          onChange={() => setFilterCategory(category)}
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor={`category-${category}`}
                          className="ml-3 text-sm text-gray-700"
                        >
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Price Range Filter */}
                <div>
                  <h3 className="text-md font-medium text-gray-900 mb-3">Price Range</h3>
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-2">
                      ₹{priceRange[0]} - ₹{priceRange[1]}
                    </p>
                    <input
                      type="range"
                      min="0"
                      max="2000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Filters - Mobile */}
          {showFilters && (
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 z-50 md:hidden">
              <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-xl p-6 overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                  <button onClick={() => setShowFilters(false)}>
                    <X className="h-6 w-6 text-gray-500" />
                  </button>
                </div>
                
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-md font-medium text-gray-900">Category</h3>
                    <button 
                      onClick={clearFilters}
                      className="text-sm text-indigo-600 hover:text-indigo-800"
                    >
                      Clear all
                    </button>
                  </div>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <div key={category} className="flex items-center">
                        <input
                          id={`mobile-category-${category}`}
                          name="category"
                          type="radio"
                          checked={filterCategory === category}
                          onChange={() => {
                            setFilterCategory(category);
                            setShowFilters(false);
                          }}
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label
                          htmlFor={`mobile-category-${category}`}
                          className="ml-3 text-sm text-gray-700"
                        >
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-md font-medium text-gray-900 mb-3">Price Range</h3>
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-2">
                      ₹{priceRange[0]} - ₹{priceRange[1]}
                    </p>
                    <input
                      type="range"
                      min="0"
                      max="2000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                </div>
                
                <button
                  onClick={() => setShowFilters(false)}
                  className="w-full mt-6 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          )}
          
          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-indigo-600 font-medium hover:text-indigo-800"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;