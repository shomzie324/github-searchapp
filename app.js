// Init GitHub class
const github = new GitHub();

// Init UI class
const ui = new UI();

// Search Input
const searchUser = document.getElementById("searchUser");

searchUser.addEventListener('keyup', (e) => {
    // Get input text
    const userText = e.target.value;

    if (userText !== '') {
        // make call to git hub api (using git hub class)
        github.getUser(userText).then( data => {
            if (data.profile.message === 'Not Found') {
                // Show Alert
                ui.showAlert("User Not Found", "alert alert-danger");
            } else {
                // Show Profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        })
    } else {
        // Clear Profile
        ui.clearProfile();
    }
});