import React from 'react';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { getProductById } from '../data/products';
import { Trash, Plus, Minus } from 'lucide-react';

type CartItemProps = {
  id: number;
  quantity: number;
};

const CartItem = ({ id, quantity }: CartItemProps) => {
  const { increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart();
  const product = getProductById(id);
  
  if (!product) return null;

  return (
    <div className="flex items-center py-4 border-b border-gray-200">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <h3>{product.name}</h3>
          <p className="ml-4">₹{product.price * quantity}</p>
        </div>
        <p className="mt-1 text-sm text-gray-500">{product.category}</p>
        
        <div className="flex items-center justify-between text-sm mt-2">
          <div className="flex items-center border rounded-md">
            <button
              onClick={() => decreaseCartQuantity(id)}
              className="p-1 px-2 hover:bg-gray-100"
              disabled={quantity <= 1}
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="px-2">{quantity}</span>
            <button
              onClick={() => increaseCartQuantity(id)}
              className="p-1 px-2 hover:bg-gray-100"
              disabled={quantity >= product.stock}
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
          
          <button
            type="button"
            onClick={() => removeFromCart(id)}
            className="font-medium text-red-600 hover:text-red-500 flex items-center"
          >
            <Trash className="h-4 w-4 mr-1" />
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;