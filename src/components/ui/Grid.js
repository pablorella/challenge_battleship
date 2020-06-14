import React, { Fragment } from "react";
import Cell from "./cell.js";
const Grid = ({ owner }) => {
  const matrix = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  ];

  return (
    <Fragment>
      <div className="grid">
        {matrix.map((row, i) =>
          row.map((col, j) => (
            <Cell
              key={i.toString() + "" + j.toString()}
              owner={owner}
              i={i}
              j={j}
            />
          ))
        )}
      </div>
    </Fragment>
  );
};

export default Grid;
