import clsx from "clsx";
import styles from "./Contact.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <div className={styles.border}>
      <div className={styles.info}>
        <p className={clsx(styles.text, styles.name)}>
          <FaUser className={styles.icon} />
          {name}
        </p>
        <p className={clsx(styles.text, styles.number)}>
          <FaPhoneAlt className={styles.icon} />
          {number}
        </p>
      </div>
      <button
        className={styles.button}
        type="submit"
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
