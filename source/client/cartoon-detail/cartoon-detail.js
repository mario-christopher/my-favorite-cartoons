import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Image } from '../common/image';
import { CharacterList } from './character-list';

export class CartoonDetail extends React.PureComponent {

    render() {
        let cartoon = this.props.cartoons.byIds[this.props.match.params['id']];
        return (
            <div>
                <div className='detail'>
                    {cartoon &&
                        <div className='panel panel-warning'>

                            <div className='panel-heading'>
                                <div className='_row'>
                                    <b className='detail-header'>{cartoon.name}</b>
                                    <span className='_stretch'></span>
                                    <Link className='detail-back-link' to={`/cartoons`}>&lt;&lt; back to list</Link>
                                </div>

                            </div>

                            <div className='panel-body'>
                                <Image pic={cartoon.pic} css='banner' />
                                {cartoon.description}
                            </div>

                            <div className='panel-footer panel-warning'>
                                Read more about <a target='_blank' href={cartoon.link}><b>{cartoon.name}</b></a>.
                            </div>
                        </div>
                    }
                </div>
                {cartoon &&
                    <CharacterList characters={this.props.characters} cartoonId={cartoon._id} />
                }
            </div>
        );
    };
}

const mapPropsToState = (state) => {
    return {
        cartoons: state.entities.entities.cartoon,
        characters: state.entities.entities.character,
    };
}
CartoonDetail = connect(mapPropsToState)(CartoonDetail)