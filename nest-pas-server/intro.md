

## Problem: Building apps as a hipster-ass front-end dev

- My old flow for building small projects was to focus on building the UI/client-side stuff (using whatever framework I was comfortable with or wanted to learn)
- I would then write a simple NodeJS/Express backend to serve the app and the API, then deploy to Heroku
- If it was simple enough I would just upload the static files to s3 and be done with it, but sometimes you need an API...


## AWS Lambda

- Amazon EC2 is a common way to scale an app, but you need to manage a lot of things yourself
- As a hipstery front-end JS developer, this was not something I wanted to bother with.
- AWS Lambdas are meant to address this need for smaller, more one-off applications, especially the hobbyist ones I was building.
- AWS Lambda will automatically manage the comute resources to run the deployed code.
- Amazon is much more competent than I am at managing cloud infrastructure (and I'm okay with that)


## Serverless, FaaS & Microservices

- The term "serverless" gets thrown around a lot
- Does not literally mean "no servers", that would be dumb
- Basically means that the developer doesn't concern themselves with the scaling/infrastructure
- The developer only worries about the deployed/app code
- Devs don't have to worry about patching vulnerabilities at the OS level
- Devs don't waste time messing around with containers and can focus on the application code
- This is wildly beneficial for small companies that want to quickly prototype, build and deploy software products
- Function as a Service (FaaS) is one example of a "serverless" model
- This model plays well with whole "microservices" architechture, whereby you have a system of loosly coupled services that can be independently tested, deployed and scaled as needed
- Another good use case is for building webhooks, which are often times simple functions responding to incoming events


## Downsides/security threats to serverless architechture

- The biggest downside is that you are at the whim of the cloud provider
- You also may simply prefer to have control of the infrastructure yourself, as some people prefer to manage their own containers or have the ability to move to their own machines
- There are also security implications to consider with regards to the containers that your lambda code is running in, specifically around container lifecycle and filesystem management
- You also need to be super careful with what permissions you grant your Lambda, as an attacker who could steal your credentials might be able to access your other AWS services.
- It's always best to grant the least amount of permission possible.
- It's also best practice to always have one user role per lambda function.
- "Denial of Wallet" attacks: attackers essentially DDoS your lambda, causing your costs to skyrocket. Even if you put a spending limit, if reached, your service will be shut down. (AWS Shield is a DDoS protection service that Amazon has, but it has not rolled out to AWS Lambda yet)


## What is the Serverless framework?

- Managing AWS Lambda and the API Gateway layers can be kind of a pain in the ass
- The Serverless framework (OG titled "jAWS") is essentially meant to help you bootstrap a new lambda and deploy it with only a few short commands
- It's pretty much as simple as installing it globally with NPM, logging into it via GitHub & Amazon, then creating and deploying a Lambda.
- It takes care of things like setting up the Gateway API endpoint for you, as well as setting the env variables that you tell it to.
- They also offer a ton of resources with tips, guides, and plugins for the serverless framework.
- The company behind Serverless is actually a 7Geese customer 👌❤️

