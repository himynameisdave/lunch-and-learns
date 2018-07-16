import fetch from 'node-fetch';


const fetchGithub = async (endpoint) => {
    const url = `https://api.github.com/${endpoint}`;
    const response = await fetch(url);
    return await response.json();
};

const getUserAndRepos = async (username) => {
    //  GOOD: These will run concurrently:
    const userPromise = fetchGithub(`users/${username}`);
    const reposPromise = fetchGithub(`users/${username}/repos`);
    const [ user, repos ] = await Promise.all([ userPromise, reposPromise ]);

    console.log(user.location);
    console.log(repos.map(repo => repo.name));
};

getUserAndRepos('himynameisdave');
