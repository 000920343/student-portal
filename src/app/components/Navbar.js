// app/components/Navbar.js

export default function Navbar() {
    return (
      <nav style={navStyle}>
        <h1 style={titleStyle}>New Generation High School - Student Portal</h1>
      </nav>
    );
  }
  
  const navStyle = {
    padding: "1rem",
    backgroundColor: "#333",
    color: "#fff",
    textAlign: "center",
  };
  
  const titleStyle = {
    fontSize: "1.8rem", // Increase the font size
    fontWeight: "600", // Semi-bold for a modern look
    letterSpacing: "0.05em", // Adds subtle spacing between letters
    textShadow: "1px 1px 4px rgba(0, 0, 0, 0.3)", // Adds a soft shadow
  };
  