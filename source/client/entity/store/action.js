import { fetchGet, fetchPost } from '../../common/fetch';

export const EntityActions = {
    ENTITY_REQ: 'Entity requested.',
    ENTITY_RQI: 'Entity request ignored. Data exists.',
    ENTITY_UPD: 'Entity update requested.',
    ENTITY_RES: 'Entity request results.',
    ENTITY_ERR: 'Entity request error.',
}

export const action_fetchEntity = (type, data, err, entity) => {
    return {
        type, data, err, entity
    };
}
export const asyncAction_fetchEntity = (entity) => {

    return (dispatch, state) => {

        dispatch(action_fetchEntity(EntityActions.ENTITY_REQ));
        (fetchGet(entity.url)
            .then(data => {
                return data;
            })
            .catch(err => {
                dispatch(action_fetchEntity(EntityActions.ENTITY_ERR, null, err, entity));
                console.error(err);
            })
        )
            .then(data => {
                dispatch(action_fetchEntity(EntityActions.ENTITY_RES, data, null, entity));
            })
            .catch(err => {
                console.error(err)
            })
    }
}

export const action_saveEntity = (type, data, err, entity) => {
    return {
        type, data, err, entity
    };
}
export const asyncAction_saveEntity = (entity, data) => {

    return (dispatch, state) => {

        dispatch(action_saveEntity(EntityActions.ENTITY_UPD));
        return (fetchPost(entity.url, data)
            .then(data => {
                return data;
            })
            .catch(err => {
                dispatch(action_saveEntity(EntityActions.ENTITY_ERR, null, err, entity));
                console.error(err);
            })
        )
            .then(data => {
                dispatch(action_saveEntity(EntityActions.ENTITY_RES, data, null, entity));
            })
            .catch(err => {
                console.error(err);
            })
    }
}