import { ACTIVAR_GRILLA } from "../types";
import { GUARDAR_POSICION_ACTUAL } from "../types";
import { SAVE_CELL_PAINT } from "../types";
import { CHANGUE_DIRECTION } from "../types";
import { BARCO_SELECCIONADO } from "../types";
import { DELETE_LISTED_BOAT } from "../types";
import { ASIGNAR_CARRIER } from "../types";
import { ASIGNAR_CRUISERS1 } from "../types";
import { ASIGNAR_CRUISERS2 } from "../types";
import { ASIGNAR_CRUISERS3 } from "../types";
import { ASIGNAR_SUBMARINE } from "../types";
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
import { ADD_SELECTION_CPU } from "../types";
import { ADD_CELL_RANDOM } from "../types";

const initialState = {
  activarGrilla: false,
  user: "",
  celdasOcupadas: [],
  posicionActual: [],
  celdaParaPintar: [],
  celdaParaPintarComputer: [],
  senseHorizontal: false,
  barcoClick: "",
  gameStarted: false,
  turnHuman: true,
  celdasRandom: [],
  carrier: { posicion: [], impactos: 0, hundido: false },
  cruisers1: { posicion: [], impactos: 0, hundido: false },
  cruisers2: { posicion: [], impactos: 0, hundido: false },
  cruisers3: { posicion: [], impactos: 0, hundido: false },
  submarine: { posicion: [], impactos: 0, hundido: false },
  celdasImpactadasToCpu: [],
  cellsDisponiblesParaRandom: [
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
  celdasImpactadasToHuman: [],
  lastImpact: true,
  celdaParaPintarHuman: [],

  carrier_cpu: {
    posicion: [
      [0, 1],
      [0, 2],
      [0, 3],
      [0, 4],
    ],
    impactos: 0,
    hundido: false,
  },
  cruisers1_cpu: {
    posicion: [
      [1, 1],
      [1, 2],
      [1, 3],
    ],
    impactos: 0,
    hundido: false,
  },
  cruisers2_cpu: {
    posicion: [
      [5, 6],
      [5, 7],
      [5, 8],
    ],
    impactos: 0,
    hundido: false,
  },
  cruisers3_cpu: {
    posicion: [
      [7, 6],
      [7, 7],
      [7, 8],
    ],
    impactos: 0,
    hundido: false,
  },
  submarine_cpu: {
    posicion: [
      [9, 8],
      [9, 9],
    ],
    impactos: 0,
    hundido: false,
  },
  barcosDisponiblesParaEleccion: [
    "carrier",
    "cruisers1",
    "cruisers2",
    "cruisers3",
    "submarine",
  ],
};
export default function (state = initialState, action) {
  switch (action.type) {
    case ACTIVAR_GRILLA:
      return {
        ...state,
        user: action.payload.nombre,
        activarGrilla: true,
      };
    case GUARDAR_POSICION_ACTUAL:
      return {
        ...state,
        posicionActual: action.payload.posicion,
      };
    case SAVE_CELL_PAINT:
      return {
        ...state,
        celdaParaPintar: action.payload.map((item) =>
          item.map((item2) => item2)
        ),
      };

    case CHANGUE_DIRECTION:
      return {
        ...state,
        senseHorizontal: action.payload,
      };
    case BARCO_SELECCIONADO:
      return {
        ...state,
        barcoClick: action.payload.elegi,
      };
    case DELETE_LISTED_BOAT:
      return {
        ...state,

        barcosDisponiblesParaEleccion: state.barcosDisponiblesParaEleccion.filter(
          (barco) => barco !== state.barcoClick
        ),
        barcoClick: null,
      };
    case ASIGNAR_CARRIER:
      return {
        ...state,
        carrier: { ...state.carrier, posicion: action.payload.celdaParaPintar },
        cellsDisponiblesParaRandom: state.cellsDisponiblesParaRandom.concat(
          action.payload.celdaParaPintar
        ),
        celdasOcupadas: state.celdasOcupadas.concat(
          action.payload.celdaParaPintar
        ),
      };
    case ASIGNAR_CRUISERS1:
      return {
        ...state,
        cruisers1: {
          ...state.cruisers1,
          posicion: action.payload.celdaParaPintar,
        },
        cellsDisponiblesParaRandom: state.cellsDisponiblesParaRandom.concat(
          action.payload.celdaParaPintar
        ),
        celdasOcupadas: state.celdasOcupadas.concat(
          action.payload.celdaParaPintar
        ),
      };
    case ASIGNAR_CRUISERS2:
      return {
        ...state,
        cruisers2: {
          ...state.cruisers2,
          posicion: action.payload.celdaParaPintar,
        },
        cellsDisponiblesParaRandom: state.cellsDisponiblesParaRandom.concat(
          action.payload.celdaParaPintar
        ),
        celdasOcupadas: state.celdasOcupadas.concat(
          action.payload.celdaParaPintar
        ),
      };
    case ASIGNAR_CRUISERS3:
      return {
        ...state,
        cruisers3: {
          ...state.cruisers3,
          posicion: action.payload.celdaParaPintar,
        },
        cellsDisponiblesParaRandom: state.cellsDisponiblesParaRandom.concat(
          action.payload.celdaParaPintar
        ),
        celdasOcupadas: state.celdasOcupadas.concat(
          action.payload.celdaParaPintar
        ),
      };
    case ASIGNAR_SUBMARINE:
      return {
        ...state,
        cellsDisponiblesParaRandom: state.cellsDisponiblesParaRandom.concat(
          action.payload.celdaParaPintar
        ),
        submarine: {
          ...state.submarine,
          posicion: action.payload.celdaParaPintar,
        },

        celdasOcupadas: state.celdasOcupadas.concat(
          action.payload.celdaParaPintar
        ),
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
        celdaParaPintarComputer: state.celdaParaPintarComputer.concat(
          action.payload
        ),
      };

    case ADD_CELL_RANDOM:
      return {
        ...state,
        celdasRandom: state.celdasRandom.concat(action.payload),
        cellsDisponiblesParaRandom: state.cellsDisponiblesParaRandom.filter(
          (item) => item.join() !== "" + action.payload[0] + "",
          +action.payload[1] + ""
        ),
      };

    case ADD_SELECTION_CPU:
      return {
        ...state,
        celdaParaPintarHuman: state.celdaParaPintarHuman.concat(action.payload),
      };
    case IMPACT_CARRIER_CPU:
      return {
        ...state,

        carrier_cpu: {
          ...state.carrier_cpu,
          impactos: state.carrier_cpu.impactos + 1,
          hundido: action.payload.hundido,
        },
        celdasImpactadasToCpu: state.celdasImpactadasToCpu.concat(
          action.payload.celdas
        ),
      };

    case IMPACT_CRUISERS1_CPU:
      return {
        ...state,

        cruisers1_cpu: {
          ...state.cruisers1_cpu,
          impactos: state.cruisers1_cpu.impactos + 1,
          hundido: action.payload.hundido,
        },
        celdasImpactadasToCpu: state.celdasImpactadasToCpu.concat(
          action.payload.celdas
        ),
      };
    case IMPACT_CRUISERS2_CPU:
      return {
        ...state,

        cruisers2_cpu: {
          ...state.cruisers2_cpu,
          impactos: state.cruisers2_cpu.impactos + 1,
          hundido: action.payload.hundido,
        },
        celdasImpactadasToCpu: state.celdasImpactadasToCpu.concat(
          action.payload.celdas
        ),
      };
    case IMPACT_CRUISERS3_CPU:
      return {
        ...state,

        cruisers3_cpu: {
          ...state.cruisers3_cpu,
          impactos: state.cruisers3_cpu.impactos + 1,
          hundido: action.payload.hundido,
        },
        celdasImpactadasToCpu: state.celdasImpactadasToCpu.concat(
          action.payload.celdas
        ),
      };
    case IMPACT_SUBMARINE_CPU:
      return {
        ...state,

        submarine_cpu: {
          ...state.submarine_cpu,
          impactos: state.submarine_cpu.impactos + 1,
          hundido: action.payload.hundido,
        },
        celdasImpactadasToCpu: state.celdasImpactadasToCpu.concat(
          action.payload.celdas
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
          impactos: state.carrier.impactos + 1,
          hundido: action.payload.hundido,
        },
        celdasImpactadasToHuman: state.celdasImpactadasToHuman.concat(
          action.payload.celdas
        ),
      };

    case IMPACT_CRUISERS1:
      return {
        ...state,

        cruisers1: {
          ...state.cruisers1,
          impactos: state.cruisers1.impactos + 1,
          hundido: action.payload.hundido,
        },
        celdasImpactadasToHuman: state.celdasImpactadasToHuman.concat(
          action.payload.celdas
        ),
      };
    case IMPACT_CRUISERS2:
      return {
        ...state,

        cruisers2: {
          ...state.cruisers2,
          impactos: state.cruisers2.impactos + 1,
          hundido: action.payload.hundido,
        },
        celdasImpactadasToHuman: state.celdasImpactadasToHuman.concat(
          action.payload.celdas
        ),
      };
    case IMPACT_CRUISERS3:
      return {
        ...state,

        cruisers3: {
          ...state.cruisers3,
          impactos: state.cruisers3.impactos + 1,
          hundido: action.payload.hundido,
        },
        celdasImpactadasToHuman: state.celdasImpactadasToHuman.concat(
          action.payload.celdas
        ),
      };
    case IMPACT_SUBMARINE:
      return {
        ...state,

        submarine: {
          ...state.submarine,
          impactos: state.submarine.impactos + 1,
          hundido: action.payload.hundido,
        },
        celdasImpactadasToHuman: state.celdasImpactadasToHuman.concat(
          action.payload.celdas
        ),
      };

    default:
      return state;
  }
}
