// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Flores Amarillas", time: 8 },
  { text: "Él la estaba esperando con una flor amarilla", time: 16 },
  { text: "Ella lo estaba soñando con la luz en su pupila", time: 24 },
  { text: "Y el amarillo del Sol iluminaba la esquina", time: 32 },
  { text: "Lo sentía tan cercano, lo sentía desde niña", time: 40 },
  { text: "Ella sabía que él sabía que algún día pasaría", time: 45 },
  { text: "Que vendría a buscarla con sus flores amarillas", time: 48 },
  { text: "No te apures, no detengas el instante del encuentro", time: 57 },
  { text: "Está dicho que es un hecho", time: 59 },
  { text: "No la pierdas, no hay derecho", time: 61 },
  { text: "No te olvides que la vida", time: 64 },
  { text: "Casi nunca está dormida", time: 68 },
  { text: "En ese bar tan desierto nos esperaba el encuentro", time: 93 },
  { text: "Ella llegó en limusina amarilla por supuesto", time: 98 },
  { text: "Él se acercó de repente la miro tan de frente", time: 106 },
  { text: "Toda una vida soñada y no pudo decir nada", time: 114 },
  { text: "Ella sabía que él sabía que algún día pasaría", time: 124 },
  { text: "Que vendría a buscarla con sus flores amarillas", time: 129 },
  { text: "No te apures, no detengas el instante del encuentro", time: 136 },
  { text: "Está dicho que es un hecho", time: 140 },
  { text: "No la pierdas, no hay derecho", time: 142 },
  { text: "No te olvides que la vida", time: 145 },
  { text: "Casi nunca está dormida", time: 149 },
  { text: "Too much light for twilight", time: 183 },
  { text: "In the mood for the flowers", time: 188 },
  { text: "Love.", time: 140 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 2000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
