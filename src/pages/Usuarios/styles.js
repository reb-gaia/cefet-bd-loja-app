// estilização da página Home
import styled from 'styled-components'
import { mixins } from "../../styles/mixins";


export const Styled = {
  Container: styled.div`
    margin: 2rem 0;
    padding: 4rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-self: center;
    border-radius: 25px;
    align-items: top;
    justify-content: center;
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
    background-color: #fffffe;
    padding: 30px;
    margin: 60px 100px 0 60px;
    width: 450px;    
    display: flex;
    flex-direction: column;
    align-self: center;
    justify-content: center;
    border-radius: 35px;
  `,

  Title: styled.h1`
    letter-spacing: 4px;
    text-align: center;
    padding-bottom: 25px;
    font-size: ${mixins.typograph.title};
  `,

  Description: styled.h1`
    letter-spacing: 2px;
    line-height: 1.5;
    font-size: ${mixins.typograph.subtitle};
    text-align: center;
  `, 
  
  CardWrapper: styled.div`
    display: grid;
    margin: 0 auto;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fit, 300px);
    justify-content: center;
    justify-items: center;
  `
}
