import { createGlobalState } from 'react-hooks-global-state';

const { setGlobalState, useGlobalState } = createGlobalState({
    menuActive: false,
    lightboxActive: false,
    imageNumber: 0,
    imageGallery: 0,
});

export const menuSwitch = () => {
    setGlobalState('menuActive', (v) => !v);
};

export const lightboxSwitch = () => {
    setGlobalState('lightboxActive', (v) => !v);
};

export const setImageNumber = (imageNumber) => {
    setGlobalState('imageNumber', (v) => imageNumber);
};

export const setImageGallery = (imageGallery) => {
    setGlobalState('imageGallery', (v) => imageGallery);
};

export const nextNumber = (imageNumber) => {
    setGlobalState('imageNumber', (v) => v + 1);
};

export const prevNumber = (imageNumber) => {
    setGlobalState('imageNumber', (v) => v - 1);
};

export const resetNumber = (imageNumber) => {
    setGlobalState('imageNumber', (v) => 1);
};

export const galleryEnd = (imageNumber) => {
    setGlobalState('imageNumber', (v) => 6);
};

export { useGlobalState };