import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { options1 } from "../data/data_key";
import axios from "axios";

const MovieCast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);   
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);    

  const [searchParams, setSearchParams] = useSearchParams();
  const showCastParam = searchParams.get("cast") === "true";
  const [showCast, setShowCast] = useState(showCastParam);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${id}/credits`,
      params: { language: "en-US" },
      headers: {
        accept: "application/json",
        Authorization: options1.headers.Authorization,
      },
    };

    axios
      .request(options)
      .then((res) => {
        setCast(res.data.cast || []);
        setLoading(false);
      })
      .catch((err) => {
        setError("Cast bilgisi alınamadı! " );
        console.log("Cast bilgisi alınamadı! "  + err);
        
        setLoading(false);
      });
  }, [id]);

  const toggleCast = () => {
    setShowCast(!showCast);
    setSearchParams({ cast: (!showCast).toString() });
  };

  return (
    <div className="mt-12">
      <h2
        className="text-2xl font-bold border-b-2 border-yellow-400 pb-2 mb-6 cursor-pointer"
        onClick={toggleCast}
      >
        Cast 
      </h2>

      {showCast && (
        <div>
          {loading && <p>Loading cast...</p>}
          {error && <p className="text-red-500">{error}</p>}
          {!loading && !error && cast.length === 0 && (
            <p className="text-gray-400">Cast bilgisi mevcut değil.</p>
          )}

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 mt-4">
            {cast.map((acr) => (
              <div key={acr.cast_id} className="text-center">
                {acr.profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w200${acr.profile_path}`}
                    alt={acr.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover"
                  />
                ) : (
                  <div className="w-24 h-24 bg-gray-700 rounded-full mx-auto"></div>
                )}
                <p className="mt-2 text-sm">{acr.name}</p>
                <p className="text-xs text-gray-400">as {acr.character}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieCast;
