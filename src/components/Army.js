import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
// Actions  Redux
import { selectedBoat } from "../actions/gridActions";
import { handleChangueSense } from "../actions/gridActions";
import { startGame } from "../actions/gridActions";

const ShowBoats = () => {
  const senseHorizontal = useSelector((state) => state.grid.senseHorizontal);
  const boatsAvailables = useSelector(
    (state) => state.grid.boatsAvailableForChoice
  );
  const name_user = useSelector((state) => state.grid.user);
  const gameStartedPlay = useSelector((state) => state.grid.gameStarted);
  const dispatch = useDispatch();

  const selectedBoatt = (grid) => dispatch(selectedBoat(grid));
  function randomInt(min, max) {
    return min + Math.floor((max - min) * Math.random());
  }
  function handleClick(e) {
    e.preventDefault();
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
    let arrayCarrier = [
      [
        [0, 1],
        [0, 2],
        [0, 3],
        [0, 4],
      ],
      [
        [0, 9],
        [0, 8],
        [0, 7],
        [0, 6],
      ],

      [
        [0, 9],
        [0, 8],
        [0, 7],
        [0, 6],
      ],
    ];
    let arrayCruiser1 = [
      [
        [1, 1],
        [1, 2],
        [1, 3],
      ],
      [
        [1, 3],
        [1, 4],
        [1, 5],
      ],

      [
        [1, 6],
        [1, 7],
        [1, 8],
      ],
    ];
    let arrayCruiser2 = [
      [
        [5, 6],
        [5, 7],
        [5, 8],
      ],
      [
        [5, 1],
        [5, 2],
        [5, 3],
      ],

      [
        [5, 4],
        [5, 5],
        [5, 6],
      ],
    ];
    let arrayCruiser3 = [
      [
        [7, 6],
        [7, 7],
        [7, 8],
      ],
      [
        [7, 5],
        [7, 4],
        [7, 3],
      ],

      [
        [7, 1],
        [7, 2],
        [7, 3],
      ],
    ];
    let arraysubmarine = [
      [
        [9, 8],
        [9, 9],
      ],
      [
        [9, 6],
        [9, 5],
      ],

      [
        [9, 1],
        [9, 2],
      ],
    ];
    begindstartGame({
      positionCarrier_cpu: arrayCarrier[randomInt(0, 2)],
      positionCruisers1_cpu: arrayCruiser1[randomInt(0, 2)],
      positionCruisers2_cpu: arrayCruiser2[randomInt(0, 2)],
      positionCruisers3_cpu: arrayCruiser3[randomInt(0, 2)],
      submarine_cpu: arraysubmarine[randomInt(0, 2)],
    });
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
