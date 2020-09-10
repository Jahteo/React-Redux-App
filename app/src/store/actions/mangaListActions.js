import axios from "axios";

export const FETCH_MANGA = "FETCH_MANGA";
export const FETCH_TOPMANGA_SUCCESS = "FETCH_TOPMANGA_SUCCESS";
export const FETCH_MANGA_SUCCESS = "FETCH_MANGA_SUCCESS";
export const FETCH_MANGA_ERROR = "FETCH_MANGA_ERROR";

export const fetchManga = () => {
  return (dispatch) => {
    dispatch ({ type: FETCH_MANGA});
    axios
      .get("https://api.jikan.moe/v3/top/manga")
      .then((res) => {
        console.log("axios res: ", res.data.top)
        dispatch({ type: FETCH_TOPMANGA_SUCCESS, payload: res.data.top})
      })
      .catch(err => {
        console.error(err)
        dispatch({ type: FETCH_MANGA_ERROR, payload: err})
      })
  }
}