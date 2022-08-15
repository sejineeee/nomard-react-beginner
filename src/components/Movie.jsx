import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import style from '../styles/Movie.module.css';

const Movie = ({id, coverImg, year, title, summary, genres}) => {
  return (
    <div className={style.movie}>
      <img className={style['movie-img']}src={coverImg} alt={title} />
      <h2 className={style['movie-title']}><Link to={`/movie/${id}`}>{title}</Link></h2>
      <h3 className={style['movie-year']}>{year}</h3>
      <p>{summary.length > 125 ? summary.slice(0, 125) : summary }</p>
      <ul className={style['movie-genres']}>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  g: PropTypes.string,
}

export default Movie;