import React from "react";
import classes from "./ButtonReset.module.css";

export const ButtonReset = ({ resetFilter }) => {
  return (
    <>
      <button className={classes.btn} onClick={resetFilter}>
        Reset filter
      </button>
    </>
  );
};
