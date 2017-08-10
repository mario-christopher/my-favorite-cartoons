import React from 'react';
import { asDialog } from '../dialog/dialog';

export class About extends React.PureComponent {

    render() {
        return (
            <div className='about-features'>
                {`This site is a sample for an application written using the MERN stack. 
                            You can access this dialog anytime by clicking on the 'About' link in the site's footer.
                            The features incorporated are :`}
                <br /><br />
                <ol>
                    <li><b>MongoDB</b>: The data is stored in a local Mongo database.</li>
                    <li><b>Express</b> is used for the Web framework.</li>
                    <li><b>ReactJS</b> is used to develop the front end.</li>
                    <li><b>Node</b>: The backend runs on Node.</li>
                    <li><b>Redux</b> is used for client side State Management.</li>
                    <li>Use of <b>d3.js</b> to draw custom charts.</li>
                    <li>Use of <b>react-router-dom</b> to manage routes.</li>
                    <li>Use of <b>ES6</b> (ECMA-2015) features in code (Client/React and Server/Node).</li>
                    <li>Segregation of code in client side based on code <b>Features</b>.</li>
                    <li>Use of <b>REST API</b> for data from the server.</li>
                    <li>Segregation of REST API, similar to Controllers/Actions in MVC framework.</li>
                    <li>Use of <b>multiple</b> data sources in the backend- MongoDB and eternal API (TheMovieDatabase API- <b>TMDB</b>).</li>
                    <li><b>Custom Entityset</b>, for ease of State Management of entities in Redux.</li>
                    <li>Integration of the Redux Dev Tools to monitor Actions updating the State.</li>
                    <li>Use of <b>Async Actions</b> (with <b>redux-thunk</b> middleware) to load data into state asynchronously.</li>
                    <li>Async actions check for data availability in State before attempting XHR.</li>
                    <li>Use of <b>axios</b> to have same code usage doing XHR, on both Client and Server.</li>
                    <li>Use of Controlled and UnControlled components.</li>
                    <li><b>Custom Modal</b> dialog for application wide modals.</li>
                    <li>Use of <b>Higher Order Components</b> (HOC) to address Modal Dialog cross-cutting-concern.</li>
                    <li>Implementation of <b>Container and Presentational</b> Component concept.</li>
                    <li>Compatible with all modern browsers (using polyfills/custom shims where needed).</li>
                    <li>* Authentication with Login screen.</li>
                    <li>* <b>Guarded Links/Buttons</b> to redirect to Login before authenticated actions.</li>
                    <li>* <b>Server Side Rendering</b> of pages.</li>
                    <li>* Use of <b>JWT</b> (Json Web Tokens) to manage logged in user sessions.</li>
                    <li>* Use of <b>Bootstrap</b> for responsive experience.</li>
                    <li>* Input Validation.</li>
                    <li>* Unit Tests.</li>
                </ol>
                * - Denotes items in progress/ not done yet.
            </div>
        );
    };
}

About.displayName = 'About';

About = asDialog(About);