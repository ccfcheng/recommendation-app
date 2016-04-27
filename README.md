[![Build Status](https://travis-ci.org/ccfcheng/recommendation-app.svg?branch=develop)](https://travis-ci.org/ccfcheng/recommendation-app)
[![Stories in Ready](https://badge.waffle.io/ccfcheng/recommendation-app.png?label=ready&title=Ready)](https://waffle.io/ccfcheng/recommendation-app)
# Restaurant Recommendation Web App

Proof of concept web app that recommends local restaurants to users. Powering this is a custom recommendation engine that takes a user's historical choices into account in its machine learning algorithm.

The frontend is built in React, and the server is built in Node/Express. Firebase is used for user and user data storage.

## Getting Started

After cloning the repo to your system, running `npm run dev` will start the Webpack Dev Server with a bundle that features live incremental builds. Navigate to [http://localhost:8080](http://localhost:8080) to see the web app in development.

### Development & Scripts

The development environment for this repo is using Node 6.0.0 and npm 3.8.6.

If node and npm are not installed on your system, it is recommended to install [nvm](https://github.com/creationix/nvm) to switch between versions.

Edit files in `./app/` folder, this is the entry point for the Webpack bundle. Built bundle will be written to `./dist` folder.

If any changes need to be made to the main html wrapper at `./index.html`, they will be copied to the `./dist` folder on build.

Start development server:
```
npm run dev
```

Simulate Production/Heroku deployment behavior:
```
npm run prod
```

Run Mocha/Chai Unit Tests:
```
npm test
```
To run tests continuously:
```
npm run test:watch
```

## Deployment

Merges to `master` branch are automatically deployed on Heroku at [https://yelp-rec.herokuapp.com/](https://yelp-rec.herokuapp.com/). Travis CI is implemented in the deployment workflow.

## Built With

* [React](https://facebook.github.io/react/) - Frontend
* [Material-UI](http://www.material-ui.com/#/) - UI Components
* [Babel](http://babeljs.io/) - JSX and ES2015 Transpiling
* [Yelp](https://www.npmjs.com/package/yelp) - Yelp API wrapper NPM module
* [Express](http://expressjs.com/) - Server
* [Firebase](https://www.firebase.com/) - Database
* [Mocha](https://mochajs.org/), [Chai](http://chaijs.com/) - Unit Testing
* [Webpack](https://webpack.github.io/) - Bundles and Builds
* [Travis CI](https://travis-ci.org) - Continuous Integration

## Authors

* **Cliff Saporta Cheng** - [ccfcheng](https://github.com/ccfcheng)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

