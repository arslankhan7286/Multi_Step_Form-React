import React, { useState } from 'react';
import UserForm from './UserForm';
import Password from './Password';
import ReviewForm from './ReviewForm';

const ParentComponent = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    country: '',
    password: '',
    repeatPassword: '',
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <UserForm
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            handleChange={handleChange}
          />
        );
      case 2:
        return (
          <Password
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
          />
        );
      case 3:
        return (
          <ReviewForm
            formData={formData}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
        <div className="steps">
            <h4>
                <input
                type="checkbox"
                className={`step-checkbox ${step === 1 ? 'checked' : 'unchecked'}`}
                disabled
                />
                Initial Info {step}
            </h4>
            <h4>
                <input
                type="checkbox"
                className={`step-checkbox ${step === 2 ? 'checked' : 'unchecked'}`}
                disabled
                />
                Password Screen {step}
            </h4>
            <h4>
                <input
                type="checkbox"
                className={`step-checkbox ${step === 3 ? 'checked' : 'unchecked'}`}
                disabled
                />
                Review {step}
            </h4>
        </div>
        {renderStep()}
    </>
  );
};

export default ParentComponent;
