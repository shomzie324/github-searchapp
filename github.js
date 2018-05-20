class GitHub {
    constructor() {
        this.client_id = "9a028f1f6762a31d7d0c";
        this.client_secret = "e3e2442ad3aa4834675159198983f78ac4b284d1";
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileReponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoReponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileReponse.json();

        const repos = await repoReponse.json();

        return {
            profile,
            repos
        }
    }
}