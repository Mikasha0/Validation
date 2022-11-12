import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function Formikk(props) {
  const initialValues = {
    fullName: "",
    email: "",
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Required field!"),
    email: Yup.string().email("Invalid email.").required("Required field!"),
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="container w-50 my-3">
          <div className="first-field">
            <label className="form-label" style={{color:props.labelColor}}>Full Name</label>
            <Field
              className="form-control"
              type="text"
              placeholder="Enter your full name"
              name="fullName"
            />
          </div>
          <div className="errorMessage my-2" style={{color:props.color}}>
            <ErrorMessage name='fullName'/>
          </div>
          <div className="second-field my-2">
            <label className="form-label" style={{color:props.labelColor}}>E-mail</label>
            <Field
              className="form-control"
              type="text"
              placeholder="Enter your email address"
              name="email"
            />
          </div>
          <div className="errorMessage" style={{color:props.color}}>
            <ErrorMessage name='email'/>
          </div>
          <button className="btn btn-primary my-2" type='submit'>Submit</button>
        </div>
      </Form>
    </Formik>
  );
}
