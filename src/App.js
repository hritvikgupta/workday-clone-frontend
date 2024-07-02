import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './components/loginPage';
import ResumeUploadPage from './components/resumeUploadPage';
import SignupPage from './components/signUpPage';
import ApplicationsPage from './components/ApplicationPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/resume-upload" element={<ResumeUploadPage />} />
          <Route path="/resume-uploaded/applications" element={<ApplicationsPage />} /> {/* Ensure this route is correct */}

          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
