// Your code here
function razzle() {
    console.log("You could razzle that.");
}
// razzle();


function tallahasse(placeName = "Denver") {
    console.log(`If you want to go to ${placeName}`)
}

// tallahasse("Kauai");

function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective() {
    return function (adjective = "special", exclaim = "*") {
        return `You are ${exclaim}${adjective}${exclaim}!`
    }
}