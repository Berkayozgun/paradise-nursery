# Paradise Nursery Shopping Application

This project was developed as a final project to earn the certificate for the course **Developing Front End Apps with React** offered by **edX** and **IBM** (Course Code: CAD0210EN).

## Project Overview

The Paradise Nursery Shopping Application is a front-end application built using React and Vite. It allows users to browse products, add them to a cart, and manage their shopping cart.

## Course Details

- **Course Name**: Developing Front End Apps with React
- **Platform**: edX
- **Provider**: IBM
- **Course Code**: CAD0210EN

### Course Progress

- **Module 1**: Introduction to React and Class Components
- **Module 2**: Understanding Function Components with Array and DOM Manipulation
- **Module 3**: In-depth Understanding of Advanced React Functionality
- **Module 4**: Final Project - Paradise Nursery Shopping Application

## Main Components and Files

- **src/store/store.js**: Configures the Redux store and includes the `cartReducer`.
- **src/features/cart/cartSlice.js**: Defines the Redux slice for cart operations, including adding, removing, and updating product quantities.
- **src/components/Header.jsx**: The header component of the application, displaying the total number of items in the cart.
- **src/pages/ProductsPage.jsx**: The page where products are listed, allowing filtering by category and adding products to the cart.
- **src/pages/CartPage.jsx**: The page where users can view and manage their cart.
- **src/pages/LandingPage.jsx**: The landing page of the application, directing users to the products page.
- **src/pages/CheckoutPage.jsx**: The page where users can complete their purchase and download an invoice.
- **src/main.jsx**: The entry point of the application, containing configurations for React, Redux, and React Router.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Redux Toolkit**: A set of tools for managing application state.
- **React Router**: Used for routing within the application.
- **Tailwind CSS**: A CSS framework for quickly building custom designs.
- **Vite**: A build tool for fast development and build processes.

## Installation and Running

To get started with the project, follow these steps:

1. **Clone the repository**:
   ```sh
   git clone https://github.com/your-username/paradise-nursery.git
   cd paradise-nursery
   ```
2. **Install dependencies**:
   ```sh
   npm install
   ```
3. **Run the development server**:
   ```sh
   npm run dev
   ```
4. **Build for production**:
   ```sh
   npm run build
   ```
5. **Preview the production build**:
   ```sh
   npm run preview
   ```

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request. We welcome all contributions!

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Contact

For any questions or feedback, please contact berkayozgun001@gmail.com

