# Challenege10---Team-Roster
I built a Node.js command-line application that takes in information 
about employees on a software engineering team.  The applicaltion
allows users to select a role from the options.  When all the 
desired selections are chosen, the application generates a team
profile in HTML.

The HTML team profile generator is styled in cards with employee role
name, id and email address.  The manager has a field for office number, 
engineers have a field for github username and the intern has a field for the
school they attend.




// Your task is to build a Node.js command-line application that takes in information
// about employees on a software engineering team,
// then generates an HTML webpage that displays summaries for each person.
// Testing is key to making code maintainable,
// so you’ll also write a unit test for every part of your code and ensure that it passes each test.

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated