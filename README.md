# ALX Listing App

## Description

A modern ALX listing app built with **Next.js**, **TypeScript**, **Tailwind CSS v4**, and **ESLint**. It aims to scaffold and lay the foundational structure for a modern Airbnb clone. This initial milestone focuses on setting up a well-organized and scalable codebase using Next.js, TypeScript, TailwindCSS, and ESLint. By establishing a clean folder structure, reusable components, and adhering to best practices, the project ensures a solid starting point for building a dynamic, responsive, and user-friendly property listing page.

## The project structure

The creation of the following components and directories to establish the project foundation:

- **components/common/Card.tsx:** This file will define a reusable Card component that will be used across the project to display information about various properties.
- **components/common/Button.tsx:** This file will define a reusable Button component, which will be used for actions like “Book Now,” “Details,” etc.
- **interfaces/index.ts:** This file will define all TypeScript interfaces related to the project. Start by creating placeholder interfaces for CardProps and ButtonProps.
- **constants/index.ts:** This file will set up constants to store any reusable data or strings such as API URLs, configuration settings, or UI text
- **public/assets:** This folder will contain all the necessary images and SVG files that will be used across the project (such as placeholder property images).

## How to run this project locally

### Tech Stack

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [ESLint](https://eslint.org/)

### Getting Started

Follow these instructions to get the project running on your local machine.

#### 1. Clone the Repository

```bash
git clone https://github.com/norabouhssis/alx-listing-app.git
cd alx-listing-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

---

Visit http://localhost:3000 in your browser.
The app will automatically reload if you make changes to the code.