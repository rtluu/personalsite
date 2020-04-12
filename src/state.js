import { createGlobalState } from 'react-hooks-global-state';

const { setGlobalState, useGlobalState } = createGlobalState({
    menuActive: false,
});

export const menuSwitch = () => {
    setGlobalState('menuActive', (v) => !v);
};

export { useGlobalState };