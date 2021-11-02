'make strict'

alert("Welcome! You are about to generate a random day trip. Press 'Enter' or click 'OK' to get started.")
// list that hold all the options 
let destination = ["Dallas", "Oklahoma City", "Denver", "Detroit", "Kansas City", "Cleveland"];
let restaurant = ["Olive Garden", "Chili's", "Village Inn", "Outback", "Taco Bell", "Arby's", "iHop"];
let transportation = ["walking", "driving", "riding a bicycle", "catching an Uber", "taking a limo", "skateboarding", "cruising in a boat"];
let entertainment = ["see a movie. May I suggest a rom-com?", "an amusement park! WOOOO!", "a painting workshop. Let's get our 'Bob Ross' on!", "a dance club! It takes two to tango.", "a renaissance fair! Don't forget thy armor!", "a slam poetry session! It's about to get deep.", "a pond to feed some ducks! *quack*"];

//these variables will hold the random choice 
let selectedDestination =  randomGenerator(destination)
//console.log(selectedDestination)
let selectedRestaurant = randomGenerator(restaurant)
//console.log(selectedRestaurant)
let selectedTransportation = randomGenerator(transportation)
//console.log(selectedTransportation)
let selectedEntertainment = randomGenerator(entertainment)
//console.log(selectedEntertainment)

// not current in use but array to hold all of the options
let finishedList = [selectedDestination, selectedRestaurant, selectedTransportation, selectedEntertainment];

// function to randomly select item out of an array
function randomGenerator(array){
    let theAnswer = Math.floor(Math.random() * array.length);
    choice = array[theAnswer]
    return choice
}

// alert for current trip
alert("You will go to " + selectedDestination + "," + " you will eat at " + selectedRestaurant + "," + " you will get there by " + selectedTransportation + " and, in the evening you will go to " + selectedEntertainment)

// function to allow user to pick re roll category
userOptions()
function userOptions(){
    input = prompt("Do you like your trip? Enter yes to confirm the trip, or if you'd like to select a new destination enter 1, if you'd like to select a new restaurant enter 2, if you'd like a different mode of transportation enter 3, or if you want a different choice of entertainment for the evening enter 4.")


if (input === "yes"){
    alert("Your trip has been added to the console. Now go have some fun! Press refresh to try the whole thing again.")
    console.log("The user will go to " + selectedDestination + "," + " the user will eat at " + selectedRestaurant + "," + " the user will get there by " + selectedTransportation + " and, in the evening the user will go to " + selectedEntertainment)
}
else if (input === "Yes"){
    alert("Your trip has been added to the console. Now go have some fun! Press refresh to try the whole thing again.")
    console.log("The user will go to " + selectedDestination + "," + " the user will eat at " + selectedRestaurant + "," + " the user will get there by " + selectedTransportation + " and, in the evening the user will go to " + selectedEntertainment)
}
else if (input === "1"){
    selectedDestination = randomGenerator(destination)
    let finishedList = [selectedDestination, selectedRestaurant, selectedTransportation, selectedEntertainment];
    alert("Your destination will now be " + selectedDestination + ".")
    alert("You will go to " + selectedDestination + "," + " you will eat at " + selectedRestaurant + "," + " you will get there by " + selectedTransportation + " and, in the evening you will go to " + selectedEntertainment)
    userOptions(finishedList)
}
else if (input === "2"){
    selectedRestaurant = randomGenerator(restaurant)
    let finishedList = [selectedDestination, selectedRestaurant, selectedTransportation, selectedEntertainment];
    alert("You will now eat at " + selectedRestaurant + ".")
    alert("You will go to " + selectedDestination + "," + " you will eat at " + selectedRestaurant + "," + " you will get there by " + selectedTransportation + " and, in the evening you will go to " + selectedEntertainment)
    userOptions(finishedList)
}
else if (input === "3"){
    selectedTransportation = randomGenerator(transportation)
    let finishedList = [selectedDestination, selectedRestaurant, selectedTransportation, selectedEntertainment];
    alert("You will now get there by " + selectedTransportation + ".")
    alert("You will go to " + selectedDestination + "," + " you will eat at " + selectedRestaurant + "," + " you will get there by " + selectedTransportation + " and, in the evening you will go to " + selectedEntertainment)
    userOptions(finishedList)
}
else if (input === "4"){
    selectedEntertainment = randomGenerator(entertainment)
    let finishedList = [selectedDestination, selectedRestaurant, selectedTransportation, selectedEntertainment];
    alert("In the evening you will now go to " + selectedEntertainment + ".")
    alert("You will go to " + selectedDestination + "," + " you will eat at " + selectedRestaurant + "," + " you will get there by " + selectedTransportation + " and, in the evening you will go to " + selectedEntertainment)
    userOptions(finishedList)
}
else if (input !== "yes", "Yes", "1", "2", "3", "4"){
    alert("Let's try that again. Please enter yes, 1, 2, 3 or 4.")
    userOptions(finishedList)
}
}