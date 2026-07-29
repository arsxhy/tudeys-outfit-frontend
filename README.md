# Tudey's Outfit - Frontend

This is the frontend repository for **Tudey's Outfit**, a premium e-commerce platform built with modern web technologies focusing on a luxurious user experience.

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **State Management:** React Context API (Cart, Auth, Account Data)
- **Icons:** Lucide React

## ✨ Features

- 🌓 **Premium UI/UX:** Champagne gold and dark mode aesthetic for a luxurious shopping experience.
- 🌍 **Bilingual Support:** Full English (EN) and Indonesian (ID) localization via URL parameters.
- 🛍️ **E-Commerce Essentials:** Product listing, dynamic product details, wishlist, and shopping cart.
- 🔐 **Authentication:** JWT-based user authentication (Login, Register, Profile).
- 💳 **Checkout:** Integrated with Xendit Payment Gateway simulator.
- 📦 **Order Management:** View recent orders, order history, and dynamic status updates.

## ⚙️ Setup & Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Environment Variables:**
   Create a `.env.local` file in the root directory and add the backend API URL:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:3001
   ```
   *(For production on Vercel, set this variable in the Vercel Dashboard to point to your hosted backend).*

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🌐 Deployment (Vercel)

This frontend is optimized for deployment on Vercel. 
Simply import this repository into your Vercel account, set the `NEXT_PUBLIC_API_URL` environment variable, and hit Deploy!
