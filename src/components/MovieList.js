import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

export default function MovieList() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    axios
      .get(`https://studio-ghibli-films-api.herokuapp.com/api/`)
      .then((response) => {
        
        setFilms([response.data])
      })
      .catch((error) => {
        console.log("the data was not return", error);
      });
  }, []);

  return (
    <div className="film">
      {films && films.map(film => {
        const titlek = Object.keys(film)
        return titlek.map(movie => {
          return (
            <MovieCard
            title={film[movie].title}
            synopsis={film[movie].synopsis}
            poster={film[movie].poster}
            director={film[movie].director}
            release_date={film[movie].release}
            mykey={movie}
            />
          )
        })
      })}
    </div>
  );
}
