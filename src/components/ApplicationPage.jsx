import React, { useState, useEffect } from 'react';
import Header from './Header';

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

const Image = ({ image }) => {
  return (
    <div style={{
      ...imageStyles.ImageContainer,
      backgroundImage: `url(${image})`,
    }} />
  );
};

const ApplicationsPage = () => {
  const [applications, setApplications] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await fetch('https://workday-clone-backend.onrender.com/resume-uploaded/applications', {
          credentials: 'include'
        });
        const data = await response.json();
        if (response.ok) {
          if (Array.isArray(data)) {
            setApplications(data);
          } else {
            setError('Received data is not an array');
          }
        } else {
          setError(data.message);
        }
      } catch (err) {
        setError(err.message);
      }
    };
    fetchApplications();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <Header />
      <div className="resume-upload-container" style={{ textAlign: 'center', width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
        <Image image="https://assets.api.uizard.io/api/cdn/stream/4b1f3376-05ca-4eb2-824d-4dd63f2d899a.png" />
      </div>
      <div className="applications-container" style={{ textAlign: 'center', width: '100%', maxWidth: '1200px', margin: '0 auto', marginTop: '20px' }}>
        <h2>Submitted Applications</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
          {applications.map(app => (
            <div key={app._id} style={{ width: '45%', margin: '10px', border: '1px solid #ddd', padding: '10px', borderRadius: '8px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <div style={{ marginBottom: '10px' }}>
                  <strong>Name:</strong> {app.name}
                </div>
                <div style={{ marginBottom: '10px' }}>
                  <strong>Email:</strong> {app.email}
                </div>
                <div style={{ marginBottom: '10px' }}>
                  <strong>Phone Type:</strong> {app.phoneType}
                </div>
                <div style={{ marginBottom: '10px' }}>
                  <strong>Phone:</strong> {app.phone}
                </div>
                <div style={{ marginBottom: '10px' }}>
                  <strong>City:</strong> {app.city}
                </div>
                <div style={{ marginBottom: '10px' }}>
                  <strong>Street Address:</strong> {app.streetAddress}
                </div>
                <div style={{ marginBottom: '10px' }}>
                  <strong>Zipcode:</strong> {app.zipcode}
                </div>
                <div style={{ marginBottom: '10px' }}>
                  <strong>State:</strong> {app.state}
                </div>
              </div>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApplicationsPage;
  