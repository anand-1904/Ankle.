import React, { useState } from 'react';
import { Mail, Phone, Instagram, MapPin, Send } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    setFormStatus('success');
    setFormData({ name: '', email: '', message: '' });
    
    // Reset form status after 5 seconds
    setTimeout(() => {
      setFormStatus('idle');
    }, 5000);
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">Contact Us</h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions or feedback? We're here to help! Reach out to us using any of the methods below
            or fill out the contact form, and we'll get back to you as soon as possible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="bg-indigo-900 text-white rounded-lg p-8 h-full">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 mt-1 mr-4" />
                  <div>
                    <h3 className="text-md font-semibold mb-1">Phone</h3>
                    <p className="text-indigo-100">
                      <a href="tel:+919157684292" className="hover:text-white">+91 9157684292</a>
                    </p>
                    <p className="text-sm text-indigo-200 mt-1">
                      Monday to Saturday, 10am to 6pm
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 mt-1 mr-4" />
                  <div>
                    <h3 className="text-md font-semibold mb-1">Email</h3>
                    <p className="text-indigo-100">
                      <a href="mailto:upadhayay410@gmail.com" className="hover:text-white">
                        upadhayay410@gmail.com
                      </a>
                    </p>
                    <p className="text-sm text-indigo-200 mt-1">
                      We'll respond as quickly as possible
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Instagram className="h-6 w-6 mt-1 mr-4" />
                  <div>
                    <h3 className="text-md font-semibold mb-1">Social Media</h3>
                    <p className="text-indigo-100">
                      <a 
                        href="https://www.instagram.com/anand_410?igsh=MTFlNXl5Z3o2N2hsdw==" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-white"
                      >
                        @anand_410
                      </a>
                    </p>
                    <p className="text-sm text-indigo-200 mt-1">
                      Follow us for updates and promotions
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 mt-1 mr-4" />
                  <div>
                    <h3 className="text-md font-semibold mb-1">Store Location</h3>
                    <p className="text-indigo-100">123 Footwear Street</p>
                    <p className="text-indigo-100">Fashion District</p>
                    <p className="text-indigo-100">New Delhi, 110001</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-indigo-800">
                <h3 className="text-md font-semibold mb-3">Payment Method</h3>
                <p className="text-indigo-100 mb-1">UPI ID:</p>
                <p className="text-white font-medium">upadhayay410-1@oksbi</p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              
              {formStatus === 'success' ? (
                <div className="rounded-md bg-green-50 p-4 mb-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Send className="h-5 w-5 text-green-500" aria-hidden="true" />
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-green-800">Message sent!</h3>
                      <p className="mt-2 text-sm text-green-700">
                        Thank you for your message. We'll get back to you as soon as possible.
                      </p>
                    </div>
                  </div>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md font-medium hover:bg-indigo-700 transition-colors flex items-center justify-center"
                    >
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;