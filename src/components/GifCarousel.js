

import React from 'react';
import { Carousel } from 'react-bootstrap';



export default class GifCarousel extends React.Component {

    render() {
     return (
        <div>
          <Carousel>
          {                
            this.props.gifs.map(url => 
            <Carousel.Item key={"CarouselItem Gif" + url}>
              <img
                className="d-block w-100"
                src={url}
              />
            </Carousel.Item>
            )
          }
          </Carousel>
        </div>        
      );
    }
}
