<<<<<<< HEAD
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
=======
## **Overview**

TaskBuddy is a task management application that allows users to create, view, and manage tasks effectively. The app includes features like Google Sign-In, task sorting, and dynamic rendering of tasks in both board and list views. The user can add tasks, sort them by category, status or date, and switch between different view modes.

## **Instructions to Run the Project**
follow these steps to setup and run the **Taskbuddy** project locally:

1. **Clone the Repository**

First, clone the repository to your local machine using the command:

'''bash

git clone https://github.com/NitheshKumar07/Taskbuddy.git

2. **Navigate to the project directory**

cd taskbuddy

3. **Install Dependencies**

npm install

4. **Run the Application**

npm start

# **Features Implemented**

* **Google Sign-In:** Integration with Google Sign-In to allow users to log in.

* **Local Storage for Data:** Using local storage as a fallback for data persistence when Firebase integration wasn't feasible.

* **Task Management:** Users can add tasks, edit them and delete them.

* **Task Sorting:** Tasks can be sorted based on priority or dates.

* **View:** compact views for a better user experience.

* **Responsive Design:** The app is responsive and works well on both desktop and mobile devices

# **Challenges Faced and Solutions Implemented**

* **Firebase Sign-In Setup:** Initially, I encountered challenges while setting up Firebase authentication. The integration with Firebase didn't work as expected due to configuration issues.

**Solution:** As a workaround, I opted to use Google Sign-In with local storage for data persistence. The authentication flow still leverages Google Sign-In, but data is stored locally instead of Firebase.

* **Rendering Data in Board and List Views:** Rendering tasks in a dynamic view, either in board or list format, required proper management of state and layout adjustments to ensure that tasks were displayed correctly.

**Solution:** I utilized state management to switch between board and list views while applying sorting to ensure that the tasks were presented in the correct order based on the user's selection.

>>>>>>> 1dffbb9a095ac3c77a1fc59b33bf9ed225f32343
