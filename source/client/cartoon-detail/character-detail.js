import React from 'react';
import { Image } from '../common/image';

export class CharacterDetail extends React.PureComponent {
    render() {
        let character = this.props;
        return (
            <div className='panel-body'>
                <Image pic={character.pic} css='character-img banner' />
                <h4><b>{character.name}</b></h4>
                <div>
                    {character.info}
                </div>
            </div>
        );
    }
}