import { c as createLucideIcon } from "./index-qd82Y0rz.js";
import { c as useQuery } from "./useVideos-BRlubH8S.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
];
const Calendar = createLucideIcon("calendar", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
      key: "vktsd0"
    }
  ],
  ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" }]
];
const Tag = createLucideIcon("tag", __iconNode);
const SAMPLE_POSTS = [
  {
    id: "b1",
    slug: "bhangarh-fort-mystery-explained",
    title: "Bhangarh Fort Mystery Explained: History, Legend & Science",
    excerpt: "Rajasthan's Bhangarh Fort has terrified visitors for centuries. We separate myth from fact in this deep dive into India's most haunted location.",
    content: "",
    category: "Mystery",
    author: "RahasyaVaarta Team",
    publishedAt: "2024-11-20",
    readTime: "8 min",
    thumbnail: "/assets/generated/blog-bhangarh.jpg",
    tags: ["haunted", "rajasthan", "mystery", "history"],
    relatedVideoId: "v1"
  },
  {
    id: "b2",
    slug: "taj-mahal-hidden-history",
    title: "Taj Mahal: 10 Hidden Facts History Books Don't Tell You",
    excerpt: "Beyond its breathtaking beauty lies a story of power, grief, and architectural genius. Discover the lesser-known truths about this UNESCO Wonder.",
    content: "",
    category: "History",
    author: "RahasyaVaarta Team",
    publishedAt: "2024-10-25",
    readTime: "6 min",
    thumbnail: "/assets/generated/blog-tajmahal.jpg",
    tags: ["mughal", "monument", "agra", "history"],
    relatedVideoId: "v2"
  },
  {
    id: "b3",
    slug: "kuldhara-ghost-village-rajasthan",
    title: "Kuldhara Ghost Village: Why Did 1500 People Vanish Overnight?",
    excerpt: "In 1825, an entire village disappeared without a trace. No bodies, no belongings — just silence. The mystery of Kuldhara remains unsolved to this day.",
    content: "",
    category: "Mystery",
    author: "RahasyaVaarta Team",
    publishedAt: "2024-09-10",
    readTime: "7 min",
    thumbnail: "/assets/generated/blog-kuldhara.jpg",
    tags: ["ghost-town", "rajasthan", "mystery"],
    relatedVideoId: "v4"
  },
  {
    id: "b4",
    slug: "nalanda-university-burning",
    title: "Why Was Nalanda University Burned? The Complete Story",
    excerpt: "The destruction of Nalanda in the 12th century was one of the greatest intellectual catastrophes in human history. Here's what really happened.",
    content: "",
    category: "History",
    author: "RahasyaVaarta Team",
    publishedAt: "2024-08-05",
    readTime: "10 min",
    thumbnail: "/assets/generated/blog-nalanda.jpg",
    tags: ["nalanda", "buddhism", "history"],
    relatedVideoId: "v5"
  },
  {
    id: "b5",
    slug: "dwarka-underwater-city-evidence",
    title: "Dwarka Underwater City: Archaeological Evidence & Myths",
    excerpt: "Off the coast of Gujarat lies a submerged structure older than the pyramids. Is this the legendary city of Lord Krishna? We examine the evidence.",
    content: "",
    category: "History",
    author: "RahasyaVaarta Team",
    publishedAt: "2024-07-15",
    readTime: "9 min",
    thumbnail: "/assets/generated/blog-dwarka.jpg",
    tags: ["dwarka", "underwater", "archaeology"],
    relatedVideoId: "v3"
  },
  {
    id: "b6",
    slug: "bermuda-triangle-science-truth",
    title: "Bermuda Triangle: What Does Science Actually Say?",
    excerpt: "Hundreds of ships and planes have vanished in the Bermuda Triangle. But is the truth stranger than the legend — or more mundane? The science might surprise you.",
    content: "",
    category: "Mystery",
    author: "RahasyaVaarta Team",
    publishedAt: "2024-06-20",
    readTime: "11 min",
    thumbnail: "/assets/generated/blog-bermuda.jpg",
    tags: ["bermuda", "ocean", "science"],
    relatedVideoId: "v6"
  }
];
function useBlogPosts() {
  return useQuery({
    queryKey: ["blog-posts"],
    queryFn: async () => {
      await new Promise((r) => setTimeout(r, 300));
      return SAMPLE_POSTS;
    }
  });
}
function useBlogPost(slug) {
  return useQuery({
    queryKey: ["blog-post", slug],
    queryFn: async () => {
      await new Promise((r) => setTimeout(r, 200));
      return SAMPLE_POSTS.find((p) => p.slug === slug) ?? null;
    },
    enabled: !!slug
  });
}
export {
  Calendar as C,
  Tag as T,
  useBlogPost as a,
  useBlogPosts as u
};
