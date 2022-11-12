import React from "react";
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';

export default function RHF(props) {

  const validationSchema = Yup.object({
    fullname: Yup.string().required("Required Field!"),
    email: Yup.string().email("Invalid Email address").required("Required Field!")
  })

  const {register, handleSubmit,formState:{errors}} = useForm({
    resolver: yupResolver(validationSchema)
  })

  const onSubmit = (values) => {
    console.log(values);
  }

  return (
    <div className="container w-50 my-3">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="first-div">
          <label className="form-label" style={{ color: props.labelColor }}>Full Name</label>
          <input
            className="form-control"
            type="text"
            placeholder="Enter your full name"
            {...register("fullname")}
          />
          <div className="errorMessage1">
            {errors.fullname?.message}
          </div>
        </div>
        <div className="second-div my-2">  
          <label className="form-label" style={{ color: props.labelColor }}>E-mail</label>
          <input  
            className="form-control"
            type="text"
            placeholder="Enter your email address"
            {...register("email")}
          />
        </div>
        <div className="errorMessage1">
            {errors.email?.message}
          </div>
        <button className="btn btn-secondary my-2" type="submit">Submit</button>
      </form>
    </div>
  );
}
