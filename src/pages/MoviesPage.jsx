import React, { useEffect, useState } from "react";
import Searchbar from "../component/searchbar";
import axios from "axios";
import { Link, useSearchParams,  } from "react-router-dom";
import { options1 } from "../data/data_key";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {
    if (!query) return;

    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/search/movie",
      params: {
        query: query,
        include_adult: "false",
        language: "en-US",
        page: "1",
      },
      headers: {
        accept: "application/json",
        Authorization: options1.headers.Authorization,
      },
    };

    axios
      .request(options)
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.error(err));
  }, [query]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-200 to-gray-900">
      <Searchbar />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-6">
        {movies.map((m) => (
          <Link
             key={m.id}
             
              to={`/moviesPage/${m.id}`}
               
              
              // geldiği sayfa MovieDetailse gitsin
          >
            <div className="bg-white rounded-2xl shadow-lg p-3 hover:shadow-2xl 
                            transition-transform transform hover:-translate-y-2 
                            cursor-pointer border border-gray-100">
              <img
                src={`https://image.tmdb.org/t/p/w300${m.poster_path}`}
                alt={m.title}
                className="rounded-xl mb-3 w-full h-72 object-cover"
              />
              <h2 className="font-bold text-lg text-gray-800 truncate">{m.title}</h2>
              <p className="text-sm text-gray-500 mt-1">
                <span className="font-medium">Release:</span> {m.release_date} <br />
                <span className="font-bold">Rating:</span> {m.vote_average}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MoviesPage;
