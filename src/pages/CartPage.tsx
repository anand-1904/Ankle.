import React from 'react';
import { Link } from 'react-router-dom';
import { useShoppingCart } from '../context/ShoppingCartContext';
import CartItem from '../components/CartItem';
import { getProductById } from '../data/products';
import { ShoppingBag } from 'lucide-react';

const CartPage = () => {
  const { cartItems } = useShoppingCart();
  
  const cartTotal = cartItems.reduce((total, cartItem) => {
    const product = getProductById(cartItem.id);
    return total + (product?.price || 0) * cartItem.quantity;
  }, 0);
  
  const shippingFee = cartTotal >= 999 ? 0 : 99;
  const totalAmount = cartTotal + shippingFee;

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <ShoppingBag className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-medium text-gray-900 mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Looks like you haven't added any products to your cart yet.</p>
            <Link
              to="/products"
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Cart Items ({cartItems.length})</h2>
                {cartItems.map(item => (
                  <CartItem key={item.id} id={item.id} quantity={item.quantity} />
                ))}
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 sticky top-20">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <p className="text-gray-600">Subtotal</p>
                    <p className="font-medium">₹{cartTotal.toFixed(2)}</p>
                  </div>
                  
                  <div className="flex justify-between">
                    <p className="text-gray-600">Shipping</p>
                    <p className="font-medium">
                      {shippingFee === 0 ? 'Free' : `₹${shippingFee.toFixed(2)}`}
                    </p>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <div className="flex justify-between">
                      <p className="text-lg font-semibold">Total</p>
                      <p className="text-lg font-bold text-indigo-900">₹{totalAmount.toFixed(2)}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Link
                    to="/checkout"
                    className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md font-medium hover:bg-indigo-700 transition-colors flex items-center justify-center"
                  >
                    Proceed to Checkout
                  </Link>
                  
                  <Link
                    to="/products"
                    className="w-full mt-4 text-indigo-600 border border-indigo-600 py-3 px-4 rounded-md font-medium hover:bg-indigo-50 transition-colors flex items-center justify-center"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;