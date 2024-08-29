import React, { useState } from 'react';
import './Form_Validation.css';

const FormWithTable = () => {
const [formData, setFormData] = useState({
name: '',
age: '',
email: '',
password: '',
gender: '',
address: '',
phoneNumber: ''
});

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    Object.keys(formData).forEach(key => {
      if (!formData[key]) {
        newErrors[key] = 'This field is required';
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmittedData([...submittedData, formData]);
      setFormData({
        name: '',
        age: '',
        email: '',
        password: '',
        gender: '',
        address: '',
        phoneNumber: ''
      });
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="input"
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className="form-group">
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Age"
            className="input"
          />
          {errors.age && <span className="error">{errors.age}</span>}
        </div>

        <div className="form-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="input"
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="input"
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>

        <div className="form-group">
          <input
            type="text"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            placeholder="Gender"
            className="input"
          />
          {errors.gender && <span className="error">{errors.gender}</span>}
        </div>

        <div className="form-group">
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            className="input"
          />
          {errors.address && <span className="error">{errors.address}</span>}
        </div>

        <div className="form-group">
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Phone Number"
            className="input"
          />
{errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
</div>

<button type="submit" className="submit-btn">Submit</button>
</form>

{submittedData.length > 0 && (
<table className="table">
<tbody>
{Object.entries(submittedData[submittedData.length - 1]).map(([key, value]) => (
<tr key={key}>
<td>{key.charAt(0).toUpperCase() + key.slice(1)}</td>
<td>{value}</td>
</tr>
))}
</tbody>
</table>
)}
</div>
);
};

export default FormWithTable;
