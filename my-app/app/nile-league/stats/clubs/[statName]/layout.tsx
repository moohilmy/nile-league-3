import NileLeagueLanding from "@/components/NileLeagueLanding/NileLeagueLanding";
import { SelectorSeasons } from "@/elements";
import React, { Suspense } from "react";
import { SelectorProvider } from "@/context/SelectorStore";
const StatsNamelayout = async ({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ statName: string }>;
}>) => {
  const { statName } = await params;
  return (
    <Suspense fallback={<div>loading ...</div>}>
      <SelectorProvider initialStat={statName}>
        <NileLeagueLanding title="stats" />
        <div className="nile-league-wrapper page-content-space">
          <SelectorSeasons />
          {children}
        </div>
      </SelectorProvider>
    </Suspense>
  );
};

export default StatsNamelayout;
