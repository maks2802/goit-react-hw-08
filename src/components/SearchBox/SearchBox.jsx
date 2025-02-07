import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import styles from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  return (
    <div className={styles.box}>
      <span className={styles.text}>Find contacts by name</span>
      <input
        className={styles.input}
        type="text"
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
};

export default SearchBox;
