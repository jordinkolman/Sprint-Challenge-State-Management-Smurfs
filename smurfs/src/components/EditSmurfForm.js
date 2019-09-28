 
import React, { useState, useEffect } from 'react';

const EditSmurfForm = ({ isEditing, smurfToEdit, updateSmurf }) => {
  const [updatedSmurf, setUpdatedSmurf] = useState(null);

  useEffect(() => {
    if (!updatedSmurf) {
      let convertedSmurfToEdit = {
        ...smurfToEdit,
        height: smurfToEdit.height.match(/\d/g),
      };

      setUpdatedSmurf(convertedSmurfToEdit);
    }
  }, []);

  const handleChange = event => {
    setUpdatedSmurf({
      ...updatedSmurf,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    let convertedSmurfToEdit = {
      ...updatedSmurf,
      age: parseInt(updatedSmurf.age),
      height: String(updatedSmurf.height) + 'cm',
    };

    updateSmurf(convertedSmurfToEdit.id, convertedSmurfToEdit);

    console.log(convertedSmurfToEdit);
  };

  if (!updatedSmurf) {
    return <div>Loading...</div>;
  }

  return (
    <div className="smurf-form-container">
      <h2>Edit Smurf</h2>
      <form className="smurf-form" onSubmit={handleSubmit}>
        <label className="smurf-form-label">
          Name:
          <input
            type="text"
            name="name"
            value={updatedSmurf.name}
            onChange={handleChange}
            placeholder="Enter a name"
          />
        </label>
        <label className="smurf-form-label">
          Age:
          <input
            type="number"
            name="age"
            value={updatedSmurf.age}
            onChange={handleChange}
            placeholder="Enter an age"
          />
        </label>
        <label className="smurf-form-label">
          Height:
          <input
            type="number"
            name="height"
            value={updatedSmurf.height}
            onChange={handleChange}
            placeholder="Enter a height (in cm)"
          />
        </label>
        <button type="submit">
          {isEditing ? 'Update Smurf' : 'Add Smurf'}
        </button>
      </form>
    </div>
  );
};

export default EditSmurfForm;