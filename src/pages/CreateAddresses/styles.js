// estilização da página CreatProduct

import styled from "styled-components";
import { mixins } from "../../styles/mixins";
import { FormSelect, FormControl, FormLabel } from 'react-bootstrap';


export const Styled = {
  Error: styled.p`
    margin-top: 4px;
    align-self: center;
    justify-self: center;
    color: ${mixins.colors.red};
    font-family: ${mixins.fonts.semi_bold};
    font-size: ${mixins.typograph.paragraph};
  `,
  ProfileInput: styled(FormControl) `
    background-color: #eee;
    border: none;
    border-bottom: 1px solid ${mixins.colors.secondary};
    width: 100%;  
    height: 35px;  

    &:focus {
      outline: none;
    }

    @media (max-width: 1000px) {
      width: 100%;
      height: 100%;
      font-size: 40px;
      margin: 20px 0px;
      padding: 10px;
    }
  `,
  ProfileSelect: styled(FormSelect) `
    background-color: #eee;
    border: none;
    border-bottom: 1px solid ${mixins.colors.secondary};
    width: 100%;  
    height: 35px;   
    color: rgba(0,0,0,0.5); 
    
    @media (max-width: 1000px) {
      width: 100%;
      height: 100%;
      font-size: 40px;
      margin: 20px 0px;
    }
  `,
  ProfileLabel: styled(FormLabel) `
    color: ${mixins.colors.dark};
    font-size: ${mixins.typograph.paragraph};
    font-family: ${mixins.fonts.bold};
    @media (max-width: 1000px) {
      width: 100%;
      font-size: 30px;
    }
  `, 
  ProfileOption: styled.option `
    @media (max-width: 1000px) {
      font-size: ${mixins.typograph.paragraph};
    }
  `
}