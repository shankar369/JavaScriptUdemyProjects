class GitHub{
    constructor(){
        this.cliend_id = 'f55d709235ccdb21d9ff';
        this.client_secret = 'c0af44e4495193007140518449409e593375cef7';
        this.repos_count = 9;
        this.repos_sort = 'created : asc';
    }
    async getUser(user){
        const userResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.cliend_id}&client_secret=${this.client_secret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.cliend_id}&client_secret=${this.client_secret}`);
        const profile = await userResponse.json();
        const repos = await repoResponse.json();
        return {
            profile,
            repos
        };
    }
}