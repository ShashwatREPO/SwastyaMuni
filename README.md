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
   - Route: `http://localhost:3000/auth/signup`
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
        "valid" : "true", 
        "token" : "123123123token" 
     }
     ```

2. **User Login**: Route to login users.
   - Route: `http://localhost:3000/auth/login`
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
        "valid" : "true", 
        "token" : "123123123token" 
     }
     ```

3. **Forgot Password**: Route to Send an email to recover password.
   - Route: `http://localhost:3000/auth/forgotPassword`
   - Method: `POST`
   - Request Body:
     ```json
     {
        "email": "john@example.com"
     }
     ```
   - Response:
     ```json
     {
        "message" : "OTP sent to your email"  
     }
     ```
4. **Reset Password** : Password to reset using OTP . 
   - Route: `http://localhost:3000/auth/resetPassword`
   - Method: `POST`
   - Request Body:
    To check Email :- 
     ```json
     {
        "email": "john@example.com"
     }
     ```
   - Response:
     ```json
     {
        "status" : "OK" 
     }
     ```

     To verify Email :- 
      ```json
     {
        "email": "john@example.com", 
        "otp" : "****"
     }
     ```
   - Response:
     ```json
     {
        "status" : "OK" 
     }
     ```
     To Update password:- 
      ```json
     {
        "email": "john@example.com", 
        "otp" : "****",
        "newPassword" : "****#****"
     }
     ```
   - Response:
     ```json
     {
        "status" : "OK" 
     }
     ```
5. **Update Password** : To Change Password . 
   - Route: `http://localhost:3000/protected/updatePassword`
   - Method: `POST`
   - Reaquest Header: 
   ```
    Authorization: Bearer <your_jwt_token>
    ```
   - Request Body:
     ```json
     {
        "email": "john@example.com",
        "password": "****#*****", 
        "newPassword" : "****#****"
     }
     ```
   - Response:
     ```json
     {
        "message" : "Password! Updated Successfully."
     }
     ```
6. **Add User Data** : To Add User Data . 
   - Route: `http://localhost:3000/protected/addUserData`
   - Method: `POST`
   - Reaquest Header: 
   ```
    Authorization: Bearer <your_jwt_token>
    ```
   - Request Body:
     ```json
     {
        "age": "userAge(*)",
        "allergies" : "Insert_Your_Allergies_If_You_have", 
        "pastDisease" : "Insert_Your_pastDisease_If_You_have", 
        "currentDisease" : "Insert_What_Disease_You_are_Suffering_from"
     }
     ```
   - Response:
     ```json
     {
        "message" : "done"
     }
     ```
7. **Get User Data** : To Get User Data  . 
   - Route: `http://localhost:3000/protected/getUserData`
   - Method: `POST`
   - Reaquest Header: 
   ```
    Authorization: Bearer <your_jwt_token>
    ```
   - Response:
     ```json
     {
        "age" : "*", 
        "allergies" : "Past_Allergies", 
        "pastDisease" : "Past_Disease", 
        "currentDisease" : "Current_Disease"
     }
     ```
7. **Get User Info** : To Get User Info Such as email . 
   - Route: `http://localhost:3000/protected/userInfo`
   - Method: `POST`
   - Reaquest Header: 
   ```
    Authorization: Bearer <your_jwt_token>
    ```
   - Response:
     ```json
     {
        "Name" : "fullName",
        "Email" : "email"
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
