# README

## Project Overview

Welcome to the Frontend Developer Assignment project! This project is developed by Mohammad Akbar using React, Tailwind CSS, React Icons, Chart.js, and other modern web development tools. The application includes various features such as routing, state management, data tables, session management, and more.

## Features

1. **Routing**: Implemented using `react-router-dom` to manage different views.
2. **State Management**: Utilized `redux` for managing the state of the application.
3. **UI Components**: Leveraged `mui` and other UI libraries for building responsive and user-friendly interfaces.
4. **Data Tables**: Created a list view that shows a brief description of items with an associated `item_id`.
5. **Detailed View**: Developed a detailed overview page for each item using `item_id` stored in user session storage.
6. **Session Management**: Implemented login and logout functionality using cookies.
7. **Loading Effects**: Added loading effects while fetching data to enhance user experience.
8. **Responsive Design**: Ensured the application works well on various screen sizes and devices.

## Installation and Setup

Follow these steps to set up the project locally:

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run the Application**
   ```bash
   npm start
   ```

4. **Build the Application**
   ```bash
   npm run build
   ```

## Directory Structure

```
/src
|-- /components
|   |-- /Dashboard
|   |-- /List
|   |-- /ListDetails
|-- /redux
|   |-- /actions
|   |-- /reducers
|-- /routes
|   |-- /PrivateRoute.js
|-- /utils
|   |-- /session.js
|-- App.js
|-- index.js
```

## Usage

1. **Dashboard Route**: Accessible via `/dashboard`. It displays the main dashboard.
2. **List Route**: Accessible via `/list`. It shows a table of items with brief descriptions.
3. **List Details Route**: Accessible via `/list/details`. It displays detailed information about a selected item using `item_id` from session storage.
4. **Login and Logout**: Implemented simple session management using cookies for login and logout functionalities.

## Deployment

The application is deployed on Netlify. You can access the live version [here](<deployed-app-link>).

## Documentation

The entire process is documented to guide you through the development and usage of the system. Please refer to the following sections for detailed instructions:

- **Installation and Setup**: Instructions on how to set up the project locally.
- **Usage**: Guide on how to navigate and use the application.
- **Code Structure**: Overview of the directory structure and code organization.
- **Session Management**: Details on implementing login and logout functionalities using cookies.
- **State Management**: Explanation of how state is managed using Redux.
- **Loading Effects**: Implementation of loading effects for a better user experience.

## Evaluation Criteria

1. **Functionality**:
   - Proper implementation of routes.
   - Correct data handling.
   - Secure session management with login and logout functionality using cookies.

2. **Performance**:
   - Loading effects during data fetching.
   - Efficient state management.

3. **User Interface**:
   - Responsive design ensuring compatibility across various devices.

4. **Code Quality**:
   - Well-structured and modular codebase.
   - Adherence to React and Redux best practices.
   - Proper error handling and user feedback mechanisms.

5. **Innovation and Problem-Solving**:
   - Creativity and effective problem-solving skills.

## Submission

- Fill out the Google form for submission: [Google Form](https://forms.gle/Gzg8EuAoXha4Vpve7)

---

Thank you for reviewing this project. If you have any questions or need further assistance, please feel free to contact me.

Mohammad Akbar# Cyntexa-Frontend-Developer-Assignment
