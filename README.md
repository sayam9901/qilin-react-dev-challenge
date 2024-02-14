This project contains various React components developed for different tasks.

Instructions
Clone the repository to your local machine:

git clone <repository_url>
Navigate to the project directory:

cd react-components-project
Install dependencies using npm or yarn:


npm install
or
yarn install
Run the development server:


npm start
This will start the development server and open the application in your default web browser. If it doesn't open automatically, you can access it at http://localhost:3000.

Components
1. Navbar Component
Description:
A simple React navbar component with navigation links for Home and About pages using React Router.

How to Use:
The navbar component is styled using inline CSS for simplicity. You can customize the styles according to your preferences by modifying the styles in the Navbar.js file.
The project uses React Router for handling navigation between different pages. Make sure you have react-router-dom installed as a dependency.
You can add more routes and pages as needed by extending the App.js file and creating additional components.
2. Theme Switcher Component
Description:
A theme-switching feature implemented using the Context API. It includes a ThemeContext that manages the current theme (light or dark) and child components (LightTheme and DarkTheme) that display content differently based on the selected theme. A button in a parent component is used to toggle between themes.

How to Use:
The ThemeSwitcher component provides a button to toggle between light and dark themes.
The LightTheme and DarkTheme components consume the theme context to render content differently based on the selected theme.
The entire application is wrapped with ThemeProvider to make the theme context available throughout the component tree.
3. Higher-Order Component (HOC)
Description:
A higher-order component named Logger that logs the lifecycle methods of a wrapped component. It wraps a simple component with the Logger HOC and observes the lifecycle events in the console.

How to Use:
The Logger HOC logs lifecycle methods such as componentDidMount, componentDidUpdate, and componentWillUnmount of the wrapped component.
It can be applied to any component by wrapping it with Logger.
4. Routing and Lazy Loading
Description:
A React application with two pages, Home and About, implemented using React Router for navigation. Lazy loading is implemented for the About page to optimize the initial loading performance.

How to Use:
The application provides navigation between the Home and About pages using React Router.
Lazy loading is applied to the About page to load it asynchronously, improving initial loading performance.
Additional Notes
First time implementing the Lazy loading
But overall Tasks for that much hard i would say

