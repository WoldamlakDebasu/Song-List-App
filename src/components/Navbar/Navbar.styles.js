import styled from '@emotion/styled';
import { space, color, layout } from 'styled-system';
import { Link } from 'react-router-dom';


export const Nav = styled.nav`
  background-color: #f2f2f2;
  padding: 16px;
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const NavItem = styled.li`
  margin-right: 16px;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: bold;
  
  &:hover {
    color: #555;
  }
`;

// Additional styling properties using Styled System
export const CustomNavItem = styled(NavItem)`
  ${space} // Margin and padding properties
  ${color} // Color properties
  ${layout} // Width, height, and other layout properties
`;
