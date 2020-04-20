import axios from "axios";

export const SMURFS_START = "SMURFS_START";
export const SMURFS_SUCCESS = "SMURFS_SUCCESS";
export const SUMRFS_FAILED = "SUMRFS_FAILED";

export const smurfsApi = () => (dispatch) => {
  dispatch({ type: SMURFS_START });

  setTimeout(() => {
    axios
      .get("http://localhost:3333/smurfs")
      .then((response) => {
        dispatch({ type: SMURFS_SUCCESS, payload: response.data });
      })
      .catch((error) => {
        console.error("Stop! Go back!!", error);
        dispatch({ type: SUMRFS_FAILED, payload: "Loading error!!" });
      }, []);
  });
};

export const addSmurf = (smurf) => (dispatch) => {
  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then((res) => {
      dispatch({ type: SMURFS_SUCCESS, payload: res.data });
    })

    .catch((err) => {
      console.error("STOP! This is an error: ", err);
    });
};
