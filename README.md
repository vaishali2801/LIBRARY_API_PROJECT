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
<img width="1280" height="832" alt="Screenshot 2026-05-12 at 4 56 10 PM" src="https://github.com/user-attachments/assets/dabcb233-20e1-42bd-95a6-7200244c047e" />
<img width="1280" height="832" alt="Screenshot 2026-05-12 at 4 55 19 PM" src="https://github.com/user-attachments/assets/c61805d6-1b53-4f24-9338-411c54d50376" />
<img width="1280" height="832" alt="Screenshot 2026-05-12 at 4 54 25 PM" src="https://github.com/user-attachments/assets/53b9c1a3-b5d3-48eb-9217-3a4ba086a921" />
<img width="1280" height="832" alt="Screenshot 2026-05-12 at 4 53 17 PM" src="https://github.com/user-attachments/assets/c697cca1-b1cf-4ebc-a9c8-943cecd9dd87" />
<img width="1280" height="832" alt="Screenshot 2026-05-12 at 4 52 41 PM" src="https://github.com/user-attachments/assets/6dcf39c7-04a3-4140-b16f-c1d79d0a1e6b" />
<img width="1280" height="832" alt="Screenshot 2026-05-12 at 4 51 57 PM" src="https://github.com/user-attachments/assets/29875a19-79ab-49ad-ba1a-89d1872ec40b" />
<img width="1280" height="832" alt="Screenshot 2026-05-12 at 4 50 32 PM" src="https://github.com/user-attachments/assets/818f27c3-f2f5-4d05-a0ce-b7644f1c5569" />
<img width="1280" height="832" alt="Screenshot 2026-05-12 at 4 49 37 PM" src="https://github.com/user-attachments/assets/ba4e5e8a-ec7c-47ae-8d6b-c0fc68d81834" />
<img width="1280" height="832" alt="Screenshot 2026-05-12 at 4 49 09 PM" src="https://github.com/user-attachments/assets/0ff02def-81da-4791-8c73-de4e1e48a5cb" />
<img width="1280" height="832" alt="Screenshot 2026-05-12 at 4 45 09 PM" src="https://github.com/user-attachments/assets/933eab37-af7d-42bb-85af-8a2bd4636f13" />
<img width="1280" height="832" alt="Screenshot 2026-05-12 at 4 41 51 PM" src="https://github.com/user-attachments/assets/8e46e065-e13e-45e1-9ec6-9a1ec6f0a66a" />
<img width="1280" height="832" alt="Screenshot 2026-05-12 at 4 40 32 PM" src="https://github.com/user-attachments/assets/c5eaf0cc-2685-4c10-ada9-ce8d5a8955e8" />
<img width="1280" height="832" alt="Screenshot 2026-05-12 at 4 39 15 PM" src="https://github.com/user-attachments/assets/2a5bd93a-3086-4ef5-b997-92a105e12a53" />
<img width="1280" height="832" alt="Screenshot 2026-05-12 at 4 36 26 PM" src="https://github.com/user-attachments/assets/de100af8-9ce8-4915-92d0-406480dc16cf" />


Chauhan Vaishali

GitHub: vaishali2801 GitHub
LinkedIn: Vaishali Chauhan LinkedIn
