import React, { useState, useContext } from "react";
import { DescriptionUser } from "./Description/DescriptionUser";
import { Pagination } from "./Pagination/Pagination";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import classes from "./Table.module.css";
import { ArrayContext } from "../../context/context";

export const Table = ({
  users,
  sortUser,
  page,
  limit,
  totalUsers,
  pagination,
  directionSort,
  setDirectionSort,
  selectedSort,
}) => {
  const { sortArr } = useContext(ArrayContext);
  const [userDetails, setUserDetails] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const showUserDetails = (user) => {
    setUserDetails(user);
    setShowDetails(true);
  };
  const handleClick = (e) => {
    sortUser(e.target.value);
    setDirectionSort(!directionSort);
  };
  return (
    <div className={classes.container}>
      <table className={classes.styledTable}>
        <thead>
          <tr>
            {sortArr.map((item) => (
              <th key={item.value}>
                <button
                  className={classes.bnt}
                  value={item.value}
                  onClick={handleClick}
                >
                  {item.name}
                </button>
                {directionSort && item.value === selectedSort ? (
                  <AiFillCaretUp />
                ) : (
                  <AiFillCaretDown />
                )}
              </th>
            ))}
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
              <td>{user.adress.state}</td>
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
