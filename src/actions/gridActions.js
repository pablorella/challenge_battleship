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

export function enableGrid(grid) {
  return (dispatch) => {
    dispatch(changueGrid(grid));
  };
}
const changueGrid = (grid) => ({
  type: ACTIVATE_GRID,
  payload: grid,
});

export function addCellsToPaint(grid) {
  return (dispatch) => {
    dispatch(addCellsToPainttt(grid));
  };
}
const addCellsToPainttt = (grid) => ({
  type: SAVE_CELL_PAINT,

  payload: grid,
});

export function handleChangueSense(grid) {
  return (dispatch) => {
    dispatch(changueSense(grid));
  };
}
const changueSense = (grid) => ({
  type: CHANGUE_DIRECTION,
  payload: !grid,
});

export function selectedBoat(grid) {
  return (dispatch) => {
    dispatch(changueSelectedBoat(grid));
  };
}
const changueSelectedBoat = (grid) => ({
  type: SELECTED_BOAT,
  payload: grid,
});

export function deleteListedBoat(grid) {
  return (dispatch) => {
    dispatch(deleteListedBoardd(grid));

    switch (grid.SelectShipClick) {
      case "carrier":
        dispatch(assignCarrierShip(grid));
        break;
      case "cruisers1":
        dispatch(assignCruisers1Ship(grid));
        break;
      case "cruisers2":
        dispatch(assignCruisers2Ship(grid));
        break;
      case "cruisers3":
        dispatch(assignCruisers3Ship(grid));
        break;
      case "submarine":
        dispatch(assignSubmarineShip(grid));
        break;

      default:
        break;
    }
  };
}
const deleteListedBoardd = (grid) => ({
  type: DELETE_LISTED_BOAT,
  payload: grid,
});

const assignCarrierShip = (grid) => ({
  type: ASSIGN_CARRIER,
  payload: grid,
});
const assignCruisers1Ship = (grid) => ({
  type: ASSIGN_CRUISERS1,
  payload: grid,
});

const assignCruisers2Ship = (grid) => ({
  type: ASSIGN_CRUISERS2,
  payload: grid,
});
const assignCruisers3Ship = (grid) => ({
  type: ASSIGN_CRUISERS3,
  payload: grid,
});
const assignSubmarineShip = (grid) => ({
  type: ASSIGN_SUBMARINE,
  payload: grid,
});
export function startGame(grid) {
  return (dispatch) => {
    dispatch(startGamee(grid));
  };
}
const startGamee = (grid) => ({
  type: START_GAME,
  payload: grid,
});

export function changueTurnToHuman(grid) {
  return (dispatch) => {
    dispatch(changue(grid));
  };
}
const changue = (grid) => ({
  type: CHANGUE_TURN_HUMAN,
  payload: grid,
});

export function addCellHumanSelection(grid) {
  return (dispatch) => {
    dispatch(addSelectionHuman(grid));
  };
}
const addSelectionHuman = (grid) => ({
  type: ADD_SELECTION_SHIT_HUMAN,

  payload: grid,
});

export function changuecelRandom(grid) {
  return (dispatch) => {
    dispatch(addRandom(grid));
  };
}
const addRandom = (grid) => ({
  type: ADD_CELL_RANDOM,

  payload: grid,
});

export function impactsShitss(grid) {
  return (dispatch) => {
    switch (grid.name) {
      case "carrier_cpu":
        dispatch(impactCarrier_cpu(grid));
        break;
      case "cruisers1_cpu":
        dispatch(impactCruisers1_cpu(grid));
        break;
      case "cruisers2_cpu":
        dispatch(impactCruisers2_cpu(grid));
        break;
      case "cruisers3_cpu":
        dispatch(impactCruisers3_cpu(grid));
        break;
      case "submarine_cpu":
        dispatch(impactSubmarine_cpu(grid));
        break;
      case "carrier":
        dispatch(impactCarrier(grid));
        break;
      case "cruisers1":
        dispatch(impactCruisers1(grid));
        break;
      case "cruisers2":
        dispatch(impactCruisers2(grid));
        break;
      case "cruisers3":
        dispatch(impactCruisers3(grid));
        break;
      case "submarine":
        dispatch(impactSubmarine(grid));
        break;
      default:
        break;
    }
  };
}
const impactCarrier = (grid) => ({
  type: IMPACT_CARRIER,
  payload: grid,
});
const impactCruisers1 = (grid) => ({
  type: IMPACT_CRUISERS1,
  payload: grid,
});

const impactCruisers2 = (grid) => ({
  type: IMPACT_CRUISERS2,
  payload: grid,
});
const impactCruisers3 = (grid) => ({
  type: IMPACT_CRUISERS3,
  payload: grid,
});
const impactSubmarine = (grid) => ({
  type: IMPACT_SUBMARINE,
  payload: grid,
});
const impactCarrier_cpu = (grid) => ({
  type: IMPACT_CARRIER_CPU,
  payload: grid,
});
const impactCruisers1_cpu = (grid) => ({
  type: IMPACT_CRUISERS1_CPU,
  payload: grid,
});

const impactCruisers2_cpu = (grid) => ({
  type: IMPACT_CRUISERS2_CPU,
  payload: grid,
});
const impactCruisers3_cpu = (grid) => ({
  type: IMPACT_CRUISERS3_CPU,
  payload: grid,
});
const impactSubmarine_cpu = (grid) => ({
  type: IMPACT_SUBMARINE_CPU,
  payload: grid,
});
export function changueLastImpact(grid) {
  return (dispatch) => {
    dispatch(changueLast(grid));
  };
}
const changueLast = (grid) => ({
  type: LAST_IMPACT,

  payload: grid,
});
