import React from "react";

// Adjust the type/interface as per your property object structure
interface PropertyDetailProps {
  property: {
    id: string;
    title: string;
    description: string;
    price: number;
    address: string;
    image?: string;
    // Add other fields as needed
  };
}

const PropertyDetail: React.FC<PropertyDetailProps> = ({ property }) => {
  return (
    <div>
      <h1>{property.title}</h1>
      <p>{property.description}</p>
      <p>
        <strong>Price:</strong> ${property.price}
      </p>
      <p>
        <strong>Address:</strong> {property.address}
      </p>
      {property.image && (
        <img src={property.image} alt={property.title} style={{ maxWidth: "400px" }} />
      )}
      {/* Render other property fields as needed */}
    </div>
  );
};

export default PropertyDetail;