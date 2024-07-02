import React, { useState, useEffect } from 'react';
import Header from './Header';
import { useNavigate } from 'react-router-dom';

const inputStyles = {
  Input: {
    width: '100%',
    height: '40px',
    padding: '10px 20px',
    border: '1px solid #28464e',
    boxSizing: 'border-box',
    borderRadius: '20px',
    backgroundColor: '#e7f0fe',
    color: '#000000',
    fontSize: '16px',
    lineHeight: '40px',
    outline: 'none',
    marginBottom: '15px',
    marginTop: '10px'
  },
};

const InputField = ({ type, text, onChange, value }) => (
  <input
    style={inputStyles.Input}
    placeholder={text}
    type={type}
    onChange={onChange}
    value={value}
  />
);

const buttonStyles = {
  Button: {
    cursor: 'pointer',
    width: '100%',
    height: '50px',
    padding: '0px 8px',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '22px',
    backgroundColor: '#0675e1',
    color: '#ffffff',
    fontSize: '20px',
    fontWeight: 700,
    lineHeight: '31px',
    outline: 'none',
    marginTop: '20px'
  },
};

const Button = (props) => (
  <button style={buttonStyles.Button} type="submit">
    {props.label}
  </button>
);

const imageStyles = {
  ImageContainer: {
    width: '100%',
    height: '338px',
    backgroundPosition: 'center center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    marginBottom: '20px',
  },
};

const Image = ({ image }) => (
  <div style={{ ...imageStyles.ImageContainer, backgroundImage: `url(${image})` }} />
);

const headerImageStyles = {
  ImageContainer: {
    width: '128px',
    height: '60px',
    backgroundPosition: 'center center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    margin: '20px auto',
  },
};

const HeaderImage = ({ image }) => (
  <div style={{ ...headerImageStyles.ImageContainer, backgroundImage: `url(${image})` }} />
);

const textStyles = {
  Text: {
    color: '#666666',
    fontSize: '28px',
    fontWeight: 700,
    lineHeight: '39px',
    margin: '20px auto'
  },
};

const Text = ({ text }) => (
  <div style={textStyles.Text}>
    {text}
  </div>
);

const ResumeUploadPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneType, setPhoneType] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [state, setState] = useState('');

  useEffect(() => {
    const fetchPersonalDetails = async () => {
      const response = await fetch('http://localhost:5001/resume-uploaded', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include'
      });

      const data = await response.json();
      if (response.ok && data) {
        setName(data.name || '');
        setEmail(data.email || '');
        setPhoneType(data.phoneType || '');
        setPhone(data.phone || '');
        setCity(data.city || '');
        setStreetAddress(data.streetAddress || '');
        setZipcode(data.zipcode || '');
        setState(data.state || '');
      }
    };

    fetchPersonalDetails();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5001/resume-uploaded', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, phoneType, phone, city, streetAddress, zipcode, state }),
      credentials: 'include'
    });

    const data = await response.json();
    if (response.ok) {
      console.log('Personal information submitted successfully', data);
      navigate('/resume-uploaded/applications');
      alert('Personal Information Submitted Successfully');
    } else {
      alert(data.message);
    }
  };

  const handleProfileClick = (e) => {
    e.preventDefault();
    navigate('/resume-uploaded/applications');
  };

  return (
    <div>
      <Header />
      <div className="resume-upload-container" style={{ textAlign: 'center', width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
        <Image image="https://assets.api.uizard.io/api/cdn/stream/4b1f3376-05ca-4eb2-824d-4dd63f2d899a.png" />
        <div style={{
          margin: '0 auto',
          width: '500px',
          padding: '30px',
          backgroundColor: '#ffffff',
          borderRadius: '10px',
          border: '1px solid #7c9d86',
          boxSizing: 'border-box',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}>
          <h2>Upload Resume</h2>
          {name && <Text text={name} />}
          <form className="resume-upload-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <InputField
                type="text"
                text="Your Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <InputField
                type="email"
                text="Your Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneType">Phone Type</label>
              <InputField
                type="text"
                text="Phone Type"
                onChange={(e) => setPhoneType(e.target.value)}
                value={phoneType}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <InputField
                type="text"
                text="Phone Number"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
              />
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <InputField
                type="text"
                text="City"
                onChange={(e) => setCity(e.target.value)}
                value={city}
              />
            </div>
            <div className="form-group">
              <label htmlFor="streetAddress">Street Address</label>
              <InputField
                type="text"
                text="Street Address"
                onChange={(e) => setStreetAddress(e.target.value)}
                value={streetAddress}
              />
            </div>
            <div className="form-group">
              <label htmlFor="zipcode">Zip Code</label>
              <InputField
                type="text"
                text="Zip Code"
                onChange={(e) => setZipcode(e.target.value)}
                value={zipcode}
              />
            </div>
            <div className="form-group">
              <label htmlFor="state">State</label>
              <InputField
                type="text"
                text="State"
                onChange={(e) => setState(e.target.value)}
                value={state}
              />
            </div>
            <Button label="Submit" />
          </form>
          <div className="resume-upload-footer" style={{ marginTop: '20px' }}>
            <p><a href="#" onClick={handleProfileClick}>Go back to Profile</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeUploadPage;
