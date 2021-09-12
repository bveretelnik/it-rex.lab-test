import React from "react";
import classes from "./Header.module.css";

export const Header = ({ searchQuery, setSearchValue }) => {
  return (
    <div className={classes.container}>
      <div>
        <h2>Get start to search user</h2>
      </div>
      <form>
        <input
          placeholder="Search user name"
          value={searchQuery}
          onChange={setSearchValue}
          className={classes.input}
        />
      </form>
    </div>
  );
};
