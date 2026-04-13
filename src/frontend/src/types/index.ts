export type VideoCategory =
  | "History"
  | "Mystery"
  | "Horror"
  | "Documentary"
  | "All";

export interface Video {
  id: string;
  youtubeId: string;
  title: string;
  titleHindi?: string;
  description: string;
  category: VideoCategory;
  views: string;
  duration: string;
  publishedAt: string;
  thumbnail: string;
  featured?: boolean;
  trending?: boolean;
  tags?: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: VideoCategory;
  author: string;
  publishedAt: string;
  readTime: string;
  thumbnail: string;
  tags: string[];
  relatedVideoId?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface NewsletterData {
  email: string;
  name?: string;
}
