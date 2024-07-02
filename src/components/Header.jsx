import React from 'react';

const headerStyles = {
  header: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '60px',
    backgroundColor: '#fff',
    borderBottom: '1px solid #ccc',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 20px',
    marginRight: "10px",
    zIndex: 1000,
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
  },
  logoImage: {
    height: '40px',
    marginRight: '10px',
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    // padding:'2100px'
    marginRight:'50px'
  },
  navItem: {
    marginLeft: '20px',
    color: '#666666',
    fontSize: '16px',
    // fontFamily: 'Roboto',
    textDecoration: 'none',
  },
};

const Header = () => {
  return (
    <header style={headerStyles.header}>
      <div style={headerStyles.logo}>
        <img
          src="https://assets.api.uizard.io/api/cdn/stream/b192822a-aa3d-4961-8401-fec76416500a.png"
          alt="Workday Logo"
          style={headerStyles.logoImage}
        />
        <span>Careers at Workday</span>
      </div>
      <nav style={headerStyles.nav}>
        <a href="#" style={headerStyles.navItem}>Careers Page</a>
        <a href="#" style={headerStyles.navItem}>Search for Jobs</a>
        <a href="#" style={headerStyles.navItem}>Join Our Talent Community!</a>
      </nav>
    </header>
  );
};

export default Header;
