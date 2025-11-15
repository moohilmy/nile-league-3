"use client";

import { useParams, usePathname } from "next/navigation";
import SubNav from "../SubNav/SubNav";

const navLinks: { name: string; path: string }[] = [
  { name: "about", path: "about" },
  { name: "overall", path: "" },
  { name: "squad", path: "squad" },
];

const ClubNav = () => {
  const params = useParams();
  const clubId = params.clubId as string;
  const pathName = usePathname();

  return (
    <SubNav
      navLinks={navLinks}
      id={clubId}
      mainLink="/nile-league/clubs"
      pathName={pathName}
    />
  );
};

export default ClubNav;
