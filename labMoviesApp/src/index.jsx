import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import PopularMoviesPage from "./pages/popularMoviesPage";
import TopRatedMoviesPage from "./pages/topRatedMoviesPage";
import NowPlayingMoviesPage from "./pages/nowPlayingMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from "./components/siteHeader";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from "./pages/addMovieReviewPage";
import FullCastAndCrewPage from "./pages/fullCastAndCrewPage";
import ActorDetailsPage from "./pages/actorDetailsPage";
// import AuthContextProvider from "./contexts/AuthContext";
// import PrivateRoutes from "./components/privateRoutes";
import LoginPage from "./pages/loginPage";
// import RegisterUser from "./pages/registerUserPage";
import SignUpPage from "./pages/signUpPage";
import MyMoviesPage from "./pages/myMoviesPage";
import MyReviewsPage from "./pages/myReviewsPage";
import AddFantasyMoviePage from "./pages/addFantasyMoviePage";
import AuthContextProvider from "./contexts/authAPIContext";
import PrivateRoute from "./privateRoute";
import AuthHeader from "./authHeader";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthContextProvider>
          <AuthHeader />
          <SiteHeader />
          <MoviesContextProvider>
            <Routes>
              {/* <Route path="/register" element={<RegisterUser />} /> */}
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/login" element={<LoginPage />} />
              {/* <Route element={<PrivateRoutes />}> */}
              <Route path="/reviews/form" element={<AddMovieReviewPage />} />
              <Route path="/movies/popular" element={<PopularMoviesPage />} />
              <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
              <Route
                path="/movies/top-rated"
                element={<TopRatedMoviesPage />}
              />
              <Route
                path="/movies/now-playing"
                element={<NowPlayingMoviesPage />}
              />
              <Route
                path="/movies/:id/actors"
                element={<FullCastAndCrewPage />}
              />
              <Route path="/person/:id" element={<ActorDetailsPage />} />
              <Route path="/reviews/:id" element={<MovieReviewPage />} />
              <Route
                path="/movies/:id"
                element={
                  <PrivateRoute>
                    <MoviePage />
                  </PrivateRoute>
                }
              />
              <Route path="/myMovies" element={<PrivateRoute><MyMoviesPage /></PrivateRoute>} />
              <Route path="/myReviews" element={<PrivateRoute><MyReviewsPage /></PrivateRoute>} />
              <Route
                path="/myMovies/create"
                element={<AddFantasyMoviePage />}
              />
              {/* </Route> */}
              <Route
                path="/movies/favourites"
                element={<FavouriteMoviesPage />}
              />
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </MoviesContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);
