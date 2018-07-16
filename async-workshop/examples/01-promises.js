import fetch from 'node-fetch';


const getGithubUser = username => {
    const url = `https://api.github.com/users/${username}`;
    return fetch(url)
        .then(response => response.json());
};

getGithubUser('himynameisdave')
    .then(user => {
        console.log(`Woah! ${user.login} has ${user.public_repos} public repos!`);
    });
