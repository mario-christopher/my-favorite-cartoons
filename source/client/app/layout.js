import React from 'react';

import { About } from './about';
import { DataLoader } from '../common/data-loader';
import { CommentList } from '../comment/comment-list';
import { COMMENT } from '../entity/entity-name';

export class Layout extends React.Component {

    render() {
        return (
            <div>
                <header className='header-bg'>
                    <div className='_row'>
                        <span className='header-title _stretch'>My Favorite Cartoons !</span>
                    </div>
                </header>

                <section className='content'>
                    {this.props.children}
                </section>

                <section className='comments'>
                    <DataLoader entities={[COMMENT]} component={CommentList} />
                </section>

                <footer className='footer _row'>
                    <span className='footer-text'>{'\u00A9'} 2017. All rights reserved !</span>
                    <span className='_stretch' />
                    <About options={
                        {
                            prompt: (showDialog) => <span className='footer-text footer-about' onClick={showDialog}>About ...</span>,
                            header: 'About this application',
                            modalClass: 'modal-about',
                            showCancel: false
                        }
                    } />
                </footer>
            </div>
        );
    }
}