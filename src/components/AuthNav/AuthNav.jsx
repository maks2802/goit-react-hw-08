import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <div className={s.nav}>
      <NavLink className={s.link} to={"/login"}>
        Log In
      </NavLink>
      <NavLink className={s.link} to={"/register"}>
        Register
      </NavLink>
    </div>
  );
};

export default AuthNav;
