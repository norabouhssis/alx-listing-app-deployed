export interface PropertyProps {
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string;
  description: string;
  reviews : string[];
}

export interface ReviewSectionProps {
  propertyId: string;
}

export interface Review {
  id: string;
  comment: string;
  // Add other fields if needed
}

