import React from "react";
import RegistrationForm from "./component/RegistrationForm";
import GitHubUser from "./component/GitHubUser";
import { ThemeProvider } from "./component/theme/ThemeContext";
import ThemeSwitcher from "./component/theme/ThemeSwitcher";
import LightTheme from "./component/theme/LightTheme";
import DarkTheme from "./component/theme/DarkTheme";
import Logger from "./component/HOC/Logger";
import ExampleComponent from "./component/HOC/ExampleComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./component/Router/About";
import Home from "./component/Router/Home";
import Navbar from "./component/Router/Navbar";

// here ComponentWithLogging is a Hoc which wrap a another component as paramerter

const ComponentWithLogging = Logger(ExampleComponent);

export default function App({}) {
  return (
    <div style={styles.container}>
      <img src={"https://i.ibb.co/B2q9y4J/temp.png"} alt='Qilin Software Lab Logo' style={styles.logo} />
      <h1 style={styles.heading}>Welcome to Qilin Software Lab</h1>
      <p style={styles.description}>
        Thank you for participating in our Junior React Developer pre-assessment! Below is a simple component. Please feel free to edit this component
        and start working on the assessment tasks.
      </p>
      {/* Add any additional instructions or guidance for candidates here */}
      <RegistrationForm/>
      <GitHubUser/>
      {/* here we are wrappin all the child compoentn that needed the theme and toggle fucntionlity
       in a provider component */}
      <ThemeProvider>
      <div>
        <ThemeSwitcher />
        <LightTheme />
        <DarkTheme />
      </div>
    </ThemeProvider>
    {/* here we are diplaying a HOC */}
    <div>
      <ComponentWithLogging />
    </div>
     {/* this is concept of routing in the react we have browserROuter that Top
     after that we can create routes for every page like home and about 
     after that we connect roites with the component using the route */}
    <BrowserRouter>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    padding: "20px",
    backgroundColor: "#f7f7f7",
    borderRadius: "8px",
    fontSmooth: "auto", // Ensure smooth fonts
    fontFamily: "sans-serif", // Use a sans-serif font
  },
  logo: {
    width: "100px",
    marginBottom: "20px",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
    fontSmooth: "auto", // Ensure smooth fonts
    fontFamily: "sans-serif", // Use a sans-serif font
  },
  description: {
    fontSize: "16px",
    color: "#666",
    lineHeight: "1.5",
    fontSmooth: "auto", // Ensure smooth fonts
    fontFamily: "sans-serif", // Use a sans-serif font
  },
};
