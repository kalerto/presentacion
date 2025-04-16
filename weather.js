const apiKey = '41e09d3650ff862a3b10d6845e8d2529'; 

const ciudad = 'Buenos Aires';

function obtenerClima() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric&lang=es`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const descripcion = data.weather[0].description;
      const temp = data.main.temp;
      const ciudadNombre = data.name;
      const fecha = new Date().toLocaleDateString('es-AR');

      document.getElementById("clima").innerHTML = `🌤️ ${ciudadNombre}: ${descripcion} | ${temp}°C`;
      document.getElementById("fecha").innerHTML = `📅 Fecha: ${fecha}`;
    })
    .catch(error => {
      console.error("Error al obtener el clima:", error);
      document.getElementById("clima").innerHTML = "No se pudo cargar el clima.";
    });
}

obtenerClima();
