# Notepad

**Notepad** is a web application built with **Laravel**, **Inertia.js**, **Vue 3**, and **TypeScript**. It provides a clean and intuitive interface for managing notes organized into folders, with a strong focus on usability and simplicity.

## Features

- **User Authentication**  
  Secure registration and login system to protect user data.

- **Three-Column Layout**  
  The application is divided into three main sections:
  1. **Folders** – create, rename, and delete folders.
  2. **Notes** – view notes assigned to the selected folder.
  3. **Editor** – display and edit the selected note.

- **Notes Management**
  - Create, edit, and delete notes  
  - Change note titles and content  
  - Notes are always associated with a specific folder

- **Automatic Saving**  
  All changes to notes are saved automatically, ensuring a smooth and uninterrupted workflow without the need for manual saving.

## Tech Stack

- **Backend:** Laravel  
- **Frontend:** Vue 3 + TypeScript  
- **SPA & Routing:** Inertia.js  

## Overview

Notepad is designed to offer a minimalistic yet powerful note-taking experience. The folder-based structure combined with a responsive three-column layout allows users to efficiently organize and manage their notes in a clear and structured way.


## Instalation

### Requirements

Make sure you have the following installed on your system:

- PHP >= 8.4
- Composer | v2.8.12:2025
- Node.js | v25.2.1
- NPM | v11.6.2
- SQLite / MySQL / PostgreSQL

### Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/skierzko/Notepad
    cd Notepad/app
2. Install backend dependencies:
    ```bash
    composer install
3. Install frontend dependencies:
    ```bash
    npm install
4. Create environment file:
    ```bash
    cp .env.example .env
5. Create SQLite database file:
    ```bash
    touch app/database/database.sqlite
6. Generate application key:
    ```bash
    php artisan key:generate
7. Run database migrations:
    ```bash
    php artisan migrate
8. Build frontend assets:
    ```bash
    npm run build
    or
    npm run dev
9. Start the local development server or docker:
    ```bash
    php artisan serve
    or
    docker-compose up --build