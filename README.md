# Zen Plan

## Project Overview

**Zen Plan** is a wellness-focused planning application designed to help users build and maintain healthy lifestyle routines. It integrates physical, mental, and emotional well-being into a structured weekly calendar to promote holistic health.

### Objectives

- Provide a structured weekly calendar for planning health-related activities.
- Empower users to create routines for physical, mental, and emotional wellness.
- Encourage habit formation with visual tracking, checkmarks, and reminders.
- Support holistic wellness by balancing movement, rest, and nourishment.

## Key Features

- **Authentication**: Secure login and sign-up functionality using **JWT (JSON Web Tokens)** for token-based user sessions.
- **Home Page**: Calendar view with a clean, calming UI for routine planning.
- **Custom Activities**: Add/edit wellness tasks like:

  - Yoga
  - Meal Prep
  - Meditation
  - Exercise
  - Medical Checkup

- **Wellness Tags**: Organize tasks by category:

  - Self-care
  - Physical
  - Nutrition
  - Health

- **Daily Tasks Page**: View, add, edit, and delete daily tasks with additional notes.
- **Statistics & Settings**: View completed tasks by category and manage preferences.

## Tech Stack

- **Frontend**: [React](https://reactjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Backend**: [Hono (TypeScript)](https://hono.dev/)
- **Database**: [SQLite](https://www.sqlite.org/index.html)
- **Authentication**: JWT (JSON Web Tokens)

---

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

---

## Frontend - React

### Tech Stack

- React
- Axios
- React Router DOM
- Tailwind CSS

### Getting Started - React Client

```bash
cd client
npm install
npm run dev
```

Open [http://localhost:5174](http://localhost:5174) to view the app.

---

## Backend - Node.js (Hono + TypeScript)

### Tech Stack

- Node.js
- Hono (TypeScript)
- SQLite
- JWT

### API Endpoints

#### User Routes

| Method | Endpoint            | Description             |
| ------ | ------------------- | ----------------------- |
| POST   | /user/register      | Register a new user     |
| POST   | /user/login         | Log in an existing user |
| POST   | /user/logout        | Log out a user          |
| PUT    | /user/edit/info     | Edit user profile info  |
| PATCH  | /user/edit/password | Change user password    |

#### List Routes

| Method | Endpoint          | Description                 |
| ------ | ----------------- | --------------------------- |
| GET    | /list/get         | Fetch all lists             |
| POST   | /list/create      | Create a new list item      |
| PUT    | /list/edit/\:id   | Edit an existing list item  |
| DELETE | /list/delete/\:id | Delete a list item          |
| PATCH  | /list/toggle/\:id | Toggle completion of a list |
| PATCH  | /list/complete    | Mark all lists as complete  |

### Getting Started - Backend Server

```bash
cd server
npm install
```

Create a `.env` file with:

```
PORT=3000
DATABASE_URL=your_sqlite_connection_string
```

Then start the dev server:

```bash
npm run dev
```

Backend runs at [http://localhost:3000](http://localhost:3000)
