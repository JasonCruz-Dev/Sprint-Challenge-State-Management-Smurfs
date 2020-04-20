import React, { useState } from "react";
import { connect } from "react-redux";
import { getData, addSmurf } from "../actions/Index";
import { Button, Input, Form, Spinner } from "reactstrap";

const SmurfForm = (props) => {
  const [newSmurf, setNewSmurf] = useState({});

  console.log("This is setNames props", props);

  const handleGetData = (e) => {
    e.preventDefault();
    props.getData();
  };

  const handleNameChanges = (e) => {
    setNewSmurf({ ...newSmurf, name: e.target.value });
  };

  const handleAgeChanges = (e) => {
    setNewSmurf({ ...newSmurf, age: e.target.value });
  };

  const handleHeightChanges = (e) => {
    setNewSmurf({ ...newSmurf, height: e.target.value });
  };

  const handleAddSmurf = (e) => {
    e.preventDefault();
    props.addSmurf(newSmurf);
    console.log("New Smurf Added!!", newSmurf);
  };

  return (
    <div>
      <Form className='form'>
        <Input
          type='text'
          required
          name='name'
          value={newSmurf.name}
          onChange={handleNameChanges}
          placeholder='Smurfs Name'
        />
        <br />
        <Input
          type='text'
          required
          name='age'
          value={newSmurf.age}
          onChange={handleAgeChanges}
          placeholder='Smurfs Age'
        />
        <br />
        <Input
          required
          type='text'
          name='height'
          value={newSmurf.height}
          onChange={handleHeightChanges}
          placeholder='Smurfs Height'
        />
        <br />
        <Button
          style={{ color: "black", margin: "3%" }}
          color='warning'
          type='submit'
          onClick={handleAddSmurf}>
          Add Smurf
        </Button>
        <Button
          color='warning'
          style={{
            color: "black",
            margin: "3%",
            // width: "130px",
            // height: "50px",
          }}
          onClick={handleGetData}>
          Load Smurf's
        </Button>
        {/* <div>{props.isFetchingData ? <div>Fetching Smurfs!!</div> : <></>}</div> */}

        <div className='load-spinner'>
          {props.isFetchingData ? <Spinner color='warning'>Fetching Smurfs!!</Spinner> : <></>}
        </div>
      </Form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isFetchingData: state.isFetchingData,
  };
};

export default connect(mapStateToProps, { getData, addSmurf })(SmurfForm);
