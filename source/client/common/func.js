import moment from 'moment';

export const sortEntity = (entity, sortBy, desc) => {

    if (entity && sortBy) {
        let values = [];
        for (var key in entity.byIds) {
            values.push(entity.byIds[key]);
        }
        //let values = Object.values(entity.byIds);
        return values.sort(function (a, b) {
            var x = a[sortBy];
            var y = b[sortBy];
            if (desc)
                return ((x < y) ? 1 : ((x > y) ? -1 : 0));
            else
                return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
    }
}

export const commentDate = (dt) => {
    return moment(dt).format('MMM DD, YYYY, hh:mm A');
}

export const findIndex = (items, findKey) => {
    var index = -1;
    for (var i = 0; i < items.length; ++i) {
        if (items[i] == findKey) {
            index = i;
            break;
        }
    }
    return index;
}