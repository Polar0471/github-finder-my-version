
// arquivo referente a exibicão dos dados no html

function getAllData() {
    const USER_INFO = document.getElementById("user-info")

    USER_INFO.setAttribute("style", "display: block")

    USER_INFO.innerHTML = `
        <div class="user-info">
            <div class="user-avatar">
                <h2 class="user-name">${USER.name == null ? USER.name = "No username" : USER.name}</h2>
                <h3 class="user-login">${USER.login}</h3>
                <img class="avatar_img" src="${USER.avatar_url}" alt="${USER.login}">
                <p class="bio">${USER.bio == null ? (USER.bio = "No bio") : USER.bio}</p>

            </div>
            <div class="user-stats">
                <h2>Info</h2>
                <p>Repos: ${USER.public_repos}</p>
                <p>Followers: ${USER.followers}</p>
                <p>Following: ${USER.following}</p>
            </div>
        </div>
        ${USER.repos.map((repo) => `
            <div class="repo">
                <h3 class="repo-name">${repo.name}</h3>
                <p class="repo-description">${repo.description == null ? (repo.description = "No description") : repo.description}</p>
                <p class="repo-language">${repo.language == null ? repo.language = "No language found" : repo.language}</p>
                <div class="repo-stats">
                    <span>⭐${repo.stargazers_count}</span>
                    <span>💬${repo.watchers_count}</span>
                    <span>📦${repo.forks_count}</span>
                    <span>📅${new Date(repo.update_at).toLocaleDateString('pt-br')}</span>
                    <a href="${repo.html_url}" target="_blank">
                        <span>🔗${repo.html_url}</span>
                    </a>
                </div>
            </div>
        `).join("")}
    `;
}