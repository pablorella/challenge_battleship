import { ACTIVAR_GRILLA } from "../types";
import { SAVE_CELL_PAINT } from "../types";
import { GUARDAR_POSICION_ACTUAL } from "../types";
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
  //console.log("desde el action" + grilla);
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
  type: SAVE_CELL_PAINT,
  /* payload: [1, 2], */
  payload: grilla,
});

export function handleChangueSense(grilla) {
  /*   return () => {
    console.log("desde el action");
    // agregarGrilla();
    // dispatch( agregarProducto() );
  }; */
  // console.log("desde el action" + grilla);
  return (dispatch) => {
    dispatch(changueSense(grilla));
  };
}
const changueSense = (grilla) => ({
  type: CHANGUE_DIRECTION,
  payload: !grilla,
});

//lo que migre

export function seleccionBarco(grilla) {
  /*  return () => {
    console.log("desde el action de grilla");
    // agregarGrilla();
    // dispatch( agregarProducto() );
  }; */
  //console.log("desde el action" + grilla);
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

export function changueTurnToHuman(grilla) {
  /*  return () => {
    console.log("desde el action de grilla");
    // agregarGrilla();
    // dispatch( agregarProducto() );
  }; */

  return (dispatch) => {
    dispatch(changue(grilla));
  };
}
const changue = (grilla) => ({
  type: CHANGUE_TURN_HUMAN,
  payload: grilla,
});

export function addCellHumanSelection(grilla) {
  /*   return () => {
    console.log("desde el action");
    // agregarGrilla();
    // dispatch( agregarProducto() );
  }; */
  return (dispatch) => {
    dispatch(addSelectionHuman(grilla));
  };
  /*  return () => {
    console.log("desde el action", grilla);
  }; */
}
const addSelectionHuman = (grilla) => ({
  type: ADD_SELECTION_SHIT_HUMAN,
  /* payload: [1, 2], */
  payload: grilla,
});

export function addCellCpuSelection(grilla) {
  /*   return () => {
    console.log("desde el action");
    // agregarGrilla();
    // dispatch( agregarProducto() );
  }; */
  return (dispatch) => {
    dispatch(addSelectionCpu(grilla));
  };
  /*  return () => {
    console.log("desde el action", grilla);
  }; */
}
const addSelectionCpu = (grilla) => ({
  type: ADD_SELECTION_CPU,
  /* payload: [1, 2], */
  payload: grilla,
});

export function changuecelRandom(grilla) {
  /*   return () => {
    console.log("desde el action");
    // agregarGrilla();
    // dispatch( agregarProducto() );
  }; */
  return (dispatch) => {
    dispatch(addRandom(grilla));
  };
  /*  return () => {
    console.log("desde el action", grilla);
  }; */
}
const addRandom = (grilla) => ({
  type: ADD_CELL_RANDOM,
  /* payload: [1, 2], */
  payload: grilla,
});

export function impactsShitss(grilla) {
  /*   return () => {
      console.log("desde el action");
      // agregarbarco();
      // dispatch( agregarProducto() );
    }; */
  //console.log("desde el action CLICK ELMINAR" + grilla);
  return (dispatch) => {
    switch (grilla.nombre) {
      case "carrier_cpu":
        //
        dispatch(impactCarrier_cpu(grilla));
        break;
      case "cruisers1_cpu":
        dispatch(impactCruisers1_cpu(grilla));
        break;
      case "cruisers2_cpu":
        //  console.log("lo que hay en carrier:" + state.barcoClick);

        dispatch(impactCruisers2_cpu(grilla));
        break;
      case "cruisers3_cpu":
        //  console.log("lo que hay en carrier:" + state.barcoClick);

        dispatch(impactCruisers3_cpu(grilla));
        break;
      case "submarine_cpu":
        //  console.log("lo que hay en carrier:" + state.barcoClick);

        dispatch(impactSubmarine_cpu(grilla));
        break;
      case "carrier":
        //
        dispatch(impactCarrier(grilla));
        break;
      case "cruisers1":
        dispatch(impactCruisers1(grilla));
        break;
      case "cruisers2":
        //  console.log("lo que hay en carrier:" + state.barcoClick);

        dispatch(impactCruisers2(grilla));
        break;
      case "cruisers3":
        //  console.log("lo que hay en carrier:" + state.barcoClick);

        dispatch(impactCruisers3(grilla));
        break;
      case "submarine":
        //  console.log("lo que hay en carrier:" + state.barcoClick);

        dispatch(impactSubmarine(grilla));
        break;
      default:
        break;
    }
  };
}
const impactCarrier = (grilla) => ({
  type: IMPACT_CARRIER,
  payload: grilla,
});
const impactCruisers1 = (grilla) => ({
  type: IMPACT_CRUISERS1,
  payload: grilla,
});

const impactCruisers2 = (grilla) => ({
  type: IMPACT_CRUISERS2,
  payload: grilla,
});
const impactCruisers3 = (grilla) => ({
  type: IMPACT_CRUISERS3,
  payload: grilla,
});
const impactSubmarine = (grilla) => ({
  type: IMPACT_SUBMARINE,
  payload: grilla,
});
const impactCarrier_cpu = (grilla) => ({
  type: IMPACT_CARRIER_CPU,
  payload: grilla,
});
const impactCruisers1_cpu = (grilla) => ({
  type: IMPACT_CRUISERS1_CPU,
  payload: grilla,
});

const impactCruisers2_cpu = (grilla) => ({
  type: IMPACT_CRUISERS2_CPU,
  payload: grilla,
});
const impactCruisers3_cpu = (grilla) => ({
  type: IMPACT_CRUISERS3_CPU,
  payload: grilla,
});
const impactSubmarine_cpu = (grilla) => ({
  type: IMPACT_SUBMARINE_CPU,
  payload: grilla,
});
export function changueLastImpact(grilla) {
  /*   return () => {
    console.log("desde el action");
    // agregarGrilla();
    // dispatch( agregarProducto() );
  }; */
  return (dispatch) => {
    dispatch(changueLast(grilla));
  };
  /*  return () => {
    console.log("desde el action", grilla);
  }; */
}
const changueLast = (grilla) => ({
  type: LAST_IMPACT,
  /* payload: [1, 2], */
  payload: grilla,
});
