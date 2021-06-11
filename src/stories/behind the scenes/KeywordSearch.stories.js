import React from 'react';

import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import 'bootstrap/dist/css/bootstrap.min.css';

import KeyboardSearch from '../../components/KeywordSearch';

export default {
  title: 'Temporal Isolated Demo/KeywordSearch',
  decorators: [withKnobs],
  component: KeyboardSearch 
};


export const KeyWordSearchDemoWithChesseburgersw = ({keyword}) => 
  <KeyboardSearch keyword={text('keyword', 'cheeseburgers')} />
  