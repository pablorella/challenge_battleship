import { BARCO_SELECCIONADO } from "../types";
import { DELETE_LISTED_BOAT } from "../types";
import { ASIGNAR_CARRIER } from "../types";

//usar barcos que tenemos
/* export function eleccionBarcoDeLosDisponibles() {
  return () => {
    console.log("desde action");
  };
} */

export function seleccionBarco(barco) {
  /*  return () => {
    console.log("desde el action de barco");
    // agregarGrilla();
    // dispatch( agregarProducto() );
  }; */
  console.log("desde el action" + barco);
  return (dispatch) => {
    dispatch(seleccionarBarco(barco));
  };
}
const seleccionarBarco = (barco) => ({
  type: BARCO_SELECCIONADO,
  payload: barco,
});

export function deleteListedBoat(barco) {
  /*   return () => {
      console.log("desde el action");
      // agregarbarco();
      // dispatch( agregarProducto() );
    }; */
  //console.log("desde el action CLICK ELMINAR" + barco);
  return (dispatch) => {
    dispatch(deleteListedBoardd(barco));
    switch (barco) {
      case "carrier":
        console.log("El que me interesa:" + barco);

        dispatch(asignarBarcoCarrier(barco));
        break;

      default:
        break;
    }
  };
}
const deleteListedBoardd = (barco) => ({
  type: DELETE_LISTED_BOAT,
  payload: barco,
});

const asignarBarcoCarrier = (barco) => ({
  type: ASIGNAR_CARRIER,
  payload: barco,
});
