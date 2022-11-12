import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Validation(props) {
  const initialValues = {
    fullname: "",
    email: "",
  };

  const validationSchema = Yup.object({
    fullname: Yup.string().required("Required Field!"),
    email: Yup.string().email("Invalid email.").required("Required Field!"),
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  const Formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div className="container w-50 my-3">
      <form onSubmit={Formik.handleSubmit}>
        <div className="first-division">
          <label className="form-label" style={{ color: props.labelColor }}>
            Full Name
          </label>
          <input
            type="text"
            name="fullname"
            className="form-control"
            placeholder="Enter your full name"
            value = {Formik.values.fullname}
            onChange={Formik.handleChange}
            onBlur = {Formik.handleBlur}
          />
        </div>
        <div className="errorName">
            {Formik.touched.fullname && Formik.errors.fullname ? <div className="errorFullName my-2" style={{color:props.color}}>{Formik.errors.fullname} </div> : null}
        </div>
        <div className="second-division my-2">
          <label className="form-label" style={{ color: props.labelColor }}>
            E-mail
          </label>
          <input
            type="text"
            name="email"
            className="form-control"
            placeholder="Enter your e-mail address"
            value = {Formik.values.email}
            onChange={Formik.handleChange}
            onBlur = {Formik.handleBlur}
          />
        </div>
        {Formik.touched.email && Formik.errors.email ? <div className="errorEmail my-2" style={{color:props.color}}>{Formik.errors.email}</div> : null}
        <button className="btn btn-secondary my-3" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
