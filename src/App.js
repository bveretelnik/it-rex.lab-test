import axios from "axios";
import React, { useState, useEffect, useMemo } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Table } from "./components/Table/Table";

function App() {
  const [users, setUsers] = useState([]);
  const [limit] = useState(20);
  const [page, setPage] = useState(1);

  const [selectedSort, setSelectedSort] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchUser();
  }, []);

  const sorterUser = useMemo(() => {
    if (selectedSort) {
      return [...users].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort])
      );
    }
    return users;
  }, [selectedSort, users]);

  const sortedAndSearchingUsers = useMemo(() => {
    return sorterUser.filter((user) =>
      user.firstName.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, users]);

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
        setSelectedSort={setSelectedSort}
        sortedAndSearchingUsers={sortedAndSearchingUsers}
      />
    </div>
  );
}

export default App;
