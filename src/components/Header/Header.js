import React, { useState, useEffect, useRef } from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';

const Header = ({ token }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const onLogout = () => {
    sessionStorage.removeItem('token');
    navigate("#/");
    setIsDropdownOpen(false); // Close dropdown after logout
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      <div className="header__left">
        <a className='header-link' href='#/'>
        <span className="header__company-name">
          TechBugX
        </span>
        </a>
      </div>

      <div className="header__right" ref={dropdownRef}>
        <div className="header__user-dropdown">
          <button className="header__user-button" onClick={toggleDropdown}>
            <img
              src="https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png"
              alt="User Logo"
              className="header__user-logo"
            />
          </button>

          {isDropdownOpen && (
            <div className="header__dropdown-menu">
              <button className="header__dropdown-item" onClick={() => setIsDropdownOpen(false)}>
                {token ? token.user.email : "Profile"}
              </button>
              <button className="header__dropdown-item" onClick={onLogout}>
                {token ? "Logout" : "Login"}
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
