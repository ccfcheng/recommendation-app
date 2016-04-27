[![Stories in Ready](https://badge.waffle.io/ccfcheng/recommendation-app.png?label=ready&title=Ready)](https://waffle.io/ccfcheng/recommendation-app)
# Restaurant Recommendation Web App 

Proof of concept web app that recommends local restaurants to users. Powering this is a custom recommendation engine that takes a user's historical choices into account in its machine learning algorithm. 

The frontend is built in React, and the server is built in Node/Express. Firebase is used for user and user data storage.

## Getting Started

After cloning the repo to your system, run `npm install` to install dependencies, then run `npm start` to create the Webpack bundle and start the development server. 

Locally, the web app will be hosted on `http://localhost:8080`. 

Currently, `nodemon` enables hot server reloads on change, but any frontend changes will have to be rebuilt using Webpack. 

In the near future, `webpack-dev-server` will be used to enable live incremental builds on frontend changes to improve iteration time. 

### Prerequisities

The development environment for this repo is using Node 5.11 and npm 3.8.6. Travis CI will be used in the future.

### Installing and Scripts

If node and npm are not installed on your system, it is recommended to install [nvm](https://github.com/creationix/nvm) to switch between versions.

Quick start: Build webpack bundle and start server
```
npm start
```

Run Mocha/Chai Unit Tests:
```
npm test
```
To run tests continuously:
```
npm run test:watch
```

Clean the `dist` directory:
```
npm run clean
```

Create copy of `index.html` from `src` to `dist`:
```
npm run move
```

Create Webpack bundle in `dist`:
```
npm run pack
```

Clean `dist` folder and create appropriate bundle:
```
npm run bundle
```

## Deployment

Future iteration will have `master` branch hosted on Heroku. Travis CI will also be implemented in the deployment workflow.

## Built With

* [React](https://facebook.github.io/react/) - Frontend
* [Material-UI](http://www.material-ui.com/#/) - UI Components
* [Babel](http://babeljs.io/) - JSX and ES2015 Transpiling
* [Yelp](https://www.npmjs.com/package/yelp) - Yelp API wrapper NPM module
* [Express](http://expressjs.com/) - Server
* [Firebase](https://www.firebase.com/) - Database
* [Mocha](https://mochajs.org/), [Chai](http://chaijs.com/) - Unit Testing
* [Webpack](https://webpack.github.io/) - Bundles and Builds

## Authors

* **Cliff Saporta Cheng** - [ccfcheng](https://github.com/ccfcheng)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

