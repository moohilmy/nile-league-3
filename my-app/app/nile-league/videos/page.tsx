// app/videos/page.tsx
import VideoListLayout from "@/components/ui/VideoeListLayout/VideoListLayout";
import { getVideos } from "@/lib/getVideos";



const Videos = async () => {

    const videoList = await getVideos("PLFKBfxPJcSgttT-vdGC9plfaxIs-AXs-g");
    const videoListHighlight = await getVideos("PLFKBfxPJcSgvJVvJpLJBifIi82kauHVFI");

    return (
      <>
        <VideoListLayout titleOfSection="Top Videos" videosList={videoList} />
        <VideoListLayout titleOfSection="Highlight" videosList={videoListHighlight} />
      </>
    );
  
  
};

export default Videos;