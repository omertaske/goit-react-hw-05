import axios from 'axios';
import './App.css'
import { options1, URL} from "./data/data_key"
import { Link, Route,Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import NotFoundPage from './pages/NotFoundPage';
import MovieCast from './component/MovieCast';
import MovieReviews from './component/MovieReviews';
import MovieDetailsPage from './pages/MovieDetailsPage';
import {MOVIEDETAILSPAGE,MOVIESPAGE,HOME,NOTFOUNDPAGE,MOVIECAST,MOVIEREVIEW} from './navigation/Navigation'

axios.get(URL, options1)
  .then(response =>
 console.log(response))
  .catch(err => console.error(err));

function App() {
  return (
    <>    
 <header className="bg-gradient-to-r from-indigo-800 via-purple-700 to-pink-600 
                   h-20 px-10 rounded-b-3xl shadow-2xl flex items-center gap-12 
                   sticky top-0 z-50 backdrop-blur-md border-b border-white/20">

  <Link 
    to={"/"} 
    className="relative text-2xl font-bold tracking-wide text-white drop-shadow-lg 
               after:content-[''] after:absolute after:-bottom-1 after:left-0 
               after:w-0 after:h-[3px] after:bg-yellow-400 
               after:transition-all after:duration-300 hover:after:w-full 
               hover:text-yellow-300"
  >
     Home
  </Link>

  <Link 
    to={'/moviesPage'}  
    className="relative text-2xl font-bold tracking-wide text-white drop-shadow-lg 
               after:content-[''] after:absolute after:-bottom-1 after:left-0 
               after:w-0 after:h-[3px] after:bg-yellow-400 
               after:transition-all after:duration-300 hover:after:w-full 
               hover:text-yellow-300"
  >
     Movies
  </Link>
</header>

<Routes>
  <Route path={HOME} element={<HomePage/>}/>
  <Route path={MOVIESPAGE} element={<MoviesPage/>}/>
  <Route path={MOVIEDETAILSPAGE} element={<MovieDetailsPage/>}/>
  <Route path={NOTFOUNDPAGE} element={<NotFoundPage/>}/>
  <Route path={MOVIECAST} element={<MovieCast/>}/>
  <Route path={MOVIEREVIEW} element={<MovieReviews/>}/>
</Routes>
    </>
  )
}

export default App
