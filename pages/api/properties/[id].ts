// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  // You can return hardcoded data based on ID
  if (id === "Property1") {
    res.status(200).json({
      id: "Property1",
      name: "Villa Arrecife Beach House",
      description:
        "Feel like exploring the Dominican? Start the day with a hike on one of Playa Moron’s many trails. Weave your way around the gated community to find secluded sandy coves for swimming and paddleboarding. When you’Feel like exploring the Dominican? Start the day with a hike on one of Playa Moron’s many trails. Weave your way around the gated community to find secluded sandy coves for swimming and paddleboarding. When you’re ready to chill with friends, the beach house pool awaits. Spend the night entertaining in the outdoor lounge, sipping drinks in the hot tub, and gazing out over incredible ocean views.",
      price: 2500,
      address: { state: "Sidemen", city: "Bali", country: "Indonesia" },
      image: "/assets/DetailImages/image19.png",
      rating: 4.76,
      category: [
        "Wifi",
        "Hot tub",
        "Bartender",
        "Butler",
        "Shared beach access",
        "Kitchen",
        "Pool - infinity",
        "Cleaning available during stay",
        "Chef",
        "Mountain view",
      ],
      offers: {
        bed: "4 Bedrooms",
        shower: "2 Bathrooms",
        occupants: "2-4 Guests",
      },
      discount: "-&88",
    });
  } else {
    res.status(404).json({ message: "Property not found" });
  }
}
