import React from "react";

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
