# Travel insurance claims

This project is based on awesome [create-react-app](https://github.com/facebookincubator/create-react-app) project, utilizes Firebase as simple and live reload storage and it's build on top notch ES standards and SASS preprocessor.

## Project setup

Project was developed and tested on `Node 8.6.0` and `npm 5.3.0`.

#### Database:
 1. Create Firebase project
 2. Generate api keys and tokens according to `.env.default` file
 3. `cp .env.default .env`
 4. fill up env variables with Firebase tokens/keys
> Note: Firebase doesn't need any fixtures/schema

#### Development:

 1. Install node dependencies `npm i`
 2. Start project `npm start`
 > Note: create-react-app is based on webpack-dev-server, hence you can simply start coding and changes will be autmagically reflected in browser. To build release just run `npm run build`.

#### Deployment:
This project was build with the idea of hosting it on heroku, so it already includes Procfile and simple node server for serving the app. You can create free app on heroku, setup config vars according to `.env.default` file (similar as with database section). If you're familiar with heroku, you won't have any problems deploying app, otherwise read about heroku-cli tool.