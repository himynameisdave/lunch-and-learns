## ⚡️ nest-pas-server
> _A 7Geese dev workshop about the Serverless framework._

[Serverless](https://serverless.com/framework/) is a nifty little framework that takes all the bullshit out of deploying a Lambda to a cloud service like [AWS Lambda](https://aws.amazon.com/lambda/) or [Google Cloud Compute](https://cloud.google.com/functions/). This makes deploying functions so easy, _even Dave_ can do it.

This workshop is geared to a Node.js project being deployed onto AWS, but it's important to note that Serverless supports [many different cloud providers](https://serverless.com/framework/docs/providers/), and also has some Python [examples](https://github.com/serverless/examples/tree/master/aws-python-simple-http-endpoint) and [boilerplates](https://github.com/serverless/serverless/tree/master/lib/plugins/create/templates/aws-python).


### Goals and Motivations

By the end of this workshop, you should:

1. Understand the benefit of serverless/"serviceful"/n'est pas server architecture.
2. Understand the downsides of serverless/"serviceful"/n'est pas server architecture.
3. Be able to install and login to the `serverless` framework.
4. Be able to create a simple Node.js lambda function (using ESexy JavaScript with Babel), and be able to test it locally.
6. Be able to deploy a lambda to AWS.


### Instructions

#### Step 0: Prerequisites _(Optional)_

- [Follow this short guide](https://serverless.com/framework/docs/providers/aws/guide/credentials/) on adding your AWS credentials to Serverless. This step is only needed for the deploy step, so you can still follow along locally if you do not wish to create or login to your AWS account.

#### Step 1: Clone, install, test

1. Globally install the [`serverless`](https://www.npmjs.com/package/serverless) framework: `npm i -g serverless`.
2. Run `serverless login`, which will open an auth page in your browser. Log in with GitHub.
3. Clone this repository `git clone git@github.com:himynameisdave/nest-pas-server.git`
4. Install local depenencies with a `yarn install`, then run `yarn start`.
5. 🏄 Surf on over to [`localhost:3000/me`](http://localhost:3000/me) in your browser (or use [Insomnia](https://github.com/getinsomnia/insomnia) like the cool kids). You should see:
    ```json
    {
        "hello": "🌏"
    }
    ```
6. Edit the response in `./src/lambdas/me.js`, then refresh/send the request again. Bam boom, you should see your changes.


#### Step 2: Write your function

Let's write a simple function that responds to the incoming `GET` request by returning some basic data about ourselves, including our age but not including our exact date of birth (as we would like to keep that secret):

1. At the root of the project, create an `.env.json` file. You will see this file is referenced in the `serverless.yml` file. Note that this env can also be a `.yml` file if you prefer.
2. Add a super secret `MY_DOB` var with your date of birth like so:
    ```json
    {
        "MY_DOB": "10-31-1950"
    }
    ```
    Everything you add here will be accessible via under the `process.env` var inside your lambda function. This file is in `.gitignore`, so it should not be committed and should remain a secret. Serverless takes care of the hassle of creating these env variables in the AWS console when you deploy.
3. Try installing a dependency like `moment.js`. You should be able to import it and use it no problem.
4. Now let's write a simple lambda that returns some info about us:
    ```js
    import moment from 'moment';
    import respond from '../utils/respond.js';


    export default (event, context, callback) => {
        //  Respond is a just simple wrapper which simplifies calling the response callback
        respond(callback).json({
            first_name: 'David',
            last_name: 'Lucky',
            //  Use our env var to determine how many years we've been alive
            age: moment().diff(process.env.MY_DOB, 'years'),
            french_skills: 12, // ...out of ten
        });
    };
    ```
5. Hit the localhost URL again and you should see your data returned. 👌👌👌

#### Step 3: Deploy

1. Now it's time to deploy your lambda function to the cloud ☁️. If you inspect the `"scripts"` inside of `package.json`, you will see there is a `deploy` task, which runs the linter and tests before deploying:
    ```json
    "deploy": "npm run lint && npm run test && serverless deploy -v"
    ```
2. Run that command with `yarn run deploy`.
3. If all goes well, you will get a bunch of success-lookin' messages, and then a URL to your endpoint, like this:
    ```
    https://r7Nd0m-57R1nG.execute-api.us-east-1.amazonaws.com/dev/me
    ```
    🏄 Surf on over to it, see if it worked.
4. [Check out the Serverless](https://platform.serverless.com/welcome) dashboard. It's still in Beta, but it essentially gives you a little overview of the things you've deployed.
5. [Login to your AWS Console](https://console.aws.amazon.com/lambda/home?region=us-east-1#/functions). Find **Lambda** in the list of services. Click on your newly created service, and you will see a neat overview of it.
6. Remember, it is considered best practice to **delete unused functions**, so if you're not planning on actually using this, you may wish to delete it to avoid potential abuse.

---

### _Further Reading/Watching_

- "A crash course on Serverless with Node.js" https://hackernoon.com/a-crash-course-on-serverless-with-node-js-632b37d58b44
- "The many faced threats to serverless security" https://hackernoon.com/many-faced-threats-to-serverless-security-519e94d19dba
- "The Serverless Spectrum" https://read.acloud.guru/the-serverless-spectrum-147b02cb2292
- "Security in the Cloud and Serverless World by Yan Cui" https://www.youtube.com/watch?v=jUhiPj6h_L8
- "Offensive security in the serverless age" https://www.youtube.com/watch?v=byJBR16xUnc
- "How to Make a Serverless GraphQL API using Lambda and DynamoDB" https://serverless.com/blog/make-serverless-graphql-api-using-lambda-dynamodb/
