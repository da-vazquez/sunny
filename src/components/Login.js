import React from 'react';
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../actions/UserActions'
import {useFormik} from 'formik'


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
 
   return errors;
 };  

export default function LoginForm(res) {
  const history = useHistory()
  const dispatch = useDispatch()
  
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate,
    onSubmit: async(values) => {
      await dispatch(login(values.username, values.password))
      localStorage.setItem("user_id", res.data.user_id)
      history.push("/")
    }}
  )


return (
  <div className="login-container">
    <form className='form' onSubmit={formik.handleSubmit}>
      <h1 style={{marginBottom: "1em"}}>Login</h1>
      <label htmlFor='username'>
        Username:
          <input 
            name='username'
            type='text'
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
            value={formik.values.password}
            onChange={formik.handleChange}
            style={{width: '80%', marginBottom: '1em', padding: '.5em'}}
            required/>
      </label>
            <br/>
          <button className="login-button">Submit</button>
            <br/>
      {formik.errors.username ? <div style={{color: 'red'}}>{formik.errors.username}</div> : null}
      {formik.errors.password ? <div style={{color: 'red'}}>{formik.errors.password}</div> : null}
      </form>
    </div>
  )
}