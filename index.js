// when a button is clicked, add it to the points

let homePoints = document.getElementById("home-points");
let homeCount = 0;
let guestPoints = document.getElementById("guest-points");
let guestCount = 0;


addPoints = (team, points) => {
    if (team == "home") {
        homeCount += points;
        homePoints.innerText = homeCount
    } else if (team == "guest") {
        guestCount += points;
        guestPoints.innerText = guestCount
    }
}