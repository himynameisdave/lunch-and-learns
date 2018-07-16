import fetch from 'node-fetch';


const getGithubUser = async (username) => {
    const url = `https://api.github.com/users/${username}`;
    const response = await fetch(url);
    const user = await response.json();
    console.log(`Woah! ${user.login} has ${user.public_repos} public repos!`);
};

getGithubUser('himynameisdave');
