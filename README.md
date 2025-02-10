# 🛒 E-Commerce Project

## 📌 Project Overview
This is a e-commerce application that allows users to browse products, add items to their cart, and place orders. The platform includes user authentication, product management, and order tracking.

## 🚀 Features
- 🛍️ **Product Listing** – View a wide range of products with details.
- 🔍 **Search & Filter** – Easily find products using search and category filters.
- 🛒 **Shopping Cart** – Add, remove, and update items in the cart.
- 👤 **User Authentication** – Sign up, log in, and manage user profiles.
- 📦 **Order Management** – Users can place and track their orders.
- 🛠️ **Admin Panel** – Manage products, users, and orders.

## 🏗️ Tech Stack
- **Frontend**: HTML, CSS, EJS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose ORM)
- **Authentication**: JWT

## 📂 Folder Structure
```
ecommerce-project
│── backend/        # Backend API (Express.js)
│── models/         # Database models (Mongoose)
│── routes/         # API routes
│── public/         # Static assets (CSS, JS, images)
│── views/          # EJS templates
│── .env            # Environment variables
│── README.md       # Documentation
```

## 🔧 Installation & Setup
1. **Clone the repository**
   ```bash
   git clone https://github.com/am4352/ecommerce.git
   cd ecommerce
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**  
   Create a `.env` file in the project root and add:
   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. **Run the server**
   ```bash
   npm start
   ```

5. **Access the application**  
   - Frontend: `http://localhost:3000`
   - Backend API: `http://localhost:5000/api`

## 🛠️ Future Enhancements
- Implement payment gateway integration.
- Add real-time chat support.
- Implement AI-driven product recommendations.

## 🤝 Contributing
1. Fork the repository.
2. Create a new branch (`feature-branch`).
3. Commit your changes.
4. Push to your fork and create a pull request.

