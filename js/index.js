const homeScoreEl = document.querySelector('#home-score-el');
const guestScoreEl = document.querySelector('#guest-score-el');

const homeScoreBtnOne = document.querySelector('#home-add-1-points');
const homeScoreBtnTwo = document.querySelector('#home-add-2-points');
const homeScoreBtnThree = document.querySelector('#home-add-3-points');

const guestScoreBtnOne = document.querySelector('#guest-add-1-points');
const guestScoreBtnTwo = document.querySelector('#guest-add-2-points');
const guestScoreBtnThree = document.querySelector('#guest-add-3-points');

const newGameButton = document.querySelector('#newgamebutton');

homeScoreBtnOne.addEventListener('click', function handler() {
  homeScoreEl.textContent = Number(homeScoreEl.textContent) + 1;
});

homeScoreBtnTwo.addEventListener('click', function handler() {
  homeScoreEl.textContent = Number(homeScoreEl.textContent) + 2;
});

homeScoreBtnThree.addEventListener('click', function handler() {
  homeScoreEl.textContent = Number(homeScoreEl.textContent) + 3;
});

guestScoreBtnOne.addEventListener('click', function handler() {
  guestScoreEl.textContent = Number(homeScoreEl.textContent) + 1;
});

guestScoreBtnTwo.addEventListener('click', function handler() {
  guestScoreEl.textContent = Number(guestScoreEl.textContent) + 2;
});

guestScoreBtnThree.addEventListener('click', function handler() {
  guestScoreEl.textContent = Number(guestScoreEl.textContent) + 3;
});

newGameButton.addEventListener('click', function handler() {
  homeScoreEl.textContent = 0;
  guestScoreEl.textContent = 0;
});
