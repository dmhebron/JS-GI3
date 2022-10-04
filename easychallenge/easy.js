//used an arrow function for this challenge
// name of the function is createExercise for both
// message & exercise1/2 are the parameters

var createExercise = (message, exercise1) => {
    // we're going to print Today's(the value of message) + (the value of exercise1)
    return "Today's" + message + ":" + exercise1;
}; //we assigned the value of message= exercise and exercise1=running
console.log(createExercise("exercise", "running"));

var createExercise = (message, exercise2) => {
     // we're going to print Today's(the value of message) + (the value of exercise2)
    return "Today's" + message + ":" + exercise2;
}; //we assigned the value of message= exercise and exercise2=swimming
console.log(createExercise("exercise", "swimming"));
