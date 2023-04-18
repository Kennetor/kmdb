import { useState } from "react";
import { useTable, useSortBy } from "react-table";
// import { searchMovies } from "./api";
import Table from "./Table";

const columns = [
  {
    Header: "Original Title",
    accessor: (movie) => movie.title || movie.original_title || movie.name,
  },
  {
    Header: "Genre",
    accessor: (movie) => {
      // const genreIds = movie.genre_ids || [];
      // const genreNames = genreIds.map((id) => genres[id]);
      return genreNames.map((name, index) => (
        <span key={`${movie.id}-${index}`}>
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

  // const data = React.useMemo(() => movies, [movies]);
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
  console.log(movies);
  return (
    <div className="text-center">
      <div className="grid px-20 py-20">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="p-20 text-xl text-center "
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={handleSearch}
          className="w-40 m-auto mt-10 text-4xl text-center text-white bg-gray-500 rounded-lg flext hover:bg-green-600"
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
