import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/authOps";
import css from "./UserMenu.module.css";
import { selectUser } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";

export const UserMenu = () => {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <button className={css.button} type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};
