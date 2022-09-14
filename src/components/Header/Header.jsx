import { Link } from "react-router-dom";
import "./Header.css";
import { ReactComponent as Logo } from "../../assets/LogoGlyphMd.svg";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth";
const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <header className="header">
      <div className="header_container">
        <div className="header_col1">
          {/* <i class="fa-brands fa-stack-overflow fa-2x"></i> */}
          <Logo className="logo" />
          <div className="header-stackOverFlow">
            <span>stack</span>
            <span class="overFlow">overFlow</span>
          </div>
        </div>
        <ol className="header_col2">
          <li className="about">About</li>
          <li className="products">Products</li>
          <li className="for-Teams">For Teams</li>
        </ol>

        <div className="header_col3">
          <span className="search">
            <i class="fa-solid fa-magnifying-glass"></i>
            <span>Search...</span>
          </span>
        </div>
        {!isAuth && (
          <>
            <Link to="/Login">
              <button className="header__login__btn">Log in</button>
            </Link>
            <Link to="/SignUp">
              <button className="header__signup__btn">Sign up</button>
            </Link>
          </>
        )}
        {isAuth && (
          <button onClick={logoutHandler} className="header__logout__btn">
            Logout
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
