export const getMovies = (args) => {
  const [, idPart] = args.queryKey;
  const { page } = idPart;
  return fetch(`/api/movies`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
};

export const getMovie = (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(`/api/movies/${id}`, {
    headers: {
      Authorization: window.localStorage.getItem("token"),
    },
  }).then((res) => res.json());
};

export const getUserReviews = (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  // const id = window.localStorage.getItem("id");
  return fetch(`/api/accounts/${id}/reviews`)
    .then((res) => res.json());
};

export const postUserReviews = (data) => {
  const id = window.localStorage.getItem("id");
  return fetch(`/api/accounts/${id}/reviews`, {
    method: "post",
    body: JSON.stringify({
      movieId: data.movieId,
      author: data.author,
      review: data.review,
      rating: data.rating,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json());
};

export const getGenres = async () => {
  return fetch(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
      import.meta.env.VITE_TMDB_KEY +
      "&language=en-US"
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
};

export const getMovieImages = ({ queryKey }) => {
  const [, idPart] = queryKey;
  const { id } = idPart;
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/images?api_key=${
      import.meta.env.VITE_TMDB_KEY
    }`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
};

export const getMovieReviews = (id) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${
      import.meta.env.VITE_TMDB_KEY
    }`
  )
    .then((res) => res.json())
    .then((json) => {
      // console.log(json.results);
      return json.results;
    });
};

export const getUpcomingMovies = (args) => {
  const [, idPart] = args.queryKey;
  const { page } = idPart;
  return fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${
      import.meta.env.VITE_TMDB_KEY
    }&language=en-US&page=${page}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
};

export const getPopularMovies = (args) => {
  const [, idPart] = args.queryKey;
  const { page } = idPart;
  return fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${
      import.meta.env.VITE_TMDB_KEY
    }&language=en-US&page=${page}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
};

export const getTopRatedMovies = (args) => {
  const [, idPart] = args.queryKey;
  const { page } = idPart;
  return fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${
      import.meta.env.VITE_TMDB_KEY
    }&language=en-US&page=${page}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
};

export const getNowPlayingMovies = (args) => {
  const [, idPart] = args.queryKey;
  const { page } = idPart;
  return fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${
      import.meta.env.VITE_TMDB_KEY
    }&language=en-US&page=${page}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
};

export const getMovieActorList = (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${
      import.meta.env.VITE_TMDB_KEY
    }`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
};

export const getActorDetails = (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `https://api.themoviedb.org/3/person/${id}?api_key=${
      import.meta.env.VITE_TMDB_KEY
    }`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
};

export const getActorImages = ({ queryKey }) => {
  const [, idPart] = queryKey;
  const { id } = idPart;
  return fetch(
    `https://api.themoviedb.org/3/person/${id}/images?api_key=${
      import.meta.env.VITE_TMDB_KEY
    }`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
};

export const getActorExternalIds = ({ queryKey }) => {
  const [, idPart] = queryKey;
  const { id } = idPart;
  return fetch(
    `https://api.themoviedb.org/3/person/${id}/external_ids?api_key=${
      import.meta.env.VITE_TMDB_KEY
    }`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
};

export const signup = (email, password, firstName, lastName) => {
  return fetch("/api/accounts", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "post",
    body: JSON.stringify({
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
    }),
  }).then((res) => res.json());
};

export const login = (email, password) => {
  return fetch("/api/accounts/security/token", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "post",
    body: JSON.stringify({ email: email, password: password }),
  }).then((res) => res.json());
};
