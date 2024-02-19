// Define the function calculateYearsUntilRetirement, which calculates the number of years until retirement(this contains a groups of commands)
function calculateYearsUntilRetirement(event) {
    // Get the current age from the value entered in the text box.
    const currentAge = parseInt(event.target.value);
    // Calculate the number of years until retirement based on the retirement age of 65.
    const yearsUntilRetirement = 65 - currentAge;
    // Check if the current age is greater than or equal to 65.
    if (currentAge >= 65) {
         console.log("You are already retired!");
            alert("You are already retired!");
     } else {
        // Display the number of years until retirement.
         console.log("You have " + yearsUntilRetirement + " years until you can retire.");
            alert("You have " + yearsUntilRetirement + " years until you can retire.");
         }
}

//Translate hello and goodbye into french for users. if it is neither alert 'not recognised'

function getGreetingInFrench(event) {
    const greeting = event.target.value;

    if (greeting === "bonjour") {alert("hello");}
    else if (greeting === "au revoir") {alert ("goodbye!");}
    else {alert ("word not recognised")}
}