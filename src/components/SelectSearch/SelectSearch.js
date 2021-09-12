import React from "react";
import classes from "./SelectSearch.module.css";

export const SelectSearch = ({ selectedSort, users, onChange }) => {
  const searchStateAdress = () => {
    const stateAddres = users.reduce((acc, cur) => {
      acc.push(cur.adress.state);
      return acc;
    }, []);
    let adressSet = new Set(stateAddres);

    return [...adressSet];
  };

  const arrayFromAddresState = searchStateAdress();

  return (
    <div className={classes.container}>
      <label>Search by state: </label>
      <select value={selectedSort} onChange={(e) => onChange(e.target.value)}>
        <option disabled value="">
          Choose a filter
        </option>
        {arrayFromAddresState.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};
