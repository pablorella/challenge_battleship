import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// Actions de Redux
import { agregarPosicionActual } from "../../actions/grillaActions";
import { agregarCeldasParaPintar } from "../../actions/grillaActions";
import { deleteListedBoat } from "../../actions/grillaActions";
import { changueTurnToHuman } from "../../actions/grillaActions";
import { addCellHumanSelection } from "../../actions/grillaActions";
import { impactsShitss } from "../../actions/grillaActions";
import { changueLastImpact } from "../../actions/grillaActions";

const Cell = (props) => {
  //console.log(props.i);
  // utilizar use dispatch y te crea una función
  const dispatch = useDispatch();
  const cambiarPosActual = (grilla) => dispatch(agregarPosicionActual(grilla));
  const [celdasSeleccionadas, setCeldas] = useState("");
  const agregarCeldasPintar = (grilla) =>
    dispatch(agregarCeldasParaPintar(grilla));
  const deleteListedBoatt = (grilla) => dispatch(deleteListedBoat(grilla));
  const impactsShits = (grilla) => dispatch(impactsShitss(grilla));
  const addCellHumanSelect = (grilla) =>
    dispatch(addCellHumanSelection(grilla));
  const PlaygameStarted = useSelector((state) => state.grilla.gameStarted);
  const barcoClick = useSelector((state) => state.grilla.barcoClick);
  const celdaParaPintar = useSelector((state) => state.grilla.celdaParaPintar);
  const senseHorizontal = useSelector((state) => state.grilla.senseHorizontal);

  const carrier_cpuu = useSelector((state) => state.grilla.carrier_cpu);
  const cruisers1_cpuu = useSelector((state) => state.grilla.cruisers1_cpu);
  const cruisers2_cpuu = useSelector((state) => state.grilla.cruisers2_cpu);
  const cruisers3_cpuu = useSelector((state) => state.grilla.cruisers3_cpu);
  const submarine_cpuu = useSelector((state) => state.grilla.submarine_cpu);

  const turnHumann = useSelector((state) => state.grilla.turnHuman);

  const changueLastImpactt = (grilla) => dispatch(changueLastImpact(grilla));

  const changueTurnToHumannn = (grilla) => dispatch(changueTurnToHuman(grilla));
  const lastImpactt = useSelector((state) => state.grilla.lastImpact);
  const celdasOcupadas = useSelector((state) => state.grilla.celdasOcupadas);
  const celdaParaPintarComputerr = useSelector(
    (state) => state.grilla.celdaParaPintarComputer
  );

  const celdasImpactadasToCpuu = useSelector(
    (state) => state.grilla.celdasImpactadasToCpu
  );

  const hadleClick = (e) => {
    /* console.log(
      "turnHuman: " + turnHumann,
      "PlaygameStarted: " + PlaygameStarted
    ); */

    e.preventDefault();
    console.log("celdas_cpu:" + celdasImpactadasToCpuu);
    //console.log("Coordenadas: I:" + props.i + "j:" + props.j);
    if (turnHumann && !PlaygameStarted) {
      //tiene q borrar el barco de la lista para no volverlo a elegir

      /*const json = carrier;
      json["posicion"] = celdaParaPintar;
      
      console.log("json_carrier:" + json["posicion"]); */
      if (barcoClick !== "") {
        deleteListedBoatt({ barcoClick, celdaParaPintar });
      }
    }
    if (turnHumann && PlaygameStarted) {
      // changueTurnToHumannn(turnHumann);

      /*  if (lastImpactt) {
          changueLastImpactt();
        } */
      addCellHumanSelect([[props.i, props.j]]);

      //if (props.i === 0 && props.j === 1) {
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
        //de la cpu impactsShits({ nombre: "carrier_cpu", celdas: [[props.i, props.j]] });
        // changueLastImpactt();
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
    }
  };

  const handleHover = (e) => {
    //console.log("Coordenadas: I:" + props.i + "j:" + props.j);
    //e.target.style.background = "#40bfbb;";
    //console.log(e.MouseEvent.clientX );

    if (barcoClick !== "") {
      //console.log("barco click" + barcoClick);

      cambiarPosActual({ posicion: [props.i, props.j] });
      switch (barcoClick) {
        case "carrier":
          //console.log("es carrier"); es de 4 espacios
          //  console.log("fuera" + props.j);
          if (senseHorizontal) {
            if (props.j < 7) {
              //  console.log("dentro" + props.j);
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
              //  console.log("dentro" + props.j);
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
          //console.log("es carrier"); es de 4 espacios
          //  console.log("fuera" + props.j);
          /* console.log(
            "i:" + props.i,
            "j:" + props.j,
            "celdas:" + celdasOcupadas
          ); */

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
              //  console.log("dentro" + props.j);
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
          //console.log("es carrier"); es de 4 espacios
          //  console.log("fuera" + props.j);

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
              //  console.log("dentro" + props.j);
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
                //  console.log("dentro" + props.j);
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
          //console.log("es carrier"); es de 4 espacios
          //  console.log("fuera" + props.j);
          if (!showShip(props.i, props.j, celdasOcupadas)) {
            if (senseHorizontal) {
              if (props.j < 9) {
                //  console.log("dentro" + props.j);
                agregarCeldasPintarPavlin([
                  [props.i, props.j],
                  [props.i, props.j + 1],
                ]);
              } else {
                agregarCeldasPintar([[]]);
              }
            } else {
              if (props.i < 9) {
                //  console.log("dentro" + props.j);
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
  };

  const devolverEsta = (i, j, celdas) => {
    let encontro = false;
    celdas.forEach((element) => {
      if (i === element[0] && j === element[1]) {
        //console.log("encontre uno");

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
        //console.log("encontre uno");

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
        //console.log("encontre uno");

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
      {/* {console.log("[" + props.i + "," + props.j + "]")} */}
      {/*     {console.log("desde el componente" + props.i + "," + props.j)}
      {console.log("desde cedldapara pintar:" + celdaParaPintar[0][0])}
      {console.log(celdaParaPintar.includes(props.i + "," + props.j))}
 */}
      {/*  {celdaParaPintar.map((item) =>
        console.log("Ejex" + item[0] + "Eje y:" + item[1])
      )} */}
      {/* {console.log(devolverEsta(props.i, props.j, celdaParaPintar))} */}
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
        (devolverEsta(props.i, props.j, celdaParaPintar) === true ||
        showShip(props.i, props.j, celdasOcupadas) ? (
          <div className="grid">
            <button
              className="cells celeste-border"
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
      {props.owner === "cpu" &&
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
                  <button className="cells red"></button>
                </div>
              </Fragment>
            ) : (
              <Fragment>
                <div className="grid">
                  <button className="cells orange"></button>
                </div>
              </Fragment>
            )
          ) : (
            <Fragment>
              <div className="grid">
                <button
                  className="cells celeste"
                  onMouseOver={handleHover}
                  onClick={hadleClick}
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

      {/*  {props.i === 1 ? (
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
      )} */}
    </Fragment>
  );
};

export default Cell;
