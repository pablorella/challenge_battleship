import { ACTIVAR_GRILLA } from "../types";
import { GUARDAR_CELDAS_PINTAR } from "../types";
import { GUARDAR_POSICION_ACTUAL } from "../types";
import { CHANGUE_SENSE } from "../types";
import { BARCO_SELECCIONADO } from "../types";
import { DELETE_LISTED_BOAT } from "../types";
import { ASIGNAR_CARRIER } from "../types";
import { ASIGNAR_CRUISERS1 } from "../types";
import { ASIGNAR_CRUISERS2 } from "../types";
import { ASIGNAR_CRUISERS3 } from "../types";
import { ASIGNAR_SUBMARINE } from "../types";
import { START_GAME } from "../types";

//usar barcos que tenemos
/* export function eleccionBarcoDeLosDisponibles() {
  return () => {
    console.log("desde action");
  };
} */

export function habilarGrillaAction(grilla) {
  /*   return () => {
    console.log("desde el action");
    // agregarGrilla();
    // dispatch( agregarProducto() );
  }; */
  console.log("desde el action" + grilla);
  return (dispatch) => {
    dispatch(cambiarGrilla(grilla));
  };
}
const cambiarGrilla = (grilla) => ({
  type: ACTIVAR_GRILLA,
  payload: grilla,
});

export function agregarPosicionActual(grilla) {
  /*   return () => {
    console.log("desde el action");
    // agregarGrilla();
    // dispatch( agregarProducto() );
  }; */
  return (dispatch) => {
    dispatch(cambiarPosicionActual(grilla));
  };
  /*  return () => {
    console.log("desde el action", grilla);
  }; */
}
const cambiarPosicionActual = (grilla) => ({
  type: GUARDAR_POSICION_ACTUAL,
  payload: grilla,
});

export function agregarCeldasParaPintar(grilla) {
  /*   return () => {
    console.log("desde el action");
    // agregarGrilla();
    // dispatch( agregarProducto() );
  }; */
  return (dispatch) => {
    dispatch(addBarcosAPintar(grilla));
  };
  /*  return () => {
    console.log("desde el action", grilla);
  }; */
}
const addBarcosAPintar = (grilla) => ({
  type: GUARDAR_CELDAS_PINTAR,
  /* payload: [1, 2], */
  payload: grilla,
});

export function handleChangueSense(grilla) {
  /*   return () => {
    console.log("desde el action");
    // agregarGrilla();
    // dispatch( agregarProducto() );
  }; */
  console.log("desde el action" + grilla);
  return (dispatch) => {
    dispatch(changueSense(grilla));
  };
}
const changueSense = (grilla) => ({
  type: CHANGUE_SENSE,
  payload: !grilla,
});

//lo que migre

export function seleccionBarco(grilla) {
  /*  return () => {
    console.log("desde el action de grilla");
    // agregarGrilla();
    // dispatch( agregarProducto() );
  }; */
  console.log("desde el action" + grilla);
  return (dispatch) => {
    dispatch(seleccionarBarco(grilla));
  };
}
const seleccionarBarco = (grilla) => ({
  type: BARCO_SELECCIONADO,
  payload: grilla,
});

export function deleteListedBoat(grilla) {
  /*   return () => {
      console.log("desde el action");
      // agregarbarco();
      // dispatch( agregarProducto() );
    }; */
  //console.log("desde el action CLICK ELMINAR" + grilla);
  return (dispatch) => {
    dispatch(deleteListedBoardd(grilla));
    //console.log("que hay aca:" + grilla.barcoClick);

    switch (grilla.barcoClick) {
      case "carrier":
        //  console.log("lo que hay en carrier:" + state.barcoClick);

        dispatch(asignarBarcoCarrier(grilla));
        break;
      case "cruisers1":
        //  console.log("lo que hay en carrier:" + state.barcoClick);
        dispatch(asignarBarcoCruisers1(grilla));
        break;
      case "cruisers2":
        //  console.log("lo que hay en carrier:" + state.barcoClick);

        dispatch(asignarBarcoCruisers2(grilla));
        break;
      case "cruisers3":
        //  console.log("lo que hay en carrier:" + state.barcoClick);

        dispatch(asignarBarcoCruisers3(grilla));
        break;
      case "submarine":
        //  console.log("lo que hay en carrier:" + state.barcoClick);

        dispatch(asignarBarcoSubmarine(grilla));
        break;

      default:
        break;
    }
  };
}
const deleteListedBoardd = (grilla) => ({
  type: DELETE_LISTED_BOAT,
  payload: grilla,
});

const asignarBarcoCarrier = (grilla) => ({
  type: ASIGNAR_CARRIER,
  payload: grilla,
});
const asignarBarcoCruisers1 = (grilla) => ({
  type: ASIGNAR_CRUISERS1,
  payload: grilla,
});

const asignarBarcoCruisers2 = (grilla) => ({
  type: ASIGNAR_CRUISERS2,
  payload: grilla,
});
const asignarBarcoCruisers3 = (grilla) => ({
  type: ASIGNAR_CRUISERS3,
  payload: grilla,
});
const asignarBarcoSubmarine = (grilla) => ({
  type: ASIGNAR_SUBMARINE,
  payload: grilla,
});
export function startGame(grilla) {
  return (dispatch) => {
    dispatch(iniciarJuego(grilla));
  };
}
const iniciarJuego = (grilla) => ({
  type: START_GAME,
  payload: grilla,
});
