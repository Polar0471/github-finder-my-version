
// classe referente ao usuário pesquisado 

class User {
    constructor(login, name, bio, avatar_url, public_repos, followers, following, repos) {
        this._login = login || ''
        this._name = name || ''
        this._bio = bio || ''
        this._avatar_url = avatar_url || ''
        this._public_repos = public_repos || 0
        this._followers = followers || 0
        this._following = following || 0
        this._repos = repos || {}
    }

    // GETTERS
    get login() {
        return this._login
    }

    get name() {
        return this._name
    }

    get bio() {
        return this._bio
    }

    get avatar_url() {
        return this._avatar_url
    }

    get public_repos() {
        return this._public_repos
    }

    get followers() {
        return this._followers
    }

    get following() {
        return this._following
    }

    get repos() {
        return this._repos
    }

    // SETTERS
    set login(login) {
        this._login = login
    }

    set name(name) {
        this._name = name
    }

    set bio(bio) {
        this._bio = bio
    }

    set avatar_url(avatar_url) {
        this._avatar_url = avatar_url
    }

    set public_repos(public_repos) {
        this._public_repos = public_repos
    }

    set followers(followers) {
        this._followers = followers
    }

    set following(following) {
        this._following = following
    }

    set repos(repos) {
        this._repos = repos
    }

}