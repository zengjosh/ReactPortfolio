'use client'

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactsPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | 'loading' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending message...' });

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ 
          type: 'error', 
          message: data.error || 'Failed to send message. Please try again later.' 
        });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus({ 
        type: 'error', 
        message: 'Failed to send message. Please try again later.' 
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Me</h1>
        </div>

        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-md p-8 transform hover:-translate-y-1 transition-transform duration-300">
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Email</h3>
            </div>
            <p className="text-gray-600">joshzeng7@gmail.com</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 transform hover:-translate-y-1 transition-transform duration-300">
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Phone</h3>
            </div>
            <p className="text-gray-600">+1 (510) 258-2925</p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 transform hover:-translate-y-1 transition-transform duration-300">
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Location</h3>
            </div>
            <p className="text-gray-600">Dublin, CA</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-6">Send Me a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={status.type === 'loading'}
                className={`w-full btn bg-primary hover:bg-primary-dark text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all ${
                  status.type === 'loading' ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {status.type === 'loading' ? 'Sending...' : 'Send Message'}
                <Send className="ml-2 h-5 w-5 inline" />
              </button>
              {status.message && (
                <p className={`mt-4 text-center ${
                  status.type === 'success' ? 'text-green-600' :
                  status.type === 'error' ? 'text-red-600' :
                  'text-gray-700'
                }`}>
                  {status.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;