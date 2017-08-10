import React from 'react';
import PropTypes from 'prop-types';

const IMG_URL = '/public/image/';

export const Image = ({ pic, css, tooltip }) => {
    return (
        <img className={`img-responsive ${css}`} src={`${IMG_URL}${pic}`} alt="" title={tooltip} />
    );
}

Image.propTypes = {
    pic: PropTypes.string.isRequired
}