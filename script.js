document.body.style.backgroundImage = "url('Wallpapers/1.png')";

document
  .getElementById("search-button")
  .addEventListener("click", performSearch);
document
  .getElementById("new-window-button")
  .addEventListener("click", performSearchInNewWindow);

document
  .getElementById("search-input")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      performSearch();
    } else if (event.key === "Enter" && event.shiftKey) {
      performSearchInNewWindow();
    }
  });

document.getElementById("bg-button1").addEventListener("click", function () {
  document.body.style.backgroundImage = "url('Wallpapers/1.png')";
});

document.getElementById("bg-button2").addEventListener("click", function () {
  document.body.style.backgroundImage = "url('Wallpapers/2.png')";
});

document.getElementById("bg-button3").addEventListener("click", function () {
  document.body.style.backgroundImage = "url('Wallpapers/3.png')";
});

document.getElementById("bg-button4").addEventListener("click", function () {
  document.body.style.backgroundImage = "url('Wallpapers/4.png')";
});

document.getElementById("bg-button5").addEventListener("click", function () {
  document.body.style.backgroundImage = "url('Wallpapers/5.png')";
});

document.getElementById("bg-button6").addEventListener("click", function () {
  document.body.style.backgroundImage = "url('Wallpapers/6.png')";
});

function performSearch() {
  const query = document.getElementById("search-input").value;
  if (query) {
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(
      query
    )}`;
    window.location.href = searchUrl;
  }
}

function performSearchInNewWindow() {
  const query = document.getElementById("search-input").value;
  if (query) {
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(
      query
    )}`;
    window.open(searchUrl, "_blank");
  }
}
const musicButton = document.getElementById("music-button");
const backgroundAudio = document.getElementById("background-audio");

musicButton.addEventListener("click", function () {
  if (backgroundAudio.paused) {
    backgroundAudio.play();
    musicButton.textContent = "Остановить Музыку";
  } else {
    backgroundAudio.pause();
    musicButton.textContent = "Включить Музыку";
  }
});
