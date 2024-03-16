import css from "./contact.module.css";
import { AiOutlineContacts, AiOutlinePhone } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/contactsOps";
export const Contact = ({ item: { id, name, number } }) => {
  const dispatch = useDispatch();
  return (
    <li className={css.item}>
      <div>
        <div className={css.itemsWrapper}>
          <AiOutlineContacts size="25px " color="#E9A098" />
          <p className={css.text}>{name}</p>
        </div>
        <div className={css.itemsWrapper}>
          <AiOutlinePhone size="25px" color="#E9A098" />
          <p className={css.text}>{number}</p>
        </div>
      </div>
      <button
        className={css.button}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
};
