import React from "react";
import PageTemplate from "../templateMovieListPage";
import Spinner from "../spinner";
import useFiltering from "../../hooks/useFiltering";
import { useQuery } from "react-query";
import MovieFilterUI, { titleFilter, genreFilter } from "../movieFilterUI";

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

const TemplateMovieCategoryPage = ({ title, keyValue, api, action }) => {
  const { data, error, isLoading, isError } = useQuery(keyValue, api);
  const { filterValues, setFilterValues, filterFunction } = useFiltering(
    [],
    [titleFiltering, genreFiltering]
  );

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
        : [filterValues[0], changedFilter];
    setFilterValues(updatedFilterSet);
  };

  const movies = data ? data.results : [];
  const displayedMovies = filterFunction(movies);

  return (
    <>
      <PageTemplate title={title} movies={displayedMovies} action={action} />
      <MovieFilterUI
        onFilterValuesChange={changeFilterValues}
        titleFilter={filterValues[0].value}
        genreFilter={filterValues[1].value}
      />
    </>
  );
};
export default TemplateMovieCategoryPage;
