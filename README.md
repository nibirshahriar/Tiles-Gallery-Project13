# 🧱 Tiles Gallery

Tiles Gallery is a modern and responsive tile showcase platform built with **Next.js**, **Better Auth**, **MongoDB**, and **HeroUI**. Users can explore premium tile collections, search tiles, view detailed information, authenticate securely, and manage their profiles.

## 🌐 Live Links

* **Live Site:** https://tiles-gallery-project13.vercel.app

---

## ✨ Features

### 🏠 Home Page

* Modern Hero Banner with CTA button
* Scrolling Marquee Section
* Featured Tiles Showcase
* Responsive Design

### 🖼️ Tile Gallery

* Browse All Tiles
* Search Tiles by Title
* View Tile Details
* Responsive Tile Cards

### 🔐 Authentication

* Email & Password Registration
* Email & Password Login
* Google Authentication
* Toast Notifications for Success & Errors

### 👤 User Profile

* View User Information
* Update Profile Name
* Update Profile Image URL
* Protected Profile Route

### 🛡️ Route Protection

* Private Tile Details Page
* Private Profile Page
* Authentication-based Access Control

### 🎨 UI & UX

* Fully Responsive Layout
* Modern Navbar & Footer
* Loading States
* Custom 404 Page
* Clean and User-Friendly Interface

---

## 🔒 Route Permissions

### Public Routes

* `/`
* `/all-tiles`
* `/signin`
* `/signup`

### Private Routes

* `/all-tiles/[id]`
* `/profile`
* `/profile/update`

---

## 🛠️ Technologies Used

* Next.js 15 (App Router)
* React
* Tailwind CSS
* HeroUI
* Better Auth
* MongoDB
* React Toastify
* React Icons
* Lucide React
* React Fast Marquee

---

## 📦 NPM Packages

* @heroui/react
* better-auth
* mongodb
* react-fast-marquee
* react-icons
* react-toastify
* lucide-react

---

## 📁 Project Structure

```text
src
├── app
│   ├── page.jsx
│   ├── all-tiles
│   │   ├── page.jsx
│   │   └── [id]
│   │       └── page.jsx
│   ├── profile
│   │   ├── page.jsx
│   │   └── update
│   │       └── page.jsx
│   ├── signin
│   ├── signup
│   └── not-found.jsx
│
├── components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── PhotoCard.jsx
│   └── FeaturedTiles.jsx
│
├── lib
│   ├── auth.js
│   └── auth-client.js
│
└── proxy.js
```

---

## 👨‍💻 Developer

### Md. Nibir Shahriar

Passionate Frontend Developer focused on building responsive and user-friendly web applications using modern web technologies.
