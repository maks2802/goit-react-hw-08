import styles from "./SearchBox.module.css";

const SearchBox = ({ value, onSearch }) => {
  return (
    <div className={styles.box}>
      <span className={styles.text}>Find contacts by name</span>
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
