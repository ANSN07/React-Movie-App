import React from "react";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";
import AddFantasyMovieForm from "../components/addFantasyMovieForm";

export default {
  title: "Home Page/AddFantasyMovieForm",
  component: AddFantasyMovieForm,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => {
  return (
    <AddFantasyMovieForm
    />
  );
};
Basic.storyName = "Default";
