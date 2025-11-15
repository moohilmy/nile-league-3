
import { Pagination } from "@/elements";

import StatTable from "@/components/StatTable/StatTable";

const StatsPage = async ({
  params,
}: {
  params: Promise<{ statName: string }>;
}) => {
  const { statName } = await params;
  return (
    <div className="">
      <StatTable statName={statName} isClubTable={true}/>
      <Pagination />
    </div>
  );
};

export default StatsPage;
