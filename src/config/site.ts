export const siteConfig = {
  businessName: "Rent a Scooter",

  whatsappNumber: "94772220499",

  currency: "USD",

  branding: {
    primary: "#F59E0B",
    primaryDark: "#D97706",
    background: "#0B0F0E",
    backgroundSecondary: "#111816",
    surface: "#17201D",
    text: "#FFFFFF",
    textMuted: "#A7B0AC",
    border: "#26312D",
  },

  hero: {
    badge: "Reliable Vehicle Rentals in Sri Lanka",
    title: "Explore Sri Lanka on Your Own Terms.",
    description:
      "Rent a scooter or motorbike and discover Sri Lanka with the freedom to go wherever the road takes you.",
  },

  vehicles: [
    {
      id: "dio-1",
      name: "Honda Dio",
      category: "Scooter",
      price: 8,
      priceUnit: "day",
      image: "/vehicles/DioBlack.png",
      transmission: "Automatic",
      fuel: "Petrol",
      suitableFor: "City & coastal rides",
    },

    {
      id: "dio-2",
      name: "Honda Dio",
      category: "Scooter",
      price: 8,
      priceUnit: "day",
      image: "/vehicles/DioRed.png",
      transmission: "Automatic",
      fuel: "Petrol",
      suitableFor: "City & coastal rides",
    },

    {
      id: "ntorq-1",
      name: "TVS Ntorq",
      category: "Scooter",
      price: 12,
      priceUnit: "day",
      image: "/vehicles/NtorqBlack.png",
      transmission: "Automatic",
      fuel: "Petrol",
      suitableFor: "Longer city & coastal rides",
    },

    {
      id: "ntorq-2",
      name: "TVS Ntorq",
      category: "Scooter",
      price: 12,
      priceUnit: "day",
      image: "/vehicles/NtorqRed.png",
      transmission: "Automatic",
      fuel: "Petrol",
      suitableFor: "Longer city & coastal rides",
    },

    {
      id: "fz-1",
      name: "Yamaha FZ",
      category: "Motorbike",
      price: 24,
      priceUnit: "day",
      image: "/vehicles/FZBlue.png",
      transmission: "Manual",
      fuel: "Petrol",
      suitableFor: "Long-distance & hill-country rides",
    },
  ],

  delivery: [
    {
      location: "Colombo Airport (CMB)",
      price: 80,
    },
    {
      location: "South Coast (Galle / Unawatuna)",
      price: 50,
    },
    {
      location: "Kandy & Hill Country",
      price: 85,
    },
    {
      location: "Nuwara Eliya",
      price: 85,
    },
    {
      location: "Ella",
      price: 70,
    },
    {
      location: "Yala & Tissamaharama",
      price: 35,
    },
    {
      location: "Colombo City Hotels",
      price: 25,
    },
    {
      location: "Mirissa, Weligama & Matara",
      price: 35,
    },
  ],

  whatsappMessage: {
    template:
      "Hi, I need the {vehicle} ({category}) for rental. Price: ${price}/day. Please let me know about availability.",
  },

  contact: {
    email: "hello@rentascooter.lk",
    phone: "+94 77 222 0499",
    socials: {
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
    }
  },

  navigation: [
    { label: "Vehicles", href: "#vehicles" },
    { label: "Delivery", href: "#delivery" },
    { label: "Why Us", href: "#why-us" },
    { label: "FAQ", href: "#faq" },
  ],
};
