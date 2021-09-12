import { useMemo } from "react";

export const useSortAndSearch = (users, sort, directionSort) => {
  const sortedUsers = useMemo(() => {
    if (sort) {
      if (sort === "id") {
        if (!directionSort) {
          return [...users].sort((a, b) => a[sort] - b[sort]);
        }
        return [...users].sort((a, b) => b[sort] - a[sort]);
      }
      if (sort.length === 2) {
        return users.filter((user) => user.adress.state === sort);
      }
      if (sort === "state") {
        if (!directionSort) {
          return [...users].sort((a, b) =>
            a.adress[sort].localeCompare(b.adress[sort])
          );
        }
        return [...users].sort((a, b) =>
          b.adress[sort].localeCompare(a.adress[sort])
        );
      }

      if (!directionSort) {
        return [...users].sort((a, b) => a[sort].localeCompare(b[sort]));
      }
      return [...users].sort((a, b) => b[sort].localeCompare(a[sort]));
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
