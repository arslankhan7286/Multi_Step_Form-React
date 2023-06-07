import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const UserForm = ({ formData, setFormData, nextStep }) => {
  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required').min(4, 'Username must be at least 4 characters').max(12, 'Username cannot exceed 12 characters'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phone: Yup.string().required('Phone number is required'),
    country: Yup.string().required('Country is required'),
  });

  const formik = useFormik({
    initialValues: {
      username: formData.username,
      email: formData.email,
      phone: formData.phone,
      country: formData.country,
    },
    validationSchema,
    onSubmit: () => nextStep(),
  });

  const handleFormChange = (e) => {
    formik.handleChange(e);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h3>Intial Info</h3>
      <form onSubmit={formik.handleSubmit}>
        <div className='input-label'>
          <label htmlFor="UserName">User Name:</label>
          <input type="text" name="username" value={formik.values.username} onChange={handleFormChange} />
          {formik.touched.username && formik.errors.username && <div className='error-message'>{formik.errors.username}</div>}
        </div>

        <div className='input-label'>
          <label htmlFor="Email">Email:</label>
          <input type="text" name="email" value={formik.values.email} onChange={handleFormChange} />
          {formik.touched.email && formik.errors.email && <div className='error-message'>{formik.errors.email}</div>}
        </div>

        <div className='input-label'>
          <label htmlFor="PhoneNumber">Phone Number:</label>
          <input type="text" name="phone" value={formik.values.phone} onChange={handleFormChange} />
          {formik.touched.phone && formik.errors.phone && <div className='error-message'>{formik.errors.phone}</div>}
        </div>

        <div className='input-label'>
          <label htmlFor="Country">Country:</label>
          <input type="text" name="country" value={formik.values.country} onChange={handleFormChange} />
          {formik.touched.country && formik.errors.country && <div className='error-message'>{formik.errors.country}</div>}
        </div>

          <button className='next-step-btn' type="submit">Continue</button>
      </form>
    </>
  );
};

export default UserForm;
