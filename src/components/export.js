import prop1 from "../assets/images/prop1.webp";
import prop2 from "../assets/images/prop2.webp";
import prop3 from "../assets/images/prop3.webp";
import prop4 from "../assets/images/prop4.webp";
import prop5 from "../assets/images/prop5.webp";
import prop6 from "../assets/images/prop6.webp";
import prop7 from "../assets/images/prop7.jpg";
import prop8 from "../assets/images/prop8.jpg";
import client1 from "../assets/images/client1.png";
import client2 from "../assets/images/client2.png";
import client3 from "../assets/images/client3.png";
import client4 from "../assets/images/client4.png";
import client5 from "../assets/images/client5.png";
import client6 from "../assets/images/client6.png";
import area1 from "../assets/images/area1.jpg";
import area2 from "../assets/images/area2.jpg";
import area3 from "../assets/images/area3.jpg";
import { MdNoteAlt } from "react-icons/md";
import {
  FaHome,
  FaSearch,
  FaNotesMedical,
  FaCameraRetro,
} from "react-icons/fa";
import { GoLaw } from "react-icons/go";

// Enhanced property data with more diverse locations and features
export const property = [
  {
    images: prop1,
    address: "Connaught Place, New Delhi",
    name: "Luxury Villa with Garden View",
    price: "₹ 1.75 Cr",
    about:
      "A stunning, modern villa located in the heart of New Delhi with premium amenities and green surroundings. Features smart home technology and 24/7 security.",
    bed: 4,
    bath: 3,
    area: "2500 sq ft",
    owner: "Rajesh Sharma",
    type: "Villa",
    status: "For Sale",
    featured: true,
    amenities: ["Pool", "Garden", "Security", "Smart Home"],
    rating: 4.8,
    views: 1247
  },
  {
    images: prop2,
    address: "Bandra West, Mumbai",
    name: "Sea-Facing Penthouse",
    price: "₹ 3.25 Cr",
    about:
      "A lavish penthouse with a breathtaking sea view in one of Mumbai's most premium locations. Includes private terrace and panoramic city views.",
    bed: 3,
    bath: 3,
    area: "2000 sq ft",
    owner: "Meera Kapoor",
    type: "Penthouse",
    status: "For Sale",
    featured: true,
    amenities: ["Sea View", "Terrace", "Gym", "Concierge"],
    rating: 4.9,
    views: 2156
  },
  {
    images: prop3,
    address: "Salt Lake City, Kolkata",
    name: "Spacious Duplex Apartment",
    price: "₹ 85 Lakh",
    about:
      "A beautifully designed duplex apartment with modern interiors, perfect for a peaceful family living. Located in a well-connected area.",
    bed: 4,
    bath: 3,
    area: "1800 sq ft",
    owner: "Sourav Banerjee",
    type: "Duplex",
    status: "For Sale",
    featured: false,
    amenities: ["Parking", "Lift", "Power Backup", "Water Supply"],
    rating: 4.6,
    views: 892
  },
  {
    images: prop4,
    address: "Indiranagar, Bangalore",
    name: "Stylish Urban Apartment",
    price: "₹ 1.45 Cr",
    about:
      "A contemporary-styled apartment with top-notch facilities and a prime location in Bangalore's tech hub. Perfect for young professionals.",
    bed: 3,
    bath: 2,
    area: "1400 sq ft",
    owner: "Amit Nair",
    type: "Apartment",
    status: "For Sale",
    featured: false,
    amenities: ["Clubhouse", "Swimming Pool", "Gym", "Security"],
    rating: 4.7,
    views: 1567
  },
  {
    images: prop5,
    address: "Anna Nagar, Chennai",
    name: "Luxury Villa with Pool",
    price: "₹ 2.10 Cr",
    about:
      "A high-end villa with a private pool and lush greenery, offering a tranquil retreat within Chennai city. Features modern architecture.",
    bed: 5,
    bath: 4,
    area: "3200 sq ft",
    owner: "Venkatesh Iyer",
    type: "Villa",
    status: "For Sale",
    featured: true,
    amenities: ["Private Pool", "Garden", "Servant Quarters", "Car Parking"],
    rating: 4.9,
    views: 1892
  },
  {
    images: prop6,
    address: "Banjara Hills, Hyderabad",
    name: "Premium Gated Community Villa",
    price: "₹ 1.95 Cr",
    about:
      "A fully furnished villa in a top-tier gated community, offering security and premium amenities. Located in Hyderabad's most prestigious area.",
    bed: 4,
    bath: 3,
    area: "2800 sq ft",
    owner: "Nisha Reddy",
    type: "Villa",
    status: "For Sale",
    featured: false,
    amenities: ["Gated Community", "Security", "Clubhouse", "Landscaping"],
    rating: 4.8,
    views: 1345
  },
  {
    images: prop7,
    address: "Koregaon Park, Pune",
    name: "Modern Studio Apartment",
    price: "₹ 65 Lakh",
    about:
      "A chic studio apartment perfect for singles or couples. Located in Pune's most happening area with all modern amenities.",
    bed: 1,
    bath: 1,
    area: "800 sq ft",
    owner: "Priya Deshmukh",
    type: "Studio",
    status: "For Sale",
    featured: false,
    amenities: ["Furnished", "Balcony", "Security", "Parking"],
    rating: 4.5,
    views: 678
  },
  {
    images: prop8,
    address: "Jubilee Hills, Hyderabad",
    name: "Luxury Penthouse Suite",
    price: "₹ 4.50 Cr",
    about:
      "An ultra-luxurious penthouse with panoramic city views and world-class amenities. The epitome of luxury living in Hyderabad.",
    bed: 4,
    bath: 4,
    area: "3500 sq ft",
    owner: "Arjun Malhotra",
    type: "Penthouse",
    status: "For Sale",
    featured: true,
    amenities: ["Panoramic View", "Private Terrace", "Home Theater", "Wine Cellar"],
    rating: 5.0,
    views: 3241
  }
];

// Enhanced services with more detailed descriptions
export const service = [
  {
    icon: MdNoteAlt,
    title: "Sell your home",
    desc: "We sell your home at the best market price with professional photography and marketing strategies to maximize your returns.",
    features: ["Free Valuation", "Professional Photography", "Marketing Campaign", "Negotiation Support"]
  },
  {
    icon: FaHome,
    title: "Home loans",
    desc: "We offer you free consultancy to get a loan with the best interest rates and terms from top banks and financial institutions.",
    features: ["Free Consultation", "Multiple Bank Options", "Quick Processing", "Lowest Rates"]
  },
  {
    icon: GoLaw,
    title: "Legal services",
    desc: "Expert legal help for all related property items including documentation, verification, and compliance with local regulations.",
    features: ["Document Verification", "Legal Compliance", "Title Search", "Registration Support"]
  },
  {
    icon: FaSearch,
    title: "Home inspection",
    desc: "We make sure you get what you were promised with comprehensive property inspections and detailed reports.",
    features: ["Structural Inspection", "Quality Check", "Detailed Report", "Follow-up Support"]
  },
  {
    icon: FaNotesMedical,
    title: "Evaluation",
    desc: "We offer you free evaluation to get a mortgage loan with accurate property assessment and market analysis.",
    features: ["Market Analysis", "Property Valuation", "Investment Advice", "ROI Calculation"]
  },
  {
    icon: FaCameraRetro,
    title: "Photoshoot",
    desc: "We prepare your home visual presentation with professional photography and virtual tours to attract potential buyers.",
    features: ["Professional Photography", "Virtual Tours", "Drone Shots", "3D Walkthrough"]
  },
];

// Enhanced client testimonials with more detailed feedback
export const client = [
  {
    image: client1,
    name: "Sneha Rao",
    text: "Excellent team!",
    feedback:
      "The HomeDeal team did an outstanding job helping me buy my first home. The high level of service and dedication was remarkable. They guided me through every step of the process with patience and expertise.",
    rating: 5,
    location: "Mumbai",
    property: "2BHK Apartment"
  },
  {
    image: client2,
    name: "Priya Iyer",
    text: "Very good work",
    feedback:
      "The HomeDeal team provided exceptional support throughout my home-buying journey. Their professionalism was impressive. They found me the perfect property within my budget and requirements.",
    rating: 5,
    location: "Bangalore",
    property: "3BHK Villa"
  },
  {
    image: client3,
    name: "Amit Verma",
    text: "Very well",
    feedback:
      "I had a great experience with HomeDeal. Their team guided me at every step and ensured a smooth process. The property evaluation and legal assistance were top-notch.",
    rating: 4,
    location: "Delhi",
    property: "Commercial Space"
  },
  {
    image: client4,
    name: "Rohan Sharma",
    text: "Excellent team!",
    feedback:
      "HomeDeal was fantastic in helping me find my dream home. Their commitment and expertise made all the difference. The virtual tour and detailed property information were very helpful.",
    rating: 5,
    location: "Chennai",
    property: "Penthouse"
  },
  {
    image: client5,
    name: "Vikram Mehta",
    text: "Highly recommended!",
    feedback:
      "HomeDeal truly cares about their clients. Their attention to detail and personalized approach were commendable. The loan assistance and legal support were invaluable.",
    rating: 5,
    location: "Hyderabad",
    property: "Luxury Villa"
  },
  {
    image: client6,
    name: "Piyush Kapoor",
    text: "Great service!",
    feedback:
      "From start to finish, HomeDeal provided top-notch service. Their knowledge and dedication were truly impressive. The property inspection and quality assurance were excellent.",
    rating: 4,
    location: "Pune",
    property: "Studio Apartment"
  },
];

// New data for enhanced features
export const popularAreas = [
  {
    name: "Bandra West, Mumbai",
    image: area1,
    properties: 156,
    avgPrice: "₹ 2.8 Cr",
    description: "Premium residential area with sea views and excellent connectivity"
  },
  {
    name: "Indiranagar, Bangalore",
    image: area2,
    properties: 89,
    avgPrice: "₹ 1.9 Cr",
    description: "Tech hub with modern apartments and vibrant lifestyle"
  },
  {
    name: "Connaught Place, Delhi",
    image: area3,
    properties: 234,
    avgPrice: "₹ 1.5 Cr",
    description: "Historic area with mix of traditional and modern properties"
  }
];

export const statistics = [
  {
    number: "50+",
    label: "ACTIVE LISTINGS",
    description: "Properties available in Bhubaneswar"
  },
  {
    number: "25+",
    label: "SATISFIED CLIENTS",
    description: "Happy customers who found their homes"
  },
  {
    number: "35+",
    label: "TOTAL TRANSACTIONS",
    description: "Successful property deals completed"
  },
  {
    number: "₹5Cr+",
    label: "PROPERTY VALUE",
    description: "Total value of properties sold"
  }
];

