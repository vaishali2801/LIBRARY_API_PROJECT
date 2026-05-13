Library Management System API
```
A complete backend system for managing a digital library where students can borrow and return books online.
Built using Node.js, Express.js, MongoDB, JWT Authentication, and Redis Locking.

Features
User Authentication
Role-Based Access (Admin / Student)
Book Management
Borrow & Return Books
Fine Calculation
Borrow History
Redis Locking for Concurrency
JWT Protected Routes
MongoDB Database
RESTful APIs
Error Handling Middleware

Tech Stack
Node.js
Express.js
MongoDB
Mongoose
JWT
Redis
bcrypt.js
dotenv

Project Structure

LIBRARY-MANAGEMENT/
│
├── controller/
├── middleware/
├── model/
├── routes/
├── config/
├── utils/
├── db/
│
├── server.js
├── package.json
└── .env

Installation
Clone Repository
git clone YOUR_GITHUB_REPOSITORY_LINK
Move to Project Folder
cd LIBRARY-MANAGEMENT
Install Dependencies
npm install

Environment Variables

Create .env file in root directory.

PORT=5000

MONGO_URI=YOUR_MONGODB_URL

JWT_SECRET=YOUR_SECRET_KEY

REDIS_URL=YOUR_REDIS_URL
Run Project
Development
npm run dev
Production
npm start
Authentication APIs
Register User
POST /api/user/register
{
  "name":"Vaishali",
  "email":"vaishali@gmail.com",
  "password":"123456"
}
Login User
POST /api/user/login
{
  "email":"vaishali@gmail.com",
  "password":"123456"
}
Book APIs
Create Book
POST /api/book/create
{
  "title":"Atomic Habits",
  "author":"James Clear",
  "category":"Self Help",
  "totalCopies":10,
  "availableCopies":10
}
Get All Books
GET /api/book/all
Get Single Book
GET /api/book/:id
Update Book
PUT /api/book/update/:id
Delete Book
DELETE /api/book/delete/:id
Borrow APIs
Borrow Book
POST /api/borrow/borrow
{
  "bookId":"BOOK_ID",
  "dueDate":"2026-05-20"
}
Return Book
PUT /api/borrow/return
{
  "borrowId":"BORROW_ID"
}
Borrow History
GET /api/borrow/history
Borrow Logic
Student can borrow available books
Available copies decrease automatically
Fine calculated automatically after due date
Returned books increase available copies
Student cannot borrow same book multiple times simultaneously
Fine Calculation
fine = lateDays * 10

₹10 fine per late day.

Redis Locking

Redis is used to prevent multiple students from borrowing the same book simultaneously.

Example:

const lockKey = `borrow:${bookId}`;
Authentication

JWT token required in protected routes.

Example:

Authorization: Bearer YOUR_TOKEN
Response Example
{
  "success": true,
  "message": "book borrowed successfully",
  "newBorrow": {}
}
Error Handling

Centralized error handling middleware used.

Example:

{
  "success": false,
  "message": "book not found"
}
SCREENSHOT
<img width="1280" height="832" alt="Screenshot 2026-05-12 at 4 36 26 PM" src="https://github.com/user-attachments/assets/3127e4f0-6393-4bbe-9a97-db88e256cb17" />


Chauhan Vaishali

GitHub: vaishali2801 GitHub
LinkedIn: Vaishali Chauhan LinkedIn
