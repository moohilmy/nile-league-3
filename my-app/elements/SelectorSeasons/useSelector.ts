import { useState } from "react";
import { usePathname } from "next/navigation";
export default function useSelector() {
    const pathname = usePathname();
    const [isSeasonsOpened, setIsSeasonsOpened] = useState(false);
  const [isStatsOpened, setIsStatsOpened] = useState(false);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const parentPath = () => {
    const segments = pathname.split("/").filter(Boolean);
    segments.pop();
    return "/" + segments.join("/");
  };

  const toggleSeasons = () => {
    setIsSeasonsOpened((prev) => !prev);
    if (isStatsOpened) setIsStatsOpened(false);
  };

  const toggleStats = () => {
    setIsStatsOpened((prev) => !prev);
    if (isSeasonsOpened) setIsSeasonsOpened(false);
  };
  return (
    {
        pathname,
        setShowMobileFilters,
        showMobileFilters,
        isSeasonsOpened,
        toggleSeasons,
        setIsStatsOpened,
        isStatsOpened,
        toggleStats,
        parentPath,
        setIsSeasonsOpened
    }
  )
}
