export interface PropertyProps {
  id: string;
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
}

export interface ReviewSectionProps {
  reviews: Review[];
  propertyId: string;
}

export interface Review {
  id: string;
  comment: string;
  avatar: string;
  name: string;
  rating: string;
}
