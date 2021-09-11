import React from "react";
import classes from "./Pagination.module.css";

export const Pagination = ({ page, limit, totalUsers, pagination }) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalUsers / limit); i++) {
    pageNumber.push(i);
  }

  return (
    <div className={classes.pagination}>
      {pageNumber.map((number) => (
        <a
          key={number}
          onClick={() => pagination(number)}
          href="!#"
          className={page === number ? classes.active : undefined}
        >
          {number}
        </a>
      ))}
    </div>
  );
};
