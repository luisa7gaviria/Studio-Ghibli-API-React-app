import React from "react";

const MovieCard = (props) => {
  return (
    <div className="film-list" key={props.mykey}>
      <h2>{props.title}</h2>
      <p>{props.synopsis}</p>
      <img className="posters" src={props.poster} alt={props.title} />
      <div className="bottom">
        <p>{props.director}</p>
        <p>{props.release_date}</p>
      </div>
    </div>
  );
};
export default MovieCard;
