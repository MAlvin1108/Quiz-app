# React + Vite

# Quiz-App

This is a simple quiz application built with React, designed to test users' knowledge with a set of questions. The application includes a login page, a quiz interface with a timer, and a final score display.

## Features

Based on the provided files, the main features of the application are:

* **Login Page**: The application starts with a login form. Users can log in using a predefined username and password.
* **Quiz Interface**: The quiz presents a series of multiple-choice questions one by one.
* **Timer**: Each question has a 30-second timer. The user automatically proceeds to the next question when the time runs out.
* **Scoring System**: The application tracks the user's score.
* **Results Page**: After all questions are answered, the final score is displayed.
* **Reset Functionality**: Users have the option to restart the quiz from the results page.
* **Hardcoded Questions**: The quiz questions are defined in a separate data file.

## Technologies Used

* **Frontend**: React
* **Build Tool**: Vite
* **Routing**: React Router DOM
* **Icons**: React Icons

## Installation and Setup

To run this project locally, follow these steps:

1.  **Clone the repository**:
    ```bash
    git clone [https://github.com/malvin1108/quiz-app](https://github.com/malvin1108/quiz-app)
    ```
2.  **Navigate into the project directory**:
    ```bash
    cd quiz-app
    ```
3.  **Install the dependencies**:
    ```bash
    npm install
    ```
4.  **Run the application in development mode**:
    ```bash
    npm run dev
    ```
    This will start the development server. The application will be accessible in your browser, typically at `http://localhost:5173`.
5.  **Log in to the application**:
    On the login page, use the following hardcoded credentials:
    * Username: `user`
    * Password: `pass`
6.  **Build for production**:
    ```bash
    npm run build
    ```
    This command builds the app for production to the `dist` folder. It correctly bundles React in production mode and optimizes the build for the best performance.
