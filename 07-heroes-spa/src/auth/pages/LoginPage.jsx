import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const LoginPage = () => {

  const { login } = useContext( AuthContext );
  const navigate = useNavigate();

  const onLogin = () => {
    
    const lastPath = localStorage.getItem('lastPath') || '/';

    login( 'Gricelda Valdez' );
    
    navigate( lastPath, {
      replace: true
    });
  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button 
        className="btn btn-primary"
        onClick={ onLogin }
      >
        Login
      </button>

    </div>
  )
}



/*import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useState, useEffect } from 'react';

export const LoginPage = () => {

    const { login } = useContext( AuthContext );
    const navigate = useNavigate();

    const { formState, onInputChange, onResetForm} = useForm({
      usernameText: '',
      passwordText: ''
    });
  
    const {usernameText, passwordText} = formState;
  
    const [showError, setShowError] = useState(false);

    useEffect(() => {
      // Después de 3 segundos, ocultar el mensaje de error
      const timer = setTimeout(() => {
        setShowError(false);
      }, 3000);
  
      // Limpia el temporizador cuando el componente se desmonta para evitar errores
      return () => clearTimeout(timer);
    }, [showError]);


    const onLogin = () => {
      if(usernameText!='admin' || passwordText!='1234'){
        onResetForm();
        setShowError(true);
        return;
      }

      const lastPath = localStorage.getItem('lastPath') || '/';

      login( 'Admin' );
      
      navigate( lastPath, {
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
}*/