'make strict'
// list that hold all the options 
let destination = ["Dallas", "Oklahoma City", "Denver", "Detroit"];
let restaurant = ["Olive Garden", "Chili's", "Village Inn", "Outback" ];
let transportation = ["Walk", "Drive", "Bicycle", "Uber"];
let entertainment = ["Movie", "Amusement Park", "Painting Workshop", "Dancing"];

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
alert("you will go to " + selectedDestination + " you will eat at " + selectedRestaurant + " you will get there by " + selectedTransportation + " in the evening you will go to " + selectedEntertainment)

// function to allow user to pick re roll category
userOptions()
function userOptions(){
    input = prompt("do you like your trip? Enter yes to confirm the trip, if you want a new destination enter 1, if you want a new restaurant press 2, if you want a new mode of transportation press 3, if you want a different entertainment for the evening press 4")
if (input === "1"){
    selectedDestination = randomGenerator(destination)
    let finishedList = [selectedDestination, selectedRestaurant, selectedTransportation, selectedEntertainment];
    alert("your destination will now be " + selectedDestination)
    alert("you will go to " + selectedDestination + " you will eat at " + selectedRestaurant + " you will get there by " + selectedTransportation + " in the evening you will go to " + selectedEntertainment)
    userOptions(finishedList)
}
else if (input === "2"){
    // same logic as above adapted for restaurant
}
else if (input === "3"){
    // same logic but adapted for transportation
}
else if (input === "4"){
    // same logic but adapted for entertainment 
}
else if (input === "yes"){
    alert("your trip has been confirmed in the console")
    console.log("you will go to " + selectedDestination + " you will eat at " + selectedRestaurant + " you will get there by " + selectedTransportation + " in the evening you will go to " + selectedEntertainment)
}
}







// make a function that can randomly pick an item from an array
// look in the previous worksheets for clues or do quick online research

// now we need to display each random selection to the user
// for this we will ust console.log()




