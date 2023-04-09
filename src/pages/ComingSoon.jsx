import { useEffect, useState } from "react";
const {
  VITE_DB_API_BASE_URL: url,
  VITE_DB_API_KEY: apiKey,
  VITE_DB_API_IMAGE: img,
} = import.meta.env;

export const ComingSoon = () => {
  const [data, setData] = useState(null);

  const API_ENDPOINT = `${url}movie/upcoming?api_key=${apiKey}&language=en-US&page=1`;

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
    <div className="grid grid-cols-2 gap-6 p-4 overflow-hidden text-white xl:grid-cols-4 xl:ml-16">
      {filteredData.map((movie) => (
        <div key={movie.id}>
          {movie.poster_path && (
            <img
              src={`${img}w500${movie.poster_path}`}
              alt={movie.name}
              className="mt-12"
            />
          )}

          <h1 className="p-2 text-center tex">{movie.name}</h1>
          <div className="h-full font-serif text-2xl font-extralight"></div>
        </div>
      ))}
    </div>
  );
};
