  if (localStorage.getItem('logado') !== 'true') {
    window.location.href = '../public/Entrar.html';
  }

const pages = [
  document.getElementById("cartinha"),
  document.getElementById("livro"),
  document.getElementById("player"),
  document.getElementById("anime"),
  document.getElementById("final")
];


let currentIndex = 0;

const btnPrev = document.getElementById("prev-section");
const btnNext = document.getElementById("next-section");

function showPage(index) {
  pages.forEach((page, i) => {
    if (i === index) {
      page.classList.add("active");
    } else {
      page.classList.remove("active");
    }
  });
  currentIndex = index;
}

btnPrev.addEventListener("click", () => {
  const prevIndex = currentIndex === 0 ? pages.length - 1 : currentIndex - 1;
  showPage(prevIndex);
});

btnNext.addEventListener("click", () => {
  const nextIndex = currentIndex === pages.length - 1 ? 0 : currentIndex + 1;
  showPage(nextIndex);
});

showPage(currentIndex);

const audio = document.getElementById("audio");
const btnPlayPause = document.getElementById("btn-play-pause");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");
const thumb = document.getElementById("thumb");
const bgVideo = document.getElementById("bg-video");

btnPlayPause.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    btnPlayPause.textContent = "⏸";
    bgVideo.style.display = "block";
  } else {
    audio.pause();
    btnPlayPause.textContent = "▶";
    bgVideo.style.display = "none";
  }
});

audio.addEventListener("timeupdate", () => {
  const duration = audio.duration || 1;
  const currentTime = audio.currentTime;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = progressPercent + "%";
  thumb.style.left = progressPercent + "%";
  progressContainer.setAttribute("aria-valuenow", Math.floor(progressPercent));
});

progressContainer.addEventListener("click", (e) => {
  const width = progressContainer.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
});

progressContainer.addEventListener("keydown", (e) => {
  if (audio.duration) {
    const step = audio.duration / 20;
    if (e.key === "ArrowRight" || e.key === "ArrowUp") {
      audio.currentTime = Math.min(audio.currentTime + step, audio.duration);
      e.preventDefault();
    } else if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
      audio.currentTime = Math.max(audio.currentTime - step, 0);
      e.preventDefault();
    }
  }
});
