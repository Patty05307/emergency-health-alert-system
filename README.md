# emergency-health-alert-system
A smart web-based emergency alert platform that notifies nearby hospitals during critical health situations using geolocation and real-time alerts.
# 🚨 Emergency Health Alert System

A smart emergency response platform that allows users to instantly notify nearby hospitals in critical medical situations using geolocation. Built with FastAPI (backend) and HTML/CSS/JavaScript (frontend).

## 🔗 Live Demo
[Frontend on Netlify](https://your-netlify-link.netlify.app)  
[Backend on Render](https://your-backend-url.onrender.com)

## 📁 Project Structure

## ⚙️ Features

- 🚨 One-click emergency alert
- 📍 Live geolocation tracking
- 🗺️ Interactive hospital map
- 🌙 Light/Dark mode toggle
- 📡 Real-time backend integration (FastAPI)
- 🔔 Toast notifications for success/failure

## 💡 Technologies Used

- **Frontend:** HTML, CSS, JavaScript, Leaflet.js, Toastify.js
- **Backend:** FastAPI, Python, CORS Middleware
- **Deployment:** Netlify (frontend), Render (backend)

## 🛠️ How to Run Locally

### Backend
```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload

