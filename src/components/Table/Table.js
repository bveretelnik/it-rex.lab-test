import React, { useState } from "react";
import { DescriptionUser } from "./Description/DescriptionUser";
import { SelectSearch } from "./SelectSearch/SelectSearch";
import { Pagination } from "./Pagination/Pagination";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import classes from "./Table.module.css";

export const Table = ({
  users,
  value,
  onChange,
  page,
  limit,
  totalUsers,
  pagination,
  directionSort,
  setDirectionSort,
}) => {
  const sortArr = [
    { value: "id", name: "ID" },
    { value: "firstName", name: "First Name" },
    { value: "lastName", name: "Last Name" },
    { value: "email", name: "Email" },
    { value: "phone", name: "Phone" },
  ];
  const [userDetails, setUserDetails] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const showUserDetails = (user) => {
    setUserDetails(user);
    setShowDetails(true);
  };
  const handleClick = (e) => {
    onChange(e.target.value);
    setDirectionSort(!directionSort);
    console.log(directionSort);
  };
  return (
    <div className={classes.container}>
      <SelectSearch value={value} onChange={onChange} options={sortArr} />
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
                {directionSort ? <AiFillCaretUp /> : <AiFillCaretDown />}
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
