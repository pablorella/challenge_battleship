import { ACTIVAR_GRILLA } from "../types";
import { GUARDAR_POSICION_ACTUAL } from "../types";
import { GUARDAR_CELDAS_PINTAR } from "../types";
import { CHANGUE_SENSE } from "../types";
import { BARCO_SELECCIONADO } from "../types";
import { DELETE_LISTED_BOAT } from "../types";
import { ASIGNAR_CARRIER } from "../types";
import { ASIGNAR_CRUISERS1 } from "../types";
import { ASIGNAR_CRUISERS2 } from "../types";
import { ASIGNAR_CRUISERS3 } from "../types";
import { ASIGNAR_SUBMARINE } from "../types";
import { START_GAME } from "../types";

//cada reducer tiene su propio state
const initialState = {
  //aca te tienes que poner a pensar que propiedades tiene que tener el state de productos es igual que cuando usamos useState
  activarGrilla: false,
  user: "",
  celdasOcupadas: [],
  posicionActual: [],
  celdaParaPintar: [],
  celdaParaPintarComputer: [[0, 0]],
  senseHorizontal: false,
  barcoClick: "",
  gameStarted: false,
  celdasOcupadasComputer: [[2, 3]],
  carrier: { posicion: "hola", impactos: "" },
  cruisers1: { posicion: [], impactos: "" },
  cruisers2: { posicion: [], impactos: "" },
  cruisers3: { posicion: [], impactos: "" },
  submarine: { posicion: [], impactos: "" },
  barcosDisponiblesParaEleccion: [
    "carrier",
    "cruisers1",
    "cruisers2",
    "cruisers3",
    "submarine",
  ],

  /* barcosDisponibles: [
    "barcode4",
    "barcode3_1",
    "barcode3_2",
    "barcode3_3",
    "barcode2",
  ],
  error: null,
  loading: false, */
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
    case GUARDAR_CELDAS_PINTAR:
      return {
        ...state,
        celdaParaPintar: action.payload.map((item) =>
          item.map((item2) => item2)
        ),
      };

    case CHANGUE_SENSE:
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
        carrier: action.payload.json,
        celdasOcupadas: state.celdasOcupadas.concat(
          action.payload.json.posicion
        ),
      };
    case ASIGNAR_CRUISERS1:
      return {
        ...state,
        cruisers1: action.payload.json,
        celdasOcupadas: state.celdasOcupadas.concat(
          action.payload.json.posicion
        ),
      };
    case ASIGNAR_CRUISERS2:
      return {
        ...state,
        cruisers2: action.payload.json,
        celdasOcupadas: state.celdasOcupadas.concat(
          action.payload.json.posicion
        ),
      };
    case ASIGNAR_CRUISERS3:
      return {
        ...state,
        cruisers3: action.payload.json,
        celdasOcupadas: state.celdasOcupadas.concat(
          action.payload.json.posicion
        ),
      };
    case ASIGNAR_SUBMARINE:
      return {
        ...state,
        submarine: action.payload.json,
        celdasOcupadas: state.celdasOcupadas.concat(
          action.payload.json.posicion
        ),
      };
    case START_GAME:
      return {
        ...state,
        gameStarted: true,
      };
    default:
      return state;
  }
}
