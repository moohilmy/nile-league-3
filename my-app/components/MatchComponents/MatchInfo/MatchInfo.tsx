import React from "react";
import styles from "./styles.module.css";
import { DateIcon, TimeIcon, Whistle,Stadium } from "@/app/SVG";

import MatchInfoBox from "./MatchInfoBox";

export default function MatchInfo() {
  return (
    <div className={styles.infoAboutMatch}>
      <MatchInfoBox iconOfInfo={<TimeIcon />} content="Fri 17 Oct 2025" />
      <MatchInfoBox
        iconOfInfo={<DateIcon />}
        content="18:10"
        infoHeading="kick off:"
      />
      <MatchInfoBox iconOfInfo={<Stadium />} content="cairo Stadium, cairo" />
      <MatchInfoBox
        iconOfInfo={<Whistle />}
        infoHeading="ref:"
        content="a.hamdy"
      />
    </div>
  );
}
