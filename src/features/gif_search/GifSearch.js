import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  searchGifs,
  getGifs,
} from './gif_search';
import styles from './GifSearch.module.css';
import { Carousel } from 'react-bootstrap';

import GifCarousel from '../../components/GifCarousel';

export function GifSearch() {
  const gifs = useSelector(getGifs);
  const dispatch = useDispatch();
  const [searchKeyword, setSearchKeyword] = useState('chess');

  return (
    <div>  
      <div className={styles.row}>
        

        <input
          className={styles.textbox}
          aria-label="Set keyword"
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
        />

        <button
          className={styles.asyncButton}
          onClick={() => dispatch(searchGifs(searchKeyword))}
        >
          Search
        </button>
        </div>

        <div className={styles.row}>
        <span className={styles.value}>



        <GifCarousel 
          gifs = {gifs.map( ({images: {original: {url}}}) => url ) }
        /> 


        </span>

      </div>
    </div>
  );
}
