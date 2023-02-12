//Home Functions
let homePointsEl = document.getElementById("home-points-el") 
let countHome = 0


function addOneHome() {
    countHome += 1
    homePointsEl.textContent = countHome
}

function addTwoHome() {
    countHome += 2
    homePointsEl.textContent = countHome
}

function addThreeHome() {
    countHome += 3
    homePointsEl.textContent = countHome
}

function resetCounterHome() {
    homePointsEl.textContent = 0
    countHome = 0
} 


//Guest Functions
let guestPointsEl = document.getElementById("guest-points-el")
let countGuest = 0


function addOneGuest() {
    countGuest += 1
    guestPointsEl.textContent = countGuest
}

function addTwoGuest() {
    countGuest += 2
    guestPointsEl.textContent = countGuest
}

function addThreeGuest() {
    countGuest += 3
    guestPointsEl.textContent = countGuest
}

function resetCounterGuest() {
    guestPointsEl.textContent = 0
    countGuest = 0
} 

//New Game Function
function newGame () {
    homePointsEl.textContent = 0
    guestPointsEl.textContent = 0
    countHome = 0
    countGuest = 0
}