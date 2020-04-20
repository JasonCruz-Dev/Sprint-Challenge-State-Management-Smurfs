import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/Index";

import { Card } from "reactstrap";

const SmurfList = (props) => {
  useEffect(() => {
    props.getData();
  }, []);

  const card = {
    // border: "5px black",
    background: "rgb(255, 157, 0)",
    borderRadius: "2%",
    width: "150px",
    margin: "2%",
    padding: "3%",
    color: "white",
    fontWeight: "700",
  };

  return (
    <>
      {props.error ? (
        <div className='error'>{props.error}</div>
      ) : (
        props.smurfs.map((smurf) => {
          return (
            <div className='smurf-container'>
              <div style={card}>
                <div>
                  <h3>{smurf.name}</h3>
                  <div>
                    <div>Age: {smurf.age}</div>
                    <div>Height: {smurf.height}</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    error: state.error,
  };
};

export default connect(mapStateToProps, { getData })(SmurfList);
