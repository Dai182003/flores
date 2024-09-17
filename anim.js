// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Él la estaba esperando con una flor amarilla", time: 16 },
  { text: "Ella lo estaba soñando con la luz en su pupila", time: 23 },
  { text: "Y el amarillo del Sol iluminaba la esquina", time: 30 },
  { text: "Lo sentía tan cercano, lo sentía desde niña", time: 37 },
  { text: "Ella sabía que él sabía", time: 44 },
  { text: "Que algún día pasaría", time: 47 },
  { text: "Que vendría a buscarla", time: 50 },
  { text: "Con sus flores amarillas", time: 53 },
  { text: "No te apures, no detengas", time: 59 },
  { text: "El instante del encuentro", time: 62 },
  { text: "Está dicho que es un hecho", time: 65 },
  { text: "No la pierdas, no hay derecho", time: 68 },
  { text: "No te olvides que la vida", time: 71 },
  { text: "Casi nunca está dormida", time: 74 },
  { text: "En ese bar tan desierto nos esperaba el encuentro", time: 90 },
  { text: "Ella llegó en limusina amarilla por supuesto", time: 97 },
  { text: "Él se acercó de repente la miró tan de frente", time: 104 },
  { text: "Toda una vida soñada y no pudo decir nada", time: 111 },
  { text: "Ella sabía que él sabía", time: 118 },
  { text: "Que algún día pasaría", time: 121 },
  { text: "Que vendría a buscarla", time: 124 },
  { text: "Con sus flores amarillas", time: 127 },
  { text: "No te apures, no detengas", time: 133 },
  { text: "El instante del encuentro", time: 136 },
  { text: "Está dicho que es un hecho", time: 139 },
  { text: "No la pierdas, no hay derecho", time: 142 },
  { text: "No te olvides que la vida", time: 145 },
  { text: "Casi nunca está dormida", time: 148 },
  { text: "Flores amarillas", time: 155 },
  { text: "Ella sabía que él sabía", time: 158 },
  { text: "Que algún día pasaría", time: 161 },
  { text: "Que vendría a buscarla", time: 164 },
  { text: "Con sus flores amarillas", time: 167 },
  { text: "No te apures, no detengas", time: 174 },
  { text: "El instante del encuentro", time: 177 },
  { text: "Está dicho que es un hecho", time: 180 },
  { text: "No la pierdas, no hay derecho", time: 183 },
  { text: "No te olvides que la vida", time: 186 },
  { text: "Casi nunca está dormida", time: 189 },
  { text: "Ella sabía que él sabía", time: 196 },
  { text: "Él sabía, ella sabía", time: 199 },
  { text: "Que él sabía, ella sabía", time: 202 },
  { text: "Y se olvidaron de sus flores amarillas", time: 205 }
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time - 1 && time < line.time + 5
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.5; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time + 1) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 100);

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
