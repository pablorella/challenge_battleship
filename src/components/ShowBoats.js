import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
// Actions de Redux
import { selectedBoat } from "../actions/gridActions";
import { handleChangueSense } from "../actions/gridActions";
import { startGame } from "../actions/gridActions";

const ShowBoats = () => {
  const senseHorizontal = useSelector((state) => state.grid.senseHorizontal);
  const boatsAvailables = useSelector(
    (state) => state.grid.boatsAvailableForChoice
  );
  const name_user = useSelector((state) => state.grid.user);
  //console.log("desde ShowBoats component" + name_user);
  const gameStartedPlay = useSelector((state) => state.grid.gameStarted);
  // utilizar use dispatch y te crea una función
  const dispatch = useDispatch();

  const selectedBoatt = (grid) => dispatch(selectedBoat(grid));

  function handleClick(e) {
    e.preventDefault();
    //console.log(e.target.value);
    selectedBoatt({ elegi: e.target.value });
  }

  const handleChangueSenseee = (grid) => dispatch(handleChangueSense(grid));
  const begindstartGame = (grid) => dispatch(startGame(grid));

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
          <h4 className="">Welcome {name_user}</h4>
          <h5 className="">Select Your Army:</h5>{" "}
        </Fragment>
      )}
      <ul>
        {boatsAvailables.map((item) => (
          <li>
            <button className="btn btn-info" value={item} onClick={handleClick}>
              {item}
            </button>
          </li>
        ))}
      </ul>
      {boatsAvailables.length !== 0 && !gameStartedPlay && (
        <button className="btn btn-danger" onClick={handleSubmit}>
          Changue Direction
        </button>
      )}
      {boatsAvailables.length === 0 && !gameStartedPlay && (
        <button className="btn btn-warning" onClick={handleStartGame}>
          Start Game
        </button>
      )}
    </Fragment>
  );
};

export default ShowBoats;
