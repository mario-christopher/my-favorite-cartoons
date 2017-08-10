import React from 'react';
import { Image } from '../common/image';

export class CartoonPreview extends React.PureComponent {
    render() {
        let cartoon = this.props;
        return (
            <div className='col-sm-4 cartoon-preview'>
                <div className='_row'> 
                    <span className='_stretch'></span>
                    <Image pic={cartoon.pic} css='' />
                    <span className='_stretch'></span>
                </div>
                
                <h3>{cartoon.name}</h3>
            </div>
        );
    };
}