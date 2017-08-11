import { EntityActions } from './action';
import { CARTOON, CHARACTER, COMMENT, VISITOR, SEASON } from '../entity-name';

const newEntity = () => {
    return {
        allIds: [],
        byIds: {}
    };
};

const initState = {
    entities: {
        [CARTOON.name]: newEntity(),
        [CHARACTER.name]: newEntity(),
        [VISITOR.name]: newEntity(),
        [COMMENT.name]: newEntity(),
        [SEASON.name]: newEntity()
    },
    ui: {
        loading: false,
        error: null
    }
}

export const entityReducer = (state = initState, action) => {

    switch (action.type) {

        case EntityActions.ENTITY_RQI:
        case EntityActions.ENTITY_UPD:
        case EntityActions.ENTITY_REQ:
            {
                let ui = { ...state.ui, loading: true };
                return { ...state, ui };
            }

        case EntityActions.ENTITY_RES:
            {
                let ui = { ...state.ui, loading: false };
                let updatedEntity = updateEntity(state.entities[action.entity.name], action.data);
                let entities = { ...state.entities, [action.entity.name]: updatedEntity };
                return { ...state, ui, entities };
            }

        case EntityActions.ENTITY_ERR:
            {
                let ui = { ...state.ui, loading: false, error: action.err };
                return { ...state, ui };
            }

        default:
            return state;
    }
}

const updateEntity = (currentSet, newSet) => {

    let updatedSet = { ...currentSet };
    updatedSet.allIds = [...updatedSet.allIds];
    updatedSet.byIds = { ...updatedSet.byIds };

    newSet && newSet.forEach(item => {
        if (!updatedSet.byIds[item['_id']])
            updatedSet.allIds.push(item['_id']);
        updatedSet.byIds[item['_id']] = item;
    })

    return updatedSet;
}