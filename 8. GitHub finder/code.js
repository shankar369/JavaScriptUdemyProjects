const github = new GitHub;
const ui = new UI;
const user = document.getElementById('search-user');

user.addEventListener('keyup',e =>{
    const user = e.target.value;
    if(user !== ''){
        //make http request
        github.getUser(user)
        .then(data =>{
            //if Not found 
            if(data.profile.message === 'Not Found'){
                //if there is no alert already
                //show alert
                if(!document.querySelector('.alert')){
                    ui.showAlert("User Not Found ...",'alert alert-danger');
                }
            }else{
                //show profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
                ui.clearAlert();
            }
        })
        .catch(err => console.log(err));
    }
    //if there is no input in the field
    else{
        //clear profile
        ui.clearProfile();
        ui.clearAlert();
    }
});