import { Contact } from "../contact/contact";
import css from "./contactList.module.css";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

export const ContactList = () => {
  const visibleUsers = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {visibleUsers.map((contact) => (
        <Contact key={contact.id} item={contact} />
      ))}
    </ul>
  );
};
