import React from 'react';

import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import 'bootstrap/dist/css/bootstrap.min.css';

import GifCarousel from '../../components/GifCarousel';

export default {
  title: 'Temporal Isolated Demo/GifCarousel',
  decorators: [withKnobs],
  component: GifCarousel 
};


export const GifCarouselExample = ({keyword}) => 
  <GifCarousel gifs={[
    "https://media4.giphy.com/media/32dfpYx8kBX1bXSEu8/giphy.gif?cid=3ec52fdbprb2saa0xazrwqktek94ygspanw4of6siqqdnz9c&rid=giphy.gif&ct=g",
    "https://media3.giphy.com/media/11TU9wJqEtr2ZW/giphy.gif?cid=3ec52fdbprb2saa0xazrwqktek94ygspanw4of6siqqdnz9c&rid=giphy.gif&ct=g",
    "https://media1.giphy.com/media/Y2hzKCys8H5KWlCrfV/giphy.gif?cid=3ec52fdbprb2saa0xazrwqktek94ygspanw4of6siqqdnz9c&rid=giphy.gif&ct=g"
  ]} />
  