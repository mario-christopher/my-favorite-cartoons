import React from 'react';
import { connect } from 'react-redux';

import { Comment } from './comment';
import { NewComment } from './new-comment';
import { sortEntity } from '../common/func';

export class CommentList extends React.PureComponent {

    render() {
        let sortedCommentList = sortEntity(this.props.comments, 'dateTime', true);
        return (
            <div className='panel panel-default'>
                <div className='panel-heading'>
                    <div className='_row'>
                        <h4><b>Comments :</b></h4>
                        <span className='_stretch' />
                        <NewComment dispatch={this.props.dispatch}
                            visitor={{visitor:'guest'}}
                            options={
                                {
                                    prompt: (showDialog) => <button className='btn btn-warning' onClick={showDialog}>Add yours ...</button>,
                                    header: 'Add you comment',
                                    modalClass: 'modal-comment',
                                    authGuarded: false
                                }
                            } />
                    </div>
                </div>
                <div className='panel-body'>
                    {sortedCommentList && sortedCommentList.map(item => <Comment key={item._id} comment={item} />)}
                </div>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        comments: state.entities.entities.comment
    };
}
CommentList = connect(mapStateToProps)(CommentList);