import React, { useState } from "react";
import { PROPERTYLISTINGSAMPLE, heroBg } from "../constants";

// Pill component
type PillProps = {
  label: string;
  active?: boolean;
  onClick?: () => void;
};

const Pill: React.FC<PillProps> = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    style={{
      padding: "0.5rem 1.2rem",
      borderRadius: "999px",
      border: active ? "2px solid #0070f3" : "1px solid #ccc",
      background: active ? "#e6f0fa" : "#fff",
      color: "#0070f3",
      fontWeight: 500,
      marginRight: "0.5rem",
      marginBottom: "0.5rem",
      cursor: "pointer",
      outline: "none",
      transition: "all 0.2s",
    }}
  >
    {label}
  </button>
);

// Predefined filters
const FILTERS = [
  "Top Villa",
  "Self Checkin",
  "Pet Friendly",
  "Free Parking",
  "Beachfront",
  "Mountain View",
  "City Center",
];

// Hero Section
const HeroSection: React.FC = () => (
  <section
    style={{
      width: "100%",
      minHeight: "350px",
      backgroundImage: heroBg,
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      borderRadius: "1rem",
      marginBottom: "2rem",
      overflow: "hidden",
    }}
  >
    <div
      style={{
        background: "rgba(0,0,0,0.45)",
        color: "#fff",
        padding: "3rem 2rem",
        borderRadius: "1rem",
        textAlign: "center",
        maxWidth: "90vw",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "1rem" }}>
        Find your favorite place here!
      </h1>
      <p style={{ fontSize: "1.25rem", fontWeight: 400 }}>
        The best prices for over 2 million properties worldwide.
      </p>
    </div>
  </section>
);

// Filter Section
const FilterSection: React.FC<{
  activeFilter: string | null;
  setActiveFilter: (filter: string | null) => void;
}> = ({ activeFilter, setActiveFilter }) => (
  <div style={{ margin: "1.5rem 0", display: "flex", flexWrap: "wrap" }}>
    {FILTERS.map((filter) => (
      <Pill
        key={filter}
        label={filter}
        active={activeFilter === filter}
        onClick={() => setActiveFilter(activeFilter === filter ? null : filter)}
      />
    ))}
  </div>
);

// Listing Section
const ListingSection: React.FC<{ filter: string | null }> = ({ filter }) => {
  const filtered = filter
    ? PROPERTYLISTINGSAMPLE.filter((p) =>
        p.category.map((c) => c.toLowerCase()).includes(filter.toLowerCase())
      )
    : PROPERTYLISTINGSAMPLE;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        gap: "2rem",
        width: "100%",
        marginTop: "2rem",
      }}
    >
      {filtered.map((property, idx) => (
        <div
          key={property.name + idx}
          style={{
            border: "1px solid #eee",
            borderRadius: "1rem",
            overflow: "hidden",
            background: "#fff",
            boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
            transition: "box-shadow 0.2s",
          }}
        >
          <img
            src={property.image}
            alt={property.name}
            style={{
              width: "100%",
              height: "180px",
              objectFit: "cover",
              borderTopLeftRadius: "1rem",
              borderTopRightRadius: "1rem",
            }}
          />
          <div style={{ padding: "1rem" }}>
            <h3 style={{ margin: "0 0 0.5rem 0", fontSize: "1.1rem" }}>
              {property.name}
            </h3>
            <div style={{ color: "#0070f3", fontWeight: 600, marginBottom: "0.5rem" }}>
              ${property.price}
            </div>
            <div style={{ color: "#888", fontSize: "0.95rem" }}>
              ⭐ {property.rating}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Main Page
const HomePage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "2rem" }}>
      <HeroSection />
      <FilterSection activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      <ListingSection filter={activeFilter} />
    </div>
  );
};

export default HomePage;

