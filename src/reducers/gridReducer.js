import { ACTIVATE_GRID } from "../types";
import { SAVE_CELL_PAINT } from "../types";
import { CHANGUE_DIRECTION } from "../types";
import { SELECTED_BOAT } from "../types";
import { DELETE_LISTED_BOAT } from "../types";
import { ASSIGN_CARRIER } from "../types";
import { ASSIGN_CRUISERS1 } from "../types";
import { ASSIGN_CRUISERS2 } from "../types";
import { ASSIGN_CRUISERS3 } from "../types";
import { ASSIGN_SUBMARINE } from "../types";
import { START_GAME } from "../types";
import { CHANGUE_TURN_HUMAN } from "../types";
import { ADD_SELECTION_SHIT_HUMAN } from "../types";
import { IMPACT_CARRIER } from "../types";
import { IMPACT_CRUISERS1 } from "../types";
import { IMPACT_CRUISERS2 } from "../types";
import { IMPACT_CRUISERS3 } from "../types";
import { IMPACT_SUBMARINE } from "../types";
import { IMPACT_CARRIER_CPU } from "../types";
import { IMPACT_CRUISERS1_CPU } from "../types";
import { IMPACT_CRUISERS2_CPU } from "../types";
import { IMPACT_CRUISERS3_CPU } from "../types";
import { IMPACT_SUBMARINE_CPU } from "../types";
import { LAST_IMPACT } from "../types";
import { ADD_CELL_RANDOM } from "../types";

const initialState = {
  activateGrid: false,
  user: "",
  occupiedCells: [],
  cellToPaint: [],
  cellToPaintComputer: [],
  senseHorizontal: false,
  shipClick: "",
  gameStarted: false,
  turnHuman: true,
  cellRandom: [],
  carrier: { position: [], impacts: 0, sunken: false },
  cruisers1: { position: [], impacts: 0, sunken: false },
  cruisers2: { position: [], impacts: 0, sunken: false },
  cruisers3: { position: [], impacts: 0, sunken: false },
  submarine: { position: [], impacts: 0, sunken: false },
  cellsImpactedByCpu: [],
  cellsAvailableForRandom: [
    [0, 0],
    [0, 1],
    [5, 2],
    [6, 3],
    [7, 4],
    [7, 5],
    [8, 6],
    [9, 0],
    [2, 1],
    [3, 2],
    [4, 3],
    [5, 4],
    [6, 5],
    [9, 9],
  ],
  humanImpactedCells: [],
  lastImpact: true,

  carrier_cpu: {
    position: [
      [0, 1],
      [0, 2],
      [0, 3],
      [0, 4],
    ],
    impacts: 0,
    sunken: false,
  },
  cruisers1_cpu: {
    position: [
      [1, 1],
      [1, 2],
      [1, 3],
    ],
    impacts: 0,
    sunken: false,
  },
  cruisers2_cpu: {
    position: [
      [5, 6],
      [5, 7],
      [5, 8],
    ],
    impacts: 0,
    sunken: false,
  },
  cruisers3_cpu: {
    position: [
      [7, 6],
      [7, 7],
      [7, 8],
    ],
    impacts: 0,
    sunken: false,
  },
  submarine_cpu: {
    position: [
      [9, 8],
      [9, 9],
    ],
    impacts: 0,
    sunken: false,
  },
  boatsAvailableForChoice: [
    "carrier",
    "cruisers1",
    "cruisers2",
    "cruisers3",
    "submarine",
  ],
};
export default function (state = initialState, action) {
  switch (action.type) {
    case ACTIVATE_GRID:
      return {
        ...state,
        user: action.payload.name,
        activateGrid: true,
      };

    case SAVE_CELL_PAINT:
      return {
        ...state,
        cellToPaint: action.payload.map((item) => item.map((item2) => item2)),
      };

    case CHANGUE_DIRECTION:
      return {
        ...state,
        senseHorizontal: action.payload,
      };
    case SELECTED_BOAT:
      return {
        ...state,
        shipClick: action.payload.elegi,
      };
    case DELETE_LISTED_BOAT:
      return {
        ...state,

        boatsAvailableForChoice: state.boatsAvailableForChoice.filter(
          (barco) => barco !== state.shipClick
        ),
        shipClick: null,
      };
    case ASSIGN_CARRIER:
      return {
        ...state,
        carrier: {
          ...state.carrier,
          position: action.payload.cellToPaintt,
        },
        cellsAvailableForRandom: state.cellsAvailableForRandom.concat(
          action.payload.cellToPaintt
        ),
        occupiedCells: state.occupiedCells.concat(action.payload.cellToPaintt),
      };
    case ASSIGN_CRUISERS1:
      return {
        ...state,
        cruisers1: {
          ...state.cruisers1,
          position: action.payload.cellToPaintt,
        },
        cellsAvailableForRandom: state.cellsAvailableForRandom.concat(
          action.payload.cellToPaintt
        ),
        occupiedCells: state.occupiedCells.concat(action.payload.cellToPaintt),
      };
    case ASSIGN_CRUISERS2:
      return {
        ...state,
        cruisers2: {
          ...state.cruisers2,
          position: action.payload.cellToPaintt,
        },
        cellsAvailableForRandom: state.cellsAvailableForRandom.concat(
          action.payload.cellToPaintt
        ),
        occupiedCells: state.occupiedCells.concat(action.payload.cellToPaintt),
      };
    case ASSIGN_CRUISERS3:
      return {
        ...state,
        cruisers3: {
          ...state.cruisers3,
          position: action.payload.cellToPaintt,
        },
        cellsAvailableForRandom: state.cellsAvailableForRandom.concat(
          action.payload.cellToPaintt
        ),
        occupiedCells: state.occupiedCells.concat(action.payload.cellToPaintt),
      };
    case ASSIGN_SUBMARINE:
      return {
        ...state,
        cellsAvailableForRandom: state.cellsAvailableForRandom.concat(
          action.payload.cellToPaintt
        ),
        submarine: {
          ...state.submarine,
          position: action.payload.cellToPaintt,
        },

        occupiedCells: state.occupiedCells.concat(action.payload.cellToPaintt),
      };
    case START_GAME:
      return {
        ...state,
        gameStarted: true,
      };
    case CHANGUE_TURN_HUMAN:
      return {
        ...state,
        turnHuman: !state.turnHuman,
      };

    case ADD_SELECTION_SHIT_HUMAN:
      return {
        ...state,
        cellToPaintComputer: state.cellToPaintComputer.concat(action.payload),
      };

    case ADD_CELL_RANDOM:
      return {
        ...state,
        cellRandom: state.cellRandom.concat(action.payload),
        cellsAvailableForRandom: state.cellsAvailableForRandom.filter(
          (item) => item.join() !== "" + action.payload[0] + "",
          +action.payload[1] + ""
        ),
      };

    case IMPACT_CARRIER_CPU:
      return {
        ...state,

        carrier_cpu: {
          ...state.carrier_cpu,
          impacts: state.carrier_cpu.impacts + 1,
          sunken: action.payload.sunken,
        },
        cellsImpactedByCpu: state.cellsImpactedByCpu.concat(
          action.payload.cells
        ),
      };

    case IMPACT_CRUISERS1_CPU:
      return {
        ...state,

        cruisers1_cpu: {
          ...state.cruisers1_cpu,
          impacts: state.cruisers1_cpu.impacts + 1,
          sunken: action.payload.sunken,
        },
        cellsImpactedByCpu: state.cellsImpactedByCpu.concat(
          action.payload.cells
        ),
      };
    case IMPACT_CRUISERS2_CPU:
      return {
        ...state,

        cruisers2_cpu: {
          ...state.cruisers2_cpu,
          impacts: state.cruisers2_cpu.impacts + 1,
          sunken: action.payload.sunken,
        },
        cellsImpactedByCpu: state.cellsImpactedByCpu.concat(
          action.payload.cells
        ),
      };
    case IMPACT_CRUISERS3_CPU:
      return {
        ...state,

        cruisers3_cpu: {
          ...state.cruisers3_cpu,
          impacts: state.cruisers3_cpu.impacts + 1,
          sunken: action.payload.sunken,
        },
        cellsImpactedByCpu: state.cellsImpactedByCpu.concat(
          action.payload.cells
        ),
      };
    case IMPACT_SUBMARINE_CPU:
      return {
        ...state,

        submarine_cpu: {
          ...state.submarine_cpu,
          impacts: state.submarine_cpu.impacts + 1,
          sunken: action.payload.sunken,
        },
        cellsImpactedByCpu: state.cellsImpactedByCpu.concat(
          action.payload.cells
        ),
      };

    case LAST_IMPACT:
      return {
        ...state,

        lastImpact: !state.lastImpact,
      };

    case IMPACT_CARRIER:
      return {
        ...state,

        carrier: {
          ...state.carrier,
          impacts: state.carrier.impacts + 1,
          sunken: action.payload.sunken,
        },
        humanImpactedCells: state.humanImpactedCells.concat(
          action.payload.cells
        ),
      };

    case IMPACT_CRUISERS1:
      return {
        ...state,

        cruisers1: {
          ...state.cruisers1,
          impacts: state.cruisers1.impacts + 1,
          sunken: action.payload.sunken,
        },
        humanImpactedCells: state.humanImpactedCells.concat(
          action.payload.cells
        ),
      };
    case IMPACT_CRUISERS2:
      return {
        ...state,

        cruisers2: {
          ...state.cruisers2,
          impacts: state.cruisers2.impacts + 1,
          sunken: action.payload.sunken,
        },
        humanImpactedCells: state.humanImpactedCells.concat(
          action.payload.cells
        ),
      };
    case IMPACT_CRUISERS3:
      return {
        ...state,

        cruisers3: {
          ...state.cruisers3,
          impacts: state.cruisers3.impacts + 1,
          sunken: action.payload.sunken,
        },
        humanImpactedCells: state.humanImpactedCells.concat(
          action.payload.cells
        ),
      };
    case IMPACT_SUBMARINE:
      return {
        ...state,

        submarine: {
          ...state.submarine,
          impacts: state.submarine.impacts + 1,
          sunken: action.payload.sunken,
        },
        humanImpactedCells: state.humanImpactedCells.concat(
          action.payload.cells
        ),
      };

    default:
      return state;
  }
}
