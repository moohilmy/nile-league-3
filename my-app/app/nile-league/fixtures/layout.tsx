import NileLeagueLanding from "@/components/NileLeagueLanding/NileLeagueLanding";
import { WeekProvider } from "@/context/WeekProvider";
import { FixturesSelector, SelectorWeek } from "@/elements";
import { Suspense } from "react";

export default function MatchesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className=" overflow-hidden">
      <NileLeagueLanding title="matches" />

      <div className="page-content-space nile-league-wrapper pb-4 border-b-2 border-solid border-warmGray">
        <Suspense fallback={<div>loading ...</div>}>
          <WeekProvider>
            <FixturesSelector />
            <SelectorWeek />
          </WeekProvider>
        </Suspense>
      </div>
      <div className="page-content-space nile-league-wrapper">{children}</div>
    </section>
  );
}
