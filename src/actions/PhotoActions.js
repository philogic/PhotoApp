import axios from "axios";
import {FETCH_PHOTOS} from "./types";

export const fetchPhotos = () => {
  return (dispatch) => {
    axios.get("https://rocky-fortress-49003.herokuapp.com/photos")
      .then(response => {
        dispatch({
          type: FETCH_PHOTOS,
          payload: response.data
        })
      });
  }
};