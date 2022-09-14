import { useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import LogForm from "../../components/LogForm/LogForm";

const Login = () => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const logout = useSelector((state) => state.auth.logout);
  return (
    <div>
      <Header />
      <LogForm />
    </div>
  );
};

export default Login;
