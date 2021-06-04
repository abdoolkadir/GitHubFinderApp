// Init GitHub Object
const github = new GitHub;

// Init UI Object
const ui = new UI;

// Event Listener for user input
const searchUser = document.getElementById('search-user')

searchUser.addEventListener('keyup', function(e) {
    const userInput = e.target.value;
    if(userInput !== ''){
        github.getProfile(userInput)
            .then(function(data){
                if(data.message === 'Not Found'){
                // Show alert
                ui.showAlert('User not Found', 'alert alert-danger');
                } else {
                // Show profile
                ui.showProfile(data);
                }
            });
        github.getRepos(userInput)
            .then(function(data) {
                // Show repos
                ui.showRepos(data);
            })
    } else {
        // Clear Profile
        ui.clearProfile();
    }
})