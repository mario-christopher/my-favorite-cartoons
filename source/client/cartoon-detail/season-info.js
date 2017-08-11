import React from 'react';

import { BarChart } from '../common/bar-chart';
import {entityToList} from '../common/func';

export class SeasonInfo extends React.PureComponent {

    render() {
        let seasonList = entityToList(this.props.seasons);
        seasonList = seasonList.filter(season => season.cartoonId == this.props.cartoonId);
        let graphInfo;

        if (seasonList && seasonList.length > 0) {
            graphInfo = {
                data: seasonList.map(season => season.episode_count),
                xAxisLabel: 'Seasons',
                yAxisLabel: 'Episodes',
            }
        }

        return (
            <div className='panel panel-default _spc-top-2'>
                <div className='panel-heading'>
                    Seasons / Episodes:
                    </div>
                <div className='panel-body'>
                    {graphInfo ? <BarChart graphInfo={graphInfo} /> : 'Seasons information not available !'}
                </div>
            </div>
        );
    };
}