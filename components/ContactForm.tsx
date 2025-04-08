"use client";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent!"); // Replace with actual submission logic
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#060A0F] text-black dark:text-white px-8 md:px-20 py-10">
      <h1 className="text-3xl md:text-5xl font-bold">
        How can I be of{" "}
        <span className="text-gray-600 dark:text-gray-400">service</span>?
      </h1>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-black dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-black dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-black dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full p-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-black dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          required
        />
        <button
          type="submit"
          className="px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 dark:bg-gray-600 dark:hover:bg-gray-500 transition"
        >
          Hit me up!
        </button>
      </form>
    </div>
  );
}
