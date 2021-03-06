// Instantiate/Initialise Github class
const github = new Github;

// Instantiate/Initialise UI class
const ui = new UI;

// Search input
const searchUser = document.querySelector('#searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
// Get input text
const userText = e.target.value;

if(userText !== ''){
    // Make http call, pass in userText from the form
    github.getUser(userText)
    .then(data => {
        // each profile has a property of message
       if(data.profile.message === 'Not Found'){
        //Show alert
        ui.showAlert('User not found', 'alert alert-danger');
       } else {
        // Show profile
        // the repos and profile are part of the data object since we returned it in github.js
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
       }
    })
    
} else {
    // Clear profile - when no text has been typed
    ui.clearProfile();
}

});