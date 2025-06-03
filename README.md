# emergency-health-alert-system
A smart web-based emergency alert platform that notifies nearby hospitals during critical health situations using geolocation and real-time alerts.
# Emergency Health Alert System (EHAS)

Emergency Health Alert System (EHAS) is a real-time emergency notification and routing web application designed to assist individuals in sending immediate distress alerts to nearby hospitals and emergency services with a single click. Built during the Vibe Coding Hackathon, EHAS uses geolocation, interactive maps, and a responsive frontend to deliver critical medical alerts in life-threatening situations.

## 🚀 Features

- 📍 Real-time geolocation tracking
- 🗺️ Interactive map with Leaflet.js
- 🏥 Displays nearby hospitals
- 🚨 One-click emergency alert dispatch
- 🌗 Light/Dark mode toggle
- ✅ Toast notifications for status updates
- 🔗 FastAPI backend integration

## 🛠️ Tech Stack

### Frontend:
- HTML, CSS, JavaScript
- Leaflet.js (for maps)
- Toastify.js (for notifications)

### Backend:
- Python
- FastAPI
- Uvicorn (for local server)

## 📁 Folder Structure
```
EmergencyHealthAlertSystem/
│
├── backend/
│   └── main.py
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── README.md
```

## 📦 Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/[your-username]/EmergencyHealthAlertSystem.git
cd EmergencyHealthAlertSystem
```

### 2. Backend Setup
```bash
cd backend
python -m venv venv
venv\Scripts\activate   # (on Windows)
pip install fastapi uvicorn
uvicorn main:app --reload
```

### 3. Frontend Setup
Simply open `frontend/index.html` in your browser.

## 🧪 How It Works
- The frontend fetches the user's geolocation and displays it on a map.
- User clicks the "Send Emergency Alert" button.
- A POST request is sent to the FastAPI backend with latitude and longitude.
- The backend logs and confirms the alert with a success message.

## 👨‍💻 Team Members (Vibe Coding Hackathon)
- Patience Ibitokun — ibitokunpatience05@gmail.com
- Edwin Muigai — muigaiedd@gmail.com
- Dennis Muia — dennisdenx20@gmail.com
- Ivy Butichi — butichi.ivy@gmail.com
- Martin Lusasi — lusasimk@gmail.com
- Brian Ngumi Njenga — bngumi26@gmail.com
- Abdullateef Bashorun — bashorunabdullateef@gmail.com
- Anthony Nosiere — tonmicheal@gmail.com
- Chidiebere Eme — emechidiebere1998@gmail.com
- Ju-nine Ngu Cho — chojuninengu@gmail.com

## 📄 License
This project was developed for educational purposes during the Vibe Coding Hackathon.

---

🔗  Deployed Frontend: [https://melodic-gumption-05fdce.netlify.app](https://melodic-gumption-05fdce.netlify.app)


🔗 Deployed Backend: [https://your-backend-link](https://your-backend-link)


