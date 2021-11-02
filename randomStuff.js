'make strict'

//"Welcome" alert
alert("Welcome! You are about to generate a random day trip for Grand Junction. You can use this to create a date, or just a fun day for your family. Press 'Enter' or click 'OK' to get started.")

// array that holds all of the current options
let breakfast = ["Dream Cafe", "iHop", "Village Inn", "Randy's South Side Diner", "Denny's"];
let lunch = [];
let transportation = [];
let entertainment = ["see a movie. May I suggest a rom-com?", "Bananas...mini golf anyone?", "The Palette. Let's get our 'Bob Ross' on!", "Quincy's for some kaorke *clears throat.", "Get Air", "Bank 8 for some pool!", "Canyonview Park to feed some ducks! *quack*", "Orchard Mesa Pool. Don't forget your noodles :)"];

//these variables will hold the random choice 
let selectedDestination =  randomGenerator(destination)
let selectedRestaurant = randomGenerator(restaurant)
let selectedTransportation = randomGenerator(transportation)
let selectedEntertainment = randomGenerator(entertainment)

//array to hold all variables
let finishedList = [selectedDestination, selectedRestaurant, selectedTransportation, selectedEntertainment];

// function to randomly select item out of an array
function randomGenerator(array){
    let theAnswer = Math.floor(Math.random() * array.length);
    choice = array[theAnswer]
    return choice
}

// alert for current trip
alert("You will go to " + selectedDestination + "," + " you will eat at " + selectedRestaurant + "," + " you will get there by " + selectedTransportation + " and, in the evening you will go to " + selectedEntertainment)

//function to allow user to pick re roll category
userOptions()
function userOptions(){
    input = prompt("Do you like your trip? Enter yes to confirm the trip, or if you'd like to select a new destination enter 1, if you'd like to select a new restaurant enter 2, if you'd like a different mode of transportation enter 3, or if you want a different choice of entertainment for the evening enter 4.")

//else if statements
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