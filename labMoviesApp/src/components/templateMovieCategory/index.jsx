import React, { useState } from "react";
import PageTemplate from "../templateMovieListPage";
import Spinner from "../spinner";
import useFiltering from "../../hooks/useFiltering";
import { useQuery } from "react-query";
import MovieFilterUI, { titleFilter, genreFilter } from "../movieFilterUI";
import useSorting from "../../hooks/useSorting";

const titleFiltering = {
  name: "title",
  value: "",
  condition: titleFilter,
};
const genreFiltering = {
  name: "genre",
  value: "0",
  condition: genreFilter,
};
const movieSorting = {
  name: "sort",
  value: 0,
};

const TemplateMovieCategoryPage = ({ title, keyValue, api, action }) => {
  const [page, setPage] = useState(1);
  const { data, error, isLoading, isError } = useQuery(
    [keyValue, { page }],
    api,
    { keepPreviousData: true }
  );
  const { filterValues, setFilterValues, filterFunction } = useFiltering(
    [],
    [titleFiltering, genreFiltering]
  );
  const { sortValues, setSortValues, sortFunction } = useSorting([
    movieSorting,
  ]);
  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const changeFilterValues = (type, value) => {
    const changedFilter = { name: type, value: value };
    const updatedFilterSet =
      type === "title"
        ? [changedFilter, filterValues[1]]
        : type === "genre"
        ? [filterValues[0], changedFilter]
        : [filterValues[0], filterValues[1]];
    const updatedSortValue = type === "sort" ? [changedFilter] : sortValues;
    setFilterValues(updatedFilterSet);
    setSortValues(updatedSortValue);
  };
  const movies = data ? data.results : [];
  const filteredMovies = filterFunction(movies);
  const sortedMovies = sortFunction(filteredMovies);

  return (
    <>
      <PageTemplate
        title={title}
        movies={sortedMovies}
        action={action}
        page={page}
        setPage={setPage}
        totalPages={data.total_pages}
      />
      <MovieFilterUI
        onFilterValuesChange={changeFilterValues}
        titleFilter={filterValues[0].value}
        genreFilter={filterValues[1].value}
        sort={sortValues[0].value}
      />
    </>
  );
};
export default TemplateMovieCategoryPage;
