import React, { useEffect, useState, } from "react";
import { useParams} from "react-router-dom";
import axios from "axios";
import { options1 } from "../data/data_key";
import MovieCast from "../component/MovieCast";
import MovieReviews from "../component/MovieReviews";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);


 const goBack = () => {
  window.history.back(); // mecburan boyle yapmak zaorunda kaldm
};



  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${id}`,
      params: { language: "en-US" },
      headers: {
        accept: "application/json",
        Authorization: options1.headers.Authorization,
      },
    };

    axios
      .request(options)
      .then((res) => setMovie(res.data))
      .catch((err) => console.error(err + " hata "));
  }, [id]);

  if (!movie) return <p className="text-center mt-20 text-xl">Loading...</p>;

  return (
    <div className="relative min-h-screen bg-gray-900 text-white">

      

      <div
        className="absolute inset-0 bg-cover bg-center blur-lg opacity-30"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        }}
      ></div>
       

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-10">

     
     <button
     onClick={goBack}
       className="
       mb-3
    relative inline-flex items-center justify-center
    px-8 py-3
    bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500
    text-white font-bold text-lg
    rounded-2xl
    shadow-xl
    shadow-slate-300
    overflow-hidden
    transition-transform duration-300
    hover:scale-105
    active:scale-95
    focus:outline-none
  "
     >
      Go back
      <span className="
    absolute top-0 left-0 w-0 h-full bg-white opacity-30 
    transform rotate-12
    transition-all duration-500
    hover:w-32 hover:translate-x-64
  " />
     </button>
     

        <div className="flex flex-col md:flex-row gap-8 bg-black/60 rounded-2xl shadow-2xl overflow-hidden">

          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="rounded-lg w-full md:w-1/3 object-cover"
          />

          <div className="flex-1 p-6">
            <h1 className="text-4xl font-extrabold mb-4 text-yellow-300">{movie.title}</h1>
            <p className="text-lg text-gray-200 italic mb-2">{movie.tagline || ""}</p>

            <div className="flex items-center gap-6 mb-6">
              <p><span className="font-bold">Release:</span> {movie.release_date}</p>
              <p><span className="font-bold">Runtime:</span> {movie.runtime} min</p>
              <p><span className="font-bold">Rating:</span> {movie.vote_average}</p>
            </div>

            <p className="leading-relaxed text-gray-100">{movie.overview}</p>
          </div>
        </div>

        <MovieCast />
        <MovieReviews />
         
      </div>
    </div>
  );
};

export default MovieDetailsPage;
