import { BARCO_SELECCIONADO } from "../types";
import { DELETE_LISTED_BOAT } from "../types";
import { ASIGNAR_CARRIER } from "../types";

//cada reducer tiene su propio state
const initialState = {
  //aca te tienes que poner a pensar que propiedades tiene que tener el state de productos es igual que cuando usamos useState
  barcoClick: "",
  barcosDisponiblesParaEleccion: [
    "carrier",
    "cruisers1",
    "cruisers2",
    "cruisers3",
    "submarine",
  ],
  carrier: { posicion: "", impactos: "" },
  cruisers1: { posicion: [], impactos: "" },
  cruisers2: { posicion: [], impactos: "" },
  cruisers3: { posicion: [], impactos: "" },
  submarine: { posicion: [], impactos: "" },
  /* user: "",
  celdaOcupada: [],
  elegirBarcos: ["carrier", "cruisers1", "cruisers2", "cruisers3", "submarine"], */
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
        carrier: action.payload.celdaParaPintar,
      };

    default:
      return state;
  }
}
