"use client";

import SubNav from "@/components/SubNav/SubNav";
import { useParams, usePathname } from "next/navigation";

const navLinks: { name: string; path: string }[] = [
  { name: "lineup", path: "line-up" },
  { name: "stats", path: "" },
  { name: "highlights", path: "highlights" },
];

const MatchNav = () => {
  const params = useParams();
  const clubId = params.matchID as string;
  console.log(clubId);
  
  const pathName = usePathname();

  return (
    <SubNav
      navLinks={navLinks}
      id={clubId}
      mainLink="/nile-league/matches"
      pathName={pathName}
    />
  );
};

export default MatchNav;
