import React from "react";
import style from "./style.module.css";

const NileLeagueLanding = ({
  title,
  children,
  stylePlus = {},
  isInpage = false,
}: {
  title: string;
  children?: React.ReactNode;
  stylePlus?: object;
  isInpage?: boolean;
}) => {
  return (
    <div className={`${style.landingContainer}`} style={
      stylePlus
    }>
      <div className={`w-full nile-league-wrapper ${isInpage && style.isInLandingPage}`}>
        <h2 className="sm:text-2xl text-xl xl:text-3xl font-bold uppercase">{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default NileLeagueLanding;
