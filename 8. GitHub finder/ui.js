class UI{
    constructor(){
        this.profile = document.getElementById('profile');
    }

    showProfile(user){
        //console.log(user);
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class = "row">
                <div class = "col-md-3">
                    <img class = "img-fluid mb-2 center" src = "${user.avatar_url}">
                    <a href= "${user.html_url}" target = "_blank" class = "btn btn-secondary btn-block mb-3">View Profile</a>
                </div>
                <div class = "col-md-9">
                    <span class = "badge badge-primary">public Repos:${user.public_repos}</span>
                    <span class = "badge badge-secondary">public Gists:${user.public_gists}</span>
                    <span class = "badge badge-success">Followers:${user.followers}</span>
                    <span class = "badge badge-info">Following:${user.following}</span>
                    <br><br>
                    <ul class = "list-group">
                        <li class = "list-group-item">Company: ${user.company}</li>
                        <li class = "list-group-item">Website/Blog: ${user.blog}</li>
                        <li class = "list-group-item">Location: ${user.location}</li>
                        <li class = "list-group-item">Member Since: ${user.created_at}</li>
                    </ul>
                </div>
            </div>
            <h3 class="page-heading mb-3">Latest Repos</h3>
            <div id="repos"></div> 
        `;
    }

    //showing repos
    showRepos(repos){
        let output = '';
        repos.forEach(repo => {
            output += `
                <div class = "card card-body mb-2">
                    <div class = "row">
                        <div class = "col-md-6">
                            <a href = "${repo.html_url}" target = "_blank">${repo.name}</a>
                        </div>
                        <div class = "col-md-6">
                            <span class = "badge badge-primary">Stars : ${repo.stargazers_count}</span>
                            <span class = "badge badge-secondary">Watches : ${repo.watchers_count}</span>
                            <span class = "badge badge-success">Forks : ${repo.forks_count}</span>    
                        </div>
                    </div>
                </div>
            `;
        });
        document.getElementById('repos').innerHTML = output;
    }

    //show error
    showAlert(msg,className){
        this.clearProfile();
        const alert = document.createElement('div');
        alert.className = className;
        alert.appendChild(document.createTextNode(msg));
        const container = document.querySelector('.searchContainer');
        const search = document.querySelector('.search');
        container.insertBefore(alert,search);
    }

    clearAlert(){
        const currentError = document.querySelector('.alert');
        if(currentError){
            currentError.remove();
        }
    }

    //clearing for no input
    clearProfile(){
        this.profile.innerHTML = '';
    }
}