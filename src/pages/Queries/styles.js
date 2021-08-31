// estilização da página Home
import styled from 'styled-components'

export const Styled = {
  CardWrapper: styled.div`
    display: grid;
    margin: 0 auto;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fit, 300px);
    justify-content: center;
    justify-items: center;
  `
}