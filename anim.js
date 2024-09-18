var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

var lyricsData = [
  { text: "Flores amarillas", time: 8 },
  { text: "Él la estaba esperando con una flor amarilla", time: 17 },
  { text: "Ella lo estaba soñando con la luz en su pupila", time: 24 },
  { text: "Y el amarillo del Sol iluminaba la esquina", time: 32 },
  { text: "Lo sentía tan cercano, lo sentía desde niña", time: 40 },
  { text: "Ella sabía que él sabía", time: 46 },
  { text: "Que algún día pasaría", time: 48 },
  { text: "Que vendría a buscarla", time: 50 },
  { text: "Con sus flores amarillas", time: 53 },
  { text: "No te apures, no detengas, el instante del encuentro", time: 60 },
  { text: "Está dicho que es un hecho", time: 62 },
  { text: "No la pierdas, no hay derecho", time: 64 },
  { text: "No te olvides que la vida", time: 69 },
  { text: "Casi nunca está dormida", time: 74 },
  { text: "En ese bar tan desierto nos esperaba el encuentro", time: 93 },
  { text: "Ella llegó en limusina amarilla por supuesto", time: 101 },
  { text: "Él se acercó de repente la miró tan de frente", time: 109 },
  { text: "Toda una vida soñada y no pudo decir nada", time: 116 },
  { text: "Ella sabía que él sabía", time: 122 },
  { text: "Que algún día pasaría", time: 124 },
  { text: "Que vendría a buscarla", time: 126 },
  { text: "Con sus flores amarillas", time: 129 },
  { text: "No te apures, no detengas,el instante del encuentro", time: 136 },
  { text: "Está dicho que es un hecho", time: 138 },
  { text: "No la pierdas, no hay derecho", time: 140 },
  { text: "No te olvides que la vida", time: 143 },
  { text: "Casi nunca está dormida", time: 148 },
  { text: "Flores amarillas", time: 160 },
  { text: "Ella sabía que él sabía", time: 153 },
  { text: "Que algún día pasaría", time: 156 },
  { text: "Que vendría a buscarla", time: 159 },
  { text: "Con sus flores amarillas", time: 162 },
  { text: "No te apures, no detengas", time: 168 },
  { text: "El instante del encuentro", time: 171 },
  { text: "Está dicho que es un hecho", time: 174 },
  { text: "No la pierdas, no hay derecho", time: 177 },
  { text: "No te olvides que la vida", time: 180 },
  { text: "Casi nunca está dormida", time: 183 },
  { text: "Ella sabía que él sabía", time: 192 },
  { text: "Él sabía, ella sabía", time: 195 },
  { text: "Que él sabía, ella sabía", time: 198 },
  { text: "Y se olvidaron de sus flores amarillas", time: 201 }
];

// Animar las letras usando requestAnimationFrame
function updateLyrics() {
  var currentTime = audio.currentTime;
  
  // Busca la línea actual
  var currentLine = lyricsData.find(line => currentTime >= line.time && currentTime < line.time + 4);

  if (currentLine) {
    // Calcula la opacidad para el efecto de aparición y desaparición
    var fadeInDuration = 1; // 1 segundo para el fade-in
    var fadeOutDuration = 1; // 1 segundo para el fade-out
    var opacity = 1;

    if (currentTime < currentLine.time + fadeInDuration) {
      // Fade-in
      opacity = (currentTime - currentLine.time) / fadeInDuration;
    } else if (currentTime > currentLine.time + 4 - fadeOutDuration) {
      // Fade-out
      opacity = 1 - (currentTime - (currentLine.time + 4 - fadeOutDuration)) / fadeOutDuration;
    }

    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Oculta las letras cuando no hay línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }

  // Actualiza el frame
  requestAnimationFrame(updateLyrics);
}

// Inicia la sincronización cuando el audio comienza a reproducirse
audio.addEventListener("play", function () {
  requestAnimationFrame(updateLyrics);
});

// Ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation = "fadeOut 3s ease-in-out forwards";
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Ajusta a 3 segundos antes de ocultar
}

setTimeout(ocultarTitulo, 216000);
