import { createGlobalState } from 'react-hooks-global-state';

const { setGlobalState, useGlobalState } = createGlobalState({
    count: 0,
    menuActive: false,
});

export const menuSwitch = () => {
    setGlobalState('menuActive', (v) => !v);
};

export const countUp = () => {
    setGlobalState('count', (v) => v + 1);
};

export const countDown = () => {
    setGlobalState('count', (v) => v - 1);
};

export const setCount = (imageNumber) => {
    setGlobalState('count', (v) => imageNumber);
};

export const clearCount = (count) => {
    setGlobalState('count', (v) => 0);
};

export { useGlobalState };