import React from 'react';
import { CharacterDetail } from './character-detail';

export class CharacterList extends React.PureComponent {

    render() {
        let characters = this.props.characters;
        let cartoonId = this.props.cartoonId;
        return (
            <div className='panel panel-default _spc-top-2'>
                <div className='panel-heading'>
                    <h4><b>Main Cast :</b></h4>
                </div>

                {characters &&
                    characters.allIds
                        .filter(id => characters.byIds[id].cartoonId === cartoonId)
                        .map(id => <CharacterDetail key={id} {...characters.byIds[id]} />)}
            </div>
        );
    }
}