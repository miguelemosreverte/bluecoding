import axios from "axios"

export const fetchCount = (keyword = "chessburgers") => 
    axios.get("http://api.giphy.com/v1/gifs/search?api_key=gdwjphWDU038gRbOZBeOX0oNWQZEdPGM&q=" + keyword)
  
  