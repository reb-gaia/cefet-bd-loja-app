import React from 'react';
import { Styled } from './styles';

function Container({ children, title, size }) {
  switch(size) {
    case "login":
      return (
        <Styled.ContainerLG>
          <Styled.Title>
            {title}
          </Styled.Title>
          {children}
        </Styled.ContainerLG>
      );
    case "form":
      return (
        <Styled.ContainerSM>
          <Styled.Title>
            {title}
          </Styled.Title>
          {children}
        </Styled.ContainerSM>
      );
    default:
      break;
  }
}

export default Container;