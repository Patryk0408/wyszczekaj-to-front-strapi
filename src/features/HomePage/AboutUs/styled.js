import styled from 'styled-components'

export const Wrapper = styled.section`
	padding: 70px 20px;
	display: flex;
	justify-content: center;
	grid-gap: 30px;
	flex-direction: column;

	@media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
		padding: 0px 20px;
	}
`

export const Dogs = styled.img`
	max-width: 600px;
	width: 100%;
	height: 100%;
	margin: 0 auto;
	@media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
		max-width: 700px;
		order: 1;
		position: relative;
		top: 180px;
	}
`

export const Description = styled.div`
	max-width: 600px;
	padding: 0;
	margin: 0 auto;
	position: relative;
	@media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
		display: grid;
		grid-template-columns: auto auto;
		margin: 0;
		max-width: unset;
		justify-content: center;
	}
`

export const Title = styled.h2`
	text-align: center;
	text-transform: uppercase;
	font-size: 50px;
	margin: 0 0 20px;
	width: 100%;

	@media (min-width: ${({ theme }) => theme.breakpoint.mobile}) {
		font-size: 75px;
	}

	@media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
		font-size: 90px;
	}
	@media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
		display: grid;
		font-size: 90px;
		order: 2;
		max-width: min-content;
		margin: 0 auto 20px;
		align-content: center;
	}
`

export const TitleRed = styled.span`
	font-family: 'Chewy', cursive;
	color: ${({ theme }) => theme.color.mandy};
	text-transform: capitalize;
`

export const Paragraph = styled.p`
	font-size: 24px;
	font-weight: 700;
	text-align: center;
	order: 4;

	@media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
		max-width: 600px;
		margin: 0 0 0 auto;
		position: relative;
		top: -50px;
	}
`
export const Empty = styled.div`
	order: 3;
`
