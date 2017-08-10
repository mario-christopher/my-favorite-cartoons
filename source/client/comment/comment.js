import React from 'react';
import { commentDate } from '../common/func';

export class Comment extends React.PureComponent {
    render() {
        let comment = this.props.comment;
        return (
            <div className='comment panel'>
                <span className='comment-name'>{comment.visitor}</span>
                <span className='comment-date'>{commentDate(comment.dateTime)}</span>
                <div className='comment'>{comment.comment}</div>
            </div>
        );
    };
}