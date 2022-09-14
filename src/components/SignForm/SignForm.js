import { Link } from "react-router-dom";
import "./SignForm.css";

const SignForm = () => {
  const signSubmitHandler = (event) => {
    event.preventDefault();
    console.log("submit");
  };
  return (
    <form onSubmit={signSubmitHandler} className="sign-form">
      <div className="sign-container">
        <div className="sign-email">
          <span className="sign-email-text">Email</span>
          <input className="sign-email-input"></input>
        </div>
        <div className="sign-password">
          <div className="sign-password-text">
            <span>Password</span>
            <span>Forgot password?</span>
          </div>

          <input className="sign-password-input"></input>
        </div>
        <div className="sign-login">
          <button>SignUp</button>
        </div>
      </div>
    </form>
  );
};

export default SignForm;
