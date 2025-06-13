import React from "react";

const Footer: React.FC = () => {
  return (
    <footer style={{ padding: "1rem", background: "#f5f5f5", textAlign: "center", borderTop: "1px solid #eee" }}>
      <div>
        <span>&copy; {new Date().getFullYear()} MyListingApp. All rights reserved.</span>
      </div>
      <div style={{ marginTop: "0.5rem", fontSize: "0.9rem", color: "#888" }}>
        <a href="/privacy" style={{ marginRight: "1rem", color: "#0070f3", textDecoration: "none" }}>Privacy Policy</a>
        <a href="/terms" style={{ color: "#0070f3", textDecoration: "none" }}>Terms of Service</a>
      </div>
    </footer>
  );
};

export default Footer;