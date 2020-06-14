import React, { Fragment, useState } from "react";
import Grid from "./ui/Grid";
import Army from "./Army";
import { useDispatch, useSelector } from "react-redux";
import { enableGrid } from "../actions/gridActions";

const Dashboard = () => {
  const [name, saveName] = useState("");
  const dispatch = useDispatch();
  const gameStartedPlay = useSelector((state) => state.grid.gameStarted);
  const carrier_cpuu = useSelector((state) => state.grid.carrier_cpu);
  const cruisers1_cpuu = useSelector((state) => state.grid.cruisers1_cpu);
  const cruisers2_cpuu = useSelector((state) => state.grid.cruisers2_cpu);
  const cruisers3_cpuu = useSelector((state) => state.grid.cruisers3_cpu);
  const submarine_cpuu = useSelector((state) => state.grid.submarine_cpu);
  const carrier_human = useSelector((state) => state.grid.carrier);
  const cruisers1_human = useSelector((state) => state.grid.cruisers1);
  const cruisers2_human = useSelector((state) => state.grid.cruisers2);
  const cruisers3_human = useSelector((state) => state.grid.cruisers3);
  const submarine_human = useSelector((state) => state.grid.submarine);
  const activateGridd = useSelector((state) => state.grid.activateGrid);
  const changueEnableGrid = (grid) => dispatch(enableGrid(grid));

  const submitNuevoProducto = (e) => {
    e.preventDefault();
    changueEnableGrid({ name });
  };

  return (
    <Fragment>
      {carrier_human.impacts === 4 &&
      cruisers1_human.impacts === 3 &&
      cruisers2_human.impacts === 3 &&
      cruisers3_human.impacts === 3 &&
      submarine_human.impacts === 2 ? (
        <h1 className="">YOU LOSE </h1>
      ) : carrier_cpuu.impacts === 4 &&
        cruisers1_cpuu.impacts === 3 &&
        cruisers2_cpuu.impacts === 3 &&
        cruisers3_cpuu.impacts === 3 &&
        submarine_cpuu.impacts === 2 ? (
        <h1 className="">Win animalllllllll</h1>
      ) : (
        <div className="row">
          <div className="col-md-6 justify-content-center">
            <h1 className="">Human</h1>
            <Grid owner={"human"} />
          </div>
          <div className="col-md-6 justify-content-center">
            {gameStartedPlay && (
              <Fragment>
                <h1 className="">Cpu</h1> <Grid owner={"cpu"} />
              </Fragment>
            )}
            {activateGridd ? (
              <Army />
            ) : (
              <form onSubmit={submitNuevoProducto} className="">
                <label className="">Enter player name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Player name"
                  name=""
                  required
                  value={name}
                  onChange={(e) => saveName(e.target.value)}
                />
                <button className="mt-5 btn btn-info" type="submit">
                  Start Game
                </button>
              </form>
            )}
          </div>
          {gameStartedPlay && (
            <h1 className="redLabel">click on cpu to find the boat</h1>
          )}
        </div>
      )}
    </Fragment>
  );
};

export default Dashboard;
