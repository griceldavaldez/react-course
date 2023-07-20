import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useState } from 'react';

export const LoginPage = () => {

  const navigate = useNavigate();

  const { formState, onInputChange, onResetForm} = useForm({
    usernameText: '',
    passwordText: ''
  });

  const {usernameText, passwordText} = formState;

  const [showError, setShowError] = useState(false);

  const onLogin = () => {
    if(usernameText!='admin' || passwordText!='1234'){
      onResetForm();
      setShowError(true);
      return;
    }

    navigate('/marvel', {
      replace: true
    });
  }


  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <form>
        <div>
          <h4>username</h4>
          <input
            type="text"
            placeholder="Enter your username"
            name="usernameText"
            autoComplete="off"
            value={ usernameText }
            onChange={ onInputChange }
          />
          <h4>password</h4>
          <input
            type="password"
            placeholder="Enter your password"
            name="passwordText"
            autoComplete="off"
            value={ passwordText}
            onChange={ onInputChange }
          />
          </div>
      </form>
      <button 
        className="btn btn-primary m-2"
        onClick={ onLogin}
        >
        Login
      </button>
      <div className="alert alert-danger animate__animated animate__fadeIn" 
          style={{ display: showError ? '' : 'none' }}>
          <b>Invalid credentials</b>          
      </div>
    </div>
  )
}