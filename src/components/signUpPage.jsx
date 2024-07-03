import React, { useState } from 'react';
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
    color: '#94a3b8',
    fontSize: '16px',
    fontFamily: 'Roboto',
    lineHeight: '40px',
    outline: 'none',
    marginBottom: '15px',
    marginTop: '10px'
  },
};

const InputField = ({ type, text, onChange }) => {
  return (
    <input
      style={inputStyles.Input}
      placeholder={text}
      type={type}
      onChange={onChange}
    />
  );
};

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
    fontFamily: 'Roboto',
    fontWeight: 700,
    lineHeight: '31px',
    outline: 'none',
  },
};

const Button = (props) => {
  return (
    <button style={buttonStyles.Button} type="submit">
      {props.label}
    </button>
  );
};

const imageStyles = {
  ImageContainer: {
    width: '100%',
    height: '338px',
    backgroundPosition: 'center center',
    backgroundSize: 'contain', // Use 'contain' to prevent zooming
    backgroundRepeat: 'no-repeat',
    marginBottom: '20px',
  },
};

const Image = ({ image }) => {
  return (
    <div style={{
      ...imageStyles.ImageContainer,
      backgroundImage: `url(${image})`,
    }} />
  );
};

const headerImageStyles = {
  ImageContainer: {
    width: '128px',
    height: '60px',
    backgroundPosition: 'center center',
    backgroundSize: 'contain', // Use 'contain' to prevent zooming
    backgroundRepeat: 'no-repeat',
    margin: '20px auto',
  },
};

const HeaderImage = ({ image }) => {
  return (
    <div style={{
      ...headerImageStyles.ImageContainer,
      backgroundImage: `url(${image})`,
    }} />
  );
};

const textStyles = {
  Text: {
    color: '#666666',
    fontSize: '28px',
    fontFamily: 'Roboto',
    fontWeight: 700,
    lineHeight: '39px',
    margin: '20px auto'
  },
};

const Text = ({ text }) => {
  return (
    <div style={textStyles.Text}>
      {text}
    </div>
  );
};

const SignupPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const response = await fetch('https://workday-clone-backend.onrender.com/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
      credentials: 'include' // Ensure cookies are sent with the request

    });

    const data = await response.json();
    if (response.ok) {
      console.log('Signup successful', data);
      navigate('/login');
      alert('Signed Up Successfully');
      
    } else {
      alert(data.message);
    }
  };

  return (
    <div>
      <Header />
      <div className="signup-container" style={{ textAlign: 'center', width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
        <Image image="https://assets.api.uizard.io/api/cdn/stream/4b1f3376-05ca-4eb2-824d-4dd63f2d899a.png" />
        <div style={{
          margin: '0 auto',
          width: '500px',
          padding: '30px',
          height: '600px',
          backgroundColor: '#ffffff',
          borderRadius: '10px',
          border: '1px solid #7c9d86',
          boxSizing: 'border-box',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}>
          <h2>Sign Up</h2>
          <form className="signup-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <InputField
                type="text"
                text="Your Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <InputField
                type="email"
                text="hritvikgupta@mymailsbox.net"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <InputField
                type="password"
                text="********"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <InputField
                type="password"
                text="********"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <Button label="Sign Up" />
          </form>
          <div className="signup-footer">
            <p>Already have an account? <Link href="/login">Login</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
