
const body = document.body;

const startBtn = document.getElementById('struktur');
const back2 = document.getElementById('back2');
const next2 = document.getElementById('next2');
const back3 = document.getElementById('back3');
const next3 = document.getElementById('next3');
const back4 = document.getElementById('back4');
const next4 = document.getElementById('next4');

function scrollToPage(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function disableScroll() {
  body.style.overflowY = 'hidden';
}

function enableScroll() {
  body.style.overflowY = 'auto';
}

// Awal scroll dimatikan
disableScroll();

function scrollAndDisable(id) {
  enableScroll();
  scrollToPage(id);
  setTimeout(() => {
    disableScroll();
  }, 600);
}

startBtn.onclick = () => {
  scrollAndDisable('tempat-struktur');
};

back2.onclick = () => {
  scrollAndDisable('page2');
};

next2.onclick = () => {
  scrollAndDisable('page4');
};

back3.onclick = () => {
  scrollAndDisable('page3');
};

window.addEventListener('load', () => {
  history.replaceState(null, null, location.href); // hapus riwayat page1
  document.getElementById('page2').scrollIntoView({ behavior: 'auto' });
});
