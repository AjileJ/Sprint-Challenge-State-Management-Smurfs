import React from 'react';
import ReactDom from 'react-dom';
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {addSmurf} from '../actions/index';
import {connect} from 'react-redux';

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
  mapPropsToValues({addSmurf,name, age, height}){
    return {
      name: name || '',
      age: age || '',
      height: height || '',
      addSmurf: addSmurf
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
      console.log(values);
     values.addSmurf({name:values.name, age:values.age,height:values.height});
     resetForm();
     
    }
  }
})(LoginForm);
export default connect(null, {addSmurf})(FormikLoginForm);