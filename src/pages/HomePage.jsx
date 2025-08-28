import React, { useEffect, useState } from 'react'
import { options1 } from '../data/data_key'
import axios from 'axios';
import { Link }from 'react-router-dom'; 

const HomePage = () => {
  const [movies, setMovies] = useState([])
  
  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/trending/movie/day',
      params: { language: 'en-US' },
      headers: {
        accept: 'application/json',
        Authorization: options1.headers.Authorization
      }
    };

    axios
      .request(options)
      .then(res => setMovies(res.data.results))
      .catch(err => console.error(err + " hata "));
  }, [])

  return (
    <div className="p-6 bg-gray-300 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
         Trending Movies
      </h2>



      
      <ul className=" grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  ">
        {movies.map(mov => (

         <Link   key={mov.id}
          to={`/moviesPage/${mov.id}?from=/`}>
         <li 
            key={mov.id} 
            className="bg-white rounded-2xl shadow-red-950 shadow-2xl hover:shadow-2xl transition duration-300 p-4 flex flex-col"
          >
            {mov.poster_path && (
              <img 
                src={`https://image.tmdb.org/t/p/w342${mov.poster_path}`} 
                alt={mov.title} 
                className="rounded-xl mb-4 object-cover w-full h-72"
              />
            )}
            <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-1">
              {mov.title}
            </h3>
            <p className="text-sm text-gray-600 mb-3 line-clamp-3">
              {mov.overview}
            </p>
            <div className="mt-auto text-sm text-gray-700 space-y-1">
              <p><span className="font-medium">Release:</span> {mov.release_date}</p>
              <p className='font-bold'><span className="font-bold ">Rating:</span>  {mov.vote_average}</p>
            </div>
          </li>
         </Link> 
         
          
        ))}
     
      </ul>
    </div>
  )
}

export default HomePage
