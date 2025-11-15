import { VideoType, YouTubeAPIResponse } from "@/types";
export async function getVideos(playlistId: string): Promise<VideoType[]> {
  const apiKey = process.env.API_YOUTUBE; // Store in .env
  const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=10&key=${apiKey}`;

  const res = await fetch(url, {
    cache: "force-cache",
    next: { revalidate: 60 }, 
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch videos for playlist ${playlistId}`);
  }

  const data: YouTubeAPIResponse = await res.json();

  // Transform the API response into your Video type
  const videos: VideoType[] = data.items.map((item) => ({
    id: item.snippet.resourceId.videoId,
    title: item.snippet.title,
    thumbnail: item.snippet.thumbnails.medium.url,
    publishedAt: item.snippet.publishedAt,
    // Add other properties as needed
  }));

  return videos;
}
