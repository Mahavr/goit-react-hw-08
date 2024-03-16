import css from "./searchBox.module.css";
import { useId } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/contacts/filtersSlice";
import { selectFilterValue } from "../../redux/contacts/selectors";
export const SearchBox = () => {
  const dispatch = useDispatch();
  const searchId = useId();
  const filterValue = useSelector(selectFilterValue);

  return (
    <div>
      <p className={css.text}>Find contacts by name</p>
      <input
        className={css.searchBox}
        type="text"
        id={searchId}
        value={filterValue}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
};
