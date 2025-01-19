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