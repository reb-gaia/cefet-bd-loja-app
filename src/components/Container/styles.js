// estilização do componente Container
import styled from 'styled-components';
import { mixins } from '../../styles/mixins';

const ContainerSM = styled.div`
  margin: 80px 0;
  width: 530px;
  height: auto;
  background-color:${mixins.colors.secondary};
  
  align-self: center;
  border-radius: 3px;
  align-items: top;
  justify-content: center;
  padding: 50px;
`

export const Styled = {
  ContainerSM,
  ContainerLG: styled(ContainerSM)` /* estende informações de SM */
    margin-top: 180px;
    width: 390px;
    border-radius: 15px;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 50px 0;
    
  `,
  Title: styled.h1`
    margin-bottom: 40px;
    color: #2d334a;
    font-family: ${mixins.fonts.bold};
    font-size: ${mixins.typograph.subtitle};
  `
}