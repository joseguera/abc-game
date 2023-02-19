import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Arts(props) {

  const [movies, setMovies] = useState([]);

  // const getMovies = async () => {
  //   try {
  //     const { data } = await axios(
  //       `http://localhost:8000/get_all_movies.php`
  //     );
  //     setMovies([...data]);
  //   } catch (err) {
  //     console.log("Location Error:", err);
  //   }
  // };

  fetch('http://localhost:8000/get_all_movies.php')
  .then((response) => response)
  .then((data) => console.log(data.movies));

  useEffect(() => {
    // getMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {console.log(movies)}
      <h2>Hello, Arts page</h2>
    </>
  )
}
