import { useEffect, useState } from "react";
const {
  VITE_DB_API_BASE_URL: url,
  VITE_DB_API_KEY: apiKey,
  VITE_DB_API_IMAGE: img,
} = import.meta.env;

const API_ENDPOINT = `${url}movie/popular?api_key=${apiKey}&language=en-US&page=1`;

export const Moviecomp = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getData() {
      const response = await fetch(API_ENDPOINT);
      const data = await response.json();
      setData(data);
    }
    getData();
  }, []);

  const filteredData = data
    ? data.results.filter((movie) => movie.poster_path !== null)
    : [];

  return (
    <div className="grid grid-cols-2 gap-6 p-4 overflow-hidden text-white xl:gap-20 xl:ml-20 xl:grid-cols-4">
      {filteredData.map((movie) => (
        <div key={movie.id}>
          {movie.poster_path && (
            <img
              src={`${img}w500${movie.poster_path}`}
              alt={movie.name}
              className="mt-12 xl:h-96"
            />
          )}

          <h1 className="p-2 text-xl text-orange-300">{movie.title}</h1>
          <h1>{movie.reviews}</h1>
          <div className="flex justify-between p-2">
            <h1 className="hover:underline hover:text-blue-200">Trailer</h1>
            <h1>Rating {movie.vote_average}</h1>
          </div>
          <div className="h-full mt-2 font-serif font-extralight">
            {movie.overview}
          </div>
        </div>
      ))}
    </div>
  );
};
