import axios from "axios";
import React, { useState, useEffect } from "react";
import { ButtonReset } from "./components/ButtonReset/ButtonReset";
import { Header } from "./components/Header/Header";
import { SelectSearch } from "./components/SelectSearch/SelectSearch";
import { Table } from "./components/Table/Table";
import { ArrayContext } from "./context/context";
import { useUsers } from "./hooks/useUsers";

function App() {
  const [users, setUsers] = useState([]);
  const [limit] = useState(20);
  const [page, setPage] = useState(1);

  const [selectedSort, setSelectedSort] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [directionSort, setDirectionSort] = useState(true);

  const fetchUser = async () => {
    const response = await axios(
      "https://itrex-react-lab-files.s3.eu-central-1.amazonaws.com/react-test-api.json"
    );
    setUsers(response.data);
  };

  const sortedAndSearchingUsers = useUsers(
    users,
    selectedSort,
    searchQuery,
    directionSort,
    fetchUser
  );

  const sortArr = [
    { value: "id", name: "ID" },
    { value: "firstName", name: "First Name" },
    { value: "lastName", name: "Last Name" },
    { value: "email", name: "Email" },
    { value: "phone", name: "Phone" },
    { value: "state", name: "State" },
  ];

  useEffect(() => {
    fetchUser();
  }, []);
  useEffect(() => {
    setUsers(sortedAndSearchingUsers);
    // eslint-disable-next-line
  }, [selectedSort]);

  const sortUser = (sort) => {
    setSelectedSort(sort);
  };

  const totalUsers = sortedAndSearchingUsers.length;
  const indexOfLastUser = page * limit;
  const indexOfFirstUser = indexOfLastUser - limit;
  const currentUsers = sortedAndSearchingUsers.slice(
    indexOfFirstUser,
    indexOfLastUser
  );

  const pagination = (pageNumber) => setPage(pageNumber);

  const resetFilter = () => {
    setSelectedSort("");
    setSearchQuery("");
    fetchUser();
  };
  return (
    <ArrayContext.Provider
      value={{
        sortArr,
      }}
    >
      <div className="App">
        <Header
          searchQuery={searchQuery}
          setSearchValue={(e) => setSearchQuery(e.target.value)}
        />
        <SelectSearch
          selectedSort={selectedSort}
          users={users}
          onChange={sortUser}
        />
        <ButtonReset resetFilter={resetFilter} />
        <Table
          users={currentUsers}
          limit={limit}
          selectedSort={selectedSort}
          totalUsers={totalUsers}
          pagination={pagination}
          page={page}
          sortUser={sortUser}
          sortedAndSearchingUsers={sortedAndSearchingUsers}
          directionSort={directionSort}
          setDirectionSort={setDirectionSort}
        />
      </div>
    </ArrayContext.Provider>
  );
}

export default App;
