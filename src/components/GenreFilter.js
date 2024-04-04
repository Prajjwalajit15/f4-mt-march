// components/GenreFilter.js
import React from 'react';

const GenreFilter = ({ genres, onGenreSelect, onShowAll }) => {
  return (
    <div className="genre-filter">
      <h2>Filter by Genre</h2>
      {/* <button onClick={() => onShowAll()}>All Movies</button> */}
      {genres.map((genre, index) => (
        <button key={index} onClick={() => onGenreSelect(genre)}>
          {genre}
        </button>
      ))}
    </div>
  );
};

export default GenreFilter;

