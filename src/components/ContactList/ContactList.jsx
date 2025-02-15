import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

const ContactList = () => {
  const filteredData = useSelector(selectFilteredContacts);

  return (
    <ul className={styles.list}>
      {filteredData.map((item) => (
        <li className={styles.item} key={item.id}>
          <Contact {...item} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
