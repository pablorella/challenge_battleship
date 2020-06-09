import React, { Fragment, useState } from "react";
import Grilla from "./ui/Grilla";
import MostrarBarcos from "./MostrarBarcos";
//import { useDispatch, useSelector } from "react-redux";
import { useDispatch, useSelector } from "react-redux";

// Actions de Redux
import { habilarGrillaAction } from "../actions/grillaActions";
import { handleChangueSense } from "../actions/grillaActions";
//

//-----------------
const Dashboard = () => {
  const [nombre, guardarNombre] = useState("");

  // utilizar use dispatch y te crea una función
  const dispatch = useDispatch();
  const gameStartedPlay = useSelector((state) => state.grilla.gameStarted);
  const handleChangueSenseee = (grilla) => dispatch(handleChangueSense(grilla));

  const handleSubmit = (e) => {
    e.preventDefault();

    // crear el nuevo producto
    /*  agregarProducto({
    nombre,
    precio,
  }); */

    handleChangueSenseee(senseHorizontal);
  };

  const habilitarGrilla = (grilla) => dispatch(habilarGrillaAction(grilla));

  const submitNuevoProducto = (e) => {
    e.preventDefault();

    // crear el nuevo producto
    /*  agregarProducto({
    nombre,
    precio,
  }); */

    habilitarGrilla({ nombre });
  };
  //acceso al state de la grilla
  const grillaActivada = useSelector((state) => state.grilla.activarGrilla);
  const senseHorizontal = useSelector((state) => state.grilla.senseHorizontal);
  /* const error = useSelector((state) => state.productos.error);
  const alerta = useSelector((state) => state.alerta.alerta); */
  //console.log("Desde el componenete" + grillaActivada);

  return (
    <Fragment>
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
            <form
              onSubmit={submitNuevoProducto}
              class="" //onSubmit={this.handleSubmit}
            >
              <label className="">Enter player name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Player name"
                name=""
                required
                value={nombre}
                onChange={(e) => guardarNombre(e.target.value)}
                //value="{this.state.valordelname}"
                //onChange={handleChange}
              />
              <button className="mt-5 btn btn-info" type="submit">
                Start Game
              </button>
            </form>
          )}
        </div>
      </div>
      {gameStartedPlay && (
        <h1 className="rojo">click on cpu to find the boat</h1>
      )}
    </Fragment>
  );
};

export default Dashboard;
