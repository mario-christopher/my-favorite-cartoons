import React from 'react';
import { asDialog } from '../dialog/dialog';

export class About extends React.PureComponent {

    render() {
        return (
            <div className='about-features'>
                {`This site is a sample for an application written using the MERN stack.
                            The features incorporated are :`}
                <br /><br />
                <ol>
                    <li>MongoDB - as the app's datastore.</li>
                    <li>Express - as the web framework, and for RESTApi.</li>
                    <li>React - to create the front end.</li>
                    <li>Node - to handle the server stuff.</li>
                    <li>Redux - used for client side state management.</li>
                    <li>d3.js - used for custom graphs on the front end.</li>

                    <li>Segregation of code in client side based on code Features.</li>
                    <li>Custom Entityset, for ease of State Management of entities in Redux.</li>
                    <li>Use of Async Actions (with redux-thunk middleware) to load data into state asynchronously.</li>
                    <li>Use of Controlled and UnControlled components.</li>
                    <li>Custom Modal dialog for application-wide modals.</li>
                    <li>Use of Higher Order Components (HOC) to address Modal Dialog cross-cutting-concern.</li>
                    <li>Implementation of Container and Presentational Component concept.</li>
                    <li>Use of multiple data sources in the backend- MongoDB and eternal API (TheMovieDatabase API- TMDB).</li>
                    <li>Use of ES6 features and Promises on Server and Client.</li>

                </ol>
            </div>
        );
    };
}

About.displayName = 'About';

About = asDialog(About);