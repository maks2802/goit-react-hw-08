import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filters = useSelector(selectNameFilter);
  const filteredData = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filters.toLowerCase())
  );

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
