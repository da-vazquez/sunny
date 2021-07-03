import React from 'react';
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { register } from '../actions/UserActions'

import { useFormik } from 'formik'


export default function RegisterForm() {
  const history = useHistory()
  const dispatch = useDispatch()

  const validate = values => {
    const errors = {};
   
      if (!values.username) {
        errors.username = 'username required';
      } else if (values.username.length < 3) {
        errors.username = 'Username must be at least 3 characters';
      }
   
      if (!values.password) {
        errors.password = 'password required';
      } else if (values.password.length < 4) {
        errors.password = 'Password must be at least 4 characters';
      }
  
      if (!values.tos) {
        errors.tos = 'You must accept the terms of service';
      } else if (values.tos.boolean === false) {
        errors.tos = '';
      }
   
     return errors;
  }

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      tos: false,
    },
    validate,

  onSubmit: async(values) => {
    await dispatch(register(values.username, values.password))
    history.push("/login")
  }}
  )


  return (
  <div>
      <div className="registration-container">
        <form className='form' onSubmit={formik.handleSubmit}>
          <h1 style={{marginBottom: "1em"}}>Create Account</h1>
            <label>
              Username:
              <input 
                name='username'
                type='text'
                onTouchStart={formik.touched}
                value={formik.values.username}
                onChange={formik.handleChange}
                style={{width: '80%', marginBottom: '1em', padding: '.5em'}}
                required/>
            </label>
              <br/>
            <label>
              Password:
              <input
                name='password'
                type='password'
                onTouchStart={formik.touched}
                value={formik.values.password}
                onChange={formik.handleChange}
                style={{width: '80%', marginBottom: '1em', padding: '.5em'}}
                required/>
           </label>
              <br/>
           <label>
              Terms
              <input
                name='tos'
                type='checkbox'
                value={formik.values.tos}
                onChange={formik.handleChange}
                required
                />
           </label>
              <br/>
            <button className='login-button'>Submit</button>
              <br/>
        {formik.errors.username ? <div style={{color:'red'}}>{formik.errors.username}</div> : null}
        {formik.errors.password ? <div style={{color: 'red'}}>{formik.errors.password}</div> : null}
        {formik.errors.tos ? <div style={{color: 'red'}}>{formik.errors.tos}</div> : null}
          </form>
      </div>
    </div>
  )    
}