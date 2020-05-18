import { createGlobalState } from 'react-hooks-global-state';

const { setGlobalState, useGlobalState } = createGlobalState({
    menuActive: false,
    lightMode: false,
    lightboxActive: false,
    imageNumber: 0,
    imageGallery: 0,
    videoExpanded: false,
    infoOpen: false,
});

export const menuSwitch = () => {
    setGlobalState('menuActive', (v) => !v);
};

export const setLightMode = () => {
    setGlobalState('lightMode', (v) => !v);
};

export const lightboxSwitch = () => {
    setGlobalState('lightboxActive', (v) => !v);
};

export const infoSwitch = () => {
    setGlobalState('infoOpen', (v) => !v);
};

export const lightboxOpen = () => {
    setGlobalState('lightboxActive', (v) => true);
};

export const setImageNumber = (imageNumber) => {
    setGlobalState('imageNumber', (v) => imageNumber);
};

export const setImageGallery = (imageGallery) => {
    setGlobalState('imageGallery', (v) => imageGallery);
};

export const setVideoExpanded = (videoExpanded) => {
    setGlobalState('videoExpanded', (v) => videoExpanded);
};


export { useGlobalState };