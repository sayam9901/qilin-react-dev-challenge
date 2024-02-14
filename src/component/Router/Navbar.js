import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div style={styles.navbar}>
      <nav>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <NavLink to="/" style={styles.navLink} activeStyle={styles.activeNavLink}>Home</NavLink>
          </li>
          <li style={styles.navItem}>
            <NavLink to="/about" style={styles.navLink} activeStyle={styles.activeNavLink}>About</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#333',
    padding: '10px 0',
  },
  navList: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    textAlign: 'center',
  },
  navItem: {
    display: 'inline-block',
    margin: '0 10px',
  },
  navLink: {
    textDecoration: 'none',
    color: '#fff',
    fontSize: '16px',
    fontWeight: 'bold',
    padding: '8px 12px',
    borderRadius: '4px',
    transition: 'background-color 0.3s ease',
  },
  activeNavLink: {
    backgroundColor: '#555',
  },
};

export default Navbar;
