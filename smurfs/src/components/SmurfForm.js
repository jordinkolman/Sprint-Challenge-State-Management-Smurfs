import React, { useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

const SmurfForm = ({ touched, errors, status, addSmurf, isEditing }) => {
  useEffect(() => {
    if (status) {
      addSmurf(status);
    }
  }, [status]);

  return (
    <div className="smurf-form-container">
      <h2>Add Smurf</h2>
      <Form className="smurf-form">
        <label className="smurf-form-label">
          Name:
          <Field type="text" name="name" placeholder="Enter a name" />
          {touched.name && errors.name && (
            <p className="error">{errors.name}</p>
          )}
        </label>
        <label className="smurf-form-label">
          Age:
          <Field type="number" name="age" placeholder="Enter an age" />
          {touched.age && errors.age && <p className="error">{errors.age}</p>}
        </label>
        <label className="smurf-form-label">
          Height:
          <Field
            type="number"
            name="height"
            placeholder="Enter a height (in cm)"
          />
          {touched.height && errors.height && (
            <p className="error">{errors.height}</p>
          )}
        </label>
        <button type="submit">Add Smurf</button>
      </Form>
    </div>
  );
};

const FormikSmurfForm = withFormik({
  mapPropsToValues({ name, age, height }) {
    return {
      name: name || '',
      age: age || '',
      height: height || '',
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required(),
    age: Yup.number()
      .positive()
      .integer()
      .required(),
    height: Yup.number()
      .positive()
      .integer()
      .required(),
  }),

  handleSubmit(values, { setStatus, resetForm }) {
    let formattedValues = {
      ...values,
      height: values.height + 'cm',
    };

    setStatus(formattedValues);
    resetForm();
  },
})(SmurfForm);

export default FormikSmurfForm;