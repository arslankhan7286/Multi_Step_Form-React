import React from 'react';

const ReviewForm = ({ formData }) => {
  const { username, email, country } = formData;

  return (
    <>
      <h3>Review Screen</h3>
      <form>
        <div className='review-form'>
          <p>Username: <span>{username}</span></p>
          <p>Email: <span>{email}</span></p>
          <p>Country: <span>{country}</span></p>
        </div>
        <button className='next-step-btn' type="button">Complete</button>
      </form>
    </>
  );
};

export default ReviewForm;
