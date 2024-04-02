function search() {
    // Get the input value from the HTML input element with the id "searchInput"
    let input = document.getElementById("searchInput").value.toLowerCase();

    // Get the HTML element where search results will be displayed
    let resultsDiv = document.getElementById("results");

    // Array containing student names
    let studentNames = [
        "ayush lolusare",
        "himanshu",
        "yash",
        "ayush nakade",
        "nikhil",
        "ratnesh",
        "soundary",
        "lucky",
        "shubham dada",
        "artharv",
        "achal",
        "yogesh sir"
    ];

    // Flags to track if a student or teacher is found
    let foundStudent = false;
    let foundTeacher = false;

    // Loop through the student names array 
    for (let name of studentNames) {
        if (input.includes(name)) {
            foundStudent = true; // Set foundStudent to true 
            break; // Exit the loop early since a match is found
        }
    }

    // Check if the input includes the name "yogesh sir" to determine 
    if (input.includes('yogesh sir')) {
        foundTeacher = true; // Set foundTeacher to true if "yogesh sir" is found
    }


    // Display the appropriate message based on search results 
    if (foundStudent) {
        if (foundTeacher) {
            resultsDiv.innerText = "This sir is teaching in Enjoy Programming.";
            resultsDiv.style.color = "black"; //  the color of the result message to blue
        } else {
            resultsDiv.innerText = "This student is a student of Enjoy Programming.";
            resultsDiv.style.color = "green"; //  the color of the result message to green
        }
    } else {
        resultsDiv.innerText = "This student is not student of Enjoy Programming.";
        resultsDiv.style.color = "red"; //  the color of the result message to red
    }
}
