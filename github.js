function GitHub() {
    this.client_secret = '069c8eec8ad62a68c8c767b0abb046c338410dc4';
    this.client_id = '92c5872ee417f0eed200';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
}

GitHub.prototype.getProfile = function(user) {
    return new Promise(function(resolve, reject) {
        fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
            .then(function(res) {
                return res.json()
            })
            .then(function(data) {
                resolve(data)
            })
            .catch(function(err) {
                reject(err);
            })
    })

};

GitHub.prototype.getRepos = function(user) {
    return new Promise(function(resolve, reject) {
        fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}client_id=${this.client_id}&client_secret=${this.client_secret}`)
            .then(function(res) {
                return res.json();
            })
            .then(function(data) {
                resolve(data)
            })
            .catch(function(err){
                reject(err);
            })
    })
}