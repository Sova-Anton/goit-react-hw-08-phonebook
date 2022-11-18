import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-weight: 500;
  font-size: 20px;

  :not(:last-child) {
    margin-right: 30px;
  }

  &.active {
    color: #6eff00;
  }
`;
