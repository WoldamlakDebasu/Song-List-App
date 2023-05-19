import React from 'react';
import { Link } from 'react-router-dom';
//import { useSelector } from 'react-redux';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { space } from 'styled-system';

const Nav = styled.nav`
  background-color:  rgba(51, 112, 255, 0.75);
  width:100%;
  margin-top:0;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: right;
  ${space}
`;

const NavLink = styled(Link)`
  margin-right: 1rem;
  color: #FFFFFF;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: #555;
  }
  ${space}
`;



const Navbar = () => {
  //const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Nav p={3}>
      <div>
          <NavLink to="/" mr={3}>
            Home
          </NavLink>
        
          <NavLink to="/songs" mr={3}>
            Songs
          </NavLink>
        
          <NavLink to="/create" mr={3}>
            Create Songs
          </NavLink>

          <NavLink to="/login" mr={3}>
            Login
          </NavLink> 
        
          <NavLink to="/signup" mr={3}>
            Sign Up
          </NavLink>
      </div>
    </Nav>
  );
};

export default Navbar;




