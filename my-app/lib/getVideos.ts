import { VideoType, YouTubeAPIResponse } from "@/types";

export async function getVideos(playlistId: string): Promise<VideoType[]> {
  try {
    const apiKey = process.env.API_YOUTUBE;
    if (!apiKey) {
      console.error("YouTube API key is missing.");
      return [];
    }

    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=10&key=${apiKey}`;

    const res = await fetch(url, {
      cache: "no-store",
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.error("Failed to fetch videos", playlistId, res.status);
      return [];
    }

    const data: YouTubeAPIResponse = await res.json();

    return data.items.map((item) => ({
      id: item.snippet.resourceId.videoId,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.medium.url,
      publishedAt: item.snippet.publishedAt,
    }));
  } catch (error) {
    console.error("Error fetching YouTube playlist:", playlistId, error);
    return [];
  }
}
