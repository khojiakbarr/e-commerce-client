# Online Store Client

This repository contains the client-side application for an online store. It is built with **React.js**, **MUI**, and **Axios** to provide a modern, responsive, and dynamic user experience.

## **Features**

- **User Authentication**: Supports login via Google OAuth, email/password, and Nodemailer email verification.
- **Admin Panel**: Admin users can manage products, view orders, and create new admin accounts.
- **Product Management**: Users can browse and view product details.
- **Responsive Design**: Built with **MUI** for responsive, mobile-friendly design.

---

## **Tech Stack**

- **React.js**: Frontend library for building user interfaces.
- **MUI**: Component library for responsive and accessible UI.
- **Axios**: HTTP client for making API requests to the backend.

---

## **Project Structure**

```
client/
  ├── public/                 # Static public files
  ├── src/
      ├── components/         # Reusable UI components (Navbar, LoginForm, etc.)
      ├── pages/              # Application pages (Home, AdminPanel, Login, etc.)
      ├── services/           # API service files (authService, productService)
      ├── App.js              # Main application entry point
      ├── index.js            # React entry point
      └── styles/             # Global styles (if needed)
```

---

## **Installation**

1. **Clone the repository**

```bash
git clone <repository-url>
cd client
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the development server**

```bash
npm start
```

The application will be available at **http://localhost:3000**.

---

## **Usage Instructions**

1. **Home Page**: Displays the list of products. Users can browse and click on a product to view its details.
2. **Login**: Users can log in using their email and password. Google OAuth is also supported.
3. **Admin Panel**: Accessible only to admin users, where they can view orders, manage products, and add new admin users.

---

## **Pages and Components**

### **Pages**

- **HomePage**: Displays a list of available products.
- **LoginPage**: Provides a login form for users to sign in.
- **AdminPanel**: Admin dashboard to manage products, orders, and users.
- **ProductPage**: Shows details of a specific product.

### **Components**

- **Navbar**: Provides navigation links to Home, Login, and Admin Panel.
- **ProductList**: Displays a list of products with clickable links.

---

## **Services (API Requests)**

### **src/services/authService.js**

Handles user authentication (login, register, logout).

```javascript
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

const login = (credentials) => axios.post(`${API_URL}/login`, credentials);
const register = (user) => axios.post(`${API_URL}/register`, user);

export default {
  login,
  register,
};
```

### **src/services/productService.js**

Handles product-related requests.

```javascript
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/products';

const getProducts = () => axios.get(API_URL);
const getProductById = (id) => axios.get(`${API_URL}/${id}`);
const addProduct = (product) => axios.post(API_URL, product);

export default {
  getProducts,
  getProductById,
  addProduct,
};
```

---

## **Available Scripts**

### **Start the Development Server**

```bash
npm start
```

Runs the app in development mode at **http://localhost:3000**. The page will reload if you make edits.

### **Build for Production**

```bash
npm run build
```

Builds the app for production to the `build` folder.

---

## **Authentication Flow**

1. **Login**: Users can log in using their email/password or Google OAuth.
2. **Protected Routes**: Some routes (like Admin Panel) are protected, meaning only authenticated users have access.
3. **Logout**: Users can log out, which clears their session and token.

---

## **Environment Variables**

Create a **.env** file in the root directory and add the following environment variables:

```
REACT_APP_API_URL=http://localhost:5000
```

> Replace **http://localhost:5000** with your backend API URL.

---

## **Deployment**

1. **Build the production version**:

```bash
npm run build
```

2. **Deploy to a web server** (like **Netlify**, **Vercel**, or **AWS S3**).

---

## **Key Features to Implement**

1. **Role-Based Access**: Restrict the Admin Panel to admin users only.
2. **JWT Integration**: Store the user's token after login to maintain authentication.
3. **Improved Error Handling**: Show user-friendly error messages for login failures.

---

## **License**

This project is open-source and licensed under the MIT License.
