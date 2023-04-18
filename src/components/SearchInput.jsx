import React, { useState } from "react";
import { useTable, useSortBy } from "react-table";
import searchMovies from "./axi";
const columns = [
  {
    Header: "Original Title",
    accessor: (movie) => movie.title || movie.original_title || movie.name,
    Cell: ({ value }) => <div className="text-lg font-medium">{value}</div>,
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
    accessor: (movie) => {
      const rating = movie.vote_average;
      if (Number.isInteger(rating)) {
        return rating.toString();
      } else {
        return rating.toFixed(1);
      }
    },
  },
  {
    Header: "Poster",
    accessor: "poster_path",
    Cell: ({ value }) => (
      <img src={`https://image.tmdb.org/t/p/w500${value}`} className="py-2" />
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
    <div className="text-center ">
      <div className="grid px-4 py-20 xl:px-20 xl:ml-10 ">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="p-4 text-xl text-center xl:p-6"
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={handleSearch}
          className="w-40 m-auto mt-10 text-4xl text-center text-white bg-gray-500 rounded-lg hover:bg-green-600"
        >
          Search
        </button>
      </div>
      {movies.length > 0 && (
        <table {...getTableProps()} className="m-auto">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className="head"
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          {/* Apply the table body props */}
          <tbody {...getTableBodyProps()}>
            {
              // Loop over the table rows
              rows.map((row) => {
                // Prepare the row for display
                prepareRow(row);
                return (
                  // Apply the row props
                  <tr {...row.getRowProps()} className="border-2 border-black">
                    {
                      // Loop over the rows cells
                      row.cells.map((cell) => {
                        // Apply the cell props
                        return (
                          <td {...cell.getCellProps()}>
                            {
                              // Render the cell contents
                              cell.column.id === "cover" ? (
                                <img src={cell.value} />
                              ) : (
                                cell.render("Cell")
                              )
                            }
                          </td>
                        );
                      })
                    }
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      )}
    </div>
  );
};
export default SearchInput;
