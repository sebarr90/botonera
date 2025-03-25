# Botonera para Euro Truck Simulator 2

Este proyecto es una botonera interactiva desarrollada con Vue.js y Vuetify para controlar diversas funciones dentro del juego **Euro Truck Simulator 2**. 

## Características
- Simulación de botones físicos con iconos representativos.
- Integración con una API de telemetría para reflejar el estado del camión en la botonera.
- Diseño optimizado para dispositivos táctiles.

## Instalación
1. Clona este repositorio:
   ```sh
   git clone https://github.com/sebarr90/botonera
   ```
2. Instala las dependencias:
   ```sh
   cd nombre-del-repo
   npm install
   ```
3. Inicia el entorno de desarrollo:
   ```sh
   npm run serve
   ```

## Configuración
Este proyecto se comunica con un servidor Python para manejar las teclas y obtener datos de telemetría. Dicho servidor se encuentra en otro repositorio de esta cuenta **[sebarr90](https://github.com/sebarr90/botoneraBackend)**. Asegúrate de configurarlo correctamente para que la botonera funcione.


## API de Telemetría
Se utiliza la API **ETS2 Telemetry Server** de **[Funbit](https://github.com/Funbit/ets2-telemetry-server)** para obtener información en tiempo real del camión.

## Licencia
Este proyecto está bajo la **Licencia MIT**. Puedes usarlo, modificarlo y distribuirlo libremente, siempre y cuando se mantenga la atribución al autor original.

---
🚛 ¡Feliz conducción! 🔥

