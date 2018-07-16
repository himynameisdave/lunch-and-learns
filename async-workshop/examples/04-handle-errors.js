import fetch from 'node-fetch';


const getGithubUser = async (username) => {
    const url = `https://api.github.com/users/${username}`;
    const response = await fetch(url);
    const user = await response.json();

    if (response.status !== 200) {
        throw Error(user.message);
    }

    return user;
};

async function showGithubUser (username) {
    try {
        const user = await getGithubUser(username);
        console.log(`Woah! ${user.login} has ${user.public_repos} public repos!`);
    } catch (e) {
        console.error(`Error: ${e.message}`);
    }
}

showGithubUser('himynameisdave');
