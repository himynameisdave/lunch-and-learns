## lunch-and-learns

Mega-repo for all of the Lunch and Learn presentations/workshops/etc. that I've given at 7Geese. At least, all the ones that I've put up on GitHub.

All of these were made with the fantastic [Spectacle](http://formidable.com/open-source/spectacle/) framework from Formidable team. Check it out, it's pretty dope.


### Running

For most of these, all you need to do is `cd` into the dir, install the deps real quick then run start:

```
cd eslint-workshop/
yarn install
yarn run start
```

Then checkout [`localhost:3000/`](http://localhost:3000/).

In a crazy hack of nature, if you open it in a second tab and add `?presenter&timer` to the URL, you'll get a "presenter's view", which is handy if you're running the presentations on a second screen. This will also display any notes you've added to the slides. It also includes a little timer so you'll know if you're babbling on and on.
