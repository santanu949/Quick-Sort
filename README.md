# 🎬 Quick-Sort: Premium Movie & Theatre Booking System

[![React](https://img.shields.io/badge/React-19.2.0-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.18-38B2AC.svg)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A modern, high-performance web application built to simulate a real-world theatre and movie ticket booking experience. **Quick-Sort** (the project name) leverages cutting-edge frontend technologies to provide a seamless, interactive, and visually stunning user interface for movie enthusiasts.

---

## 📖 Overview

The **Quick-Sort Movie Booking System** solves the problem of complex and clunky ticket booking interfaces. By focusing on a "decision-first" UI, it allows users to quickly browse trending movies, watch trailers, and select seats through an intuitive, interactive theatre layout. The project aims to demonstrate advanced React patterns, state management, and seamless third-party integrations like Clerk for authentication.

### Core Idea
The application is designed to be fast, responsive, and developer-friendly, utilizing Vite's rapid HMR and Tailwind CSS 4's powerful styling capabilities to create a premium feel.

---

## ✨ Key Features

- **🎭 Interactive Seat Selection**: A realistic, theatre-style seating grid where users can select/deselect seats in real-time.
- **🔐 Secure Authentication**: Integrated with **Clerk** for robust user login, signup, and profile management.
- **🎥 Movie Discovery**: A dynamic home page featuring trending movies with high-quality posters and descriptions.
- **🎞️ Video Integration**: Watch movie trailers directly within the app using `react-player`.
- **📅 Booking Management**: A dedicated section to view and track your upcoming and past movie bookings.
- **💖 Favorites**: Save your most anticipated movies to a personalized "Favorite" list.
- **📱 Fully Responsive**: Optimized for a flawless experience across desktops, tablets, and mobile devices.
- **⚡ Blazing Fast**: Built on Vite 7 for near-instant load times and a smooth SPA (Single Page Application) experience.

---

## 🏗️ Project Structure

The project follows a modular architecture for scalability and ease of maintenance:

```text
Quick-Sort/
├── src/
│   ├── components/       # Reusable UI components (Navbar, Footer, Hero)
│   ├── pages/            # Main application views (Home, Movies, SeatLayout)
│   ├── assets/           # Static files and images
│   ├── App.jsx           # Main routing and layout configuration
│   └── main.jsx          # Entry point and provider setup
├── public/               # Public assets (logos, favicons)
├── .env                  # Environment variables (Clerk API keys)
├── tailwind.config.js    # Custom styling configurations
└── vite.config.js        # Vite build tool configuration
```

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 7](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Routing**: [React Router 7](https://reactrouter.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

### Tools & Libraries
- **Authentication**: [@clerk/clerk-react](https://clerk.com/)
- **Notifications**: [React Hot Toast](https://react-hot-toast.com/)
- **Video Player**: [React Player](https://github.com/cookpete/react-player)

---

## 🚀 Setup & Installation

Follow these steps to get the project running locally:

### Prerequisites
- **Node.js** (v18 or higher recommended)
- **npm** or **yarn**
- A **Clerk** account for authentication keys.

### Installation Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/Quick-Sort.git
   cd Quick-Sort
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the root directory and add your Clerk keys:
   ```env
   VITE_CLERK_PUBLISHABLE_KEY=your_publishable_key_here
   ```
   *(Refer to `.env.example` if available)*

4. **Start the Development Server**
   ```bash
   npm run dev
   ```

5. **Open the App**
   Navigate to `http://localhost:5173` in your browser.

---

## 📖 Usage

1. **Explore Movies**: Browse the featured movies on the Home page.
2. **View Details**: Click on any movie card to see detailed information, including the plot and trailer.
3. **Select Seats**: Click "Book Now" to enter the interactive seat layout. Choose your preferred seats (Green = Available, Grey = Occupied).
4. **Manage Bookings**: Access "My Bookings" from the navigation bar to see your confirmed tickets.
5. **Favorites**: Tap the heart icon on movie cards to add them to your personalized list.

---

## 🛠️ Development Status

This project is currently in **Active Development**. 
- [x] Core Booking Flow
- [x] User Authentication
- [ ] Backend Integration (Mocked data currently used)
- [ ] Payment Gateway Integration (Coming Soon)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

*Built with ❤️ by [Santanu Samanta](https://github.com/santanu949)*
