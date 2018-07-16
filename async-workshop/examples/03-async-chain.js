import fetch from 'node-fetch';


const getGithubUser = async (username) => {
    const url = `https://api.github.com/users/${username}`;
    const response = await fetch(url);
    return await response.json();
};

const getUserRepos = async (user) => {
    const response = await fetch(user.repos_url);
    return await response.json();
};

getGithubUser('himynameisdave')
    .then(getUserRepos)
    .then(repos => {
        console.log(repos.map(repo => repo.name));
    });
