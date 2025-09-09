import { Product, Category } from "@/types/product";
import sparklersImg from "@/assets/sparklers.jpg";
import flowerPotsImg from "@/assets/flower-pots.jpg";
import rocketsImg from "@/assets/rockets.jpg";
import giftBoxImg from "@/assets/gift-box.jpg";

export const categories: Category[] = [
  {
    id: "sparklers",
    name: "Sparklers",
    description: "Beautiful hand-held sparklers for all occasions",
    image: sparklersImg,
    productCount: 15
  },
  {
    id: "flower-pots",
    name: "Flower Pots",
    description: "Colorful fountain crackers with stunning effects",
    image: flowerPotsImg,
    productCount: 12
  },
  {
    id: "rockets",
    name: "Rockets & Aerial",
    description: "High-flying rockets and aerial fireworks",
    image: rocketsImg,
    productCount: 20
  },
  {
    id: "gift-boxes",
    name: "Gift Boxes",
    description: "Premium curated fireworks gift sets",
    image: giftBoxImg,
    productCount: 8
  }
];

export const products: Product[] = [
  {
    id: "sp001",
    name: "Premium Golden Sparklers (Pack of 10)",
    price: 150,
    originalPrice: 200,
    description: "Beautiful golden sparklers that create mesmerizing light trails. Perfect for celebrations and photography. Burns for 45-60 seconds each. Safe and ISI certified.",
    image: sparklersImg,
    category: "sparklers",
    tags: ["Golden", "Long Burning", "Safe", "ISI Certified"],
    inStock: true,
    rating: 4.8,
    reviews: 234,
    discount: 25
  },
  {
    id: "fp001",
    name: "Rainbow Flower Pot Special",
    price: 45,
    originalPrice: 60,
    description: "Multi-colored fountain cracker that produces beautiful rainbow effects. Creates stunning 3-4 feet high fountain with vibrant colors. Duration: 30-40 seconds.",
    image: flowerPotsImg,
    category: "flower-pots",
    tags: ["Colorful", "Fountain", "Rainbow", "Medium Size"],
    inStock: true,
    rating: 4.6,
    reviews: 189,
    discount: 25
  },
  {
    id: "rk001",
    name: "Sky Thunder Rockets (Pack of 5)",
    price: 320,
    originalPrice: 400,
    description: "Professional grade rockets that soar high and create spectacular aerial displays. Each rocket reaches 150+ feet height with colorful bursts and thunder sound effects.",
    image: rocketsImg,
    category: "rockets",
    tags: ["High Flying", "Thunder", "Aerial", "Professional"],
    inStock: true,
    rating: 4.9,
    reviews: 156,
    discount: 20
  },
  {
    id: "gb001",
    name: "Royal Diwali Gift Box",
    price: 2500,
    originalPrice: 3200,
    description: "Premium gift box containing assorted crackers: sparklers, flower pots, rockets, ground chakkars, and fancy crackers. Perfect for gifting during festivals.",
    image: giftBoxImg,
    category: "gift-boxes",
    tags: ["Premium", "Assorted", "Gift", "Festival"],
    inStock: true,
    rating: 4.7,
    reviews: 98,
    discount: 22
  },
  {
    id: "sp002",
    name: "Color Changing Sparklers (Pack of 15)",
    price: 220,
    originalPrice: 280,
    description: "Unique sparklers that change colors while burning. Creates red, green, blue, and golden effects. Extended burn time of 60-75 seconds per piece.",
    image: sparklersImg,
    category: "sparklers",
    tags: ["Color Changing", "Extended Burn", "Unique", "Premium"],
    inStock: true,
    rating: 4.5,
    reviews: 167,
    discount: 21
  },
  {
    id: "fp002",
    name: "Giant Fountain Deluxe",
    price: 85,
    originalPrice: 110,
    description: "Large fountain cracker producing 5-6 feet high colorful fountain. Creates golden shower effect with crackling sounds. Burns for 45-60 seconds.",
    image: flowerPotsImg,
    category: "flower-pots",
    tags: ["Giant", "Golden Shower", "Crackling", "Deluxe"],
    inStock: true,
    rating: 4.8,
    reviews: 203,
    discount: 23
  },
  {
    id: "rk002",
    name: "Whistling Rockets Combo (Pack of 8)",
    price: 480,
    originalPrice: 600,
    description: "Exciting rockets that whistle while ascending and burst into colorful stars. Creates beautiful patterns in the sky with musical whistling sounds.",
    image: rocketsImg,
    category: "rockets",
    tags: ["Whistling", "Musical", "Star Burst", "Combo"],
    inStock: true,
    rating: 4.6,
    reviews: 142,
    discount: 20
  },
  {
    id: "gb002",
    name: "Family Fun Gift Box",
    price: 1200,
    originalPrice: 1500,
    description: "Perfect family pack with safe crackers for all ages. Includes sparklers, small flower pots, ground spinners, and colorful fountains.",
    image: giftBoxImg,
    category: "gift-boxes",
    tags: ["Family", "Safe", "All Ages", "Fun"],
    inStock: true,
    rating: 4.9,
    reviews: 187,
    discount: 20
  }
];

export const featuredProducts = products.slice(0, 4);