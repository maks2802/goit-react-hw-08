import clsx from "clsx";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import styles from "./Contact.module.css";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

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
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
