import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { getProductById } from '../data/products';
import { ShoppingBag, Heart, Share2, Check, Star, Truck } from 'lucide-react';

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { increaseCartQuantity, getItemQuantity } = useShoppingCart();
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  
  const product = id ? getProductById(parseInt(id)) : null;
  const quantity = id ? getItemQuantity(parseInt(id)) : 0;
  
  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
        <p className="text-gray-600 mb-6">The product you're looking for doesn't exist or has been removed.</p>
        <button
          onClick={() => navigate('/products')}
          className="bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors"
        >
          Browse Products
        </button>
      </div>
    );
  }
  
  const handleAddToCart = () => {
    if (product.sizes && !selectedSize) {
      alert('Please select a size');
      return;
    }
    
    if (product.colors && !selectedColor) {
      alert('Please select a color');
      return;
    }
    
    increaseCartQuantity(product.id);
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="lg:sticky lg:top-20 lg:h-fit">
            <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          
          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <p className="mt-2 text-gray-500">{product.category}</p>
            
            <div className="mt-4 flex items-center">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill={i < 4 ? 'currentColor' : 'none'}
                  />
                ))}
              </div>
              <p className="ml-2 text-sm text-gray-500">4.0 (24 reviews)</p>
            </div>
            
            <div className="mt-6">
              <h2 className="text-2xl font-bold text-gray-900">₹{product.price}</h2>
              <p className="mt-1 text-sm text-gray-500">
                Inclusive of all taxes
              </p>
            </div>
            
            {/* Size Selector */}
            {product.sizes && (
              <div className="mt-8">
                <h3 className="text-md font-medium text-gray-900">Size</h3>
                <div className="mt-2 grid grid-cols-6 gap-2">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      type="button"
                      className={`border ${
                        selectedSize === size
                          ? 'bg-indigo-600 text-white border-indigo-600'
                          : 'border-gray-300 text-gray-900 hover:bg-gray-50'
                      } rounded-md p-2 text-sm font-medium focus:outline-none`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Color Selector */}
            {product.colors && (
              <div className="mt-8">
                <h3 className="text-md font-medium text-gray-900">Color</h3>
                <div className="mt-2 flex space-x-3">
                  {product.colors.map(color => (
                    <button
                      key={color}
                      type="button"
                      className={`relative h-8 w-8 rounded-full border ${
                        selectedColor === color ? 'ring-2 ring-indigo-600' : ''
                      }`}
                      style={{ backgroundColor: color.toLowerCase() }}
                      onClick={() => setSelectedColor(color)}
                    >
                      <span className="sr-only">{color}</span>
                      {selectedColor === color && (
                        <span className="absolute inset-0 flex items-center justify-center">
                          <Check 
                            className={`h-4 w-4 ${
                              ['White', 'Beige', 'Yellow'].includes(color) ? 'text-gray-900' : 'text-white'
                            }`} 
                          />
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Description */}
            <div className="mt-8">
              <h3 className="text-md font-medium text-gray-900">Description</h3>
              <p className="mt-2 text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>
            
            {/* Stock Info */}
            <div className="mt-6 flex items-center">
              <Check className="h-5 w-5 text-green-500" />
              <p className="ml-2 text-sm text-gray-600">
                In stock - {product.stock} items available
              </p>
            </div>
            
            {/* Shipping Info */}
            <div className="mt-2 flex items-center">
              <Truck className="h-5 w-5 text-indigo-600" />
              <p className="ml-2 text-sm text-gray-600">
                Free shipping on orders above ₹999
              </p>
            </div>
            
            {/* Actions */}
            <div className="mt-8 flex space-x-4">
              <button
                type="button"
                onClick={handleAddToCart}
                className="flex-1 flex items-center justify-center bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors"
              >
                <ShoppingBag className="mr-2 h-5 w-5" />
                Add to Cart {quantity > 0 && `(${quantity})`}
              </button>
              
              <button
                type="button"
                className="flex items-center justify-center border border-gray-300 px-4 py-3 rounded-md hover:bg-gray-50 transition-colors"
              >
                <Heart className="h-5 w-5 text-gray-400" />
              </button>
              
              <button
                type="button"
                className="flex items-center justify-center border border-gray-300 px-4 py-3 rounded-md hover:bg-gray-50 transition-colors"
              >
                <Share2 className="h-5 w-5 text-gray-400" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;