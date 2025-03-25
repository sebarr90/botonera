
  
  export function enviarTeclas() {
    return JSON.parse(localStorage.getItem("teclas")) || [];
  }
  