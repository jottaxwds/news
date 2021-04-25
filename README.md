
# NEWS FEED challenge:

- [Setup](#setup)
    - [In your system](#in-your-system)
    - [With Docker compose](#docker-compose)
- [Approach](#architecture)
	- [Server](#server)
	- [Client](#client)
- [Testing](#testing)
- [Others](#others)
- [Improvements](#improvements)



## Setup

TWO ways to install:

### In your system

#### Requirements

- Install npm < 15.0.0 due to new dependency resolver in newer versions of npm.
  -> www.npmjs.com

#### Run in dev environment

It will run client and server together following logs
- `npm start:dev`

#### Run tests
This will run server and client tests
- `npm test`

#### Build and serve production package

It will build client, then serve in 8080 both client and server together following logs
- `npm build && npm serve`

App is now accesible at http://localhost:8080


### Docker compose

#### Requirements

- Docker-compose >= **1.23.2**
https://docs.docker.com/compose/install/


#### Build

It will build the Docker image and stored to be run later

- `./scripts/build.sh`

#### Up

The container opens Ports 9000 and 9001, for client and server.

Run up script:

- `./scripts/up.sh`

It will keep following the logs.
App is now accesible at http://localhost:9000

#### Stop

It stops the container: 

- `./scripts/stop.sh`

#### Restart

Stop + Up

- `./scripts/restart.sh`

#### Logs

To access container logs

- `./scripts/logs.sh -f`

#### Prune

It will remove the Docker container from your system

- `./scripts/prune.sh`

---



## Approach:

I decided to build a *BFF (Backend For Frontend)* project. This project combines a small backend built with `NodeJS` and `Express` to act as a middleware between final clients and the application. It expose custom endpoints to provide more accurate data to the frontend and reducing the extra-logic we could need in the client if regular requests should be needed directly to the news provider instead. We can say that it works as data aggregator to feed the frontend.

### Server:
The structure for this small server is simple: Request are being handled in their corresponding route depending the service we wanted to use (in this case only one -> `news`). This service or route steps in a clear way, from the input to the desired output, delegating further actions to be performed in the controller such as requests to external clients (in this case the news provider).

I get rid of the `NodeJS` library built to use with the news provider. Documentation can be found here https://newsapi.org/docs/client-libraries/node-js (news-api)


### Client:

React was selected as the framework to be used for this project. I decided to not to use the common "create-react-app" in order to build it from the scratch and using only the libraries and configurations needed avoiding boilerplate code and not useful libraries:

	- Babel: We could do this just using Vanilla, but ES features are too good to skip. :)
	- Webpack: Faster bundler of the market. It helps to build our application with great flexibility. We use webpack-dev-server in local environment to have hot reloading
HtmlWebpackPlugin allow us to inject an HTML template to the folder. That file contains the root element that will be used as entry point for our React application.

About styling, I decided to use Emotion + Styled Components. I find this way to build components is better than SASS/LESS using BEM convention because of two main reasons: Reusability & Clearness. I used SASS/LESS + BEM in the past, but with time, the nesting and the specificity are not clear enough.
Styled Components provide a way to isolate the styles that relies only on the desired component without affect other parts of the screen or other components. This also its very useful and handy to create a design system and a ui-library.

	- Components: This folder contains single components that I identified they could be used across the application.
	- Containers: This folder contains complex screens that wraps single components inside to build custom screens. 
	- Constants: Common constants used across the application such as action types.

I used a context (NewsContext) to centralise the data that will be common for different parts of the application like the articles, categories, etc... with the reducers, dispatching actions, the information of the context could be changed and propagated across the components that consumes this context, everything getting rid of the hooks. 

For the NavBar I used react router and a customised way to implement the navigation. I did not have the chance to make complex SPAs with multiple sections, that's the reason I experimented a bit here to handle routes and to block the country selectors to switch between countries and get proper news.

Screens were lazy loaded into the application to improve performance rendering only what is needed on each time.

## Eslint (update):
Different ESLint configurations for Client & Server

## Testing:
For testing I decided to use React Testing Library. Since I started using it I felt in love. In fact `Enzyme` drives you to test doing things that a user can not do like using shallow render, getting component instance or getting/setting a component state. If the tests are used in a way like user interacts I ship my code with more confidence.
`RTL` is also faster than `enzyme` as finding methods are lighter.

## Others: 
This is the first time I do something like this and I wanted to test my skills doing some different rather than run all of this in a regular local server: 

I created a Dockerfile for the lone image we have here. It just starts from last stable node image copying repo files, installing deps then running client and server after the start. Compose helps concentrating all config in the same place. It may not have much sense here as we could do the same with `docker build` and `docker run` commands. However, in order to scale, compose allows us to have several images under the same network, so I decided to go through this way even understanding that at this point can result a bit overkill (I think that to think about scalability is nice to have when you need to develop something, no matter what).
It connects docker `9000` port with the host one. Also creates volumes for the application, dependencies and dist folder.


## Improvements:

- Split code in chunks with webpack: I am not an expert on this but basically code could be splitted in chunks to avoid duplication.
- Typechecker: I worked before with technologies such as Typescript and Flow. They can be useful to avoid errors in the data handling, improve readability and discover invariants in the code before runtime, avoiding bugs.
- GraphQL: It makes sense to have it in the server once it needs to manage big ammount of requests. In this case the data aggregation cames only from the same endpoint. In this time could be an overkill adding it, but not blocker to do it in the future.
- E2E testing: Cypress for this purpose could be a perfect candidate.
- Translations: Some texts could be needed to be translated... since we are only getting information for english speakers, this is not important now.
- Implement error pages. With React Router, to show a page with an error message and link that redirects to home instead of receiving whatever error.
