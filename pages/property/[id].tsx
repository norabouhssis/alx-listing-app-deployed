import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";
import { PropertyProps } from "@/interfaces";
import axios from "axios";

interface RawPropertyData {
  id: string;
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating?: number;
  category?: string[];
  price: number;
  offers?: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image?: string;
  discount?: string;
  description: string;
}

const PropertyDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [property, setProperty] = useState<PropertyProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id || typeof id !== "string") return;

    const fetchProperty = async () => {
      try {
        const response = await axios.get<RawPropertyData>(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/${id}`
        );

        const data = response.data;

        console.log("Fetched data:", data);

        if (!data?.name) {
          throw new Error("Invalid data shape from API.");
        }

        const formattedProperty: PropertyProps = {
          id: data.id,
          name: data.name,
          address: data.address,
          rating: data.rating ?? 0,
          category: data.category ?? [],
          price: data.price,
          offers: data.offers ?? { bed: "", shower: "", occupants: "" },
          image: data.image ?? "",
          discount: data.discount ?? "",
          description: data.description,
        };

        setProperty(formattedProperty);
      } catch (err: unknown) {
        if (err instanceof Error) {
          console.error("Fetch error:", err.message);
          setError(err.message);
        } else {
          console.error("Unknown fetch error", err);
          setError("Unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) return <p>Loading property details...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!property) return <p>Loading...</p>;

  return <PropertyDetail property={property} />;
};

export default PropertyDetailPage;
