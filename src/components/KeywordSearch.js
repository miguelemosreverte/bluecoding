

import React from 'react';
import axios from 'axios';
import { Carousel } from 'react-bootstrap';



export default class KeywordSearch extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
          giphyResponse: { data: []}
        }

        axios.get("http://api.giphy.com/v1/gifs/search?api_key=gdwjphWDU038gRbOZBeOX0oNWQZEdPGM&q=cheeseburgers").then(
          response => { this.setState({giphyResponse: response.data})},
          error => { console.error("Failed to contact Giphy for KeywordSearch")}
        ) // TODO Maybe consider using async hooks for this one? 
        // TODO take the api_key and place it on the .env files
    }

    render() {
     return (
        <div>
          <Carousel>
          {                
            this.state.giphyResponse.data.map( ({images: {original: {url}}}) => 
            <Carousel.Item key={"CarouselItem Giphy" + url}>
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
