export interface DubbingRequest {
    videoUrl: string;
    language: string;
}

export interface VideoInfo {
    title: string;
    description: string;
    duration: number;
    thumbnailUrl: string;
    publishedAt: string;
}