export const Table = () => {
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup, hgIndex) => (
          <tr {...headerGroup.getHeaderGroupProps({ key: `hg-${hgIndex}` })}>
            {headerGroup.headers.map((column, colIndex) => (
              <th
                {...column.getHeaderProps(column.getSortByToggleProps())}
                className="head"
                key={`col-${colIndex}`}
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
          rows.map((row, rowIndex) => {
            // Prepare the row for display
            prepareRow(row);
            return (
              // Apply the row props
              <tr {...row.getRowProps({ key: `row-${rowIndex}` })}>
                {
                  // Loop over the rows cells
                  row.cells.map((cell, cellIndex) => {
                    // Apply the cell props
                    return (
                      <td {...cell.getCellProps({ key: `cell-${cellIndex}` })}>
                        {
                          // Render the cell contents
                          cell.column.id === "cover" ? (
                            <img src={cell.value} className="cover" />
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
  );
};
