import * as mixin from './mixin';

const colors = {
    primary: '#00a0ff',
    brand: '#75bcde',
    blue: '#e8f6fc',
    yellow: '#fdffe4',
    gray: '#f6f8f7',
    green: '#46be28',
    light: '#ccc',
    blueGrey: '#607d8b',
    white: '#fff',
};

const fontSize = {
    xs: '10px',
    sm: '12px',
    base: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    xl2: '30px',
};

const fontWeight = {
    regular: 400,
    medium: 500,
    bold: 700,
};

const zIndex = {
    base: 1,
    dropdown: 99,
    modal: 99,
    tooltip: 100,
    sidebar: 200,
    header: 500,
};

const transitions = {
    duration: {
        shortest: 150,
        short: 200,
        standard: 300,
    },
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    mixin,
    colors,
    fontSize,
    fontWeight,
    zIndex,
    transitions,
};
