// src/components/BookForm.jsx
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  title: Yup.string().required('Required'),
  author: Yup.string().required('Required'),
});

const BookForm = () => (
  <Formik
    initialValues={{ title: '', author: '' }}
    validationSchema={validationSchema}
    onSubmit={values => {
      // handle form submission
    }}
  >
    <Form>
      <div>
        <label htmlFor="title">Title</label>
        <Field type="text" id="title" name="title" />
        <ErrorMessage name="title" component="div" />
      </div>
      <div>
        <label htmlFor="author">Author</label>
        <Field type="text" id="author" name="author" />
        <ErrorMessage name="author" component="div" />
      </div>
      <button type="submit">Submit</button>
    </Form>
  </Formik>
);

export default BookForm;
