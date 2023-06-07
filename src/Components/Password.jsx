import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Password = ({ formData, nextStep, prevStep }) => {
  const validationSchema = Yup.object({
    password: Yup.string().required('Password is required').min(8, 'Password must be at least 8 characters').max(16, 'Password cannot exceed 16 characters'),
    repeatPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
  });

  const formik = useFormik({
    initialValues: {
      password: formData.password,
      repeatPassword: formData.repeatPassword,
    },
    validationSchema,
    onSubmit: () => nextStep(),
  });

  return (
    <>
        <h3>Password Screen</h3>
        <form onSubmit={formik.handleSubmit}>
            <div className='input-label'>
                <label htmlFor="Password">Password:</label>
                <input type="password" name="password" value={formik.values.password} onChange={formik.handleChange} />
                {formik.touched.password && formik.errors.password && <div className='error-message'>{formik.errors.password}</div>}
            </div>

            <div className='input-label'>
                <label htmlFor="RepeatPassword">Repeat Password:</label>
                <input type="password" name="repeatPassword" value={formik.values.repeatPassword} onChange={formik.handleChange} />
                {formik.touched.repeatPassword && formik.errors.repeatPassword && <div className='error-message'>{formik.errors.repeatPassword}</div>}
            </div>

            <button className='next-step-btn' type="submit">Continue</button>
        </form>
    </>
  );
};

export default Password;
