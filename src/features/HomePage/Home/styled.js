import styled from 'styled-components'
import Baner from '../../../img/landing-page.jpg'
import { ReactComponent as Down } from '../../../img/slow-down.svg'

export const Wrapper = styled.section`
	position: relative;
	padding: 80px 0 0;
	@media (min-width: ${({ theme }) => theme.breakpoint.mobile}) {
		padding: 100px 0 0;
	}
`

export const Description = styled.div`
	position: absolute;
	top: 30%;
	display: grid;
	justify-content: center;
	width: 100%;
`

export const Background = styled.div`
	background-image: url(${Baner});
	background-position-x: center;
	width: 100%;
	height: 700px;
	background-size: cover;

	@media (min-width: ${({ theme }) => theme.breakpoint.mobile}) {
		height: 850px;
	}
`

export const Title = styled.h1`
	margin: 0;
	text-transform: uppercase;
	font-size: 50px;
	text-align: center;
	color: ${({ theme }) => theme.color.white};
	padding: 0 20px;
	@media (min-width: ${({ theme }) => theme.breakpoint.mobile}) {
		font-size: 75px;
	}

	@media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
		font-size: 90px;
	}
`

export const Training = styled.span`
	font-family: 'Chewy', cursive;
	color: ${({ theme }) => theme.color.mandy};
	text-transform: capitalize;
`
export const Paragraph = styled.p`
	font-size: 20px;
	font-weight: 700;
	color: ${({ theme }) => theme.color.white};
	text-align: center;
	padding: 0 20px;
`

export const IconDown = styled(Down)`
	fill: #fff;
	bottom: 150px;
	position: absolute;
	text-align: center;

	&:hover {
		cursor: pointer;
	}
`

export const IconWrapper = styled.span`
	width: 100%;
	display: flex;
	justify-content: center;
`
