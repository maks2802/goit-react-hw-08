import { ErrorMessage, Field, Form, Formik } from "formik";
import styles from "./ContactForm.module.css";
import { nanoid } from "nanoid";
import * as Yup from "yup";

const ContactForm = ({ onAdd }) => {
  const handleSubmit = (values, actions) => {
    onAdd(values);
    actions.resetForm();
  };

  const registerSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
  });

  return (
    <div>
      <Formik
        onSubmit={handleSubmit}
        initialValues={{
          id: nanoid(),
          name: "",
          number: "",
        }}
        validationSchema={registerSchema}
      >
        <Form className={styles.form}>
          <label className={styles.label}>
            <span className={styles.text}>Name</span>
            <Field className={styles.input} type="text" name="name" />
            <ErrorMessage
              className={styles.error}
              name="name"
              component="div"
            />
          </label>
          <label className={styles.label}>
            <span className={styles.text}>Number</span>
            <Field className={styles.input} type="text" name="number" />
            <ErrorMessage
              className={styles.error}
              name="number"
              component="div"
            />
          </label>
          <button className={styles.btn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
