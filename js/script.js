let homeScoreEl = document.getElementById("home-score-el");
let guestScoreEl = document.getElementById("guest-score-el");

let homeScoreBtnOne = document.getElementById("home-add1Points");
let homeScoreBtnTwo = document.getElementById("home-add2Points")
let homeScoreBtnThree = document.getElementById("home-add3Points");

let guestScoreBtnOne = document.getElementById("guest-Add1Points");
let guestScoreBtnTwo = document.getElementById("guest-Add2Points");
let guestScoreBtnThree = document.getElementById("guest-Add3Points");


let newGameButton = document.getElementById("newGameButton");

homeScoreBtnOne.addEventListener("click", function () {
    homeScoreEl.textContent++;
});


homeScoreBtnTwo.addEventListener("click", function () {
    homeScoreEl.textContent = Number(homeScoreEl.textContent) + 2;
});


homeScoreBtnThree.addEventListener("click", function () {
    homeScoreEl.textContent = Number(homeScoreEl.textContent) + 3;
});


guestScoreBtnOne.addEventListener("click", function () {
    guestScoreEl.textContent++;
});

guestScoreBtnTwo.addEventListener("click", function () {
    guestScoreEl.textContent = Number(guestScoreEl.textContent) + 2;
});

guestScoreBtnThree.addEventListener("click", function () {
    guestScoreEl.textContent = Number(guestScoreEl.textContent) + 3;
});

newGameButton.addEventListener("click", function () {
    homeScoreEl.textContent = 0;
    guestScoreEl.textContent = 0;
});
