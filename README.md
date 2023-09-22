# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

# Image Gallery with Drag and Drop

This is a simple React application that allows you to create an image gallery with drag-and-drop functionality. You can reorder images by dragging and dropping them within the gallery.

## Features

- Drag and drop images to rearrange their order in the gallery.
- Search for images by tag.
- Responsive design for various screen sizes.

## Technologies Used

This project leverages the following technologies and libraries:

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool that offers rapid development and a modern developer experience.
- **React Router**: For handling routing within the application.
- **react-beautiful-dnd**: A library for implementing drag-and-drop functionality in React applications.
- **Firebase**: A cloud-based platform for building web and mobile applications, providing authentication and database services.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

- Node.js and npm (Node Package Manager) must be installed on your system.

### Installation

1. Clone the repository to your local machine.


2.  Navigate to the project directory:

cd Image-Gallery
Install dependencies:

yarn install

3.  Start the development server:

yarn start

4.  Open your web browser and visit http://localhost:5173 to view the project.

## Firebase Configuration

Before running the project, you need to set up Firebase for authentication and database services:

1. **Create a Firebase project on the Firebase Console**:

   - Go to the [Firebase Console](https://console.firebase.google.com/).
   - Click on "Add Project" and follow the on-screen instructions to create a new Firebase project.

2. **Configure Firebase Authentication**:

   - Once your project is created, navigate to the "Authentication" section in the Firebase Console.
   - In the "Sign-in method" tab, enable the "Email/Password" sign-in method.

3. **Set up Firebase Realtime Database or Firestore**:

   - Depending on your preference, you can choose either Firebase Realtime Database or Firestore to store image data.
   - In the Firebase Console, navigate to the "Database" section and choose "Create Database" (Realtime Database) or "Create Database" (Firestore). Follow the setup wizard to configure your database.

4. **Create a `.env` File**:
   - In your project's root directory, create a `.env` file.
   - Add your Firebase configuration to the `.env` file using the following format:
     REACT_APP_FIREBASE_API_KEY=your-api-key
     REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
     REACT_APP_FIREBASE_PROJECT_ID=your-project-id
     REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
     REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
     REACT_APP_FIREBASE_APP_ID=your-app-id

Replace the placeholders (`your-api-key`, `your-auth-domain`, etc.) with your actual Firebase configuration values. You can find these values in your Firebase project settings.

### Running the Development Server

To start the development server and run the project:

```bash
yarn start

```
