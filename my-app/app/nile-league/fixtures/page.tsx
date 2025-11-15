import MatchesList from "@/components/fixtureComponents/MatchesList";
import styles from "./styles.module.css";

export default async function FixturesPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const week = params.week;
  if(!week){
    return (
      <div>isLoading</div>
    )
  }
  return (
    <div>
      <div>
        <h1 className={styles.matchweekTitle}>Matchweek {week}</h1>
      </div>
      <MatchesList matchesList={[1,1,1,1,2,3,4,5]}/>
    </div>
  );
}
