import styled from 'styled-components';
import { mixins } from "../../styles/mixins";

export const Box = styled.div`
	padding: 50px 0 30px 0;
	background: #fffffe;	
	position: relative;
	bottom: 0;
	width: 100%;

	@media (max-width: 1000px) {
		padding: 50px 0 30px 0;
	}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 700px;
	margin: 0 auto;
`

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
	margin-left: 60px;
`;

export const Row = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill,
		minmax(185px, 1fr));
	grid-gap: 20px;

	@media (max-width: 1000px) {
		grid-template-columns: repeat(auto-fill,
			minmax(200px, 1fr));
}
`;

export const Title = styled.h5`
	color: #2d334a;
	display: flex;        
	flex-direction: row;
	font-family: ${mixins.fonts.bold};
	font-size: ${mixins.typograph.paragraph};
`;

export const Paragraph = styled.h5`
	display: flex;        
	flex-direction: row;
	font-size: ${mixins.typograph.paragraph};
`;

export const Text = styled.h5`
	color: #2d334a;
	display: flex;        
	flex-direction: row;
	align-items: center;
	justify-content: center;
	font-family: ${mixins.fonts.bold};
	font-size: ${mixins.typograph.paragraph};
`;
