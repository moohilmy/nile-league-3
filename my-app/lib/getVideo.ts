type VideoType = {
  title: string;
  publishedAt: string;
  id: string;
  thumbnail: string;
};

export const fetchVideoData = async (
  VIDEO_ID: string
): Promise<VideoType | null> => {
  const API_KEY = process.env.API_YOUTUBE;
  const YOUTUBEVIDEO_URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet&fields=items(id,snippet(title,publishedAt,thumbnails/maxres/url))&id=${VIDEO_ID}&key=${API_KEY}`;

  try {
    const res = await fetch(YOUTUBEVIDEO_URL, {
      next: { revalidate: 3600 },
    });
    const data = await res.json();
    if (!data.items.length) return null;

    const item = data.items[0];
    const video = item.snippet;

    return {
      id: item.id, 
      title: video.title,
      publishedAt: video.publishedAt,
      thumbnail: video.thumbnails.maxres.url,
    };
  } catch (error) {
    console.error("Error fetching video details:", error);
    return null;
  }
};
