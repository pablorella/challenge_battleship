import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// Actions de Redux
import { agregarPosicionActual } from "../../actions/grillaActions";
import { agregarCeldasParaPintar } from "../../actions/grillaActions";
import { deleteListedBoat } from "../../actions/grillaActions";

const Cell = (props) => {
  //console.log(props.i);
  // utilizar use dispatch y te crea una función
  const dispatch = useDispatch();
  const cambiarPosActual = (grilla) => dispatch(agregarPosicionActual(grilla));
  const [celdasSeleccionadas, setCeldas] = useState("");
  const agregarCeldasPintar = (grilla) =>
    dispatch(agregarCeldasParaPintar(grilla));
  const deleteListedBoatt = (grilla) => dispatch(deleteListedBoat(grilla));

  const PlaygameStarted = useSelector((state) => state.grilla.gameStarted);
  const barcoClick = useSelector((state) => state.grilla.barcoClick);
  const celdaParaPintar = useSelector((state) => state.grilla.celdaParaPintar);
  const senseHorizontal = useSelector((state) => state.grilla.senseHorizontal);
  const carrier = useSelector((state) => state.grilla.carrier);
  const celdasOcupadas = useSelector((state) => state.grilla.celdasOcupadas);
  const CeldasPintarComputer = useSelector(
    (state) => state.grilla.celdasOcupadasComputer
  );

  const hadleClick = (e) => {
    //when you click on the cell
    e.preventDefault();

    //tiene q borrar el barco de la lista para no volverlo a elegir
    console.log("Coordenadas: I:" + props.i + "j:" + props.j);
    const json = carrier;
    json["posicion"] = celdaParaPintar;
    deleteListedBoatt({ barcoClick, celdaParaPintar, json });
    console.log("json_carrier:" + json["posicion"]);

    //tiene que guardar el barco en algun lado
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

  const devolverEsta = (i, j, celdaParaPintar) => {
    let encontro = false;
    celdaParaPintar.forEach((element) => {
      if (i === element[0] && j === element[1]) {
        //console.log("encontre uno");

        encontro = true;
      }
    });

    if (encontro === true) {
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
        (devolverEsta(props.i, props.j, CeldasPintarComputer) === true ? (
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
