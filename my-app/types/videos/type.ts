export interface YouTubeAPIResponse {
    items: {
      snippet: {
        title: string;
        thumbnails: {
          medium: {
            url: string;
          };
        };
        publishedAt: string;
        resourceId: {
          videoId: string;
        };
      };
    }[];
  }
export type VideoType = {
  id: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
  
}