import {
  HistoryClasicoSection,
  HistoryRecord,
  HistoryTimeLine,
  HistroyLanding,
} from "@/components/HistoryPageComponent";

import data from ".";
import HistroyLayout from "@/hooks/HistroyLayout";
const page = () => {
  return (
    <HistroyLayout >
      <HistroyLanding />
      <div
        className=""
        style={{
          padding: "0",
        }}
      >
        <HistoryTimeLine data={data} />
        <HistoryClasicoSection />
        <HistoryRecord />
      </div>
    </HistroyLayout>
  );
};

export default page;
