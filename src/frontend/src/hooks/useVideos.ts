import type { Video, VideoCategory } from "@/types";
import { useQuery } from "@tanstack/react-query";

// Realistic sample videos for a Hindi mystery/documentary channel
export const SAMPLE_VIDEOS: Video[] = [
  {
    id: "v1",
    youtubeId: "dQw4w9WgXcQ",
    title: "Bhangarh Fort: India's Most Haunted Place",
    titleHindi: "भानगढ़ किला: भारत की सबसे डरावनी जगह",
    description:
      "Rajasthan ke is rahasymay kile ki sachchi kahani, jo aaj bhi logon ke man mein darr paida karti hai. Raat ke baad yahaan jaana mana hai.",
    category: "Mystery",
    views: "2.4M",
    duration: "24:15",
    publishedAt: "2024-11-15",
    thumbnail: "/assets/generated/bhangarh-thumb.jpg",
    featured: true,
    trending: true,
    tags: ["bhoot", "haunted", "rajasthan", "mystery"],
  },
  {
    id: "v2",
    youtubeId: "xvFZjo5PgG0",
    title: "Taj Mahal ka Asli Rahasya",
    titleHindi: "ताज महल का असली रहस्य",
    description:
      "Mughal samrajya ka yeh adbhut nirmaan — kya waqai ek prem ki nishaani hai ya iske peeche koi aur sachchi kahani chupi hai?",
    category: "History",
    views: "3.1M",
    duration: "31:42",
    publishedAt: "2024-10-20",
    thumbnail: "/assets/generated/tajmahal-thumb.jpg",
    featured: true,
    trending: false,
    tags: ["mughal", "history", "agra", "monument"],
  },
  {
    id: "v3",
    youtubeId: "L_jWHffIx5E",
    title: "Dwarka: Samudra Mein Dooba Sheher",
    titleHindi: "द्वारका: समुद्र में डूबा शहर",
    description:
      "Gujarat ke samudra tatth ke neeche chupi hai ek praacheen sabhyata. Kya yahi thi Shri Krishna ki Dwarka nagari?",
    category: "History",
    views: "1.8M",
    duration: "28:55",
    publishedAt: "2024-09-05",
    thumbnail: "/assets/generated/dwarka-thumb.jpg",
    featured: true,
    trending: true,
    tags: ["krishna", "dwarka", "archaeology", "history"],
  },
  {
    id: "v4",
    youtubeId: "ScMzIvxBSi4",
    title: "Kuldhara: Ek Rat Mein Ujda Gaon",
    titleHindi: "कुलधरा: एक रात में उजड़ा गाँव",
    description:
      "1825 mein ek poora gaon ek hi raat mein gum ho gaya. 1500 logon ka koi saboot nahin mila. Aaj bhi yeh jagah virani hai.",
    category: "Mystery",
    views: "4.2M",
    duration: "19:30",
    publishedAt: "2024-08-12",
    thumbnail: "/assets/generated/kuldhara-thumb.jpg",
    featured: false,
    trending: true,
    tags: ["ghost-town", "rajasthan", "mystery", "history"],
  },
  {
    id: "v5",
    youtubeId: "HEXWRTEbj1I",
    title: "Nalanda: Jab Jalaaya Gaya Duniya Ka Sabse Bada Pustakalaya",
    titleHindi: "नालंदा: जब जलाया गया दुनिया का सबसे बड़ा पुस्तकालय",
    description:
      "90 laakh kitaben, 10,000 chhatra aur vishwa ki sabse badi gyanshala. Phir aaya ek dushman aur sab kuch khatam kar diya.",
    category: "History",
    views: "2.7M",
    duration: "35:18",
    publishedAt: "2024-07-28",
    thumbnail: "/assets/generated/nalanda-thumb.jpg",
    featured: false,
    trending: false,
    tags: ["nalanda", "buddhism", "history", "education"],
  },
  {
    id: "v6",
    youtubeId: "6stlCkUDG_s",
    title: "Bermuda Triangle: Sach ya Jhooth?",
    titleHindi: "बरमूडा ट्राइएंगल: सच या झूठ?",
    description:
      "Duniya ka sabse bada rahasya — yahan jahaz aur havaijahaz bina kisi nishaani ke gum ho jaate hain. Kya hai iski sachchi wajah?",
    category: "Mystery",
    views: "5.6M",
    duration: "42:10",
    publishedAt: "2024-06-15",
    thumbnail: "/assets/generated/bermuda-thumb.jpg",
    featured: false,
    trending: true,
    tags: ["bermuda", "ocean", "mystery", "science"],
  },
  {
    id: "v7",
    youtubeId: "pRpeEdMmmQ0",
    title: "India ke Jungle Mein Mili Praacheen Sabhyata",
    titleHindi: "भारत के जंगल में मिली प्राचीन सभ्यता",
    description:
      "Central India ke ghane janglon mein khoji ne aisi cheezein dhundhi hain jo itihas ko badal sakti hain.",
    category: "Documentary",
    views: "1.3M",
    duration: "44:25",
    publishedAt: "2024-05-30",
    thumbnail: "/assets/generated/jungle-civ-thumb.jpg",
    featured: false,
    trending: false,
    tags: ["archaeology", "civilization", "india", "documentary"],
  },
  {
    id: "v8",
    youtubeId: "FTQbiNvZqaY",
    title: "Aleya Ghost Lights: Bengal Ke Bhoot",
    titleHindi: "अलेया घोस्ट लाइट्स: बंगाल के भूत",
    description:
      "Bengal ke daldali ilaqon mein raat ko dikhti hai rahasymay roshni. Machhuaare mante hain yeh unke marhi saathiyon ki aatmaen hain.",
    category: "Horror",
    views: "3.8M",
    duration: "22:45",
    publishedAt: "2024-04-18",
    thumbnail: "/assets/generated/aleya-thumb.jpg",
    featured: false,
    trending: false,
    tags: ["ghost", "bengal", "horror", "supernatural"],
  },
];

export function useVideos(category?: VideoCategory) {
  return useQuery<Video[]>({
    queryKey: ["videos", category],
    queryFn: async () => {
      await new Promise((r) => setTimeout(r, 300));
      if (!category || category === "All") return SAMPLE_VIDEOS;
      return SAMPLE_VIDEOS.filter((v) => v.category === category);
    },
  });
}

export function useFeaturedVideos() {
  return useQuery<Video[]>({
    queryKey: ["videos", "featured"],
    queryFn: async () => {
      await new Promise((r) => setTimeout(r, 300));
      return SAMPLE_VIDEOS.filter((v) => v.featured);
    },
  });
}

export function useTrendingVideos() {
  return useQuery<Video[]>({
    queryKey: ["videos", "trending"],
    queryFn: async () => {
      await new Promise((r) => setTimeout(r, 300));
      return SAMPLE_VIDEOS.filter((v) => v.trending);
    },
  });
}
