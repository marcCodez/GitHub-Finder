class Github {
    constructor() {
        // if you're making more than 100 requests per hr you'll need an API key
       this.client_id = '1b2c2b02e8d934f32020';
       this.client_secret = 'f0198b1ba5c88478e6817387b1105f7249a01a02'; 
       // how many repos to display
       this.repos_count = 5;
       // Sort it by the most lastest repository
       this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        // fetch url for the profile
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        // fetch url for the repository
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        // get the json data
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        // return an object because returning the repos as well
        return {
            // In ES6 this is the same as profile: profile
            profile,
            repos
        }
    }
}