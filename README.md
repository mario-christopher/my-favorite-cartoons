# my-favorite-cartoons
A sample application that runs on a MERN Stack using Redux for State management.

## Try it out:
https://my-favorite-cartoons-mern.herokuapp.com/

## Software requirements:
* Node      (v6.9.1).
* NPM       (v3.10.8).
* MongoDB   (v3.4.3 , Local or remote).
* Google Chrome, IE11   (Not checked on other browsers).

The above versions were used during development. Lower versions may work, but its not been tested.

## Setup
1.    Open new terminal.
2.    `git clone https://gitlab.com/mario-christopher/my-favorite-cartoons-mern.git`.
3.    The source code will be cloned in your local folder `my-favorite-cartoons-mern`. cd 
4.    `cd my-favorite-cartoons-mern`
5.    `npm install`   _(to install npm dependencies)_
6.    Edit file `source\server\config/config-dev.js` to set your MongoDb settings (DBName and Server Url), or let it remain as the defaults.
7.    Make sure your MongoDB instance is up and running, or accessible (if remote) at the above set url, before the next step.
8.    `npm run initdb` _(to insert seed/test data into your MongoDB instance)_
9.   You should see `Completed initDB successfully.` in your terminal as a confirmation that the data has been inserted successfully.
10.   `npm run server`    _(to start the Node server serving the API)_
11.   You should see `Running server at port 3000` as a confirmation that the server started and connected to mongoDb.
12.   Open a new terminal.
13.   `npm run client`   _(to start the webclient)_
14.   You should see `webpack: Compiled successfully` as a confirmation that the client code compiled without issues (it may take a few seconds).
15.   Open a Google Chrome Browser window and browse to `http://localhost:3001/`
16.   Note: The API is served from `http://localhost:3000/' and the web site runs from 'http://localhost:3001/' 

##  Application features:

1.  **MongoDB**: The data is stored in a local Mongo database.
2.  **Express** is used for the Web framework.
3.  **ReactJS** is used to develop the front end.
4.  **Node**: The backend runs on Node.
5.  **Redux** is used for client side State Management.
6.  Use of **d3.js** to draw custom charts.
7.  Use of **react-router-dom** to manage routes.
8.  Use of **ES6 (ECMA-2015)** features in code (Client/React and Server/Node).
9.  Segregation of code in client side based on code Features.
10. Use of REST API for data from the server.
11. Segregation of REST API, similar to Controllers/Actions in MVC framework.
12. Use of multiple data sources in the backend- MongoDB and eternal API (TheMovieDatabase API- **TMDB**).
13. **Custom Entityset**, for ease of State Management of entities in Redux.
14. Integration of the Redux Dev Tools to monitor Actions updating the State.
15. Use of Async Actions (with **redux-thunk** middleware) to load data into state asynchronously.
16. Async actions check for data availability in State before attempting XHR.
17. Use of **axios** to have same code usage doing XHR, on both Client and Server.
18. Use of Controlled and UnControlled components.
19. **Custom Modal** dialog for application-wide modals.
20. Use of **Higher Order Components** (HOC) to address Modal Dialog cross-cutting-concern.
21. Implementation of Container and Presentational Component concept.
22. Compatible with all modern browsers (using polyfills/custom shims where needed).

###  Features in progress or not completed yet

23. Authentication with Login screen.
24. **Guarded Links/Buttons** to redirect to Login before authenticated actions.
25. Server Side Rendering of pages.
26. Use of JWT (Json Web Tokens) to manage logged in user sessions.
27. Use of Bootstrap for responsive experience.
28. Input Validation.
29. Unit Tests.

###   License

Shared under MIT License.