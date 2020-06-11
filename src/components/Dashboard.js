import React, { Fragment, useState } from "react";
import Grilla from "./ui/Grilla";
import MostrarBarcos from "./MostrarBarcos";
import { useDispatch, useSelector } from "react-redux";
import { habilarGrillaAction } from "../actions/grillaActions";

const Dashboard = () => {
  const [nombre, guardarNombre] = useState("");
  const dispatch = useDispatch();
  const gameStartedPlay = useSelector((state) => state.grilla.gameStarted);
  const carrier_cpuu = useSelector((state) => state.grilla.carrier_cpu);
  const cruisers1_cpuu = useSelector((state) => state.grilla.cruisers1_cpu);
  const cruisers2_cpuu = useSelector((state) => state.grilla.cruisers2_cpu);
  const cruisers3_cpuu = useSelector((state) => state.grilla.cruisers3_cpu);
  const submarine_cpuu = useSelector((state) => state.grilla.submarine_cpu);
  const carrier_human = useSelector((state) => state.grilla.carrier);
  const cruisers1_human = useSelector((state) => state.grilla.cruisers1);
  const cruisers2_human = useSelector((state) => state.grilla.cruisers2);
  const cruisers3_human = useSelector((state) => state.grilla.cruisers3);
  const submarine_human = useSelector((state) => state.grilla.submarine);
  const grillaActivada = useSelector((state) => state.grilla.activarGrilla);
  const habilitarGrilla = (grilla) => dispatch(habilarGrillaAction(grilla));

  const submitNuevoProducto = (e) => {
    e.preventDefault();

    habilitarGrilla({ nombre });
  };

  return (
    <Fragment>
      {carrier_human.impactos === 4 &&
      cruisers1_human.impactos === 3 &&
      cruisers2_human.impactos === 3 &&
      cruisers3_human.impactos === 3 &&
      submarine_human.impactos === 2 ? (
        <h1 class="">YOU LOSE </h1>
      ) : carrier_cpuu.impactos === 4 &&
        cruisers1_cpuu.impactos === 3 &&
        cruisers2_cpuu.impactos === 3 &&
        cruisers3_cpuu.impactos === 3 &&
        submarine_cpuu.impactos === 2 ? (
        <h1 class="">_Win animalllllllll</h1>
      ) : (
        <div className="row">
          <div className="col-md-6 justify-content-center">
            <h1 class="">Human</h1>
            <Grilla owner={"human"} />
          </div>
          <div className="col-md-6 justify-content-center">
            {gameStartedPlay && (
              <Fragment>
                <h1 class="">Cpu</h1> <Grilla owner={"cpu"} />
              </Fragment>
            )}
            {grillaActivada ? (
              <MostrarBarcos />
            ) : (
              <form onSubmit={submitNuevoProducto} class="">
                <label className="">Enter player name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Player name"
                  name=""
                  required
                  value={nombre}
                  onChange={(e) => guardarNombre(e.target.value)}
                />
                <button className="mt-5 btn btn-info" type="submit">
                  Start Game
                </button>
              </form>
            )}
          </div>
          {gameStartedPlay && (
            <h1 className="rojo">click on cpu to find the boat</h1>
          )}
        </div>
      )}
    </Fragment>
  );
};

export default Dashboard;
