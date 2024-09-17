// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Él la estaba esperando con una flor amarilla", time: 8 },
  { text: "Ella lo estaba soñando con la luz en su pupila", time: 16 },
  { text: "Y el amarillo del Sol iluminaba la esquina", time: 24 },
  { text: "Lo sentía tan cercano, lo sentía desde niña", time: 32 },
  { text: "Ella sabía que él sabía", time: 40 },
  { text: "Que algún día pasaría", time: 43 },
  { text: "Que vendría a buscarla", time: 46 },
  { text: "Con sus flores amarillas", time: 49 },
  { text: "No te apures, no detengas", time: 55 },
  { text: "El instante del encuentro", time: 58 },
  { text: "Está dicho que es un hecho", time: 61 },
  { text: "No la pierdas, no hay derecho", time: 64 },
  { text: "No te olvides que la vida", time: 68 },
  { text: "Casi nunca está dormida", time: 71 },
  { text: "En ese bar tan desierto nos esperaba el encuentro", time: 90 },
  { text: "Ella llegó en limusina amarilla por supuesto", time: 97 },
  { text: "Él se acercó de repente la miró tan de frente", time: 105 },
  { text: "Toda una vida soñada y no pudo decir nada", time: 113 },
  { text: "Ella sabía que él sabía", time: 120 },
  { text: "Que algún día pasaría", time: 123 },
  { text: "Que vendría a buscarla", time: 126 },
  { text: "Con sus flores amarillas", time: 129 },
  { text: "No te apures, no detengas", time: 136 },
  { text: "El instante del encuentro", time: 139 },
  { text: "Está dicho que es un hecho", time: 142 },
  { text: "No la pierdas, no hay derecho", time: 145 },
  { text: "No te olvides que la vida", time: 148 },
  { text: "Casi nunca está dormida", time: 151 },
  { text: "Flores amarillas", time: 159 },
  { text: "Ella sabía que él sabía", time: 162 },
  { text: "Que algún día pasaría", time: 165 },
  { text: "Que vendría a buscarla", time: 168 },
  { text: "Con sus flores amarillas", time: 171 },
  { text: "No te apures, no detengas", time: 178 },
  { text: "El instante del encuentro", time: 181 },
  { text: "Está dicho que es un hecho", time: 184 },
  { text: "No la pierdas, no hay derecho", time: 187 },
  { text: "No te olvides que la vida", time: 190 },
  { text: "Casi nunca está dormida", time: 193 },
  { text: "Ella sabía que él sabía", time: 200 },
  { text: "Él sabía, ella sabía", time: 203 },
  { text: "Que él sabía, ella sabía", time: 206 },
  { text: "Y se olvidaron de sus flores amarillas", time: 209 }
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

// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 2900); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
