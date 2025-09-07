# 🌍 MernStack Tour Management System

*A Scalable Travel Platform Built with the MERN Ecosystem*

## 📖 Overview

The **MernStack Tour Management System** is a full-stack web application designed to streamline tour booking, user management, and travel service coordination. Built with the **MERN stack (MongoDB, Express, React, Node.js)**, the project demonstrates a modular, production-ready architecture that balances developer productivity with scalability.

This project was structured and implemented to reflect **real-world remote team practices** — clear separation of concerns, reproducible scripts, containerization with Docker, and extensive documentation — making it a great example of how I approach professional software development.

---

## 🛠️ Tech Stack & Why It Was Chosen

* **MongoDB** → Chosen for flexible schema design and scalability for travel data (tours, bookings, users). Document-based storage simplifies queries like “find all tours under budget X”.
* **Express.js** → A lightweight and battle-tested Node.js framework for REST APIs. Its middleware system was ideal for authentication, request validation, and routing.
* **React.js** → Used for building the dynamic frontend. With React’s component-based architecture, UI modules (login, booking, admin dashboard) are reusable and easy to maintain.
* **Node.js** → Provides a fast, event-driven backend runtime. Perfect for handling concurrent requests like booking confirmations and real-time notifications.
* **Docker & Docker Compose** → Ensures consistent environments across machines. Anyone can spin up the system (frontend + backend + database) with one command.
* **Git + GitHub** → Used for clean commit history, CI/CD hooks, and collaboration — mirroring how distributed teams operate.

---

## 🧩 Architecture

1. **Frontend (React)**

   * Built with modular React components.
   * Implements **custom hooks** for API calls and state management.
   * Centralized logging utility (`logger.js`) for better debugging.

2. **Backend (Node + Express)**

   * Minimal REST API skeleton with routes for **users, tours, and bookings**.
   * Middleware for authentication, validation, and logging.
   * Configurable server (`server.js`) ready for scaling into microservices.

3. **Database (MongoDB)**

   * Models for `User`, `Tour`, and `Review` defined in `/backend/models`.
   * Indexing strategies for faster search (e.g., tour price or destination).

4. **Scripts & Automation**

   * Documented in **SCRIPTS.md** for running servers, builds, and deployments.
   * Git hooks (with commit scripts initially) ensure consistent commits.

5. **Deployment Ready**

   * **Dockerfiles** for frontend & backend.
   * **docker-compose.yml** orchestrates multi-service setup in one command.

---

## 🧮 Algorithms & Design Decisions

* **Authentication & Authorization** → Planned JWT-based system (middleware-ready in Express).
* **Search Optimization** → MongoDB indexes and query operators (e.g., `$regex`, `$gte`, `$lte`).
* **Error Handling** → Centralized Express error middleware for consistent API responses.
* **Scalability** → Designed backend as a monolith initially but structured for microservice transition.

---

## 🚀 How to Run the Project

### 1️⃣ Clone the Repo

```bash
git clone https://github.com/AnsariTech-25667/MernStack-Tour-Management.git
cd MernStack-Tour-Management
```

### 2️⃣ Run with Docker (Recommended)

Make sure Docker is installed, then:

```bash
docker-compose up --build
```

This spins up **frontend**, **backend**, and **MongoDB** in containers.

### 3️⃣ Run Without Docker (Manual Setup)

#### Backend:

```bash
cd backend
npm install
npm run dev
```

#### Frontend:

```bash
cd frontend
npm install
npm start
```

Access the app at 👉 `http://localhost:3000`

---

## 📌 Why This Project Matters

This project isn’t just code — it’s structured the way **remote-first companies** expect:

* Clear **documentation** for onboarding.
* Strong **commit discipline** with meaningful commit messages.
* **Containerized environment** for reproducibility.
* Designed with **scalability in mind**, not just a demo.

It shows I can **think like a team player** in a distributed setting, follow best practices, and deliver a product that’s both functional and maintainable.

---

## 📜 License

MIT License – free to use, adapt, and extend.

---

🔥 *Built with passion, scalability, and remote collaboration in mind.*

---

