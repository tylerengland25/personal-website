'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setSubmitStatus({
        type: 'success',
        message: 'Message sent successfully! I will get back to you soon.',
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message:
          error instanceof Error
            ? error.message
            : 'Failed to send message. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-gray-900/80 rounded-lg p-6
        shadow-xl shadow-black/50 backdrop-blur-md
        border border-gray-800/50"
    >
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-200"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border border-gray-800
                   bg-gray-900/50 px-3 py-2 text-gray-100
                   focus:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500
                   placeholder-gray-500"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-200"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border border-gray-800
                   bg-gray-900/50 px-3 py-2 text-gray-100
                   focus:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500
                   placeholder-gray-500"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-200"
        >
          Message
        </label>
        <textarea
          name="message"
          id="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border border-gray-800
                   bg-gray-900/50 px-3 py-2 text-gray-100
                   focus:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500
                   placeholder-gray-500"
        />
      </div>

      {submitStatus.type && (
        <div
          className={`p-4 rounded-md ${
            submitStatus.type === 'success'
              ? 'bg-green-900/30 text-green-200 border border-green-800/50'
              : 'bg-red-900/30 text-red-200 border border-red-800/50'
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-md bg-white/10 px-4 py-2
                 text-white font-medium border border-gray-800
                 hover:bg-white/20
                 focus:outline-none focus:ring-2 focus:ring-neutral-500
                 focus:ring-offset-2 focus:ring-offset-gray-900
                 disabled:opacity-50 disabled:cursor-not-allowed
                 transition-colors"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
