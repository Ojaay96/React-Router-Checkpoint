import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "",
        gap: "10px",
        padding: "10px",
        fontSize: "medium",
        // maxWidth: "1024px",
        width: "100%",
      }}
    >
      {movies.map((eachMovie, index) => {
        return (
          <MovieCard
            key={index}
            title={eachMovie.title}
            description={eachMovie.description}
            posterURL={eachMovie.posterURL}
            rating={eachMovie.rating}
            link={eachMovie.link}
          />
        );
      })}
    </div>
  );
};

export default MovieList;
