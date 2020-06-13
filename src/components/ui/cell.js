import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
// Actions de Redux

import { addCellsToPaint } from "../../actions/gridActions";
import { deleteListedBoat } from "../../actions/gridActions";
import { addCellHumanSelection } from "../../actions/gridActions";
import { impactsShitss } from "../../actions/gridActions";
import { changuecelRandom } from "../../actions/gridActions";

const Cell = (props) => {
  //UseSelectors
  const PlaygameStarted = useSelector((state) => state.grid.gameStarted);
  const SelectShipClick = useSelector((state) => state.grid.shipClick);
  const cellToPaintt = useSelector((state) => state.grid.cellToPaint);
  const senseHorizontal = useSelector((state) => state.grid.senseHorizontal);
  const carrier_cpuu = useSelector((state) => state.grid.carrier_cpu);
  const cruisers1_cpuu = useSelector((state) => state.grid.cruisers1_cpu);
  const cruisers2_cpuu = useSelector((state) => state.grid.cruisers2_cpu);
  const cruisers3_cpuu = useSelector((state) => state.grid.cruisers3_cpu);
  const submarine_cpuu = useSelector((state) => state.grid.submarine_cpu);
  const cellRandomm = useSelector((state) => state.grid.cellRandom);
  const carrier_human = useSelector((state) => state.grid.carrier);
  const cruisers1_human = useSelector((state) => state.grid.cruisers1);
  const cruisers2_human = useSelector((state) => state.grid.cruisers2);
  const cruisers3_human = useSelector((state) => state.grid.cruisers3);
  const submarine_human = useSelector((state) => state.grid.submarine);
  const turnHumann = useSelector((state) => state.grid.turnHuman);
  const changueOccupiedCells = useSelector((state) => state.grid.occupiedCells);
  //Dispatchs
  const dispatch = useDispatch();

  const addCellsToPaintt = (grid) => dispatch(addCellsToPaint(grid));
  const deleteListedBoatt = (grid) => dispatch(deleteListedBoat(grid));
  const impactsShits = (grid) => dispatch(impactsShitss(grid));
  const addCellHumanSelect = (grid) => dispatch(addCellHumanSelection(grid));
  const cellsAvailableForRand = useSelector(
    (state) => state.grid.cellsAvailableForRandom
  );
  const cellToPaintComputerr = useSelector(
    (state) => state.grid.cellToPaintComputer
  );
  const addCellRandom = (grid) => dispatch(changuecelRandom(grid));
  const cellsImpactedByCpuu = useSelector(
    (state) => state.grid.cellsImpactedByCpu
  );
  const humanImpactedCellss = useSelector(
    (state) => state.grid.humanImpactedCells
  );

  const hadleClick = (e) => {
    e.preventDefault();

    if (turnHumann && !PlaygameStarted) {
      if (SelectShipClick !== "") {
        if (cellToPaintt.length > 1) {
          deleteListedBoatt({ SelectShipClick, cellToPaintt });
        }
      }
    }
    if (turnHumann && PlaygameStarted) {
      addCellHumanSelect([[props.i, props.j]]);

      if (walkAndSearch(props.i, props.j, carrier_cpuu.position)) {
        if (carrier_cpuu.impacts === 3) {
          impactsShits({
            name: "carrier_cpu",
            cells: [[props.i, props.j]],
            sunken: true,
          });
        } else {
          impactsShits({
            name: "carrier_cpu",
            cells: [[props.i, props.j]],
            sunken: false,
          });
        }
      }
      if (walkAndSearch(props.i, props.j, cruisers1_cpuu.position)) {
        if (cruisers1_cpuu.impacts === 2) {
          impactsShits({
            name: "cruisers1_cpu",
            cells: [[props.i, props.j]],
            sunken: true,
          });
        } else {
          impactsShits({
            name: "cruisers1_cpu",
            cells: [[props.i, props.j]],
            sunken: false,
          });
        }
      }
      if (walkAndSearch(props.i, props.j, cruisers2_cpuu.position)) {
        if (cruisers2_cpuu.impacts === 2) {
          impactsShits({
            name: "cruisers2_cpu",
            cells: [[props.i, props.j]],
            sunken: true,
          });
        } else {
          impactsShits({
            name: "cruisers2_cpu",
            cells: [[props.i, props.j]],
            sunken: false,
          });
        }
      }
      if (walkAndSearch(props.i, props.j, cruisers3_cpuu.position)) {
        if (cruisers3_cpuu.impacts === 2) {
          impactsShits({
            name: "cruisers3_cpu",
            cells: [[props.i, props.j]],
            sunken: true,
          });
        } else {
          impactsShits({
            name: "cruisers3_cpu",
            cells: [[props.i, props.j]],
            sunken: false,
          });
        }
      }
      if (walkAndSearch(props.i, props.j, submarine_cpuu.position)) {
        if (submarine_cpuu.impacts === 1) {
          impactsShits({
            name: "submarine_cpu",
            cells: [[props.i, props.j]],
            sunken: true,
          });
        } else {
          impactsShits({
            name: "submarine_cpu",
            cells: [[props.i, props.j]],
            sunken: false,
          });
        }
      }

      function randomInt(min, max) {
        return min + Math.floor((max - min) * Math.random());
      }

      let eleccion = randomInt(0, cellsAvailableForRand.length);
      let i = cellsAvailableForRand[eleccion][0];
      let j = cellsAvailableForRand[eleccion][1];

      addCellRandom([[i, j]]);

      if (walkAndSearch(i, j, carrier_human.position)) {
        if (carrier_human.impacts === 3) {
          impactsShits({
            name: "carrier",
            cells: [[i, j]],
            sunken: true,
          });
        } else {
          impactsShits({
            name: "carrier",
            cells: [[i, j]],
            sunken: false,
          });
        }
      }
      if (walkAndSearch(i, j, cruisers1_human.position)) {
        if (cruisers1_human.impacts === 2) {
          impactsShits({
            name: "cruisers1",
            cells: [[i, j]],
            sunken: true,
          });
        } else {
          impactsShits({
            name: "cruisers1",
            cells: [[i, j]],
            sunken: false,
          });
        }
      }
      if (walkAndSearch(i, j, cruisers2_human.position)) {
        if (cruisers2_human.impacts === 2) {
          impactsShits({
            name: "cruisers2",
            cells: [[i, j]],
            sunken: true,
          });
        } else {
          impactsShits({
            name: "cruisers2",
            cells: [[i, j]],
            sunken: false,
          });
        }
      }
      if (walkAndSearch(i, j, cruisers3_human.position)) {
        if (cruisers3_human.impacts === 2) {
          impactsShits({
            name: "cruisers3",
            cells: [[i, j]],
            sunken: true,
          });
        } else {
          impactsShits({
            name: "cruisers3",
            cells: [[i, j]],
            sunken: false,
          });
        }
      }
      if (walkAndSearch(i, j, submarine_human.position)) {
        if (submarine_human.impacts === 1) {
          impactsShits({
            name: "submarine",
            cells: [[i, j]],
            sunken: true,
          });
        } else {
          impactsShits({
            name: "submarine",
            cells: [[i, j]],
            sunken: false,
          });
        }
      }
    }
  };

  const handleHover = (e) => {
    if (!PlaygameStarted) {
      if (SelectShipClick !== "") {
        switch (SelectShipClick) {
          case "carrier":
            if (senseHorizontal) {
              if (props.j < 7) {
                addCellsToPaintAux([
                  [props.i, props.j],
                  [props.i, props.j + 1],
                  [props.i, props.j + 2],
                  [props.i, props.j + 3],
                ]);
              } else {
                addCellsToPaintt([[]]);
              }
            } else {
              if (props.i < 7) {
                addCellsToPaintAux([
                  [props.i, props.j],
                  [props.i + 1, props.j],
                  [props.i + 2, props.j],
                  [props.i + 3, props.j],
                ]);
              } else {
                addCellsToPaintt([[]]);
              }
            }

            break;
          case "cruisers1":
            if (senseHorizontal) {
              if (props.j < 8) {
                addCellsToPaintAux([
                  [props.i, props.j],
                  [props.i, props.j + 1],
                  [props.i, props.j + 2],
                ]);
              } else {
                addCellsToPaintt([[]]);
              }
            } else {
              if (props.i < 8) {
                addCellsToPaintAux([
                  [props.i, props.j],
                  [props.i + 1, props.j],
                  [props.i + 2, props.j],
                ]);
              } else {
                addCellsToPaintt([[]]);
              }
            }

            break;
          case "cruisers2":
            if (senseHorizontal) {
              if (props.j < 8) {
                addCellsToPaintAux([
                  [props.i, props.j],
                  [props.i, props.j + 1],
                  [props.i, props.j + 2],
                ]);
              } else {
                addCellsToPaintt([[]]);
              }
            } else {
              if (props.i < 8) {
                addCellsToPaintAux([
                  [props.i, props.j],
                  [props.i + 1, props.j],
                  [props.i + 2, props.j],
                ]);
              } else {
                addCellsToPaintt([[]]);
              }
            }

            break;
          case "cruisers3":
            //console.log("es carrier"); es de 4 espacios
            //  console.log("fuera" + props.j);
            if (!showShip(props.i, props.j, changueOccupiedCells)) {
              if (senseHorizontal) {
                if (props.j < 8) {
                  //  console.log("dentro" + props.j);
                  addCellsToPaintAux([
                    [props.i, props.j],
                    [props.i, props.j + 1],
                    [props.i, props.j + 2],
                  ]);
                } else {
                  addCellsToPaintt([[]]);
                }
              } else {
                if (props.i < 8) {
                  addCellsToPaintAux([
                    [props.i, props.j],
                    [props.i + 1, props.j],
                    [props.i + 2, props.j],
                  ]);
                } else {
                  addCellsToPaintt([[]]);
                }
              }
            }
            break;
          case "submarine":
            if (!showShip(props.i, props.j, changueOccupiedCells)) {
              if (senseHorizontal) {
                if (props.j < 9) {
                  addCellsToPaintAux([
                    [props.i, props.j],
                    [props.i, props.j + 1],
                  ]);
                } else {
                  addCellsToPaintt([[]]);
                }
              } else {
                if (props.i < 9) {
                  addCellsToPaintAux([
                    [props.i, props.j],
                    [props.i + 1, props.j],
                  ]);
                } else {
                  addCellsToPaintt([[]]);
                }
              }
            }
            break;
          default:
            break;
        }
      }
    }
  };

  const walkAndSearch = (i, j, cells) => {
    let found = false;
    cells.forEach((element) => {
      if (i === element[0] && j === element[1]) {
        found = true;
      }
    });

    if (found === true) {
      return true;
    }
  };
  const devolversunken = (i, j, cells, valor) => {
    let found = false;
    cells.forEach((element) => {
      if (i === element[0] && j === element[1]) {
        found = true;
      }
    });

    if (found === true && valor) {
      return true;
    }
  };
  const showShip = (i, j, changueOccupiedCells) => {
    let found = false;
    changueOccupiedCells.forEach((element) => {
      if (i === element[0] && j === element[1]) {
        found = true;
      }
    });

    if (found === true) {
      return true;
    }
  };

  const addCellsToPaintAux = (cellsToOccupy) => {
    let found = false;
    changueOccupiedCells.forEach((element) => {
      cellsToOccupy.forEach((elementCell) => {
        if (element[0] === elementCell[0] && elementCell[1] === element[1]) {
          found = true;
        }
      });
    });

    if (found !== true) {
      addCellsToPaintt(cellsToOccupy);
    }
  };

  return (
    <Fragment>
      {props.owner === "human" &&
        !PlaygameStarted &&
        (walkAndSearch(props.i, props.j, cellToPaintt) === true ||
        showShip(props.i, props.j, changueOccupiedCells) ? (
          <div className="grid">
            <button
              className="cells lightBlue"
              onMouseOver={handleHover}
              onClick={hadleClick}
            ></button>
          </div>
        ) : (
          <div className="grid">
            <button
              className="cells"
              onMouseOver={handleHover}
              onClick={hadleClick}
            ></button>
          </div>
        ))}
      {props.owner === "human" &&
        PlaygameStarted &&
        (walkAndSearch(props.i, props.j, changueOccupiedCells) === true ? (
          walkAndSearch(props.i, props.j, cellRandomm) === true ? (
            walkAndSearch(props.i, props.j, humanImpactedCellss) ? (
              devolversunken(
                props.i,
                props.j,
                carrier_human.position,
                carrier_human.sunken
              ) ||
              devolversunken(
                props.i,
                props.j,
                cruisers1_human.position,
                cruisers1_human.sunken
              ) ||
              devolversunken(
                props.i,
                props.j,
                cruisers2_human.position,
                cruisers2_human.sunken
              ) ||
              devolversunken(
                props.i,
                props.j,
                cruisers3_human.position,
                cruisers3_human.sunken
              ) ||
              devolversunken(
                props.i,
                props.j,
                submarine_human.position,
                submarine_human.sunken
              ) ? (
                <Fragment>
                  <div className="grid">
                    <button className="cells red" disabled></button>
                  </div>
                </Fragment>
              ) : (
                <Fragment>
                  <div className="grid">
                    <button className="cells orange" disabled></button>
                  </div>
                </Fragment>
              )
            ) : (
              <Fragment>
                <div className="grid">
                  <button
                    className="cells orange disabled"
                    onMouseOver={handleHover}
                    onClick={hadleClick}
                  ></button>
                </div>
              </Fragment>
            )
          ) : (
            <div className="grid">
              <button className="cells lightBlue-border " disabled></button>
            </div>
          )
        ) : walkAndSearch(props.i, props.j, cellRandomm) ? (
          <div className="grid">
            <button className="cells purple " disabled></button>
          </div>
        ) : (
          <div className="grid">
            <button className="cells" disabled></button>
          </div>
        ))}

      {props.owner === "cpu" &&
        PlaygameStarted &&
        (walkAndSearch(props.i, props.j, cellToPaintComputerr) === true ? (
          walkAndSearch(props.i, props.j, cellsImpactedByCpuu) ? (
            devolversunken(
              props.i,
              props.j,
              carrier_cpuu.position,
              carrier_cpuu.sunken
            ) ||
            devolversunken(
              props.i,
              props.j,
              cruisers1_cpuu.position,
              cruisers1_cpuu.sunken
            ) ||
            devolversunken(
              props.i,
              props.j,
              cruisers2_cpuu.position,
              cruisers2_cpuu.sunken
            ) ||
            devolversunken(
              props.i,
              props.j,
              cruisers3_cpuu.position,
              cruisers3_cpuu.sunken
            ) ||
            devolversunken(
              props.i,
              props.j,
              submarine_cpuu.position,
              submarine_cpuu.sunken
            ) ? (
              <Fragment>
                <div className="grid">
                  <button className="cells red" disabled></button>
                </div>
              </Fragment>
            ) : (
              <Fragment>
                <div className="grid">
                  <button className="cells orange" disabled></button>
                </div>
              </Fragment>
            )
          ) : (
            <Fragment>
              <div className="grid">
                <button
                  className="cells lightBlue "
                  onMouseOver={handleHover}
                  onClick={hadleClick}
                  disabled
                ></button>
              </div>
            </Fragment>
          )
        ) : (
          <div className="grid">
            <button
              className="cells"
              onMouseOver={handleHover}
              onClick={hadleClick}
            ></button>
          </div>
        ))}
    </Fragment>
  );
};

export default Cell;
