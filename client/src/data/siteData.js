import {
  Aperture,
  BriefcaseBusiness,
  Camera,
  Clapperboard,
  Gem,
  Handshake,
  Heart,
  Images,
  Instagram,
  Lightbulb,
  Linkedin,
  ShieldCheck,
  Sparkles,
  Star,
  Twitter,
  Users
} from "lucide-react";

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Packages", to: "/packages" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" }
];

export const services = [
  {
    title: "Wedding Photography",
    icon: Camera,
    image: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=900&q=80",
    description: "Elegant coverage for ceremonies, receptions, and every intimate detail in between."
  },
  {
    title: "Portrait Photography",
    icon: Users,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80",
    description: "Personal portraits, family sessions, and brand headshots with refined direction."
  },
  {
    title: "Event Photography",
    icon: Clapperboard,
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=80",
    description: "Corporate events, launches, parties, and milestone celebrations captured naturally."
  },
  {
    title: "Product Photography",
    icon: BriefcaseBusiness,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",
    description: "Clean product visuals for ecommerce, catalogs, social campaigns, and launches."
  },
  {
    title: "Studio Shoot",
    icon: Aperture,
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    description: "Controlled light, tailored backdrops, and a calm studio experience."
  }
];

export const portfolioItems = [
  { title: "Golden Vows", category: "Wedding", image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80" },
  { title: "Editorial Grace", category: "Portrait", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=80" },
  { title: "Launch Night", category: "Event", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=80" },
  { title: "Minimal Form", category: "Product", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=80" },
  { title: "Soft Light Study", category: "Studio", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1000&q=80" },
  { title: "City Celebration", category: "Wedding", image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=80" },
  { title: "Confident Profile", category: "Portrait", image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1000&q=80" },
  { title: "Artisan Detail", category: "Product", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=80" }
];

export const packages = [
  {
    name: "Basic",
    price: "$399",
    features: ["2-hour session", "25 edited photos", "Online gallery", "1 outfit change"]
  },
  {
    name: "Standard",
    price: "$799",
    featured: true,
    features: ["5-hour coverage", "80 edited photos", "Online gallery", "Print-ready files", "Consultation call"]
  },
  {
    name: "Premium",
    price: "$1,499",
    features: ["Full-day coverage", "180 edited photos", "Album design", "Priority delivery", "Second photographer"]
  }
];

export const values = [
  { title: "Passion", icon: Heart },
  { title: "Quality", icon: Gem },
  { title: "Creativity", icon: Lightbulb },
  { title: "Trust", icon: ShieldCheck },
  { title: "Client First", icon: Handshake }
];

export const team = [
  {
    name: "Aarav Mehta",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    socials: [Instagram, Twitter, Linkedin]
  },
  {
    name: "Maya Sharma",
    role: "Lead Photographer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
    socials: [Instagram, Twitter, Linkedin]
  },
  {
    name: "Rohan Kapoor",
    role: "Cinematographer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
    socials: [Instagram, Twitter, Linkedin]
  },
  {
    name: "Nisha Rao",
    role: "Studio Producer",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    socials: [Instagram, Twitter, Linkedin]
  }
];

export const blogPosts = [
  {
    title: "How to Prepare for a Portrait Session",
    image: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?auto=format&fit=crop&w=900&q=80",
    description: "Simple wardrobe, timing, and mood-board tips for portraits that feel natural."
  },
  {
    title: "Choosing the Right Wedding Coverage",
    image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=900&q=80",
    description: "A practical guide to deciding how many hours and deliverables your day needs."
  },
  {
    title: "Product Photos That Sell the Story",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=80",
    description: "Lighting, styling, and composition details that make product images feel premium."
  }
];

export const testimonials = [
  { quote: "XYZ captured our wedding beautifully. Every moment felt warm and magical.", name: "Ananya & Rohan" },
  { quote: "Highly professional and super creative. The photos exceeded our expectations.", name: "Priya Mehta" },
  { quote: "From start to finish, the experience was seamless. Highly recommended.", name: "Karan Shah" }
];

export const stats = [
  { value: "12+", label: "Years Experience" },
  { value: "850+", label: "Shoots Delivered" },
  { value: "40+", label: "Brand Partners" },
  { value: "5", label: "Studio Sets" }
];

export const footerServices = services.map((service) => service.title);
export const accentIcons = { Images, Sparkles, Star };
