import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Layout } from './layout';
import { DataLoader } from '../common/data-loader';
import { CARTOON, CHARACTER, SEASON } from '../entity/entity-name';
import { CartoonList } from '../cartoon-list/cartoon-list';
import { CartoonDetail } from '../cartoon-detail/cartoon-detail';

export class App extends React.PureComponent {

    render() {
        return (
            <Router>
                <Layout >
                    <div>
                        <Route exact={true} path='/' render={props => <DataLoader {...props} entities={[CARTOON]} component={CartoonList} />} />
                        <Route exact={true} path='/cartoons' render={props => <DataLoader  {...props} entities={[CARTOON]} component={CartoonList} />} />
                        <Route exact={true} path='/cartoons/:id' render={props => {
                            return <DataLoader  {...props} entities={[
                                CARTOON,
                                { name: CHARACTER.name, url: props.match.url + '/characters' },
                                { name: SEASON.name, url: props.match.url + '/seasons' }
                            ]} component={CartoonDetail} />
                        }} />
                    </div>
                </Layout>
            </Router>
        );
    };
}