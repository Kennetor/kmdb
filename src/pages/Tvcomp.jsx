import { useEffect, useState } from "react";
const {
  VITE_DB_API_BASE_URL: url,
  VITE_DB_API_KEY: apiKey,
  VITE_DB_API_IMAGE: img,
} = import.meta.env;

export const Tvcomp = () => {
  const [data, setData] = useState(null);

  const API_ENDPOINT = `${url}tv/popular?api_key=${apiKey}&language=en-US&page=1`;

  useEffect(() => {
    async function getData() {
      const response = await fetch(API_ENDPOINT);
      const data = await response.json();
      setData(data);
    }
    getData();
  }, []);

  const filteredData = data
    ? data.results.filter((tv) => tv.poster_path !== null)
    : [];

  return (
    <div className="grid grid-cols-2 gap-6 p-4 overflow-hidden text-white xl:grid-cols-4 xl:ml-16">
      {filteredData.map((tv) => (
        <div key={tv.id}>
          {tv.poster_path && (
            <img
              src={`${img}w500${tv.poster_path}`}
              alt={tv.name}
              className="mt-12"
            />
          )}

          <h1 className="p-2 text-center tex">{tv.name}</h1>
          <div className="h-full font-serif text-2xl font-extralight"></div>
        </div>
      ))}
    </div>
  );
};
