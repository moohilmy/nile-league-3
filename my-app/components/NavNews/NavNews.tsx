import NewsComponent from "../NewsComponent/NewsComponent";
import { newsData, INews } from "@/app/nile-league/news";

const NavNews = () => {
  const lastNews: INews[] = newsData.slice(0, 5);
  return (
    <div className="p-4">
      
      <h4 className="text-4xl font-semibold mb-2 text-center ">Related</h4>
      <div className=" [container-type:inline-size] gap-3 flex flex-col items-center  w-full">
      
        {lastNews.map((news, index) => (
          <NewsComponent key={index} post={news} />
        ))}
      </div>
    </div>
  );
};

export default NavNews;
