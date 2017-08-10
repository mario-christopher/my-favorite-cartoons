import React from 'react';

import { asDialog } from '../dialog/dialog';
import { asyncAction_saveEntity } from '../entity/store/action';
import { COMMENT } from '../entity/entity-name';

export class NewComment extends React.PureComponent {

    componentDidMount = () => {
        if (this.props.dialogActions)
            this.props.dialogActions.setOk(this.onOk);
    }

    onOk = () => {
        let visitor = this.props.visitor;
        let newComment = {
            visitor: visitor ? visitor.visitor : '',
            comment: this.input.value
        };
        this.props.dispatch(asyncAction_saveEntity(COMMENT, newComment))
            .then(() => {
                if (this.props.dialogActions)
                    this.props.dialogActions.close();
            })
    }

    render() {
        return (
            <span>
                <input autoFocus ref={(elem) => this.input = elem} className='form-control' />
            </span>
        );
    };
}

NewComment.displayName = 'New Comment';

NewComment = asDialog(NewComment);