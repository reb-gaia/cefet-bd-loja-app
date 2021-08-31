// estilização do componente NavBar
import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Styled = {
  NavIcon: styled(Link)`
    margin-right: 1rem;
    color: #272343;
    text-decoration: none;
    font-size: 1.5rem;
  `,
  NavItem: styled(Link)`
    margin-top: 2px;
    margin-right: 1rem;
    color: #272343;
    text-decoration: none;
    font-size: 13px;
  `,

}
