# My Favorite Cartoons !
**My Favorite Cartoons** is a simple MERN Stack application built using :
* MongoDB - *as the app's datastore.*
* Express - *as the web framework, and for RESTApi.*
* React - *to create the front end.*
* Node - *to handle the server stuff.*
* Redux - *used for client side state management.*
* d3.js - *used for custom graphs on the front end.*
* Live app hosted on [Heroku](https://www.heroku.com/) and [mLab](https://mlab.com/).

## Try it out:
https://my-favorite-cartoons.herokuapp.com/

## Setup
* `git clone https://gitlab.com/mario-christopher/my-favorite-cartoons.git`
* `cd my-favorite-cartoons`
* `npm install`
* Edit the file `source\server\config\config-dev.js` to set your MongoDb settings (DBName and Server Url), or let it remain as the defaults.
* `npm run initdb` - *to insert seed/test data into your MongoDB instance.*
* `npm run server` - *runs server on port 3000.*
* `npm run client` - *runs client on port 3001 (on another terminal).*
* Browse to http://localhost:3001 *( tested on Chrome and IE.11 ).*


##  Application features:

* Segregation of code in client side based on code Features.
* **Custom Entityset**, for ease of State Management of entities in Redux.
* Use of Async Actions (with **redux-thunk** middleware) to load data into state asynchronously.
* Use of Controlled and UnControlled components.
* **Custom Modal** dialog for application-wide modals.
* Use of **Higher Order Components** (HOC) to address Modal Dialog cross-cutting-concern.
* Implementation of Container and Presentational Component concept.
* Use of multiple data sources in the backend- MongoDB and eternal API (TheMovieDatabase API- **TMDB**).
* Use of ES6 features and Promises on Server and Client.

##   License

Shared under MIT License.