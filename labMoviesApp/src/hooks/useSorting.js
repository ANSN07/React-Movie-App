import { useState } from "react";

const useSorting = (sorting) => {
  const [sortValues, setSortValues] = useState(() => {
    const sortingInitialValues = sorting.map((s) => ({
      name: s.name,
      value: s.value,
    }));
    return sortingInitialValues;
  });

  const sortFunction = (collection) => {
    const sortId = sortValues[0].value;
    return sortId === 1
      ? [...collection].sort((a, b) => (a.title > b.title ? 1 : -1))
      : sortId === 2
      ? [...collection].sort((a, b) => (a.title > b.title ? -1 : 1))
      : sortId === 3
      ? [...collection].sort((a, b) => a.popularity - b.popularity)
      : sortId === 4
      ? [...collection].sort((a, b) => b.popularity - a.popularity)
      : sortId === 5
      ? [...collection].sort((a, b) => a.vote_average - b.vote_average)
      : sortId === 6
      ? [...collection].sort((a, b) => b.vote_average - a.vote_average)
      : sortId === 7
      ? [...collection].sort(
          (a, b) => new Date(a.release_date) - new Date(b.release_date)
        )
      : sortId === 8
      ? [...collection].sort(
          (a, b) => new Date(b.release_date) - new Date(a.release_date)
        )
      : collection;
  };

  return {
    sortValues,
    setSortValues,
    sortFunction,
  };
};

export default useSorting;
