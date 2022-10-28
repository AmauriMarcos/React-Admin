import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../features/authSlice';
import './login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

 
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const data = {
        username,
        password
      }

      dispatch(login(data)).then(() => {
        navigate('/');
      })
    } catch (err) {
      console.log(err);
      throw (err);
      
    }
  }

  return (
    <div className="login">
      
      <div className="loginContainer">
        <h2 className="title">Sign In</h2>
        <form className="form" >
          <div className="form-item">
            <label className="label" htmlFor="username">Username</label>
            <input
              className="input"
              type="text"
              id="username"
              value={username}
              name="username"
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-item">
            <label className="label" htmlFor="password">Password</label>
            <input
              className="input"
              type="password"
              id="password"
              value={password}
              name="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={handleSubmit} type="submit" className="button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
