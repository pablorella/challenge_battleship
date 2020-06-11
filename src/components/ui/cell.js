import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
// Actions de Redux
import { agregarPosicionActual } from "../../actions/grillaActions";
import { agregarCeldasParaPintar } from "../../actions/grillaActions";
import { deleteListedBoat } from "../../actions/grillaActions";
import { addCellHumanSelection } from "../../actions/grillaActions";
import { impactsShitss } from "../../actions/grillaActions";
import { changuecelRandom } from "../../actions/grillaActions";

const Cell = (props) => {
  //UseSelectors
  const PlaygameStarted = useSelector((state) => state.grilla.gameStarted);
  const barcoClick = useSelector((state) => state.grilla.barcoClick);
  const celdaParaPintar = useSelector((state) => state.grilla.celdaParaPintar);
  const senseHorizontal = useSelector((state) => state.grilla.senseHorizontal);
  const carrier_cpuu = useSelector((state) => state.grilla.carrier_cpu);
  const cruisers1_cpuu = useSelector((state) => state.grilla.cruisers1_cpu);
  const cruisers2_cpuu = useSelector((state) => state.grilla.cruisers2_cpu);
  const cruisers3_cpuu = useSelector((state) => state.grilla.cruisers3_cpu);
  const submarine_cpuu = useSelector((state) => state.grilla.submarine_cpu);
  const celdasRandomm = useSelector((state) => state.grilla.celdasRandom);
  const carrier_human = useSelector((state) => state.grilla.carrier);
  const cruisers1_human = useSelector((state) => state.grilla.cruisers1);
  const cruisers2_human = useSelector((state) => state.grilla.cruisers2);
  const cruisers3_human = useSelector((state) => state.grilla.cruisers3);
  const submarine_human = useSelector((state) => state.grilla.submarine);
  const turnHumann = useSelector((state) => state.grilla.turnHuman);
  const celdasOcupadas = useSelector((state) => state.grilla.celdasOcupadas);
  //Dispatchs
  const dispatch = useDispatch();
  const cambiarPosActual = (grilla) => dispatch(agregarPosicionActual(grilla));

  const agregarCeldasPintar = (grilla) =>
    dispatch(agregarCeldasParaPintar(grilla));
  const deleteListedBoatt = (grilla) => dispatch(deleteListedBoat(grilla));
  const impactsShits = (grilla) => dispatch(impactsShitss(grilla));
  const addCellHumanSelect = (grilla) =>
    dispatch(addCellHumanSelection(grilla));
  const cellsDisponiblesParaRand = useSelector(
    (state) => state.grilla.cellsDisponiblesParaRandom
  );
  const celdaParaPintarComputerr = useSelector(
    (state) => state.grilla.celdaParaPintarComputer
  );
  const addCellRandom = (grilla) => dispatch(changuecelRandom(grilla));
  const celdasImpactadasToCpuu = useSelector(
    (state) => state.grilla.celdasImpactadasToCpu
  );
  const celdasImpactadasToHumann = useSelector(
    (state) => state.grilla.celdasImpactadasToHuman
  );

  const hadleClick = (e) => {
    e.preventDefault();

    if (turnHumann && !PlaygameStarted) {
      if (barcoClick !== "") {
        if (celdaParaPintar.length > 1) {
          deleteListedBoatt({ barcoClick, celdaParaPintar });
        }
      }
    }
    if (turnHumann && PlaygameStarted) {
      addCellHumanSelect([[props.i, props.j]]);

      if (devolverEsta(props.i, props.j, carrier_cpuu.posicion)) {
        if (carrier_cpuu.impactos === 3) {
          impactsShits({
            nombre: "carrier_cpu",
            celdas: [[props.i, props.j]],
            hundido: true,
          });
        } else {
          impactsShits({
            nombre: "carrier_cpu",
            celdas: [[props.i, props.j]],
            hundido: false,
          });
        }
      }
      if (devolverEsta(props.i, props.j, cruisers1_cpuu.posicion)) {
        if (cruisers1_cpuu.impactos === 2) {
          impactsShits({
            nombre: "cruisers1_cpu",
            celdas: [[props.i, props.j]],
            hundido: true,
          });
        } else {
          impactsShits({
            nombre: "cruisers1_cpu",
            celdas: [[props.i, props.j]],
            hundido: false,
          });
        }
      }
      if (devolverEsta(props.i, props.j, cruisers2_cpuu.posicion)) {
        if (cruisers2_cpuu.impactos === 2) {
          impactsShits({
            nombre: "cruisers2_cpu",
            celdas: [[props.i, props.j]],
            hundido: true,
          });
        } else {
          impactsShits({
            nombre: "cruisers2_cpu",
            celdas: [[props.i, props.j]],
            hundido: false,
          });
        }
      }
      if (devolverEsta(props.i, props.j, cruisers3_cpuu.posicion)) {
        if (cruisers3_cpuu.impactos === 2) {
          impactsShits({
            nombre: "cruisers3_cpu",
            celdas: [[props.i, props.j]],
            hundido: true,
          });
        } else {
          impactsShits({
            nombre: "cruisers3_cpu",
            celdas: [[props.i, props.j]],
            hundido: false,
          });
        }
      }
      if (devolverEsta(props.i, props.j, submarine_cpuu.posicion)) {
        if (submarine_cpuu.impactos === 1) {
          impactsShits({
            nombre: "submarine_cpu",
            celdas: [[props.i, props.j]],
            hundido: true,
          });
        } else {
          impactsShits({
            nombre: "submarine_cpu",
            celdas: [[props.i, props.j]],
            hundido: false,
          });
        }
      }

      function randomInt(min, max) {
        return min + Math.floor((max - min) * Math.random());
      }
     

      let eleccion = randomInt(0, cellsDisponiblesParaRand.length);
      let i = cellsDisponiblesParaRand[eleccion][0];
      let j = cellsDisponiblesParaRand[eleccion][1];

      addCellRandom([[i, j]]);
     
      if (devolverEsta(i, j, carrier_human.posicion)) {
        if (carrier_human.impactos === 3) {
          impactsShits({
            nombre: "carrier",
            celdas: [[i, j]],
            hundido: true,
          });
        } else {
          impactsShits({
            nombre: "carrier",
            celdas: [[i, j]],
            hundido: false,
          });
        }
      }
      if (devolverEsta(i, j, cruisers1_human.posicion)) {
        if (cruisers1_human.impactos === 2) {
          impactsShits({
            nombre: "cruisers1",
            celdas: [[i, j]],
            hundido: true,
          });
        } else {
          impactsShits({
            nombre: "cruisers1",
            celdas: [[i, j]],
            hundido: false,
          });
        }
      }
      if (devolverEsta(i, j, cruisers2_human.posicion)) {
        if (cruisers2_human.impactos === 2) {
          impactsShits({
            nombre: "cruisers2",
            celdas: [[i, j]],
            hundido: true,
          });
        } else {
          impactsShits({
            nombre: "cruisers2",
            celdas: [[i, j]],
            hundido: false,
          });
        }
      }
      if (devolverEsta(i, j, cruisers3_human.posicion)) {
        if (cruisers3_human.impactos === 2) {
          impactsShits({
            nombre: "cruisers3",
            celdas: [[i, j]],
            hundido: true,
          });
        } else {
          impactsShits({
            nombre: "cruisers3",
            celdas: [[i, j]],
            hundido: false,
          });
        }
      }
      if (devolverEsta(i, j, submarine_human.posicion)) {
        if (submarine_human.impactos === 1) {
          impactsShits({
            nombre: "submarine",
            celdas: [[i, j]],
            hundido: true,
          });
        } else {
          impactsShits({
            nombre: "submarine",
            celdas: [[i, j]],
            hundido: false,
          });
        }
      }
    }
  };

  const handleHover = (e) => {
    if (!PlaygameStarted) {
      if (barcoClick !== "") {
        cambiarPosActual({ posicion: [props.i, props.j] });
        switch (barcoClick) {
          case "carrier":
            if (senseHorizontal) {
              if (props.j < 7) {
                agregarCeldasPintarPavlin([
                  [props.i, props.j],
                  [props.i, props.j + 1],
                  [props.i, props.j + 2],
                  [props.i, props.j + 3],
                ]);
              } else {
                agregarCeldasPintar([[]]);
              }
            } else {
              if (props.i < 7) {
                agregarCeldasPintarPavlin([
                  [props.i, props.j],
                  [props.i + 1, props.j],
                  [props.i + 2, props.j],
                  [props.i + 3, props.j],
                ]);
              } else {
                agregarCeldasPintar([[]]);
              }
            }

            break;
          case "cruisers1":
            if (senseHorizontal) {
              if (props.j < 8) {
                agregarCeldasPintarPavlin([
                  [props.i, props.j],
                  [props.i, props.j + 1],
                  [props.i, props.j + 2],
                ]);
              } else {
                agregarCeldasPintar([[]]);
              }
            } else {
              if (props.i < 8) {
                agregarCeldasPintarPavlin([
                  [props.i, props.j],
                  [props.i + 1, props.j],
                  [props.i + 2, props.j],
                ]);
              } else {
                agregarCeldasPintar([[]]);
              }
            }

            break;
          case "cruisers2":
            if (senseHorizontal) {
              if (props.j < 8) {
                agregarCeldasPintarPavlin([
                  [props.i, props.j],
                  [props.i, props.j + 1],
                  [props.i, props.j + 2],
                ]);
              } else {
                agregarCeldasPintar([[]]);
              }
            } else {
              if (props.i < 8) {
                agregarCeldasPintarPavlin([
                  [props.i, props.j],
                  [props.i + 1, props.j],
                  [props.i + 2, props.j],
                ]);
              } else {
                agregarCeldasPintar([[]]);
              }
            }

            break;
          case "cruisers3":
            //console.log("es carrier"); es de 4 espacios
            //  console.log("fuera" + props.j);
            if (!showShip(props.i, props.j, celdasOcupadas)) {
              if (senseHorizontal) {
                if (props.j < 8) {
                  //  console.log("dentro" + props.j);
                  agregarCeldasPintarPavlin([
                    [props.i, props.j],
                    [props.i, props.j + 1],
                    [props.i, props.j + 2],
                  ]);
                } else {
                  agregarCeldasPintar([[]]);
                }
              } else {
                if (props.i < 8) {
                  agregarCeldasPintarPavlin([
                    [props.i, props.j],
                    [props.i + 1, props.j],
                    [props.i + 2, props.j],
                  ]);
                } else {
                  agregarCeldasPintar([[]]);
                }
              }
            }
            break;
          case "submarine":
            if (!showShip(props.i, props.j, celdasOcupadas)) {
              if (senseHorizontal) {
                if (props.j < 9) {
                  agregarCeldasPintarPavlin([
                    [props.i, props.j],
                    [props.i, props.j + 1],
                  ]);
                } else {
                  agregarCeldasPintar([[]]);
                }
              } else {
                if (props.i < 9) {
                  agregarCeldasPintarPavlin([
                    [props.i, props.j],
                    [props.i + 1, props.j],
                  ]);
                } else {
                  agregarCeldasPintar([[]]);
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

  const devolverEsta = (i, j, celdas) => {
    let encontro = false;
    celdas.forEach((element) => {
      if (i === element[0] && j === element[1]) {
        encontro = true;
      }
    });

    if (encontro === true) {
      return true;
    }
  };
  const devolverHundido = (i, j, celdas, valor) => {
    let encontro = false;
    celdas.forEach((element) => {
      if (i === element[0] && j === element[1]) {
        encontro = true;
      }
    });

    if (encontro === true && valor) {
      return true;
    }
  };
  const showShip = (i, j, celdasOcupadas) => {
    let encontro = false;
    celdasOcupadas.forEach((element) => {
      if (i === element[0] && j === element[1]) {
        encontro = true;
      }
    });

    if (encontro === true) {
      return true;
    }
  };

  const agregarCeldasPintarPavlin = (celdasAOcupar) => {
    let encontro = false;
    celdasOcupadas.forEach((element) => {
      celdasAOcupar.forEach((elementceldas) => {
        if (
          element[0] === elementceldas[0] &&
          elementceldas[1] === element[1]
        ) {
          encontro = true;
        }
      });
    });

    if (encontro !== true) {
      agregarCeldasPintar(celdasAOcupar);
    }
  };

  return (
    <Fragment>
      {props.owner === "human" &&
        !PlaygameStarted &&
        (devolverEsta(props.i, props.j, celdaParaPintar) === true ||
        showShip(props.i, props.j, celdasOcupadas) ? (
          <div className="grid">
            <button
              className="cells celeste"
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
        (devolverEsta(props.i, props.j, celdasOcupadas) === true ? (
          devolverEsta(props.i, props.j, celdasRandomm) === true ? (
            devolverEsta(props.i, props.j, celdasImpactadasToHumann) ? (
              devolverHundido(
                props.i,
                props.j,
                carrier_human.posicion,
                carrier_human.hundido
              ) ||
              devolverHundido(
                props.i,
                props.j,
                cruisers1_human.posicion,
                cruisers1_human.hundido
              ) ||
              devolverHundido(
                props.i,
                props.j,
                cruisers2_human.posicion,
                cruisers2_human.hundido
              ) ||
              devolverHundido(
                props.i,
                props.j,
                cruisers3_human.posicion,
                cruisers3_human.hundido
              ) ||
              devolverHundido(
                props.i,
                props.j,
                submarine_human.posicion,
                submarine_human.hundido
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
              <button className="cells celeste-border " disabled></button>
            </div>
          )
        ) : devolverEsta(props.i, props.j, celdasRandomm) ? (
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
        (devolverEsta(props.i, props.j, celdaParaPintarComputerr) === true ? (
          devolverEsta(props.i, props.j, celdasImpactadasToCpuu) ? (
            devolverHundido(
              props.i,
              props.j,
              carrier_cpuu.posicion,
              carrier_cpuu.hundido
            ) ||
            devolverHundido(
              props.i,
              props.j,
              cruisers1_cpuu.posicion,
              cruisers1_cpuu.hundido
            ) ||
            devolverHundido(
              props.i,
              props.j,
              cruisers2_cpuu.posicion,
              cruisers2_cpuu.hundido
            ) ||
            devolverHundido(
              props.i,
              props.j,
              cruisers3_cpuu.posicion,
              cruisers3_cpuu.hundido
            ) ||
            devolverHundido(
              props.i,
              props.j,
              submarine_cpuu.posicion,
              submarine_cpuu.hundido
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
                  className="cells celeste "
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
