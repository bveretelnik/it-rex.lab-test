import { useMemo } from "react";

export const useSortAndSearch = (users, sort, directionSort) => {
  const sortedUsers = useMemo(() => {
    if (sort) {
      if (sort.length === 2) {
        return users.filter((user) => user.adress.state === sort);
      }
      if (!directionSort) {
        return [...users].sort((a, b) => a[sort].localeCompare(b[sort]));
      } else {
        return [...users].sort((a, b) => b[sort].localeCompare(a[sort]));
      }
    }

    return users;
  }, [sort, users, directionSort]);

  return sortedUsers;
};
export const useUsers = (users, sort, query, directionSort) => {
  const sortedUsers = useSortAndSearch(users, sort, directionSort);
  const sortedAndSearchingUsers = useMemo(() => {
    return sortedUsers.filter((user) =>
      user.firstName.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, sortedUsers]);

  return sortedAndSearchingUsers;
};
