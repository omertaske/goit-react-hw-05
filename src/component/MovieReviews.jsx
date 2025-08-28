import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { options1 } from "../data/data_key";
import axios from "axios";

const MovieReviews = () => {
  const { id } = useParams();

  // State
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // URL parametre (reviews=true/false)
  const [searchParams, setSearchParams] = useSearchParams();
  const showReviewsParam = searchParams.get("reviews") === "true";
  const [showReviews, setShowReviews] = useState(showReviewsParam);

  // Veri çekme
  useEffect(() => {
    if (!showReviews) return; // Eğer review kapalıysa istek atma

    setLoading(true);
    setError(null);

    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${id}/reviews`,
      params: { language: "en-US" },
      headers: {
        accept: "application/json",
        Authorization: options1.headers.Authorization,
      },
    };

    axios
      .request(options)
      .then((res) => {
        setReviews(res.data.results); // reviews endpoint results içinde dönüyor
        setLoading(false);
      })
      .catch((err) => {
        setError("Bir hata oluştu, yorumlar alınamadı.");
        console.log("hatacık  :   "   + err);
        
        setLoading(false);
      });
  }, [id, showReviews]);

  // Aç-kapa
  const toggleReviews = () => {
    setShowReviews(!showReviews);
    setSearchParams({ reviews: (!showReviews).toString() });
  };

  return (
    <div className="mt-12">
      {/* Başlık */}
      <h2
        className="text-2xl font-bold border-b-2 border-yellow-400 pb-2 mb-6 cursor-pointer"
        onClick={toggleReviews}
      >
        Reviews
      </h2>

      {/* Eğer açtıldıysa */}
      {showReviews && (
        <div>
          {loading && <p>Loading reviews...</p>}
          {error && <p className="text-red-500">{error}</p>}

          {/* Boş veri */}
          {!loading && !error && reviews.length === 0 && (
            <p className="text-gray-400">Detaylı bir yorum mevcut değil.</p>
          )}

          {/* Reviews listesi */}
          <div className="space-y-6 mt-4">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="p-4 border border-gray-700 rounded-lg shadow"
              >
                <p className="font-semibold mb-2">{review.author}</p>
                <p className="text-gray-300">{review.content}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieReviews;
