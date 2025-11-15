import NileLeagueLanding from "@/components/NileLeagueLanding/NileLeagueLanding";
import { StatsClubsLayout, StatsPlayersLayout } from "@/components/ui/StatsLayout";
import styles from './styles.module.css'
const page = () => {
  return (
    <>
      <NileLeagueLanding title="stats" />
      <div className={styles.statsPage}>
        <StatsPlayersLayout />
        <StatsClubsLayout/>
      </div>
    </>
  );
};

export default page;
