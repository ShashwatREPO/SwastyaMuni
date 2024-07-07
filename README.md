# 🌿 Welcome to SwastyaMuni! 🌟

## 📚 Project Overview
SwastyaMuni is an innovative online platform that provides users with health and medical recommendations from an Ayurvedic standpoint. By leveraging Gmeini and Rag, we aim to address users' health concerns with holistic and natural Ayurvedic solutions.

## 🚀 Getting Started

### 📋 Prerequisites
Before you begin, make sure you have the following 💻:
- Node.js installed on your local machine
- MongoDB connection string
- JWT secret key

### 💾 Installation
1. Clone the repository using the following command:
   ```bash
   git clone https://github.com/YourUsername/SwastyaMuni.git
   ```
   or 
   ```bash
   gh repo clone ShashwatREPO/SwastyaMuni
   ```
2. Create a `.env` file in the root directory of the project. Add your MongoDB connection string and JWT secret key to this file.

### 🏃‍♂️ Running the Application
1. Start the server by running the following command in the terminal:
   ```bash
   cd Backend
   nodemon server.js
   ```
2. Navigate to the Frontend directory and start the React app:
   ```bash
   cd Frontend
   npm start
   ```

## 🌐 API Routes

### User Routes

1. **User Signup**: Route to create users for the first time.
   - Route: `http://localhost:3000/user/signup`
   - Method: `POST`
   - Request Body:
     ```json
     {
         "fullName": "John Doe",
         "email": "john@example.com",
         "password": "securePassword123"
     }
     ```
   - Response:
     ```json
     {
         "message": "User created successfully",
         "_id": "60d0fe4f5311236168a109ca"
     }
     ```

2. **User Login**: Route to login users.
   - Route: `http://localhost:3000/user/login`
   - Method: `POST`
   - Request Body:
     ```json
     {
         "email": "john@example.com",
         "password": "securePassword123"
     }
     ```
   - Response:
     ```json
     {
         "msg": "Login successful"
     }
     ```

3. **Add User Data**: Route to add additional user data.
   - Route: `http://localhost:3000/user/addData`
   - Method: `POST`
   - Request Body:
     ```json
     {
         "age": 30,
         "allergies": "None",
         "pastDiseases": "None",
         "currentCondition": "Healthy"
     }
     ```
   - Response:
     ```json
     {
         "msg": "User data added successfully"
     }
     ```

## 🛠️ Middleware

### Token Authentication Middleware
Ensure routes are protected and only accessible to authenticated users.

```javascript
const { verifyToken } = require("./authOps");

function authenticateToken(req, res, next) {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({
            message: "Unauthorized Access"
        });
    }
    const decoded = verifyToken(token);
    if (!decoded) {
        return res.status(401).json({
            message: "Unauthorized Access"
        });
    }
    req.user = decoded;
    next();
}

module.exports = {
    authenticateToken,
}
```

Thank you for exploring **SwastyaMuni**. We are committed to enhancing features, fixing bugs, and improving the overall user experience. Your feedback and support are invaluable as we strive to make SwastyaMuni even better. Stay tuned for updates, and thank you for being part of our journey! 🌿
