import axios from 'axios';

export const fetchGet = (url) => {
    return axios.get(
        'api' + url,
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(result => {
            return result.data;
        })
        .catch(err => {

        });
}

export const fetchPost = (url, data) => {
    return axios.post(
        'api' + url,
        data,
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(result => {
            return result.data;
        })
        .catch(err => {

        })
}