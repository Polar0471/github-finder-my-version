
const USER = new User()

const QUERY = document.querySelector(".query")

function getUser() {
    getRepos()
    const URL = `https://api.github.com/users/${QUERY.value}`;
    fetch(URL)
        .then((response) => response.json())
        .then((USER_DATA) => {
            getRepos()
            
            if (USER_DATA.message === "Not Found") {
                alert("User not found");
                return;
            }

            USER.login = USER_DATA.login;
            USER.name = USER_DATA.name;
            USER.bio = USER_DATA.bio;
            USER.avatar_url = USER_DATA.avatar_url;
            USER.public_repos = USER_DATA.public_repos;
            USER.followers = USER_DATA.followers;
            USER.following = USER_DATA.following;
        })
        .then(getAllData)
        .catch((error) => console.error(error));    
}

function getRepos() {
    const URL = `https://api.github.com/users/${QUERY.value}/repos`;
    return fetch(URL)
        .then((response) => response.json())
        .then((REPOS) => {
            USER.repos = REPOS;
        })
        .catch((error) => console.log(error));
    
}
