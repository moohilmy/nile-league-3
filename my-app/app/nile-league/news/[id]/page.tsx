import NileLeagueLanding from "@/components/NileLeagueLanding/NileLeagueLanding";
import styles from "./style.module.css";
import dynamic from "next/dynamic";
const NavNews = dynamic(() => import("@/components/NavNews/NavNews"), {
  loading: () => <p>loading</p>,
});
import { TagAndDate, CopyUrlButton } from "@/elements";
import { INews, newsData } from "..";
import { ConpanantLoading } from "@/loading";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const news: INews | undefined = newsData.find((e) => e.id === Number(id));

  if (!news) {
    return <p>News not found</p>;
  }

  const { img, content, title, date } = news;

  return (
    <div>
      <NileLeagueLanding title={title}>
        <div className="flex w-full mt-auto items-center justify-between">
          <TagAndDate tag="news" publishedDate={date} />
          <CopyUrlButton />
        </div>
      </NileLeagueLanding>
      <div className="nile-league-wrapper">
        <div className='landing-image-page'>
          <ConpanantLoading imgSrc={`/News/${img}`} title={title} inView={true} />
        </div>
        <section className={styles.newsSection}>
          <div className={styles.newsContent}>
            <p className={styles.newsText}>
              {content} Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Harum minima ut soluta iusto eius optio in, voluptatibus
              molestias! Nostrum asperiores ullam suscipit officia magnam ipsum,
              nam velit reprehenderit ipsa rerum nemo doloremque tempora modi
              laudantium voluptatum soluta et ab porro nulla. Autem harum porro
              quis, vitae ipsam cumque reiciendis nesciunt labore vel quod sed
              alias officiis neque beatae doloribus sunt sint nihil incidunt
              tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Pariatur, inventore ipsam nulla perferendis error tempore vel
              saepe harum? Labore voluptatum, ipsa natus dolorem necessitatibus
              ab sapiente nesciunt quas reiciendis id?
            </p>
          </div>
          <div className={styles.newsRelated}>
            <NavNews />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page;
