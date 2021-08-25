// estilização da página Home
import styled from 'styled-components'
import { mixins } from "../../styles/mixins";


export const Styled = {
  Container: styled.div`
    margin: 80px 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-self: center;
    border-radius: 25px;
    align-items: top;
    justify-content: center;
    padding: 50px;
  `,

  Box: styled.div`
    padding: 0 360px;
    width: 100%;    
    display: flex;
    flex-direction: column;
    align-self: center;
    justify-content: center;
  `,

  Img: styled.div`
    paddind-top: 50px;
    width: 200px;    
    display: flex;
    flex-direction: column;
    align-self: center;
    justify-content: center;
  `,

  Title: styled.h1`
    letter-spacing: 4px;
    text-align: center;
    padding-bottom: 50px;
    font-size: ${mixins.typograph.title};
  `,

  Description: styled.h1`
    letter-spacing: 2px;
    line-height: 1.5;
    font-size: ${mixins.typograph.subtitle};
    text-align: justify;
  `, 

}