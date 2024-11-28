document.addEventListener("DOMContentLoaded", () => {
    // Elementos del DOM
    const inputText = document.getElementById("inputText");
    const buttonText = document.getElementById("buttonText");
  
    // Evento para guardar el dato en localStorage
    buttonText.addEventListener("click", () => {
      const value = inputText.value; // Obtener el texto ingresado
  
      if (value.trim() !== "") {
        // Guardar en localStorage
        localStorage.setItem("storedData", value);
      }
    });
  });
  