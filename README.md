# Food Delivery Web Application

A modern, full-featured food delivery web application built with React, featuring restaurant discovery, menu browsing, and shopping cart functionality. This project demonstrates proficiency in modern React development, state management, routing, and API integration.

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?logo=react)
![Redux](https://img.shields.io/badge/Redux_Toolkit-2.11.0-764ABC?logo=redux)
![React Router](https://img.shields.io/badge/React_Router-7.9.3-CA4245?logo=react-router)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.17-38B2AC?logo=tailwind-css)

## 🚀 Features

### Core Functionality
- **Restaurant Discovery**: Browse restaurants with real-time search and filtering capabilities
- **Restaurant Menu**: Dynamic menu pages with accordion-style category navigation
- **Shopping Cart**: Full cart functionality with add, remove, and clear operations
- **User Authentication**: Context-based user management system
- **Online/Offline Detection**: Graceful handling of network connectivity status

### Technical Features
- **Code Splitting & Lazy Loading**: Optimized performance with dynamic imports
- **State Management**: Redux Toolkit for centralized cart and application state
- **Routing**: React Router DOM with nested routes and dynamic routing
- **Responsive Design**: Modern UI built with Tailwind CSS
- **Error Handling**: Comprehensive error boundaries and fallback UI
- **Higher-Order Components**: Reusable component patterns for enhanced functionality

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.1
- **State Management**: Redux Toolkit 2.11.0
- **Routing**: React Router DOM 7.9.3
- **Styling**: Tailwind CSS 4.1.17
- **Build Tool**: Parcel 2.15.4
- **Language**: JavaScript (ES6+)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Sethuselvi/namaste_react.git
cd namaste_react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run start
```

4. Open your browser and navigate to `http://localhost:1234`

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── Header.js       # Navigation header
│   ├── Body.js         # Restaurant listing with search
│   ├── RestaurantCard.js    # Individual restaurant card
│   ├── RestaurantMenu.js    # Restaurant menu page
│   ├── RestaurantCategories.js  # Menu category accordions
│   ├── Cart.js         # Shopping cart component
│   ├── ItemList.js     # Cart item list
│   ├── Shimmer.js      # Loading skeleton UI
│   └── ...
├── utils/              # Utility functions and configurations
│   ├── appStore.js     # Redux store configuration
│   ├── cartSlice.js    # Redux cart slice
│   ├── UserContext.js  # React Context for user state
│   ├── useOnlineStatus.js  # Custom hook for network status
│   └── ...
└── App.js              # Main application component
```

## 🎯 Key Features Explained

### Restaurant Search & Filtering
- Real-time search functionality to find restaurants by name
- Filter restaurants by rating (Top Rated Restaurants)
- Dynamic restaurant cards with promoted labels using HOC pattern

### Shopping Cart
- Add items to cart from restaurant menus
- Remove items and clear entire cart
- Persistent cart state using Redux Toolkit
- Real-time cart updates across components

### Performance Optimizations
- **Lazy Loading**: About and Grocery components loaded on-demand
- **Code Splitting**: Reduced initial bundle size for faster load times
- **Shimmer UI**: Loading states for better user experience

### Routing
- Home page with restaurant listings
- Dynamic restaurant menu pages (`/restaurant/:resId`)
- Shopping cart page (`/cart`)
- About and Contact pages
- Error page for 404 handling

## 🔧 Available Scripts

- `npm start` - Start development server with hot module replacement
- `npm run build` - Build production-ready optimized bundle
- `npm test` - Run test suite (Jest)

## 🌐 API Integration

The application integrates with external APIs for restaurant data. The implementation includes:
- CORS proxy handling for cross-origin requests
- Real-time data fetching and state updates
- Error handling for API failures

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop browsers
- Tablet devices
- Mobile devices

## 🚀 Deployment

To build for production:
```bash
npm run build
```

The production build will be available in the `dist/` directory, ready for deployment to platforms like:
- Netlify
- Vercel
- GitHub Pages
- AWS S3

## 🎓 Learning Outcomes

This project demonstrates:
- Modern React development with hooks and functional components
- Advanced state management with Redux Toolkit
- Client-side routing and navigation
- API integration and data fetching
- Performance optimization techniques
- Component composition and reusability
- Responsive web design principles

## 📝 License

ISC

## 👤 Author

**Sethuselvi**

- GitHub: [@Sethuselvi](https://github.com/Sethuselvi)
- Repository: [namaste_react](https://github.com/Sethuselvi/namaste_react)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Sethuselvi/namaste_react/issues).

---

⭐ If you found this project helpful, please consider giving it a star!
