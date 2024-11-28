document.addEventListener("DOMContentLoaded", () => {
    // Elemento donde se mostrará el dato
    const dataSpan = document.getElementById("data");
  
    // Recuperar el dato del localStorage
    const storedData = localStorage.getItem("storedData");
  
    // Mostrar el dato o un mensaje por defecto si no hay dato guardado
    if (storedData) {
      dataSpan.textContent = storedData;
    } else {
      dataSpan.textContent = "No hay datos guardados en el localStorage.";
    }
  });
  