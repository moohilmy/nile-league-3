"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

interface SelectorContextType {
  selectedStat: string;
  setSelectedStat: (value: string) => void;
  selectedSeason: string | number;
  setSelectedSeason: (value: string | number) => void;
  isLoading: boolean;
}

const SelectorContext = createContext<SelectorContextType | undefined>(undefined);

export const SelectorProvider = ({
  children,
  initialStat,
}: {
  children: React.ReactNode;
  initialStat: string;
}) => {
  const searchParams = useSearchParams();
  const seasonParam = searchParams.get("season");
  const defaultSeason = seasonParam !== null ? Number(seasonParam) : 25;

  const [selectedStat, setSelectedStatState] = useState<string>(initialStat);
  const [selectedSeason, setSelectedSeasonState] = useState<string | number>(defaultSeason);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setSelectedStatState(initialStat);
    setSelectedSeasonState(defaultSeason);
    setIsLoading(false);
  }, [initialStat, defaultSeason]);

  const setSelectedStat = (value: string) => {
    setSelectedStatState(value);
  };

  const setSelectedSeason = (value: string | number) => {
    setSelectedSeasonState(value);
  };

  return (
    <SelectorContext.Provider
      value={{
        selectedStat,
        setSelectedStat,
        selectedSeason,
        setSelectedSeason,
        isLoading,
      }}
    >
      {children}
    </SelectorContext.Provider>
  );
};

export const useSelectorContext = () => {
  const context = useContext(SelectorContext);
  if (!context) {
    throw new Error("useSelectorContext must be used within a SelectorProvider");
  }
  return context;
};
