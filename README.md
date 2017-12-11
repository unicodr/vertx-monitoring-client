Monitor Services
===============

Getting started
--------------
This is a demo UI for basic service monitoring.
The UI is built using Typescript and Express and is backed by a backend service, repo [here](https://github.com/unicodr/vertx-monitoring-service), which is built using Vert.x to expose a HTTP/JSON web API to create, read, and delete services and checking the status of the listed services every minute.  

The UI is simple, no CSS or styling, it lists all the services and let you create new and delete existing.

Both the UI and backend are deployed with [Heroku](https://www.heroku.com/) and are configured to be automatically built and deployed on changes to the master branch. 
Feel free to checkout the [live demo](https://vertx-monitoring-client.herokuapp.com/). 


Running it locally
--------------
Checkout the code.  

Configure the environment variables for your backend host and server: 
```
SERVER_HOST=https://vertx-monitoring-service.herokuapp.com
SERVER_PORT=443
```
This example works with the deployed API in Heroku.

Start application locally on port 3000 by running:

```
npm install
npm start
```

Browse to http://localhost:3000/

Enjoy!