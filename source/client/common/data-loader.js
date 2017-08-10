import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { asyncAction_fetchEntity } from '../entity/store/action';

export class DataLoader extends React.PureComponent {

    loadData = (entitiesToLoad) => {
        entitiesToLoad.forEach(entity => {
            this.props.dispatch(asyncAction_fetchEntity(entity));
        });
    }

    render() {
        let {entities, component, ...rest} = this.props;
        this.loadData(entities);
        let toRender = <this.props.component {...rest} /> || <span></span>;
        return (
            <span>{toRender}</span>
        );
    };
}

DataLoader.propTypes = {
    entities: PropTypes.arrayOf(PropTypes.object).isRequired,
    component: PropTypes.any
}

DataLoader = connect()(DataLoader);