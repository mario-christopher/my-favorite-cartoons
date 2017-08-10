const configPicker = () => {
    let modulePath = `./config/config-${process.env.NODE_ENV || 'dev'}`;
    return modulePath;
}

export const config = require(configPicker()).config;