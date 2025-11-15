"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useRouter, useSearchParams } from "next/navigation";

type WeekContextType = {
  currentWeek: number;
  setCurrentWeek: React.Dispatch<React.SetStateAction<number>>;
};

const WeekContext = createContext<WeekContextType | undefined>(undefined);

export function WeekProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialWeek = Number(searchParams.get("week")) || 1;
  const [currentWeek, setCurrentWeek] = useState(initialWeek);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const currentParam = params.get("week");
    if (currentParam !== String(currentWeek)) {
      params.set("week", String(currentWeek));
      router.replace(`?${params.toString()}`);
    }
  }, [currentWeek, router]);

  return (
    <WeekContext.Provider value={{ currentWeek, setCurrentWeek }}>
      {children}
    </WeekContext.Provider>
  );
}

export function useWeek() {
  const context = useContext(WeekContext);
  if (!context) {
    throw new Error("useWeek must be used within a WeekProvider");
  }
  return context;
}
