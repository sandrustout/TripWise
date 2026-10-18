import { 
  DestinationResponse, 
  FlightSearchResponse, 
  HotelResponse, 
  PlaceResponse, 
  DishResponse, 
  WeatherResponse, 
  EventResponse,
  Trip,
  TripItem,
  AirportInfo,
  SystemStats,
  ProviderHealthStatus,
  UserProfile,
  OptimiseDayResponse
} from '../types';

export const FALLBACK_DESTINATIONS: DestinationResponse[] = [
  {
    id: "d0000000-0000-0000-0000-000000000001",
    name: "Goa",
    country: "India",
    region: "Western Coast",
    lat: 15.2993,
    lng: 74.1240,
    iata_codes: ["GOI", "GOX"],
    timezone: "Asia/Kolkata",
    description: "Coastal state celebrated for Portuguese heritage churches, spice plantations, and golden sandy coastlines.",
    hero_image_url: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",
    hero_image_author: "Sumit Mangela",
    hero_image_attribution: "Photo by Sumit Mangela on Unsplash"
  },
  {
    id: "d0000000-0000-0000-0000-000000000002",
    name: "Jaipur",
    country: "India",
    region: "Rajasthan",
    lat: 26.9124,
    lng: 75.7873,
    iata_codes: ["JAI"],
    timezone: "Asia/Kolkata",
    description: "The Pink City of Rajasthan, renowned for UNESCO World Heritage palaces, observatories, and hill forts.",
    hero_image_url: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80",
    hero_image_author: "Annie Spratt",
    hero_image_attribution: "Photo by Annie Spratt on Unsplash"
  },
  {
    id: "d0000000-0000-0000-0000-000000000003",
    name: "Kochi",
    country: "India",
    region: "Kerala",
    lat: 9.9312,
    lng: 76.2673,
    iata_codes: ["COK"],
    timezone: "Asia/Kolkata",
    description: "Historic port city featuring Portuguese colonial architecture, Chinese fishing nets, and spice trading streets.",
    hero_image_url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
    hero_image_author: "Naveen Annam",
    hero_image_attribution: "Photo by Naveen Annam on Unsplash"
  },
  {
    id: "d0000000-0000-0000-0000-000000000004",
    name: "Varanasi",
    country: "India",
    region: "Uttar Pradesh",
    lat: 25.3176,
    lng: 82.9739,
    iata_codes: ["VNS"],
    timezone: "Asia/Kolkata",
    description: "Ancient spiritual capital on the banks of the sacred Ganges, with centuries of culture, weaving, and philosophy.",
    hero_image_url: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80",
    hero_image_author: "Laurentiu Morariu",
    hero_image_attribution: "Photo by Laurentiu Morariu on Unsplash"
  },
  {
    id: "d0000000-0000-0000-0000-000000000005",
    name: "Bengaluru",
    country: "India",
    region: "Karnataka",
    lat: 12.9716,
    lng: 77.5946,
    iata_codes: ["BLR"],
    timezone: "Asia/Kolkata",
    description: "India garden and technology metropolis known for Victorian parks, craft breweries, and cultural venues.",
    hero_image_url: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=80",
    hero_image_author: "Naveen",
    hero_image_attribution: "Photo by Naveen on Unsplash"
  },
  {
    id: "d0000000-0000-0000-0000-000000000006",
    name: "Tokyo",
    country: "Japan",
    region: "Kanto",
    lat: 35.6762,
    lng: 139.6503,
    iata_codes: ["HND", "NRT"],
    timezone: "Asia/Tokyo",
    description: "Global capital fusing historic shrines, neon-lit districts, high-speed rail networks, and gastronomy.",
    hero_image_url: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80",
    hero_image_author: "Su San Lee",
    hero_image_attribution: "Photo by Su San Lee on Unsplash"
  },
  {
    id: "d0000000-0000-0000-0000-000000000007",
    name: "Paris",
    country: "France",
    region: "Ile-de-France",
    lat: 48.8566,
    lng: 2.3522,
    iata_codes: ["CDG", "ORY"],
    timezone: "Europe/Paris",
    description: "The City of Light, world-renowned for Haussmann boulevards, the Louvre Museum, and cafe culture.",
    hero_image_url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
    hero_image_author: "Chris Karidis",
    hero_image_attribution: "Photo by Chris Karidis on Unsplash"
  },
  {
    id: "d0000000-0000-0000-0000-000000000008",
    name: "Dubai",
    country: "United Arab Emirates",
    region: "Dubai",
    lat: 25.2048,
    lng: 55.2708,
    iata_codes: ["DXB"],
    timezone: "Asia/Dubai",
    description: "Desert metropolis of ultra-modern architectural icons, desert safaris, and traditional spice souks.",
    hero_image_url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
    hero_image_author: "ZQ Lee",
    hero_image_attribution: "Photo by ZQ Lee on Unsplash"
  },
  {
    id: "d0000000-0000-0000-0000-000000000009",
    name: "Mumbai",
    country: "India",
    region: "Maharashtra",
    lat: 18.9220,
    lng: 72.8347,
    iata_codes: ["BOM"],
    timezone: "Asia/Kolkata",
    description: "The commercial heartbeat of India, famed for Marine Drive, colonial Victorian gothic landmarks, and coastal bazaars.",
    hero_image_url: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80",
    hero_image_author: "Hardik Joshi",
    hero_image_attribution: "Photo by Hardik Joshi on Unsplash"
  },
  {
    id: "d0000000-0000-0000-0000-000000000010",
    name: "Delhi",
    country: "India",
    region: "National Capital Region",
    lat: 28.6139,
    lng: 77.2090,
    iata_codes: ["DEL"],
    timezone: "Asia/Kolkata",
    description: "Vibrant national capital bridging centuries of Mughal empires, broad Lutyens avenues, and iconic culinary lanes.",
    hero_image_url: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80",
    hero_image_author: "Naveen",
    hero_image_attribution: "Photo by Naveen on Unsplash"
  },
  {
    id: "d0000000-0000-0000-0000-000000000011",
    name: "London",
    country: "United Kingdom",
    region: "Greater London",
    lat: 51.5074,
    lng: -0.1278,
    iata_codes: ["LHR", "LGW"],
    timezone: "Europe/London",
    description: "Cosmopolitan royal capital on the Thames, celebrated for West End theatres, royal palaces, and historic museums.",
    hero_image_url: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80",
    hero_image_author: "Luke Stackpoole",
    hero_image_attribution: "Photo by Luke Stackpoole on Unsplash"
  },
  {
    id: "d0000000-0000-0000-0000-000000000012",
    name: "Singapore",
    country: "Singapore",
    region: "Southeast Asia",
    lat: 1.3521,
    lng: 103.8198,
    iata_codes: ["SIN"],
    timezone: "Asia/Singapore",
    description: "Futuristic city-state known for Marina Bay Sands, Supertree Groves, world-class street hawker centres, and gardens.",
    hero_image_url: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80",
    hero_image_author: "Seng Chen",
    hero_image_attribution: "Photo by Seng Chen on Unsplash"
  },
  {
    id: "d0000000-0000-0000-0000-000000000013",
    name: "Bali",
    country: "Indonesia",
    region: "Lesser Sunda Islands",
    lat: -8.3405,
    lng: 115.0920,
    iata_codes: ["DPS"],
    timezone: "Asia/Makassar",
    description: "Island of the Gods boasting terraced emerald rice fields, spiritual water temples, surf breaks, and coral reefs.",
    hero_image_url: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
    hero_image_author: "Oliver Sjöström",
    hero_image_attribution: "Photo by Oliver Sjöström on Unsplash"
  }
];

export function getFallbackFlights(originIata = 'MAA', destIata = 'GOI', date = '2026-11-15'): FlightSearchResponse {
  const origin = originIata.toUpperCase();
  const dest = destIata.toUpperCase();

  const mockOffers = [
    {
      id: `fl-duffel-${origin}-${dest}-101`,
      provider: "duffel",
      airline_name: "IndiGo",
      airline_code: "6E",
      airline_color: "#001b94",
      airline_type: "LCC",
      flight_number: "6E-512",
      origin_iata: origin,
      origin_city: origin,
      destination_iata: dest,
      destination_city: dest,
      departure_time: `${date}T06:45:00`,
      arrival_time: `${date}T08:15:00`,
      duration_minutes: 90,
      stops: 0,
      stopover_airports: [],
      cabin_class: "economy",
      price_inr: 4850,
      base_fare_inr: 4100,
      taxes_inr: 750,
      convenience_fee: 0,
      currency: "INR",
      baggage_cabin_kg: 7,
      baggage_checked_kg: 15,
      carbon_kg: 112,
      is_cheapest: true,
      is_fastest: true,
      is_best_value: true,
      savings_pct_vs_highest: 38
    },
    {
      id: `fl-amadeus-${origin}-${dest}-204`,
      provider: "amadeus",
      airline_name: "Air India",
      airline_code: "AI",
      airline_color: "#ed1b24",
      airline_type: "FSC",
      flight_number: "AI-883",
      origin_iata: origin,
      origin_city: origin,
      destination_iata: dest,
      destination_city: dest,
      departure_time: `${date}T10:15:00`,
      arrival_time: `${date}T11:55:00`,
      duration_minutes: 100,
      stops: 0,
      stopover_airports: [],
      cabin_class: "economy",
      price_inr: 5920,
      base_fare_inr: 5050,
      taxes_inr: 870,
      convenience_fee: 0,
      currency: "INR",
      baggage_cabin_kg: 7,
      baggage_checked_kg: 20,
      carbon_kg: 125,
      is_cheapest: false,
      is_fastest: false,
      is_best_value: false,
      savings_pct_vs_highest: 24
    },
    {
      id: `fl-duffel-${origin}-${dest}-305`,
      provider: "duffel",
      airline_name: "Vistara",
      airline_code: "UK",
      airline_color: "#53183b",
      airline_type: "FSC",
      flight_number: "UK-942",
      origin_iata: origin,
      origin_city: origin,
      destination_iata: dest,
      destination_city: dest,
      departure_time: `${date}T14:30:00`,
      arrival_time: `${date}T16:10:00`,
      duration_minutes: 100,
      stops: 0,
      stopover_airports: [],
      cabin_class: "economy",
      price_inr: 6350,
      base_fare_inr: 5400,
      taxes_inr: 950,
      convenience_fee: 0,
      currency: "INR",
      baggage_cabin_kg: 7,
      baggage_checked_kg: 25,
      carbon_kg: 128,
      is_cheapest: false,
      is_fastest: false,
      is_best_value: false,
      savings_pct_vs_highest: 18
    },
    {
      id: `fl-amadeus-${origin}-${dest}-408`,
      provider: "amadeus",
      airline_name: "Akasa Air",
      airline_code: "QP",
      airline_color: "#ff6600",
      airline_type: "LCC",
      flight_number: "QP-1390",
      origin_iata: origin,
      origin_city: origin,
      destination_iata: dest,
      destination_city: dest,
      departure_time: `${date}T18:20:00`,
      arrival_time: `${date}T20:00:00`,
      duration_minutes: 100,
      stops: 0,
      stopover_airports: [],
      cabin_class: "economy",
      price_inr: 5200,
      base_fare_inr: 4400,
      taxes_inr: 800,
      convenience_fee: 0,
      currency: "INR",
      baggage_cabin_kg: 7,
      baggage_checked_kg: 15,
      carbon_kg: 114,
      is_cheapest: false,
      is_fastest: false,
      is_best_value: false,
      savings_pct_vs_highest: 33
    },
    {
      id: `fl-amadeus-${origin}-${dest}-512`,
      provider: "amadeus",
      airline_name: "Emirates / Codeshare",
      airline_code: "EK",
      airline_color: "#d71921",
      airline_type: "International",
      flight_number: "EK-541",
      origin_iata: origin,
      origin_city: origin,
      destination_iata: dest,
      destination_city: dest,
      departure_time: `${date}T21:40:00`,
      arrival_time: `${date}T23:35:00`,
      duration_minutes: 115,
      stops: 0,
      stopover_airports: [],
      cabin_class: "economy",
      price_inr: 7800,
      base_fare_inr: 6600,
      taxes_inr: 1200,
      convenience_fee: 0,
      currency: "INR",
      baggage_cabin_kg: 10,
      baggage_checked_kg: 30,
      carbon_kg: 140,
      is_cheapest: false,
      is_fastest: false,
      is_best_value: false,
      savings_pct_vs_highest: 0
    }
  ];

  return {
    offers: mockOffers,
    total_offers: mockOffers.length,
    cheapest_price_inr: 4850,
    highest_price_inr: 7800,
    max_savings_percentage: 38,
    route_summary: `${origin} to ${dest} Direct Flight Options`,
    providers_queried: ["duffel", "amadeus"]
  };
}

export function getFallbackFlightCalendar(date = '2026-11-15') {
  const baseDate = new Date(date || Date.now());
  const points = [];
  const basePrices = [4850, 5200, 4600, 6100, 7200, 6800, 4900, 4500, 4800, 5300, 6700, 7400, 5100, 4700];

  for (let i = 0; i < 14; i++) {
    const d = new Date(baseDate);
    d.setDate(baseDate.getDate() + i);
    const dateStr = d.toISOString().split('T')[0];
    points.push({
      date: dateStr,
      price_inr: basePrices[i % basePrices.length],
      is_cheapest: i === 7,
      currency: "INR"
    });
  }
  return { calendar: points };
}

export function getFallbackHotels(destName = 'Goa'): HotelResponse[] {
  return [
    {
      id: "h0000000-0000-0000-0000-000000000001",
      destination_id: "d0000000-0000-0000-0000-000000000001",
      name: "The Heritage Grand & Spa Resort",
      category: "luxury_resort",
      lat: 15.3012,
      lng: 74.1205,
      address: "Seashore Boulevard, Near Calangute, Goa",
      distance_to_airport_km: 24.5,
      distance_to_center_km: 1.8,
      nearest_attraction_name: "Beach Boardwalk & Historic Chapel",
      nearest_attraction_distance_km: 0.4,
      star_rating: 4.8,
      price_per_night_inr: 5800,
      taxes_and_fees_inr: 700,
      total_price_inr: 6500,
      location_score: 9.4,
      cleanliness_score: 9.6,
      value_score: 9.2,
      amenities_score: 9.5,
      quietness_score: 9.1,
      tripwise_index: 9.4,
      review_count: 428,
      amenities: ["Free High-speed Wi-Fi", "Infinity Pool", "Ocean View", "Complimentary Breakfast", "Spa & Wellness", "Airport Shuttle"],
      image_url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
      image_author: "Edvin Johansson",
      image_attribution: "Photo by Edvin Johansson on Unsplash"
    },
    {
      id: "h0000000-0000-0000-0000-000000000002",
      destination_id: "d0000000-0000-0000-0000-000000000001",
      name: "Boutique Colonial Villa Suites",
      category: "boutique_hotel",
      lat: 15.2950,
      lng: 74.1280,
      address: "Fontainhas Latin Quarter, Goa",
      distance_to_airport_km: 28.0,
      distance_to_center_km: 0.6,
      nearest_attraction_name: "Colonial Portuguese Heritage Alley",
      nearest_attraction_distance_km: 0.1,
      star_rating: 4.6,
      price_per_night_inr: 4200,
      taxes_and_fees_inr: 500,
      total_price_inr: 4700,
      location_score: 9.7,
      cleanliness_score: 9.3,
      value_score: 9.4,
      amenities_score: 8.9,
      quietness_score: 9.5,
      tripwise_index: 9.3,
      review_count: 312,
      amenities: ["Free Wi-Fi", "Artisan Coffee Bar", "Air Conditioning", "Terrace Garden", "Bicycle Rental"],
      image_url: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
      image_author: "Fernanda Martinez",
      image_attribution: "Photo by Fernanda Martinez on Unsplash"
    },
    {
      id: "h0000000-0000-0000-0000-000000000003",
      destination_id: "d0000000-0000-0000-0000-000000000001",
      name: "Serene Palms Eco Retreat",
      category: "nature_retreat",
      lat: 15.2890,
      lng: 74.1350,
      address: "Spice Forest Lane, Goa",
      distance_to_airport_km: 32.0,
      distance_to_center_km: 5.2,
      nearest_attraction_name: "Botanical Spice Sanctuary",
      nearest_attraction_distance_km: 0.8,
      star_rating: 4.5,
      price_per_night_inr: 3400,
      taxes_and_fees_inr: 410,
      total_price_inr: 3810,
      location_score: 8.8,
      cleanliness_score: 9.5,
      value_score: 9.6,
      amenities_score: 9.0,
      quietness_score: 9.8,
      tripwise_index: 9.2,
      review_count: 245,
      amenities: ["Free Breakfast", "Yoga Pavilion", "Organic Farm Restaurant", "Swimming Pool", "Nature Trails"],
      image_url: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80",
      image_author: "Sara Dubler",
      image_attribution: "Photo by Sara Dubler on Unsplash"
    }
  ];
}

export function getFallbackPlaces(destId?: string): PlaceResponse[] {
  return [
    {
      id: "p0000000-0000-0000-0000-000000000001",
      destination_id: destId || "d0000000-0000-0000-0000-000000000001",
      source: "curated",
      name: "Basilica of Bom Jesus & Old Heritage Quarter",
      category: "historic_architecture",
      lat: 15.5009,
      lng: 73.9116,
      description: "16th-century Baroque church and UNESCO World Heritage Site containing the sacred relics of St. Francis Xavier.",
      rating: 4.8,
      rate_score: 9.5,
      fee_text: "Free entry (Museum ₹50)",
      typical_duration_minutes: 90,
      image_url: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
      image_author: "Alexey",
      image_attribution: "Photo by Alexey on Unsplash",
      why_recommended: ["UNESCO World Heritage Monument", "Fine Baroque Architecture", "Centuries of Sacred Art"]
    },
    {
      id: "p0000000-0000-0000-0000-000000000002",
      destination_id: destId || "d0000000-0000-0000-0000-000000000001",
      source: "curated",
      name: "Fort Aguada & Coastal Lighthouse",
      category: "fortress_coastal",
      lat: 15.4926,
      lng: 73.7736,
      description: "17th-century Portuguese fortress commanding panoramic views over the Arabian Sea and Mandovi estuary.",
      rating: 4.7,
      rate_score: 9.2,
      fee_text: "₹25 Indian citizens / ₹300 Foreign nationals",
      typical_duration_minutes: 120,
      image_url: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
      image_author: "Sumit Mangela",
      image_attribution: "Photo by Sumit Mangela on Unsplash",
      why_recommended: ["Historic Sea Fortress", "Dramatic Arabian Sea Sunsets", "Fresh Ocean Breezes"]
    },
    {
      id: "p0000000-0000-0000-0000-000000000003",
      destination_id: destId || "d0000000-0000-0000-0000-000000000001",
      source: "curated",
      name: "Dudhsagar Cascading Waterfalls",
      category: "nature_waterfall",
      lat: 15.3144,
      lng: 74.3143,
      description: "Four-tiered majestic waterfall tumbling 310 metres down the forested Western Ghats mountain face.",
      rating: 4.9,
      rate_score: 9.7,
      fee_text: "Forest entry ₹100 + Safari Jeep pass",
      typical_duration_minutes: 240,
      image_url: "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=800&q=80",
      image_author: "Bipin",
      image_attribution: "Photo by Bipin on Unsplash",
      why_recommended: ["Highest Waterfalls in Goa", "Jungle Jeep Safari", "Natural Freshwater Pools"]
    }
  ];
}

export function getFallbackDishes(destId?: string): DishResponse[] {
  return [
    {
      id: "dish-01",
      destination_id: destId || "d0000000-0000-0000-0000-000000000001",
      name: "Goan Fish Curry with Steamed Rice",
      description: "Fragrant coconut-tamarind gravy infused with fresh catch, kokum, and roasted red chillies.",
      dietary_tags: ["non-veg", "seafood", "gluten-free"],
      source_note: "Signature Goan coastal delicacy cooked with grated coconut milk and stone-ground spices."
    },
    {
      id: "dish-02",
      destination_id: destId || "d0000000-0000-0000-0000-000000000001",
      name: "Vegetable Xacuti with Poee Bread",
      description: "Rich white poppy seed and toasted coconut curry served alongside warm local earthen-baked leavened bread.",
      dietary_tags: ["vegetarian", "dairy-free"],
      source_note: "Traditional Portuguese-Goan recipe featuring toasted whole spices and fresh herbs."
    },
    {
      id: "dish-03",
      destination_id: destId || "d0000000-0000-0000-0000-000000000001",
      name: "Bebinca (Multi-Layered Coconut Pudding)",
      description: "Traditional 7-layer baked dessert prepared with pure coconut milk, ghee, egg yolk, and cardamom.",
      dietary_tags: ["vegetarian", "dessert"],
      source_note: "The Queen of Goan desserts, painstakingly baked layer by layer in earthen ovens."
    }
  ];
}

export function getFallbackWeather(): WeatherResponse {
  const dates = ["2026-11-15", "2026-11-16", "2026-11-17", "2026-11-18", "2026-11-19", "2026-11-20", "2026-11-21"];
  const conditions = [
    { cond: "Sunny & Pleasant", icon: "sun", max: 31, min: 23, rain: 5 },
    { cond: "Clear Coastal Sky", icon: "sun", max: 32, min: 24, rain: 0 },
    { cond: "Breezy & Warm", icon: "sun", max: 30, min: 23, rain: 10 },
    { cond: "Scattered Clouds", icon: "cloud-sun", max: 29, min: 22, rain: 15 },
    { cond: "Sunny & Mild", icon: "sun", max: 31, min: 23, rain: 5 },
    { cond: "Clear Sky", icon: "sun", max: 32, min: 24, rain: 0 },
    { cond: "Pleasant Evening", icon: "sun", max: 30, min: 22, rain: 5 }
  ];

  return {
    summary: "Pleasant tropical weather with clear skies and moderate coastal breezes. Ideal for walking tours and outdoor excursions.",
    days: dates.map((d, i) => ({
      date: d,
      temp_max_c: conditions[i].max,
      temp_min_c: conditions[i].min,
      precipitation_prob: conditions[i].rain,
      condition: conditions[i].cond,
      icon: conditions[i].icon
    })),
    packing_suggestions: [
      "Breathable linen or cotton clothing",
      "Wide-brim hat & UV sunglasses",
      "Comfortable walking sandals or sneakers",
      "Reef-safe sunscreen and light rain jacket"
    ]
  };
}

export function getFallbackEvents(): EventResponse[] {
  return [
    {
      name: "International Coastal Jazz & Art Carnival",
      type: "cultural_festival",
      start_date: "2026-11-18",
      end_date: "2026-11-21",
      source: "official_tourism_board",
      impact_level: "high_cultural_value",
      closure_risk: false,
      description: "Four days of world music, open-air art galleries, and waterfront street food exhibitions."
    }
  ];
}

export const FALLBACK_AIRPORTS: AirportInfo[] = [
  { iata: 'DEL', name: 'Indira Gandhi International Airport', city: 'Delhi', country: 'India', lat: 28.5562, lng: 77.1000 },
  { iata: 'BOM', name: 'Chhatrapati Shivaji Maharaj International', city: 'Mumbai', country: 'India', lat: 19.0896, lng: 72.8656 },
  { iata: 'BLR', name: 'Kempegowda International Airport', city: 'Bengaluru', country: 'India', lat: 13.1986, lng: 77.7066 },
  { iata: 'MAA', name: 'Chennai International Airport', city: 'Chennai', country: 'India', lat: 12.9941, lng: 80.1709 },
  { iata: 'GOI', name: 'Dabolim Airport', city: 'Goa', country: 'India', lat: 15.3808, lng: 73.8314 },
  { iata: 'GOX', name: 'Manohar International Airport', city: 'Mopa Goa', country: 'India', lat: 15.7722, lng: 73.8683 },
  { iata: 'JAI', name: 'Jaipur International Airport', city: 'Jaipur', country: 'India', lat: 26.8242, lng: 75.8122 },
  { iata: 'COK', name: 'Cochin International Airport', city: 'Kochi', country: 'India', lat: 10.1518, lng: 76.3929 },
  { iata: 'VNS', name: 'Lal Bahadur Shastri International Airport', city: 'Varanasi', country: 'India', lat: 25.4524, lng: 82.8593 },
  { iata: 'CCU', name: 'Netaji Subhash Chandra Bose International', city: 'Kolkata', country: 'India', lat: 22.6547, lng: 88.4467 },
  { iata: 'HYD', name: 'Rajiv Gandhi International Airport', city: 'Hyderabad', country: 'India', lat: 17.2403, lng: 78.4294 },
  { iata: 'DXB', name: 'Dubai International Airport', city: 'Dubai', country: 'United Arab Emirates', lat: 25.2532, lng: 55.3657 },
  { iata: 'LHR', name: 'Heathrow Airport', city: 'London', country: 'United Kingdom', lat: 51.4700, lng: -0.4543 },
  { iata: 'CDG', name: 'Charles de Gaulle Airport', city: 'Paris', country: 'France', lat: 49.0097, lng: 2.5479 },
  { iata: 'HND', name: 'Haneda Airport', city: 'Tokyo', country: 'Japan', lat: 35.5494, lng: 139.7798 },
  { iata: 'SIN', name: 'Singapore Changi Airport', city: 'Singapore', country: 'Singapore', lat: 1.3644, lng: 103.9915 },
  { iata: 'DPS', name: 'Ngurah Rai International Airport', city: 'Bali', country: 'Indonesia', lat: -8.7482, lng: 115.1672 }
];

// LocalStorage helpers for offline Trip management
const TRIPS_STORAGE_KEY = 'tripwise_offline_trips';
const PROFILE_STORAGE_KEY = 'tripwise_offline_profile';

export function getStoredTrips(): Trip[] {
  try {
    const raw = localStorage.getItem(TRIPS_STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export function saveStoredTrips(trips: Trip[]) {
  try {
    localStorage.setItem(TRIPS_STORAGE_KEY, JSON.stringify(trips));
  } catch (err) {
    console.error('Failed to save offline trips:', err);
  }
}

export function ensureInitialTrips(): Trip[] {
  let trips = getStoredTrips();
  if (trips.length === 0) {
    const defaultTrip: Trip = {
      id: "trip-sample-goa",
      user_id: "demo-user",
      title: "Goa Coastal Heritage Escape",
      status: "planned",
      origin_iata: "MAA",
      destination_id: "d0000000-0000-0000-0000-000000000001",
      start_date: "2026-11-15",
      end_date: "2026-11-19",
      trip_type: "holiday",
      travellers_json: { adults: 2, children: 0, infants: 0 },
      cabin: "economy",
      budget: 45000,
      currency: "INR",
      is_public: false,
      version: 1,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      items: [
        {
          id: "item-01",
          trip_id: "trip-sample-goa",
          type: "flight",
          day_index: 0,
          order_index: 0,
          title: "IndiGo 6E-512 (MAA -> GOI)",
          start_time: "06:45",
          end_time: "08:15",
          duration_minutes: 90,
          travel_minutes_from_prev: 0,
          travel_mode: "transit",
          travel_source: "live",
          notes: "Morning departure from Chennai terminal 1",
          cost_estimate: 4850,
          cost_is_estimate: false,
          locked: false,
          version: 1
        },
        {
          id: "item-02",
          trip_id: "trip-sample-goa",
          type: "hotel",
          day_index: 0,
          order_index: 1,
          title: "The Heritage Grand & Spa Resort Check-in",
          start_time: "14:00",
          end_time: "15:00",
          duration_minutes: 60,
          travel_minutes_from_prev: 45,
          travel_mode: "cab",
          travel_source: "estimate",
          notes: "Calangute ocean view suite",
          cost_estimate: 6500,
          cost_is_estimate: false,
          locked: true,
          version: 1
        },
        {
          id: "item-03",
          trip_id: "trip-sample-goa",
          type: "place",
          day_index: 1,
          order_index: 0,
          title: "Basilica of Bom Jesus & Old Heritage Quarter",
          start_time: "09:30",
          end_time: "11:30",
          duration_minutes: 120,
          travel_minutes_from_prev: 25,
          travel_mode: "cab",
          travel_source: "estimate",
          notes: "UNESCO World Heritage Site exploration",
          cost_estimate: 50,
          cost_is_estimate: true,
          locked: false,
          version: 1
        }
      ]
    };
    trips = [defaultTrip];
    saveStoredTrips(trips);
  }
  return trips;
}

export function handleMockRequest<T>(endpoint: string, options: RequestInit = {}): T {
  const [pathPart, queryPart] = endpoint.split('?');
  const searchParams = new URLSearchParams(queryPart || '');
  const cleanPath = pathPart.startsWith('/') ? pathPart : `/${pathPart}`;
  const method = (options.method || 'GET').toUpperCase();

  // 1. Stats
  if (cleanPath === '/stats') {
    const stats: SystemStats = {
      destinations_count: FALLBACK_DESTINATIONS.length,
      providers_compared: 4,
      trips_planned: Math.max(12, getStoredTrips().length)
    };
    return stats as unknown as T;
  }

  // 2. Health providers
  if (cleanPath === '/health/providers') {
    const providers: ProviderHealthStatus[] = [
      { provider: 'Duffel Flights', configured: true, status: 'healthy', latency_ms: 120, note: 'Operational' },
      { provider: 'Amadeus Air', configured: true, status: 'healthy', latency_ms: 145, note: 'Operational' },
      { provider: 'TripWise Index', configured: true, status: 'healthy', latency_ms: 45, note: 'Scoring active' },
      { provider: 'Gemini AI Assistant', configured: true, status: 'healthy', latency_ms: 88, note: 'Neural engine ready' }
    ];
    return providers as unknown as T;
  }

  // 3. Airports search
  if (cleanPath.startsWith('/airports/search') || cleanPath === '/airports') {
    const q = (searchParams.get('q') || '').toLowerCase().trim();
    if (!q) {
      return FALLBACK_AIRPORTS.slice(0, 8) as unknown as T;
    }
    const matches = FALLBACK_AIRPORTS.filter(a =>
      a.iata.toLowerCase().includes(q) ||
      a.city.toLowerCase().includes(q) ||
      a.name.toLowerCase().includes(q) ||
      a.country.toLowerCase().includes(q)
    );
    return (matches.length > 0 ? matches : FALLBACK_AIRPORTS.slice(0, 5)) as unknown as T;
  }

  // 4. Destinations search / list
  if (cleanPath === '/destinations' || cleanPath === '/destinations/search') {
    const q = (searchParams.get('q') || '').toLowerCase().trim();
    if (!q) {
      return FALLBACK_DESTINATIONS as unknown as T;
    }
    const filtered = FALLBACK_DESTINATIONS.filter(d =>
      d.name.toLowerCase().includes(q) ||
      d.country.toLowerCase().includes(q) ||
      (d.region && d.region.toLowerCase().includes(q)) ||
      d.iata_codes.some(code => code.toLowerCase().includes(q))
    );
    return (filtered.length > 0 ? filtered : FALLBACK_DESTINATIONS) as unknown as T;
  }

  // 5. Destination places
  const placesMatch = cleanPath.match(/^\/destinations\/([^\/]+)\/places$/);
  if (placesMatch) {
    const destId = placesMatch[1];
    return getFallbackPlaces(destId) as unknown as T;
  }

  // 6. Destination food / dishes
  const foodMatch = cleanPath.match(/^\/destinations\/([^\/]+)\/(food|dishes)$/);
  if (foodMatch) {
    const destId = foodMatch[1];
    return getFallbackDishes(destId) as unknown as T;
  }

  // 7. Destination weather
  const weatherMatch = cleanPath.match(/^\/destinations\/([^\/]+)\/weather$/);
  if (weatherMatch) {
    return getFallbackWeather() as unknown as T;
  }

  // 8. Destination events
  const eventsMatch = cleanPath.match(/^\/destinations\/([^\/]+)\/events$/);
  if (eventsMatch) {
    return getFallbackEvents() as unknown as T;
  }

  // 9. Single destination
  const destMatch = cleanPath.match(/^\/destinations\/([^\/]+)$/);
  if (destMatch) {
    const target = destMatch[1].toLowerCase();
    const found = FALLBACK_DESTINATIONS.find(d => 
      d.id.toLowerCase() === target || d.name.toLowerCase() === target
    );
    return (found || FALLBACK_DESTINATIONS[0]) as unknown as T;
  }

  // 10. Flights search
  if (cleanPath === '/flights/search') {
    let origin = 'MAA';
    let dest = 'GOI';
    let date = '2026-11-15';
    if (options.body) {
      try {
        const parsed = JSON.parse(options.body as string);
        if (parsed.origin_iata) origin = parsed.origin_iata;
        if (parsed.destination_iata) dest = parsed.destination_iata;
        if (parsed.departure_date) date = parsed.departure_date;
      } catch {}
    }
    return getFallbackFlights(origin, dest, date) as unknown as T;
  }

  // 11. Flight calendar
  if (cleanPath.startsWith('/flights/calendar')) {
    const date = searchParams.get('date') || searchParams.get('from') || '2026-11-15';
    return getFallbackFlightCalendar(date) as unknown as T;
  }

  // 12. Flight booking (sandbox & redirect)
  if (cleanPath === '/flights/book-sandbox' || cleanPath === '/flights/book-redirect') {
    let pName = 'Sandru Traveler';
    if (options.body) {
      try {
        const parsed = JSON.parse(options.body as string);
        if (parsed.passengers && parsed.passengers[0]) {
          pName = `${parsed.passengers[0].given_name || ''} ${parsed.passengers[0].family_name || ''}`.trim() || pName;
        }
      } catch {}
    }
    return {
      booking_reference: `TW-${Math.random().toString(36).slice(2, 8).toUpperCase()}`,
      order_id: `ord_${Math.random().toString(36).slice(2, 10)}`,
      status: 'confirmed',
      airline_name: 'IndiGo / Partner',
      flight_number: '6E-512',
      route: 'MAA to GOI',
      departure_time: '2026-11-15T06:45:00',
      amount_paid_inr: 4850,
      currency: 'INR',
      documents: [{ type: 'electronic_ticket', number: `ETK-${Math.floor(100000000 + Math.random() * 900000000)}` }],
      confirmation_message: `Confirmed sandbox flight booking for ${pName}. Reference is active.`,
      redirect_url: 'https://www.google.com/travel/flights',
      booking_token: 'tripwise-book-token'
    } as unknown as T;
  }

  // 13. Hotels search & Destination hotels
  const destHotelsMatch = cleanPath.match(/^\/destinations\/([^\/]+)\/hotels$/);
  if (destHotelsMatch || cleanPath.startsWith('/hotels/search') || cleanPath === '/hotels') {
    let destName = searchParams.get('destination') || searchParams.get('city');
    if (!destName && destHotelsMatch) {
      const destId = destHotelsMatch[1].toLowerCase();
      const dest = FALLBACK_DESTINATIONS.find(d => d.id.toLowerCase() === destId || d.name.toLowerCase() === destId);
      destName = dest ? dest.name : 'Goa';
    }
    return getFallbackHotels(destName || 'Goa') as unknown as T;
  }

  // 14. User Profile (/me)
  if (cleanPath === '/me') {
    if (method === 'DELETE') {
      localStorage.removeItem(PROFILE_STORAGE_KEY);
      return { success: true } as unknown as T;
    }
    let currentProfile: UserProfile = {
      id: 'demo-user',
      display_name: 'TripWise Traveler',
      avatar_url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      home_airport: 'MAA',
      currency: 'INR',
      theme: 'system',
      preferred_day_start: '09:00',
      travel_style: 'balanced',
      dietary_prefs: ['Vegetarian Friendly'],
      accessibility_needs: [],
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };
    try {
      const stored = localStorage.getItem(PROFILE_STORAGE_KEY);
      if (stored) currentProfile = JSON.parse(stored);
    } catch {}

    if (method === 'PATCH' && options.body) {
      try {
        const patchData = JSON.parse(options.body as string);
        currentProfile = { ...currentProfile, ...patchData, updated_at: new Date().toISOString() };
        localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(currentProfile));
      } catch {}
    }
    return currentProfile as unknown as T;
  }

  // 15. Trips management
  const trips = ensureInitialTrips();

  // POST /trips/:id/items/reorder
  const reorderMatch = cleanPath.match(/^\/trips\/([^\/]+)\/items\/reorder$/);
  if (reorderMatch) {
    const tripId = reorderMatch[1];
    const trip = trips.find(t => t.id === tripId);
    if (trip && options.body) {
      try {
        const { item_orders } = JSON.parse(options.body as string);
        if (Array.isArray(item_orders)) {
          const map = new Map(item_orders.map((o: any) => [o.item_id, o.order_index]));
          trip.items.forEach(it => {
            if (map.has(it.id)) it.order_index = map.get(it.id);
          });
          trip.items.sort((a, b) => a.order_index - b.order_index);
          saveStoredTrips(trips);
        }
      } catch {}
      return trip.items as unknown as T;
    }
    return [] as unknown as T;
  }

  // POST /trips/:id/schedule
  const scheduleMatch = cleanPath.match(/^\/trips\/([^\/]+)\/schedule$/);
  if (scheduleMatch) {
    const tripId = scheduleMatch[1];
    const trip = trips.find(t => t.id === tripId);
    if (trip && options.body) {
      try {
        const { schedules } = JSON.parse(options.body as string);
        if (Array.isArray(schedules)) {
          const map = new Map(schedules.map((s: any) => [s.item_id, s.day_index]));
          trip.items.forEach(it => {
            if (map.has(it.id)) it.day_index = map.get(it.id);
          });
          saveStoredTrips(trips);
        }
      } catch {}
      return trip.items as unknown as T;
    }
    return [] as unknown as T;
  }

  // POST /trips/:id/optimise-day
  const optMatch = cleanPath.match(/^\/trips\/([^\/]+)\/optimise-day$/);
  if (optMatch) {
    const tripId = optMatch[1];
    const trip = trips.find(t => t.id === tripId);
    let dayIdx = 0;
    if (options.body) {
      try {
        const p = JSON.parse(options.body as string);
        if (typeof p.day_index === 'number') dayIdx = p.day_index;
      } catch {}
    }
    const dayItems = trip ? trip.items.filter(it => it.day_index === dayIdx) : [];
    const optResp: OptimiseDayResponse = {
      day_index: dayIdx,
      before_travel_minutes: 65,
      after_travel_minutes: 38,
      saved_minutes: 27,
      items: dayItems
    };
    return optResp as unknown as T;
  }

  // POST /trips/:id/share
  const shareMatch = cleanPath.match(/^\/trips\/([^\/]+)\/share$/);
  if (shareMatch) {
    const tripId = shareMatch[1];
    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://sandrutripwise.netlify.app';
    return {
      share_url: `${origin}/trips/${tripId}`,
      share_code: `TW-${tripId.slice(-6).toUpperCase()}`
    } as unknown as T;
  }

  // Items: PATCH or DELETE /trips/:id/items/:itemId
  const itemMatch = cleanPath.match(/^\/trips\/([^\/]+)\/items\/([^\/]+)$/);
  if (itemMatch) {
    const tripId = itemMatch[1];
    const itemId = itemMatch[2];
    const trip = trips.find(t => t.id === tripId);
    if (trip) {
      if (method === 'DELETE') {
        trip.items = trip.items.filter(it => it.id !== itemId);
        saveStoredTrips(trips);
        return { success: true } as unknown as T;
      }
      if (method === 'PATCH' && options.body) {
        try {
          const patch = JSON.parse(options.body as string);
          const idx = trip.items.findIndex(it => it.id === itemId);
          if (idx !== -1) {
            trip.items[idx] = { ...trip.items[idx], ...patch, version: (trip.items[idx].version || 1) + 1 };
            saveStoredTrips(trips);
            return trip.items[idx] as unknown as T;
          }
        } catch {}
      }
    }
    return {} as unknown as T;
  }

  // Items: POST /trips/:id/items
  const itemsAddMatch = cleanPath.match(/^\/trips\/([^\/]+)\/items$/);
  if (itemsAddMatch && method === 'POST') {
    const tripId = itemsAddMatch[1];
    const trip = trips.find(t => t.id === tripId);
    if (trip && options.body) {
      try {
        const itemData = JSON.parse(options.body as string);
        const newItem: TripItem = {
          id: `item-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
          trip_id: tripId,
          type: itemData.type || 'place',
          day_index: itemData.day_index ?? 0,
          order_index: trip.items.filter(it => it.day_index === (itemData.day_index ?? 0)).length,
          ref_table: itemData.ref_table,
          ref_id: itemData.ref_id,
          title: itemData.title || 'Itinerary Stop',
          start_time: itemData.start_time || '10:00',
          end_time: itemData.end_time || '12:00',
          duration_minutes: itemData.duration_minutes || 120,
          travel_minutes_from_prev: itemData.travel_minutes_from_prev || 15,
          travel_mode: itemData.travel_mode || 'cab',
          travel_source: itemData.travel_source || 'estimate',
          notes: itemData.notes || '',
          cost_estimate: itemData.cost_estimate || 0,
          cost_is_estimate: itemData.cost_is_estimate ?? true,
          lat: itemData.lat,
          lng: itemData.lng,
          locked: false,
          version: 1
        };
        trip.items.push(newItem);
        trip.updated_at = new Date().toISOString();
        saveStoredTrips(trips);
        return newItem as unknown as T;
      } catch (err) {
        console.error('Error adding trip item:', err);
      }
    }
  }

  // Trips: /trips
  if (cleanPath === '/trips') {
    if (method === 'GET') {
      return trips as unknown as T;
    }
    if (method === 'POST') {
      let body: any = {};
      try {
        if (options.body) body = JSON.parse(options.body as string);
      } catch {}
      const newTrip: Trip = {
        id: `trip-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
        user_id: 'demo-user',
        title: body.title || 'New Trip Plan',
        status: 'planned',
        origin_iata: body.origin_iata || 'MAA',
        destination_id: body.destination_id || 'd0000000-0000-0000-0000-000000000001',
        start_date: body.start_date || '2026-11-15',
        end_date: body.end_date || '2026-11-19',
        trip_type: body.trip_type || 'holiday',
        travellers_json: body.travellers_json || { adults: 1, children: 0, infants: 0 },
        cabin: body.cabin || 'economy',
        budget: body.budget || 35000,
        currency: body.currency || 'INR',
        is_public: false,
        version: 1,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        items: []
      };
      trips.unshift(newTrip);
      saveStoredTrips(trips);
      return newTrip as unknown as T;
    }
  }

  // Single Trip: /trips/:id
  const singleTripMatch = cleanPath.match(/^\/trips\/([^\/]+)$/);
  if (singleTripMatch) {
    const tripId = singleTripMatch[1];
    let trip = trips.find(t => t.id === tripId);
    if (method === 'DELETE') {
      const remaining = trips.filter(t => t.id !== tripId);
      saveStoredTrips(remaining);
      return { success: true } as unknown as T;
    }
    if (method === 'PATCH' && options.body) {
      try {
        const patch = JSON.parse(options.body as string);
        if (trip) {
          Object.assign(trip, patch, { updated_at: new Date().toISOString() });
          saveStoredTrips(trips);
          return trip as unknown as T;
        }
      } catch {}
    }
    if (!trip) {
      // Create a sensible placeholder trip so direct URL navigation works seamlessly
      trip = {
        id: tripId,
        user_id: 'demo-user',
        title: 'Trip Itinerary',
        status: 'planned',
        origin_iata: 'MAA',
        destination_id: 'd0000000-0000-0000-0000-000000000001',
        start_date: '2026-11-15',
        end_date: '2026-11-19',
        trip_type: 'holiday',
        travellers_json: { adults: 2, children: 0, infants: 0 },
        cabin: 'economy',
        budget: 45000,
        currency: 'INR',
        is_public: false,
        version: 1,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        items: []
      };
      trips.push(trip);
      saveStoredTrips(trips);
    }
    return trip as unknown as T;
  }

  // Default fallback for any unhandled GET/POST
  // Return an empty array for collection/list endpoints to guarantee iterable safety
  if (
    cleanPath.endsWith('s') || 
    cleanPath.includes('/places') || 
    cleanPath.includes('/hotels') || 
    cleanPath.includes('/dishes') || 
    cleanPath.includes('/food') || 
    cleanPath.includes('/events') || 
    cleanPath.includes('/airports') || 
    cleanPath.includes('/search') || 
    cleanPath.includes('/trips')
  ) {
    return [] as unknown as T;
  }
  return {} as unknown as T;
}
