import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// Actions de Redux
import { seleccionBarco } from "../actions/grillaActions";
import { handleChangueSense } from "../actions/grillaActions";
import { startGame } from "../actions/grillaActions";

const MostrarBarcos = () => {
  const senseHorizontal = useSelector((state) => state.grilla.senseHorizontal);
  const barcosDisponibles = useSelector(
    (state) => state.grilla.barcosDisponiblesParaEleccion
  );
  const nombre_user = useSelector((state) => state.grilla.user);
  //console.log("desde mostrarbarcos component" + nombre_user);
  const gameStartedPlay = useSelector((state) => state.grilla.gameStarted);
  // utilizar use dispatch y te crea una función
  const dispatch = useDispatch();

  const SeleccionDelBarco = (grilla) => dispatch(seleccionBarco(grilla));

  function handleClick(e) {
    e.preventDefault();
    //console.log(e.target.value);
    SeleccionDelBarco({ elegi: e.target.value });
  }

  const handleChangueSenseee = (grilla) => dispatch(handleChangueSense(grilla));
  const begindstartGame = (grilla) => dispatch(startGame(grilla));

  const handleSubmit = (e) => {
    e.preventDefault();
    handleChangueSenseee(senseHorizontal);
  };

  const handleStartGame = (e) => {
    e.preventDefault();
    begindstartGame();
  };

  return (
    <Fragment>
      {!gameStartedPlay && (
        <Fragment>
          <h4 class="">Welcome {nombre_user}</h4>
          <h5 class="">select boat:</h5>{" "}
        </Fragment>
      )}
      <ul>
        {barcosDisponibles.map((item) => (
          <li>
            <button className="btn btn-info" value={item} onClick={handleClick}>
              {item}
            </button>
          </li>
        ))}
      </ul>
      {barcosDisponibles.length !== 0 && !gameStartedPlay && (
        <button className="btn btn-danger" onClick={handleSubmit}>
          Changue Direction
        </button>
      )}
      {barcosDisponibles.length === 0 && !gameStartedPlay && (
        <button className="btn btn-warning" onClick={handleStartGame}>
          Start Game
        </button>
      )}
    </Fragment>
  );
};

export default MostrarBarcos;
