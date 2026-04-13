import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type VideoId = bigint;
export interface Video {
    id: VideoId;
    title: string;
    thumbnail: string;
    publishDate: Timestamp;
    description: string;
    youtubeId: string;
    viewCount: bigint;
    isFeatured: boolean;
    category: VideoCategory;
    isTrending: boolean;
}
export type Timestamp = bigint;
export interface BlogPost {
    id: BlogId;
    title: string;
    content: string;
    thumbnail: string;
    publishDate: Timestamp;
    tags: Array<string>;
    excerpt: string;
    relatedVideoIds: Array<VideoId>;
}
export type BlogId = bigint;
export enum VideoCategory {
    Documentary = "Documentary",
    History = "History",
    Mystery = "Mystery",
    Horror = "Horror"
}
export interface backendInterface {
    getBlogPost(id: BlogId): Promise<BlogPost | null>;
    getBlogPosts(): Promise<Array<BlogPost>>;
    getFeaturedVideos(): Promise<Array<Video>>;
    getTrendingVideos(): Promise<Array<Video>>;
    getVideos(): Promise<Array<Video>>;
    getVideosByCategory(category: VideoCategory): Promise<Array<Video>>;
    submitContactForm(name: string, email: string, subject: string, message: string): Promise<void>;
    subscribeNewsletter(email: string): Promise<boolean>;
}
