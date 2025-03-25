<template>
  <div class="botonera">
    <div
      v-for="boton in botones"
      :key="boton.id"
      id="button"
      :style="{ backgroundColor: boton.activo ? 'red' : 'grey', color: boton.activo ? 'white' : 'black' }"
      @click="enviarTecla(boton.tecla)"
    >
      <span class="mdi" :class="boton.icono"></span>
      <span v-if="boton.extraIcon" class="mdi" :class="boton.extraIcon"></span>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      botones: [
        { id: 1, nombre: "motorOn", tecla: "e", icono: "mdi-onepassword", activo: false },
        { id: 2, nombre: "Limpiaparabrisas +", tecla: "p", icono: "mdi-wiper", extraIcon: "mdi-plus", activo: false },
        { id: 3, nombre: "Limpiaparabrisas -", tecla: "p", icono: "mdi-wiper", extraIcon: "mdi-minus", activo: false },
        { id: 4, nombre: "Freno Mano", tecla: "space", icono: "mdi-car-brake-parking", activo: false },
        { id: 5, nombre: "Giro Izquierdo", tecla: "´", icono: "mdi-arrow-left-bold-circle-outline", activo: false },
        { id: 6, nombre: "Intermitentes", tecla: "f", icono: "mdi-arrow-left-right-bold", activo: false },
        { id: 7, nombre: "Giro Derecho", tecla: "+", icono: "mdi-arrow-right-bold-circle-outline", activo: false },
        { id: 8, nombre: "Luces Bajas", tecla: "l", icono: "mdi-car-light-dimmed", activo: false },
        { id: 9, nombre: "Luces Altas", tecla: "k", icono: "mdi-car-light-high", activo: false },
        { id: 10, nombre: "Luces de Advertencia", tecla: "j", icono: "mdi-car-light-alert", activo: false },
        { id: 11, nombre: "Claxon", tecla: "h", icono: "mdi-bugle", activo: false },
        { id: 12, nombre: "Bocina de Aire", tecla: "n", icono: "mdi-air-horn", activo: false },
      ],
    };
  },
  methods: {
    async enviarTecla(tecla) {
      try {
        await axios.post("/api/press", { key: tecla });
        console.log(`Tecla ${tecla} enviada`);
      } catch (error) {
        console.error("Error al enviar la tecla:", error);
      }
    },

    async obtenerEstadoJuego() {
      try {
        const respuesta = await fetch("/telemetry");
        const data = await respuesta.json();

        // Actualizar el estado de los botones según la telemetría
        this.botones.forEach((boton) => {
          if (boton.nombre === "Freno Mano") {
            boton.activo = data.truck.parkBrakeOn;
          }
          if (boton.nombre === "Luces Bajas") {
            boton.activo = data.truck.lightsBeamLowOn;
          }
          if (boton.nombre === "Luces Altas") { 
            boton.activo = data.truck.lightsBeamHighOn; 
          }
          if (boton.nombre === "Luces de Advertencia") {
            boton.activo = data.truck.lightsBeaconOn;
          }
          if (boton.nombre === "Limpiaparabrisas +") {
            boton.activo = data.truck.wipersOn;
          }
          if (boton.nombre === "motorOn") {
            boton.activo = data.truck.engineOn;
          }
          if (boton.nombre === "Giro Izquierdo") {
            boton.activo = data.truck.blinkerLeftOn;
          }
          if (boton.nombre === "Giro Derecho") {
            boton.activo = data.truck.blinkerRightOn;
          }
        });

        console.log("Estado del juego actualizado", data);
      } catch (error) {
        console.error("Error al obtener telemetría:", error);
      }
    },
  },
  mounted() {
    this.obtenerEstadoJuego();
    setInterval(this.obtenerEstadoJuego, 1000); // Actualiza cada segundo
  },
};
</script>

<style scoped>
.botonera {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
}
#button {
  margin-left: 30px;
  margin-top: 30px;
  scale: 1.6;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border: solid 1px black;
  background-color: grey;
  transition: background-color 0.3s ease-in-out;
}
#button span {
  font-size: 30px;
}
</style>
