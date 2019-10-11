import React from 'react';
import ReactDom from 'react-dom';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function LoginForm({ values,errors,touched, isSubmitting }){
  return (
    <Form>
      <div>
        {touched.name && errors.name && <p>{errors.name}</p>}
        <Field type='text' name='name' placeholder='Name'/>
      </div>
      <div>
        {touched.age && errors.age && <p>{errors.age}</p>}
        <Field type='text' name='age' placeholder='Age'/>
      </div>
      <div>
        {touched.height && errors.height && <p>{errors.height}</p>}
        <Field type='text' name='height' placeholder='Height'/>
      </div>
      <button disabled = {isSubmitting}>Submit</button>
    </Form>
  );
}

const FormikLoginForm = withFormik({
  mapPropsToValues({name, age, height}){
    return {
      name: name || '',
      age: age || '',
      height: height || ''
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string()
    .required('Name is required'),
    age: Yup.string()
    .required('Age is required'),
    height: Yup.string()
    .required('Height is required')
  }),
  handleSubmit(values, {resetForm, setErrors, setSubmitting}) {
    if (values.name === "Brainey") {
      setErrors({name: "That Name is already taken"});
    }else {
      axios
      .post('http://localhost:3333/smurfs', values)
      .then(res => {
        console.log(res);
        resetForm();
        setSubmitting(false);
      })
      .catch(err => {
        console.log(err);
        setSubmitting(false);
      });
    }
  }
})(LoginForm);
export default FormikLoginForm;