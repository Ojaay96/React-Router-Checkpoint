import React, { useState, useEffect } from "react";
import MovieList from "../components/MovieList";
import Filter from "../components/Filter";
import AddMovie from "../components/AddMovie";

const HomeScreen = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [filters, setFilters] = useState({ title: "", rating: "" });

  useEffect(() => {
    // You can fetch movies from an API or any other data source
    // For the sake of example, let's assume you have a static list of movies
    const staticMovies = [
      {
        title: "Legend Of The Seeker",
        description:
          "Legend of the Seeker is an American television series created by Sam Raimi, based on the fantasy novel series The Sword of Truth by Terry Goodkind.",
        posterURL: "legend-of-the-seeker.jpg",
        rating: 4.5,
        link: "/legend-of-the-seeker",
      },
      {
        title: "Merlin",
        description:
          "Merlin is a mythical figure prominently featured in the legend of King Arthur and best known as a magician, with several other main roles.",
        posterURL: "merlin.jpg",
        rating: 5,
        link: "/merlin",
      },
      {
        title: "Prison Break",
        description:
          "His brother, Lincoln Burrows, was convicted of a crime he didn't commit and put on Death Row.",
        posterURL: "prison-break.jpg",
        rating: 4.5,
        link: "/prison-break",
      },
    ];

    setMovies(staticMovies);
    setFilteredMovies(staticMovies);
  }, []);

  const handleFilterChange = (filterType, value) => {
    setFilters({ ...filters, [filterType]: value });

    // Apply filters to the movies
    const filtered = movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(filters.title.toLowerCase()) &&
        movie.rating.toString().includes(filters.rating)
    );

    setFilteredMovies(filtered);
  };

  const addMovieHandler = (newMovieDta) => {
    setMovies([...movies, newMovieDta]);
    setFilters([...movies, newMovieDta]);
    handleFilterChange("title", filters.title); // Reapply filters after adding a new movie
  };
  return (
    <>
      <Filter onFilterChange={handleFilterChange} />
      <AddMovie newMovie={addMovieHandler} />
      <MovieList movies={filteredMovies} />
    </>
  );
};

export default HomeScreen;
