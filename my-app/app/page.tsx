import StandingsTable from "@/components/StandingsTable/StandingsTable";

export default function Home() {
  return (
    <div className="nile-league-wrapper  flex-wrap flex md:flex-row flex-col">
      <div className="flex sm:flex-row flex-col" style={{
        flex: 1
      }}></div>
      <nav className="md:w-[35%] w-full home-nav">
        <StandingsTable isInNav={true}/>
      </nav>
    </div>
  );
}
