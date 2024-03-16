import { createSelector } from "@reduxjs/toolkit";
import Fuse from "fuse.js";

export const selectUsers = (state) => state.contacts.items;

export const selectFilterValue = (state) => state.filters.name;

export const selectIsLoading = (state) => state.contacts.isLoading;

export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectUsers, selectFilterValue],

  (users, filterValue) => {
    if (!filterValue.trim()) {
      return users;
    }
    const fuseOptions = {
      includeScore: true,
      threshold: 0.0,
      keys: ["name", "number"],
    };

    const fuse = new Fuse(users, fuseOptions);

    const searchPattern = filterValue;
    const filtered = fuse.search(searchPattern);
    return filtered.map((result) => result.item);
    // return users.filter((user) =>
    //   user.name.toLowerCase().includes(filterValue.toLowerCase())
    // );
  }
);
