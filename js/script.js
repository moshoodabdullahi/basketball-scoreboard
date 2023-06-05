const homeScoreEl = document.getElementById('home-score-el');
const guestScoreEl = document.getElementById('guest-score-el');

const homeScoreBtnOne = document.getElementById('home-add-1-points');
const homeScoreBtnTwo = document.getElementById('home-add-2-points');
const homeScoreBtnThree = document.getElementById('home-add-3-points');

const guestScoreBtnOne = document.getElementById('guest-add-1-points');
const guestScoreBtnTwo = document.getElementById('guest-add-2-points');
const guestScoreBtnThree = document.getElementById('guest-add-3-points');

const newGameButton = document.getElementById('newgamebutton');

homeScoreBtnOne.addEventListener('click', function () {
  homeScoreEl.textContent += 1;
});

homeScoreBtnTwo.addEventListener('click', function () {
  homeScoreEl.textContent = Number(homeScoreEl.textContent) + 2;
});

homeScoreBtnThree.addEventListener('click', function () {
  homeScoreEl.textContent = Number(homeScoreEl.textContent) + 3;
});

guestScoreBtnOne.addEventListener('click', function () {
  guestScoreEl.textContent += 1;
});

guestScoreBtnTwo.addEventListener('click', function () {
  guestScoreEl.textContent = Number(guestScoreEl.textContent) + 2;
});

guestScoreBtnThree.addEventListener('click', function () {
  guestScoreEl.textContent = Number(guestScoreEl.textContent) + 3;
});

newGameButton.addEventListener('click', function () {
  homeScoreEl.textContent = 0;
  guestScoreEl.textContent = 0;
});
