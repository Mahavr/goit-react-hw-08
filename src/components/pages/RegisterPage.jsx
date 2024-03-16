import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/authOps";
import * as Yup from "yup";
import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./pages.module.css";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
const registerSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")

    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(3, "Too Short!").required("Required"),
});

export default function RegisterPage() {
  const dispatch = useDispatch();
  const emailFieldId = useId();
  const passwordFieldId = useId();
  const nameFieldId = useId();
  const handleSubmit = (values, actions) => {
    dispatch(
      register({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    )
      .unwrap()
      .then(() => {
        toast.success("Welcome!");
      })
      .catch((error) => {
        if (error.response && error.response.status === 201) {
          toast.error("User already registered");
        } else {
          toast.error("Chech the entered data");
        }
      });
    actions.resetForm();
  };

  return (
    <div className={css.formWrapper}>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={registerSchema}
      >
        <Form className={css.form}>
          <label className={css.label} htmlFor={nameFieldId}>
            Name
          </label>
          <Field
            className={css.input}
            type="text"
            name="name"
            id={nameFieldId}
          />
          <ErrorMessage className={css.error} name="name" component="span" />
          <label className={css.label} htmlFor={emailFieldId}>
            Email
          </label>
          <Field
            className={css.input}
            type="email"
            name="email"
            id={emailFieldId}
          />
          <ErrorMessage className={css.error} name="email" component="span" />
          <label className={css.label} htmlFor={passwordFieldId}>
            Password
          </label>
          <Field
            className={css.input}
            type="password"
            name="password"
            id={passwordFieldId}
          />
          <ErrorMessage
            className={css.error}
            name="password"
            component="span"
          />
          <button className={css.button} type="submit">
            Log In
          </button>
        </Form>
      </Formik>
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
