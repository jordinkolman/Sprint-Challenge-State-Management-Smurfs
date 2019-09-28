import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  addSmurf,
  getSmurfs,
  deleteSmurf,
  setSmurfToEdit,
  updateSmurf,
} from '../actions';
import './App.css';

import FormikSmurfForm from './SmurfForm';
import EditSmurfForm from './EditSmurfForm';

const App = props => {
  useEffect(() => {
    if (props.smurfs.length === 0) {
      props.getSmurfs();
    }
  }, [props.smurfs]);

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      {props.isEditing ? (
        <EditSmurfForm
          isEditing={props.isEditing}
          smurfToEdit={props.smurfToEdit}
          updateSmurf={props.updateSmurf}
        />
      ) : (
        <FormikSmurfForm
          addSmurf={props.addSmurf}
          isEditing={props.isEditing}
        />
      )}
      {props.smurfs.map(smurf => {
        return (
          <div key={smurf.id} className="smurf-card">
            <p>Name: {smurf.name}</p>
            <p>Age: {smurf.age}</p>
            <p>Height: {smurf.height}</p>
            <div>
              <button onClick={() => props.setSmurfToEdit(smurf)}>
                Update
              </button>
              <button onClick={() => props.deleteSmurf(smurf.id)}>
                Remove
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    error: state.error,
    isLoading: state.isLoading,
    isEditing: state.isEditing,
    smurfToEdit: state.smurfToEdit,
  };
};

export default connect(
  mapStateToProps,
  { addSmurf, getSmurfs, deleteSmurf, setSmurfToEdit, updateSmurf },
)(App);