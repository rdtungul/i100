export const specialties = [
  "Tech",
  "Fashion",
  "Food",
  "Travel",
  "Fitness",
  "Gaming",
  "Beauty",
  "Business",
  "Music",
  "Art",
  "Education",
  "Comedy",
  "Lifestyle",
  "Photography",
  "Finance"
];

export const influencers = [
  // Tech Influencers
  {
    id: 1,
    name: "Alex Chen",
    specialty: "Tech",
    rank: 1,
    followers: "5.2M",
    bio: "Tech entrepreneur and AI enthusiast. Creating content about the latest in artificial intelligence, machine learning, and startup culture. Former Google engineer turned content creator.",
    channelUrl: "https://youtube.com/@alexchen",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex",
    engagement: "8.5%",
    topContent: ["AI Revolution", "Startup Guide", "Tech Reviews"]
  },
  {
    id: 2,
    name: "Sarah Tech",
    specialty: "Tech",
    rank: 2,
    followers: "3.8M",
    bio: "Software developer sharing coding tutorials and tech reviews. Specializing in web development, cloud computing, and cybersecurity best practices.",
    channelUrl: "https://youtube.com/@sarahtech",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    engagement: "7.2%",
    topContent: ["Coding Bootcamp", "Cloud Computing 101", "Security Tips"]
  },
  // Fashion Influencers
  {
    id: 3,
    name: "Emma Style",
    specialty: "Fashion",
    rank: 1,
    followers: "8.1M",
    bio: "Fashion designer and stylist bringing haute couture to everyday life. Sustainable fashion advocate promoting eco-friendly brands and DIY fashion projects.",
    channelUrl: "https://instagram.com/@emmastyle",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emma",
    engagement: "12.3%",
    topContent: ["Sustainable Fashion", "DIY Clothing", "Style Tips"]
  },
  {
    id: 4,
    name: "Marcus Vogue",
    specialty: "Fashion",
    rank: 2,
    followers: "4.5M",
    bio: "Men's fashion expert and personal stylist. Creating content about men's fashion trends, grooming tips, and building a versatile wardrobe.",
    channelUrl: "https://instagram.com/@marcusvogue",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=marcus",
    engagement: "9.8%",
    topContent: ["Men's Style Guide", "Grooming 101", "Fashion Trends"]
  },
  // Food Influencers
  {
    id: 5,
    name: "Chef Maria",
    specialty: "Food",
    rank: 1,
    followers: "6.7M",
    bio: "Professional chef and food blogger sharing gourmet recipes made simple. Specializing in fusion cuisine and making fine dining accessible at home.",
    channelUrl: "https://youtube.com/@chefmaria",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=maria",
    engagement: "11.5%",
    topContent: ["Quick Recipes", "Fusion Cuisine", "Cooking Techniques"]
  },
  {
    id: 6,
    name: "Foodie Frank",
    specialty: "Food",
    rank: 2,
    followers: "3.2M",
    bio: "Food critic and street food enthusiast exploring culinary treasures around the world. Bringing you the best hidden gems and authentic local cuisine.",
    channelUrl: "https://youtube.com/@foodiefrank",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=frank",
    engagement: "8.9%",
    topContent: ["Street Food Tours", "Restaurant Reviews", "Food Culture"]
  },
  // Travel Influencers
  {
    id: 7,
    name: "Travel Tales Tom",
    specialty: "Travel",
    rank: 1,
    followers: "7.3M",
    bio: "Digital nomad and adventure seeker exploring off-the-beaten-path destinations. Sharing budget travel tips and immersive cultural experiences.",
    channelUrl: "https://youtube.com/@traveltom",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=tom",
    engagement: "10.2%",
    topContent: ["Budget Travel", "Adventure Guides", "Cultural Immersion"]
  },
  {
    id: 8,
    name: "Wanderlust Lisa",
    specialty: "Travel",
    rank: 2,
    followers: "5.1M",
    bio: "Luxury travel blogger and photographer showcasing the world's most beautiful destinations. Expert in travel planning and finding unique experiences.",
    channelUrl: "https://instagram.com/@wanderlustlisa",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=lisa",
    engagement: "13.7%",
    topContent: ["Luxury Destinations", "Travel Photography", "Planning Guides"]
  },
  // Fitness Influencers
  {
    id: 9,
    name: "Fit Mike",
    specialty: "Fitness",
    rank: 1,
    followers: "9.2M",
    bio: "Personal trainer and nutrition coach helping millions achieve their fitness goals. Specializing in HIIT workouts and sustainable lifestyle changes.",
    channelUrl: "https://youtube.com/@fitmike",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=mike",
    engagement: "14.5%",
    topContent: ["HIIT Workouts", "Nutrition Plans", "Transformation Stories"]
  },
  {
    id: 10,
    name: "Yoga Sarah",
    specialty: "Fitness",
    rank: 2,
    followers: "4.8M",
    bio: "Certified yoga instructor and mindfulness coach. Creating content for all levels, from beginners to advanced practitioners, focusing on holistic wellness.",
    channelUrl: "https://youtube.com/@yogasarah",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=yogasarah",
    engagement: "11.8%",
    topContent: ["Morning Yoga", "Meditation Guides", "Wellness Tips"]
  },
  // Gaming Influencers
  {
    id: 11,
    name: "GameMaster Pro",
    specialty: "Gaming",
    rank: 1,
    followers: "12.5M",
    bio: "Professional esports player and gaming content creator. Streaming daily gameplay, tutorials, and gaming industry news across multiple platforms.",
    channelUrl: "https://twitch.tv/@gamemasterpro",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=gamemaster",
    engagement: "18.2%",
    topContent: ["Pro Gaming Tips", "Game Reviews", "Esports Commentary"]
  },
  {
    id: 12,
    name: "Pixel Princess",
    specialty: "Gaming",
    rank: 2,
    followers: "7.9M",
    bio: "Indie game enthusiast and developer. Creating content about game design, indie game reviews, and the creative process behind game development.",
    channelUrl: "https://youtube.com/@pixelprincess",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=pixelprincess",
    engagement: "15.6%",
    topContent: ["Indie Games", "Game Development", "Design Tutorials"]
  },
  // Beauty Influencers
  {
    id: 13,
    name: "Beauty Bella",
    specialty: "Beauty",
    rank: 1,
    followers: "10.3M",
    bio: "Makeup artist and beauty expert sharing tutorials, product reviews, and skincare routines. Advocate for clean beauty and cruelty-free products.",
    channelUrl: "https://youtube.com/@beautybella",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=bella",
    engagement: "16.7%",
    topContent: ["Makeup Tutorials", "Skincare Routines", "Product Reviews"]
  },
  {
    id: 14,
    name: "Glow Goddess",
    specialty: "Beauty",
    rank: 2,
    followers: "6.4M",
    bio: "Skincare specialist and esthetician providing science-based beauty advice. Focus on natural beauty, skin health, and anti-aging techniques.",
    channelUrl: "https://instagram.com/@glowgoddess",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=glowgoddess",
    engagement: "13.9%",
    topContent: ["Skincare Science", "Natural Beauty", "Anti-Aging Tips"]
  },
  // Business Influencers
  {
    id: 15,
    name: "CEO Steve",
    specialty: "Business",
    rank: 1,
    followers: "4.1M",
    bio: "Serial entrepreneur and business mentor. Sharing insights on startup growth, leadership, and building successful companies from scratch.",
    channelUrl: "https://linkedin.com/in/ceosteve",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=steve",
    engagement: "7.8%",
    topContent: ["Startup Advice", "Leadership Tips", "Business Strategy"]
  },
  {
    id: 16,
    name: "Marketing Maya",
    specialty: "Business",
    rank: 2,
    followers: "2.8M",
    bio: "Digital marketing expert and consultant. Specializing in social media strategy, content marketing, and building personal brands.",
    channelUrl: "https://youtube.com/@marketingmaya",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=maya",
    engagement: "9.1%",
    topContent: ["Marketing Strategy", "Social Media Growth", "Personal Branding"]
  },
  // Music Influencers
  {
    id: 17,
    name: "DJ Beats",
    specialty: "Music",
    rank: 1,
    followers: "8.7M",
    bio: "Electronic music producer and DJ touring worldwide. Creating tutorials on music production, mixing techniques, and the music industry.",
    channelUrl: "https://youtube.com/@djbeats",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=djbeats",
    engagement: "12.4%",
    topContent: ["Production Tips", "DJ Sets", "Music Theory"]
  },
  {
    id: 18,
    name: "Melody Master",
    specialty: "Music",
    rank: 2,
    followers: "5.3M",
    bio: "Classical pianist and music educator. Teaching piano techniques, music theory, and bringing classical music to modern audiences.",
    channelUrl: "https://youtube.com/@melodymaster",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=melody",
    engagement: "10.6%",
    topContent: ["Piano Tutorials", "Classical Music", "Music Education"]
  },
  // Art Influencers
  {
    id: 19,
    name: "Artist Anna",
    specialty: "Art",
    rank: 1,
    followers: "3.9M",
    bio: "Digital artist and illustrator creating stunning visual narratives. Teaching digital art techniques and creative process insights.",
    channelUrl: "https://instagram.com/@artistanna",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=anna",
    engagement: "14.2%",
    topContent: ["Digital Art", "Illustration Tips", "Creative Process"]
  },
  {
    id: 20,
    name: "Paint Pro Paul",
    specialty: "Art",
    rank: 2,
    followers: "2.6M",
    bio: "Traditional painter and art teacher. Specializing in oil painting, watercolors, and teaching fundamental art techniques.",
    channelUrl: "https://youtube.com/@paintpropaul",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=paul",
    engagement: "11.3%",
    topContent: ["Painting Tutorials", "Art Techniques", "Art History"]
  }
];

export const journeyGuides = {
  Tech: {
    title: "Your Journey to Tech Influence",
    steps: [
      "Choose your niche: AI, web development, cybersecurity, or general tech",
      "Start with consistent content: Post 3-5 times per week minimum",
      "Create value-driven tutorials and reviews",
      "Engage with the tech community on GitHub, Stack Overflow, and Twitter",
      "Collaborate with other tech creators and participate in hackathons",
      "Stay updated with the latest technology trends and news",
      "Build your personal projects and share the process"
    ],
    tips: [
      "Quality over quantity - ensure your code examples work",
      "Create both beginner and advanced content",
      "Use clear explanations and avoid jargon when possible",
      "Show your personality - tech doesn't have to be boring"
    ]
  },
  Fashion: {
    title: "Your Journey to Fashion Influence",
    steps: [
      "Define your style aesthetic and target audience",
      "Invest in good photography equipment or smartphone with quality camera",
      "Post outfit of the day (OOTD) content consistently",
      "Partner with sustainable and ethical fashion brands",
      "Create styling guides and fashion tips",
      "Attend fashion events and network with industry professionals",
      "Share behind-the-scenes content from photoshoots"
    ],
    tips: [
      "Authenticity is key - wear what you love",
      "Engage with your followers' style questions",
      "Mix high-end with affordable fashion",
      "Stay ahead of trends but maintain your unique style"
    ]
  },
  Food: {
    title: "Your Journey to Food Influence",
    steps: [
      "Decide your food niche: recipes, reviews, or food culture",
      "Master food photography and videography techniques",
      "Create easy-to-follow recipe content with clear instructions",
      "Share your culinary journey and cooking failures too",
      "Collaborate with restaurants and food brands",
      "Engage with food communities and participate in food challenges",
      "Develop signature recipes or cooking techniques"
    ],
    tips: [
      "Good lighting is crucial for food photography",
      "Include recipe cards and shopping lists",
      "Show the cooking process, not just the final dish",
      "Be responsive to dietary preferences and restrictions"
    ]
  },
  Travel: {
    title: "Your Journey to Travel Influence",
    steps: [
      "Start locally - explore your own city/country first",
      "Develop photography and video editing skills",
      "Create comprehensive travel guides and itineraries",
      "Share budget tips and travel hacks",
      "Build relationships with tourism boards and hotels",
      "Document authentic cultural experiences",
      "Provide practical information: costs, visa requirements, safety tips"
    ],
    tips: [
      "Be respectful of local cultures and customs",
      "Balance popular destinations with hidden gems",
      "Create content that helps others plan their trips",
      "Invest in good travel gear and insurance"
    ]
  },
  Fitness: {
    title: "Your Journey to Fitness Influence",
    steps: [
      "Get certified in your fitness specialty",
      "Document your own fitness journey transparently",
      "Create workout programs for different fitness levels",
      "Share nutrition tips and meal prep ideas",
      "Use proper form and emphasize safety",
      "Engage with your community through challenges",
      "Collaborate with fitness brands and gyms"
    ],
    tips: [
      "Always prioritize safety and proper form",
      "Be inclusive - fitness is for everyone",
      "Share both successes and struggles",
      "Provide modifications for different abilities"
    ]
  },
  Gaming: {
    title: "Your Journey to Gaming Influence",
    steps: [
      "Choose your gaming niche: streaming, tutorials, or reviews",
      "Invest in quality streaming equipment and fast internet",
      "Establish a consistent streaming schedule",
      "Engage with viewers through chat and community features",
      "Create highlights and clips for social media",
      "Participate in gaming tournaments and events",
      "Collaborate with other gamers and join gaming communities"
    ],
    tips: [
      "Personality matters as much as skill",
      "Interact with your audience constantly",
      "Stay positive even during losses",
      "Diversify content across multiple games"
    ]
  },
  Beauty: {
    title: "Your Journey to Beauty Influence",
    steps: [
      "Master makeup techniques and skincare knowledge",
      "Invest in good lighting and camera equipment",
      "Create tutorials for all skill levels",
      "Review products honestly and disclose partnerships",
      "Share before/after transformations",
      "Stay updated on beauty trends and techniques",
      "Build relationships with beauty brands"
    ],
    tips: [
      "Good lighting is essential for beauty content",
      "Be honest about sponsored content",
      "Include diverse skin tones and types",
      "Focus on both artistry and education"
    ]
  },
  Business: {
    title: "Your Journey to Business Influence",
    steps: [
      "Build credibility through your own business success",
      "Share actionable insights and case studies",
      "Create valuable content: guides, templates, frameworks",
      "Network with other business professionals",
      "Speak at conferences and webinars",
      "Write articles for business publications",
      "Offer free value before selling courses or consulting"
    ],
    tips: [
      "Back up advice with real examples and data",
      "Be transparent about failures and lessons learned",
      "Provide actionable takeaways in every piece of content",
      "Build an email list for deeper engagement"
    ]
  }
};