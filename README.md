 Face Detection Web Application

## 📘 Project Objective
The objective of this project is to design and develop a **Full Stack Face Detection Web Application** that allows users to **upload an image or access their webcam**, detects faces in real-time, and displays detection results visually.  
All user data, uploaded images, and detection history are securely stored in **MongoDB**.

---

## 🧩 Key Features

### 🔐 User Authentication
- Register and Login pages using **JWT authentication**
- Input validation for email, password, and name
- Passwords securely stored using **bcrypt**

### 📸 Face Detection Interface
- Option to **upload image** or **capture live** using webcam (`react-webcam`)
- Frontend sends image data to backend for processing
- Backend performs **face detection using OpenCV.js** 
- Detected faces displayed with bounding boxes on image

### 🧾 User Dashboard
- Displays a list of previously uploaded images
- Shows detection history and result count
- Option to view or delete each detection record

### 💎 UI/UX
- Developed using **React.js** and **Tailwind CSS**
- Responsive design (works on desktop and mobile)
- Clean and modern user interface

---

## 🧰 Tools and Libraries Used

| Category | Technology / Library |
|-----------|----------------------|
| **Frontend** | React.js, Axios, React Router, React Webcam, Tailwind CSS |
| **Backend** | Node.js, Express.js, Multer (for file upload), JWT, bcrypt |
| **Database** | MongoDB, Mongoose |
| **Face Detection** | OpenCV.js |
| **Deployment** | Vercel (Frontend), Render (Backend), MongoDB Atlas |
| **Other Tools** | Postman (API testing), GitHub (version control) |

---

## ⚙️ Installation and Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Aayush-Kumar7/Face-Detection-Web-Application.git
cd Face-Detection-Web-Application

Face-Detection-Web-Application/
│
├── backend/
│   ├── server.js
│   ├── routes/
│   │   ├── ImageRouter.js
│   │   └── LoginRouter.js
│   │   ├── RegisterRouter.js
│   ├── models/
│   │   ├── User.js
│   │   ├──Image.js
│   │   └── db.js
│   ├── controllers/
│   │   ├── ImageController.js
│   │   ├── RegisterController.js
│   │   └── LoginController.js
│   ├── middleware/
│   │   └── auth.js
│   │   ├──ImageUpload.js
│   │   ├──Loginvalidation.js
│   │   ├──Registervalidation.js
│   ├── public/
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   └── FaceCapture.jsx
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── Dashboard.jsx
│   │   ├── App.js
│   │   └── index.js
│   ├── public/
│   └── package.json
│
└── README.md

**Working Principle**

User Registration & Login

Users register and login using email and password.

JWT tokens are issued upon successful login.

Image Capture or Upload

Users can capture live images using webcam or upload from local storage.

Face Detection

The image is sent to the backend via REST API.

Backend processes image using OpenCV.js.

Detected faces are marked with bounding boxes.

Data Storage

User information, image URL, detection results, and timestamps are saved in MongoDB.

User Dashboard

Displays uploaded images, detection count, and history.

API Endpoints
Method	Endpoint	Description
POST	/api/auth/register	Register a new user
POST	/api/auth/login	User login and JWT token generation
POST	/api/facedetect	Accepts image and returns face detection result
GET	/api/history/:userId	Fetch user detection history
DELETE	/api/history/:id	Delete detection record
