const axios = require("axios");

// Función de prueba para realizar una solicitud HTTP GET
async function testAxiosAPI() {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric"; // URL de prueba de JSONPlaceholder
  try {
    const response = await axios.get(url);
    console.log("Respuesta de la API:", response.data);
    console.log("Estado de la respuesta:", response.status);
  } catch (error) {
    console.error("Error al realizar la solicitud:", error);
  }
}

// Llamar a la función de prueba
testAxiosAPI();
