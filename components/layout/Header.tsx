import React from "react";

const accommodationTypes = [
  "Rooms",
  "Mansion",
  "Countryside",
  "Apartment",
  "Villa",
  "Studio",
];

const Header: React.FC = () => {
  return (
    <header style={{ padding: "1rem", borderBottom: "1px solid #eee", background: "#fff" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <div style={{ fontWeight: "bold", fontSize: "1.5rem", color: "#0070f3" }}>
          <span role="img" aria-label="logo">🏠</span> MyListingApp
        </div>

        {/* Search Bar */}
        <div style={{ flex: 1, margin: "0 2rem" }}>
          <input
            type="text"
            placeholder="Search for properties..."
            style={{
              width: "100%",
              padding: "0.5rem 1rem",
              borderRadius: "20px",
              border: "1px solid #ccc",
              outline: "none",
            }}
          />
        </div>

        {/* Auth Buttons */}
        <div>
          <button style={{ marginRight: "1rem", padding: "0.5rem 1.2rem", borderRadius: "20px", border: "none", background: "#0070f3", color: "#fff" }}>
            Sign In
          </button>
          <button style={{ padding: "0.5rem 1.2rem", borderRadius: "20px", border: "1px solid #0070f3", background: "#fff", color: "#0070f3" }}>
            Sign Up
          </button>
        </div>
      </div>

      {/* Accommodation Types */}
      <nav style={{ marginTop: "1rem", display: "flex", gap: "1.5rem" }}>
        {accommodationTypes.map((type) => (
          <a key={type} href={`#${type.toLowerCase()}`} style={{ color: "#333", textDecoration: "none", fontWeight: 500 }}>
            {type}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;