import React, { useState } from "react";
import { DescriptionUser } from "./Description/DescriptionUser";
import { CheckBox } from "./Pagination/CheckBox/CheckBox";
import { Pagination } from "./Pagination/Pagination";
import classes from "./Table.module.css";

export const Table = ({
  users,
  setSelectedSort,
  page,
  limit,
  totalUsers,
  pagination,
}) => {
  const [userDetails, setUserDetails] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const showUserDetails = (user) => {
    setUserDetails(user);
    setShowDetails(true);
    console.log(userDetails);
  };

  return (
    <div className={classes.container}>
      <CheckBox />
      <table className={classes.styledTable}>
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.phone} onClick={() => showUserDetails(user)}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        limit={limit}
        totalUsers={totalUsers}
        pagination={pagination}
        page={page}
      />
      {showDetails && (
        <DescriptionUser
          setShowDetails={setShowDetails}
          userDetails={userDetails}
        />
      )}
    </div>
  );
};
