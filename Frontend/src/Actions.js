import { useEffect, useState } from "react";

export const Actions = () => {
  let [movies, setMovies] = useState([]);
  let [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch("http://localhost/Backend/all-movies.php")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMovies(data.movies);
      })
  }, []);

  const insertMovie = (newMovie) => {
    fetch("http://localhost/Backend/add-movie.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMovie),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.id) {
          setMovies([
            {
              id: data.id,
              ...newMovie,
            },
            ...movies,
          ]);
        }
      })};

  const editMode = (id) => {
    movies = movies.map((movie) => {
      if (movie.id === id) {
        movie.isEditing = true;
        return movie;
      }
      movie.isEditing = false;
      return movie;
    });
    setMovies(movies);
  };

  const cancelEdit = (id) => {
    movies = movies.map((movie) => {
      if (movie.id === id) {
        movie.isEditing = false;
        return movie;
      }
      return movie;
    });
    setMovies(movies);
  };

  const updateMovie = (updatedData) => {
    fetch("http://localhost/Backend/update-movie.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          movies = movies.map((movie) => {
            if (movie.id === updatedData.id) {
              movie.isEditing = false;
              movie.title = updatedData.title;
              movie.year = updatedData.year;
              movie.description = updatedData.description;
              movie.poster = updatedData.poster;
              return movie;
            }
            return movie;
          });
          setMovies(movies);
        } 
      })
  };


  const deleteMovie = (Id) => {
    let movieDeleted = movies.filter((movie) => {
      return movie.id !== Id;
    });
    fetch("http://localhost/Backend/delete-movie.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: Id }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          setMovies(movieDeleted);
        }
      })
  };

  const selectedMovie = (movie) => {
    setMovie(movie);
  }

  const serachResualt = (inputData) => {
    fetch("http://localhost/Backend/search-movie.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ searchKey: inputData }),
    })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.success) {
        setMovies(data.movies);
      }else{
        setMovies([]);
      } 
    })
    .catch((err) => {
      console.log(err);
    });
  };

  return {
    movies,
    editMode,
    movie,
    serachResualt,
    selectedMovie,
    cancelEdit,
    updateMovie,
    insertMovie,
    deleteMovie,
  };
};