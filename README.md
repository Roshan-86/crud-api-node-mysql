# Node.js + MySQL CRUD Application

This is a Node.js project using **Express.js** and **MySQL** for basic CRUD operations. The project uses environment variables for secure database connection.

## Table of Contents
- [Setup and Run the Project](#setup-and-run-the-project)
  - [1. Clone the Repository](#1-clone-the-repository)
  - [2. Install Dependencies](#2-install-dependencies)
  - [3. Configure Environment Variables](#3-configure-environment-variables)
  - [4. Start the Application](#4-start-the-application)
  - [5. Access the API](#5-access-the-api)
- [Project Structure](#project-structure)
- [Contact](#contact)

## Setup and Run the Project

### 1. Clone the Repository

```bash
git clone https://github.com/Roshan-86/crud-api-node-mysql.git
cd crud-api-node-mysql
```
### 2. Install Dependencies
 - Install Express:

```bash
npm install express
```

- For MySQL, install mysql2:

```bash
npm install mysql2
```

### 3. Configure Environment Variables
Create a .env file in the project root and add the following environment variables:

```makefile
DB_HOST=localhost
DB_USER=root
DB_PASS=password
DB_NAME=mydatabase
PORT=3000
```
Make sure to replace the values with your own MySQL credentials.

### 4. Start the Application
Run the server:

```bash
node app.js
```
The application will start running at http://localhost:3000.

### 5. Access the API
You can access the API at the following endpoint:

| Endpoint     | Method | Description     |
|--------------|--------|-----------------|
| `/api/users` | GET    | Fetch all users |

## Project Structure

```bash
node-express-mysql/
│
├── config/
│   └── db.js              # MySQL connection configuration
│
├── controllers/
│   └── userController.js   # Business logic for user operations
│
├── models/
│   └── userModel.js        # SQL queries for interacting with the user table
│
├── routes/
│   └── userRoutes.js       # Define API routes
│
├── app.js                  # Main application file (entry point)
├── .env                    # Environment variables (for DB credentials)
├── package.json            # Dependencies and metadata
└── README.md               # Project documentation
```

### Contact
For any questions or inquiries, you can reach out to:

GitHub: [Roshan-86](https://github.com/Roshan-86)

Email: roshangare201811@gmail.com

---
*Made with ❤️ by Roshan Gare*