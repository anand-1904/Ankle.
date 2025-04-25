import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Ankle</h2>
            <p className="text-gray-300 mb-4">
              Your one-stop destination for stylish and comfortable footwear.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/anand_410?igsh=MTFlNXl5Z3o2N2hsdw=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-indigo-300 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="mailto:upadhayay410@gmail.com"
                className="text-white hover:text-indigo-300 transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
              <a
                href="tel:+919157684292"
                className="text-white hover:text-indigo-300 transition-colors"
              >
                <Phone className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-gray-300 hover:text-white transition-colors">
                  Shopping Cart
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <a href="tel:+919157684292" className="hover:text-white transition-colors">
                  +91 9157684292
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <a href="mailto:upadhayay410@gmail.com" className="hover:text-white transition-colors">
                  upadhayay410@gmail.com
                </a>
              </li>
              <li className="mt-4">
                <h4 className="font-medium mb-2">Payment Method</h4>
                <p>UPI ID: upadhayay410-1@oksbi</p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-indigo-800 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Ankle. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;