# Stopwatch

Welcome to the **Adjustable Interval Stopwatch Challenge**! 

Your goal is to create a versatile and user-friendly stopwatch application using **React**, **Vite**, **Tailwind CSS**, and an **uncontrolled input approach**. This application allows users to customize time intervals while enjoying a smooth, interactive experience.

---

## Features

### Core Functionality
- **Start/Stop/Reset:** Easy-to-use controls to start, stop, and reset the stopwatch.
- **Lap Recording:** Record and view lap times effortlessly.

### Adjustable Interval
- **Dynamic Adjustment:** Change the counting interval, starting from the default of **1 second**, to fit various needs.

### Responsive Design
- **Modern Interface:** Visually appealing and responsive design that works seamlessly across devices.

### Modular Design
- **Well-Organized Components:** Clean and maintainable structure for scalability.

---

## Technology Stack

This project is built using the following tools and technologies:

- **React:** A robust library for building user interfaces.
- **Vite:** A fast development server and build tool.
- **Tailwind CSS:** A utility-first CSS framework for sleek and responsive styling.
- **TypeScript:** Ensures type safety for improved code reliability.

---

## Installation and Setup

Follow these steps to run the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/hosseinemami1370/Stopwatch.git
   cd Stopwatch

2. pnpm install

3. pnpm dev

4. http://localhost:5173

---

## Project Structure
```plaintext
adjustable-stopwatch/
├── public/               # Static assets
├── src/                  # Source code
│   ├── components/       # React components
│   ├── assets/           # Static resources (e.g., images, fonts)
│   ├── App.tsx           # Main application component
│   ├── main.tsx          # Application entry point
│   └── index.css         # Global styles
├── package.json          # Project metadata and dependencies
├── vite.config.ts        # Vite configuration file
├── tailwind.config.js    # Tailwind CSS configuration file
└── tsconfig.json         # TypeScript configuration file

---

## Available Scripts

- **pnpm dev:** Starts the development server.
- **pnpm build:** Builds the app for production.
- **pnpm lint:** Lints the project using ESLint.
- **pnpm preview:** Previews the production build.