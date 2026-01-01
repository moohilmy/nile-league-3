import MatchesList from "@/components/fixtureComponents/MatchesList";

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
        <h1 className={"nile-league-heading mb-4"}>Matchweek {week}</h1>
      </div>
      <MatchesList matchesList={[1,1,1,1,2,3,4,5]}/>
    </div>
  );
}
