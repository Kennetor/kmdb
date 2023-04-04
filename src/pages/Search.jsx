import { useState } from "react";
import { useTable, useSortBy } from "react-table";
import { searchMovies } from "./api";
import Table from "./Table";

const columns = [
  {
    Header: "Original Title",
    accessor: (movie) => movie.title || movie.original_title || movie.name,
  },
  {
    Header: "Genre",
    accessor: (movie) => {
      const genreIds = movie.genre_ids || [];
      const genreNames = genreIds.map((id) => genres[id]);
      return genreNames.map((name) => (
        <span>
          {name}
          <br />
        </span>
      ));
    },
  },
  {
    Header: "Rating",
    accessor: "vote_average",
  },
  {
    Header: "Poster",
    accessor: "poster_path",
    Cell: ({ value }) => (
      <img src={`https://image.tmdb.org/t/p/w500${value}`} />
    ),
  },
];

const genres = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Science Fiction",
  10770: "TV Movie",
  53: "Thriller",
  10752: "War",
  37: "Western",
};

export const SearchInput = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = async () => {
    const tvResults = await searchMovies(query, "tv");
    const movieResults = await searchMovies(query, "movie");
    const results = [...tvResults, ...movieResults];
    // Filter out movies with missing properties
    const filteredResults = results.filter((movie) => {
      return movie.poster_path;
    });

    setMovies(filteredResults);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleSearch();
    }
  };

  const data = React.useMemo(() => movies, [movies]);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
        initialState: {
          sortBy: [{ id: "vote_average", desc: true }],
        },
      },
      useSortBy
    );
  //   console.log(movies);
  return (
    <div className="text-center">
      <div className="px-20 py-20 grid">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="p-10 text-xl text-center"
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={handleSearch}
          className="text-4xl rounded-lg bg-gray-500 w-40 flext text-center m-auto mt-10 hover:bg-green-600 text-white"
        >
          Search
        </button>
      </div>
      {movies.length > 0 && (
        <Table
          getTableProps={getTableProps}
          headerGroups={headerGroups}
          getTableBodyProps={getTableBodyProps}
          rows={rows}
          prepareRow={prepareRow}
        />
      )}
    </div>
  );
};
