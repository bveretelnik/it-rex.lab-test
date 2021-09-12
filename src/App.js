import axios from "axios";
import React, { useState, useEffect, useMemo } from "react";
import { Header } from "./components/Header/Header";
import { Table } from "./components/Table/Table";

function App() {
  const [users, setUsers] = useState([]);
  const [limit] = useState(20);
  const [page, setPage] = useState(1);

  const [selectedSort, setSelectedSort] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const [directionSort, setDirectionSort] = useState(true);

  useEffect(() => {
    fetchUser();
  }, []);

  const sortedUsers = useMemo(() => {
    if (selectedSort) {
      if (selectedSort === "id") {
        if (directionSort) {
          return [...users].sort((a, b) => a[selectedSort] - b[selectedSort]);
        } else {
          return [...users].reverse();
        }
      }
      if (directionSort) {
        return [...users].sort((a, b) =>
          a[selectedSort].localeCompare(b[selectedSort])
        );
      } else {
        return [...users].sort((a, b) =>
          b[selectedSort].localeCompare(a[selectedSort])
        );
      }
    }

    console.log(directionSort);
    return users;
  }, [selectedSort, users]);

  const sortedAndSearchingUsers = useMemo(() => {
    return sortedUsers.filter((user) =>
      user.firstName.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, sortedUsers]);

  const sortUser = (sort) => {
    setSelectedSort(sort);
  };

  const fetchUser = async () => {
    const response = await axios(
      "https://itrex-react-lab-files.s3.eu-central-1.amazonaws.com/react-test-api.json"
    );
    setUsers(response.data);
  };
  const totalUsers = sortedAndSearchingUsers.length;
  const indexOfLastUser = page * limit;
  const indexOfFirstUser = indexOfLastUser - limit;
  const currentUsers = sortedAndSearchingUsers.slice(
    indexOfFirstUser,
    indexOfLastUser
  );

  const pagination = (pageNumber) => setPage(pageNumber);

  return (
    <div className="App">
      <Header
        searchQuery={searchQuery}
        setSearchValue={(e) => setSearchQuery(e.target.value)}
      />

      <Table
        users={currentUsers}
        limit={limit}
        totalUsers={totalUsers}
        pagination={pagination}
        page={page}
        sortedAndSearchingUsers={sortedAndSearchingUsers}
        value={selectedSort}
        onChange={sortUser}
        directionSort={directionSort}
        setDirectionSort={setDirectionSort}
      />
    </div>
  );
}

export default App;
