import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage';
import ImageInputPage from './pages/ImageInputPage';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  const toggleDarkMode = (checked) => {
    setIsDarkMode(checked);
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = () => {
    const token = localStorage.getItem('token');
    setIsAuth(token !== null && !isTokenExpired(token));
  };

  const isTokenExpired = (token) => {
    // Implement your token expiration check logic here
    return false; // Placeholder
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const ProtectedRoute = ({ children }) => {
    return isAuth ? children : <Navigate to="/login" replace />;
  };

  return (
    <div className={`App min-h-screen ${isDarkMode ? 'bg-[#121213] text-white' : 'bg-white text-black'}`}>
      <header className="bg-[#6AAA64] text-white p-4 shadow-md flex justify-between items-center">
        <h1 className="text-2xl font-bold">Wordle Helper</h1>
        <div className="flex items-center space-x-4">
          {!isAuth && (
            <>
              <Link to="/login" className="bg-[#C9B458] hover:bg-[#B59F3B] text-white font-bold py-2 px-4 rounded">
                Login
              </Link>
              <Link to="/signup" className="bg-[#787C7E] hover:bg-[#5A5E60] text-white font-bold py-2 px-4 rounded">
                Signup
              </Link>
            </>
          )}
          <button>
          <DarkModeSwitch
            checked={isDarkMode}
            onChange={toggleDarkMode}
            size={40}
            className={`p-2 rounded-full ${isDarkMode ? 'bg-[#121213] text-white' : 'bg-white text-black' }`}
          />
          </button>
        </div>
      </header>
      <main className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={
            isAuth ? <Navigate to="/home" replace /> : <Navigate to="/login" replace />
          } />
          <Route path="/login" element={
            isAuth ? <Navigate to="/home" replace /> : <LoginPage isDarkMode={isDarkMode} />
          } />
          <Route path="/signup" element={
            isAuth ? <Navigate to="/home" replace /> : <SignupPage isDarkMode={isDarkMode} />
          } />
          <Route path="/home" element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          } />
          <Route path="/image-input" element={
            <ProtectedRoute>
              <ImageInputPage />
            </ProtectedRoute>
          } />
        </Routes>
      </main>
      <footer className={`text-center p-4 mt-8 ${isDarkMode ? 'bg-[#1A1A1B] text-white' : 'bg-[#F3F3F3] text-black'}`}>
        <p className="text-sm">&copy; 2024 Wordle Helper. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;