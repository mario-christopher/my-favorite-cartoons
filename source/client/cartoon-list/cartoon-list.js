import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { CartoonPreview } from './cartoon-preview';

export class CartoonList extends React.PureComponent {

    render() {
        let cartoons = this.props.cartoons;
        return (
            <div className='row'>
                {cartoons &&
                    cartoons.allIds.map(id => (
                        <Link key={id} to={`/cartoons/${id}`}>
                            <CartoonPreview  {...cartoons.byIds[id]} />
                        </Link>
                    ))
                }
            </div>
        );
    };
}

const mapPropsToState = (state) => {
    return {
        cartoons: state.entities.entities.cartoon
    };
}
CartoonList = connect(mapPropsToState)(CartoonList);