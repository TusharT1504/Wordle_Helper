******Wordle Helper******

Wordle Helper is a web application designed to assist users in solving the Wordle game by suggesting potential words based on user input for the green, yellow, and black letters. This project is built using the MERN stack (MongoDB, Express, React, Node.js) with additional front-end enhancements using Tailwind CSS for styling, Toast for notifications, and React Icons for visual appeal.

**Table of Contents**
```
Project Overview
Features
Technologies Used
Prerequisites
Installation and Setup
Frontend Setup
Backend Setup
Running the Application
Usage
```

**Project Overview**
The Wordle Helper project allows users to input the letters from their Wordle guesses:

Green: Correct letters in the correct position.
Yellow: Correct letters but in the wrong position.
Black: Incorrect letters.
Based on this input, the tool suggests a list of possible words that fit the given conditions, making it easier for users to solve the game.

**Features**
User Input: Enter letters for green, yellow, and black positions.
Word Suggestions: Displays possible words that match the input conditions.
Responsive Design: Built with Tailwind CSS for a fully responsive user interface.
Notifications: Uses Toast for real-time notifications.
Efficient Search: The app provides suggestions quickly by leveraging MongoDB to store and retrieve a word list.

**Technologies Used**
Frontend: React, Tailwind CSS, Toast, React Icons, HTML
Backend: Express.js, Node.js
Database: MongoDB


**Prerequisites**
Before running the project locally, ensure you have the following installed on your system:
  Node.js: Download Node.js
  npm: Comes with Node.js, used for installing packages
  MongoDB: Either local installation or access to MongoDB Atlas for database connection
  Git: To clone the repository
  React: Installed via npm
  Tailwind CSS: Installed via npm

**Installation and Setup**

**Frontend Setup**

  Clone the Repository:
  ```
  git clone https://github.com/yourusername/wordle-helper.git
  cd wordle-helper/frontend
  ```
  
  Install React: If React is not already installed, you can install it globally using npm:
  ```
  npx create-react-app .
  ```
  
  Install Tailwind CSS: Install Tailwind CSS via npm:
  ```
  npm install -D tailwindcss
  npx tailwindcss init
  ```
  
  Add the following lines to tailwind.config.js to configure Tailwind:
  ```
  javascript
  Copy code
  module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {},
    },
    plugins: [],
  };
  ```
  
  Install Toast Notifications: Add Toast for user notifications:
  ```
  npm install react-toastify
  ```
  
  Install React Icons: For visual enhancements:
  ```
  npm install react-icons
  ```
  
  Run Frontend: To start the frontend development server:
  ```
  npm start
  ```

**Backend Setup**
  Navigate to Backend: Open another terminal window and navigate to the backend directory:
  ```
  cd ../backend
  ```
  
  Install Dependencies: Install necessary backend packages:
  ```
  npm install express mongoose cors
  ```
  
  MongoDB Setup: If you’re using a local MongoDB instance, ensure it is running. Otherwise, create a cluster on MongoDB Atlas and get your connection string.
  
  Create Environment Variables: Inside the backend folder, create a .env file and add the following environment variables:
  ```
  MONGO_URI=mongodb://localhost:27017/wordle-helper
  PORT=5000
  ```
  
  Run Backend: Start the backend server:
  ```
  npm start
  ```

**Running the Application**
Once both the frontend and backend are set up, follow these steps:

  Frontend: Run the frontend server using:
  ```
  npm start
  ```
  This should start the React development server at http://localhost:3000.
  
  Backend: In a separate terminal, run the backend server:
  ```
  npm start
  ```
  This will start the Express server at http://localhost:5000.

Usage
```
Visit http://localhost:3000 in your browser.
Enter the letters from your current Wordle game into the input fields.
Green: Correct letters in the correct position.
Yellow: Correct letters but wrong position.
Black: Letters not in the word at all.
Click on "Suggest Words" to get a list of possible words based on the input.
```

Contributing
If you’d like to contribute to this project, feel free to open an issue or submit a pull request.

Fork the repository.
```
Create a new feature branch: git checkout -b feature-name.
Commit your changes: git commit -m 'Add some feature'.
Push to the branch: git push origin feature-name.
```
