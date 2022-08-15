import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const id = useParams();
  const [data, setData] = useState([]);
  // const getMovie = async () => {
  //   const response = await fetch (`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
  //   const json = await response.json();
  //   // console.log(json);
  // };
  const getMovie = () => {
    fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id.id}`)
    .then((response) => response.json())
    .then((json) => {
      return setData(json.data.movie);
    });
  }
  useEffect(() => {
    getMovie();
  }, [data])

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.genres}</p>
    </div>
  );
};

export default Detail;