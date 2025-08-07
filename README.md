# Product Gallary - React + TypeScript + Vite Starter

A minimal, fast, and modern starter template for building React applications with TypeScript and Vite. Includes hot module replacement (HMR), sensible ESLint defaults, and easy extensibility for production-ready apps.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)

---

## Project Overview

This project provides a minimal setup to get Product Gallery. It uses Chakra UI, Axios and React. 

---

## Getting Started

Follow these steps to clone and run the project locally:

### 1. Clone the repository

```bash
git clone git@github.com:mzeeshanwahid/product-gallery.git
cd product-gallery
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Start the development server

```bash
npm run dev
# or
yarn dev
```

The app will be available at [http://localhost:5173](http://localhost:5173) by default.

### 4. Build for production

```bash
npm run build
# or
yarn build
```

---

## Folder Structure

A typical folder structure for this template looks like:

```
.
├── public/             # Static assets (served as-is)
├── src/                # Application source code
│   ├── assets/         # Images, fonts, etc.
│   ├── components/     # Reusable React components
│   ├── icons/          # Reusable icons
│   ├── layouts/        # Reusable layouts
│   ├── services/       # Reusable services that communicate with API
│   ├── pages/          # Pages
│   ├── App.tsx         # Main App component
│   ├── main.tsx        # Entry point for React/Vite
│   └── ...             # Other feature folders or files
├── index.html          # HTML template
├── package.json        # Project metadata and scripts
├── tsconfig.json       # TypeScript configuration
├── vite.config.ts      # Vite configuration
└── README.md           # Project documentation
```

- **public/**: Static files that are copied directly to the build output.
- **src/**: All source code, including components, assets, services, pages and other reuseable elements.
- **index.html**: The main HTML file loaded by Vite.
- **package.json**: Lists dependencies and scripts.
- **tsconfig.json**: TypeScript compiler options.
- **vite.config.ts**: Vite configuration file.


