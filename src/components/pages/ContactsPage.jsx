import { ContactList } from "../contactList/contactList";
import { SearchBox } from "../searchBox/searchBox";
import { ContactForm } from "../contactForm/contactForm";
import css from "./pages.module.css";
import { fetchContacts } from "../../redux/contacts/contactsOps";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectIsLoading } from "../../redux/contacts/selectors";
import { Toaster } from "react-hot-toast";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <div className={css.contactFormWrapper}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        {isLoading && !error && <b>Request in progress...</b>}
        <ContactList />
      </div>
      <Toaster
        position="top-center"
        toastOptions={{
          className: "",
          style: {
            border: "1px solid #D45F5F",
            padding: "10px",
            color: "#D45F5F",
          },
        }}
      />
    </div>
  );
}
