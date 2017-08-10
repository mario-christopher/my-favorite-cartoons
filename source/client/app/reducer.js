import { combineReducers } from 'redux';

import { entityReducer } from '../entity/store/reducer';
import { dialogReducer } from '../dialog/store/reducer';

export const appReducer = combineReducers({
    entities: entityReducer,
    dialogs: dialogReducer
});