import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authActions } from "../../store/auth";

import "./LogForm.css";

const LogForm = () => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const logout = useSelector((state) => state.auth.logout);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(authActions.login());
    navigate("/");
    console.log("login");
  };
  return (
    <form onSubmit={loginSubmitHandler} className="login-form">
      <div className="loginForm-container">
        <div className="loginForm-email">
          <span className="loginForm-email-text">Email</span>
          <input className="loginForm-email-input"></input>
        </div>
        <div className="loginForm-password">
          <div className="loginForm-password-text">
            <span>Password</span>
            <span>Forgot password?</span>
          </div>

          <input className="loginForm-password-input"></input>
        </div>
        <div className="loginForm-login">
          <button>Login</button>
        </div>
      </div>
    </form>
  );
};

export default LogForm;
