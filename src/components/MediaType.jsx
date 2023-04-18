import { useEffect, useState } from "react";
const {
  VITE_DB_API_BASE_URL: url,
  VITE_DB_API_KEY: apiKey,
  VITE_DB_API_IMAGE: img,
} = import.meta.env;

const API_ENDPOINTS = {
  movie: `${url}movie/popular?api_key=${apiKey}&language=en-US&page=1`,
  tv: `${url}tv/popular?api_key=${apiKey}&language=en-US&page=1`,
};

export const MediaComp = ({ mediaType }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getData() {
      const response = await fetch(API_ENDPOINTS[mediaType]);
      const data = await response.json();
      setData(data);
    }
    getData();
  }, [mediaType]);

  const filteredData = data
    ? data.results.filter((item) => item.poster_path !== null)
    : [];

  return (
    <div className="grid grid-cols-2 gap-6 p-4 overflow-hidden text-white xl:grid-cols-4 xl:ml-20 xl:gap-20">
      {filteredData.map((item) => (
        <div key={item.id}>
          {item.poster_path && (
            <img
              src={`${img}w500${item.poster_path}`}
              alt={item.name || item.title}
              className="w-full mt-12 xl:h-96"
            />
          )}

          <h1 className="p-2 text-xl text-center text-orange-300">
            {item.name || item.title}
          </h1>
          <div className="flex justify-between p-2">
            <h1 className="hover:underline hover:text-blue-200">Trailer</h1>
            <h1>Rating {item.vote_average}</h1>
          </div>
          <div className="h-full mt-2 font-serif font-extralight">
            {item.overview}
          </div>
        </div>
      ))}
    </div>
  );
};

export const Moviecomp = () => <MediaComp mediaType="movie" />;
export const Tvcomp = () => <MediaComp mediaType="tv" />;
