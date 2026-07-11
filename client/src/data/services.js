import {
  Home,
  Building2,
  Sparkles,
  Sofa,
  Truck,
  GlassWater,
} from "lucide-react";

const services = [
  {
    id: 1,
    icon: Home,
    title: "House Cleaning",
    description: "Professional cleaning for houses and apartments.",
    price: 120,
    duration: "2 Hours",
    category: "Residential",
  },
  {
    id: 2,
    icon: Building2,
    title: "Office Cleaning",
    description: "Reliable cleaning services for offices and businesses.",
    price: 180,
    duration: "3 Hours",
    category: "Commercial",
  },
  {
    id: 3,
    icon: GlassWater,
    title: "Window Cleaning",
    description: "Sparkling clean windows inside and outside.",
    price: 90,
    duration: "1 Hour",
    category: "Residential",
  },
  {
    id: 4,
    icon: Sofa,
    title: "Carpet Cleaning",
    description: "Deep carpet cleaning using professional equipment.",
    price: 150,
    duration: "2.5 Hours",
    category: "Residential",
  },
  {
    id: 5,
    icon: Sparkles,
    title: "Deep Cleaning",
    description: "Detailed cleaning for every room and surface.",
    price: 250,
    duration: "5 Hours",
    category: "Residential",
  },
  {
    id: 6,
    icon: Truck,
    title: "Move In / Move Out",
    description: "Complete cleaning before moving in or after moving out.",
    price: 300,
    duration: "6 Hours",
    category: "Residential",
  },
];

export default services;