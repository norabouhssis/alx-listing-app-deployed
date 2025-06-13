import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";
import BookingSection from "@/components/property/BookingSection";
import ReviewSection from "@/components/property/ReviewSection";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;
  const property = PROPERTYLISTINGSAMPLE.find((item) => item.name === id);

  if (!property) return <p>Property not found</p>;

  return (
    <div className="property-detail-container">
      <div className="main-content">
        <PropertyDetail property={property} />
        <ReviewSection reviews={property.reviews} />
      </div>
      <aside className="booking-section">
        <BookingSection price={property.price} />
      </aside>
      <style jsx>{`
        .property-detail-container {
          display: flex;
          flex-direction: row;
          gap: 2rem;
          padding: 2rem 1rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        .main-content {
          flex: 2;
          min-width: 0;
        }
        .booking-section {
          flex: 1;
          min-width: 300px;
          max-width: 400px;
        }
        @media (max-width: 900px) {
          .property-detail-container {
            flex-direction: column;
            gap: 1.5rem;
          }
          .booking-section {
            max-width: 100%;
            min-width: 0;
          }
        }
      `}</style>
    </div>
  );
}