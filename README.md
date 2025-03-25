# Botonera para Euro Truck Simulator 2 🚛

Este proyecto es una botonera interactiva desarrollada con **Vue.js** y **Vuetify** para controlar acciones dentro de *Euro Truck Simulator 2* (ETS2). Se conecta con un servidor backend en Python para enviar comandos al juego y obtener información en tiempo real.

## Características ✨

- Control de funciones esenciales del camión (freno de mano, luces, bocina, etc.).
- Interfaz adaptada para una experiencia fluida y visualmente atractiva.
- Obtención de datos en tiempo real del estado del camión mediante la API de telemetría.

## Instalación y Uso 🚀

### 1️⃣ Clonar el repositorio:
```bash
git clone https://github.com/tu-usuario/tu-repositorio.git
cd tu-repositorio
```

### 2️⃣ Instalar dependencias:
```bash
npm install
```

### 3️⃣ Configurar el proxy (si es necesario):
Si el servidor Flask se ejecuta en otra IP, asegúrate de actualizar `vue.config.js`.

### 4️⃣ Iniciar la aplicación:
```bash
npm run serve
```

## API de Telemetría 💽

Este proyecto utiliza la **API de telemetría de ETS2** para obtener información del estado del camión en tiempo real. Todo el crédito por esta API va para su creador, cuyo trabajo ha sido fundamental para integrar la funcionalidad de estado en la botonera.

🔗 **[Enlace al proyecto de la API](https://github.com/Funbit/ets2-telemetry-server)**

## Licencia 📛

Este proyecto está bajo la **Licencia MIT**, lo que significa que puedes usarlo y modificarlo libremente, siempre que incluyas la atribución al autor original.

---

🚛 ¡Conduce con estilo y controla tu camión como un profesional! 🎮

