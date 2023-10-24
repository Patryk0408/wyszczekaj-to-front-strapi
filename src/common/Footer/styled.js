import styled from 'styled-components'
import contactImage from '../../img/KONTAKT.jpg'
import waveImage from '../../img/fala.png'

export const Wrapper = styled.section`
	position: relative;
	padding: 0 0 280px;
	@media (min-width: ${({ theme }) => theme.breakpoint.laptop}) {
		padding: 0 0 350px;
	}
`

export const Background = styled.div`
	background-image: url(${contactImage});
	height: 100%;
	width: 100%;
	position: absolute;
	bottom: 0;
	background-size: cover;
	background-position-x: center;
`

export const ContactWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	position: relative;
	padding: 70px 20px 0;
	align-items: center;
	gap: 50px;

	@media (min-width: ${({ theme }) => theme.breakpoint.laptop}) {
		flex-direction: row;
		gap: unset;
		padding: 150px 20px 0;
	}
`

export const TextWrapper = styled.div`
	color: ${({ theme }) => theme.color.white};
	max-width: 550px;
	text-align: center;
	@media (min-width: ${({ theme }) => theme.breakpoint.laptop}) {
		text-align: unset;
	}
`

export const Title = styled.h2`
	font-size: 50px;
	text-transform: uppercase;
	padding: 0 0 50px;
	margin: 0;

	@media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
		font-size: 70px;
	}
`

export const TitleSpan = styled.span`
	font-family: 'Chewy', cursive;
	color: ${({ theme }) => theme.color.mandy};
	text-transform: capitalize;
	font-size: 70px;
	line-height: 0.7;

	@media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
		font-size: 125px;
	}
`

export const TitleParagraph = styled.p`
	font-size: 34px;
	margin: 0;
`

export const Description = styled.div`
	min-height: 80px;
	font-size: 18px;
	font-weight: 700;
`

export const Send = styled.div`
	color: ${({ theme }) => theme.color.white};
	position: relative;
	top: 50%;
	bottom: 50%;
`

export const Mail = styled.a`
	color: ${({ theme }) => theme.color.mandy};
	text-decoration: none;
	font-weight: 700;
	background-color: ${({ theme }) => theme.color.white};
	padding: 10px;
	border-radius: 25px;
	border: 1px solid ${({ theme }) => theme.color.mandy};
	display: block;
	transition: transform 0.3s ease;

	&:hover {
		transform: scale(1.1);
	}
`

export const Wave = styled.div`
	background-image: url(${waveImage});
	background-repeat: round;
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 100%;
	max-height: 225px;
	display: flex;
	justify-content: space-between;
	padding: 0 20px;
`

export const SocialMediaContainer = styled.div`
	display: flex;
	align-items: end;
	gap: 10px;

	@media (min-width: ${({ theme }) => theme.breakpoint.laptop}) {
		gap: 30px;
	}
`
export const SocialMedia = styled.a`
	display: flex;
	align-items: center;
	height: fit-content;
	gap: 10px;
	padding: 0 0 30px;
	font-weight: 700;
	color: ${({ theme }) => theme.color.heavyMetal};
	text-decoration: none;
`

export const SendTitle = styled.h2`
	text-transform: uppercase;
	text-align: center;
	margin: 25px 0;
`

export const Connection = styled.div`
	text-align: center;
	display: grid;
	align-content: end;
	margin: 0 30px 25px;
	font-size: 0.8em;

	@media (min-width: ${({ theme }) => theme.breakpoint.laptop}) {
		font-size: 1em;
		margin: 30px;
	}
`

export const ConnectionTitle = styled.h3`
	margin: 5px 0;
`
export const ConnectionItem = styled.p`
	margin: 5px 0;
`

export const SocialTitle = styled.span`
	display: none;

	@media (min-width: ${({ theme }) => theme.breakpoint.laptop}) {
		display: block;
	}
`

export const Copyright = styled.div`
	display: flex;
	width: 100%;
	position: absolute;
	bottom: 5px;
	justify-content: center;
	gap: 5px;
	font-size: 0.8em;

	@media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
		font-size: 1em;
	}
`

export const CopyrightLink = styled.a`
	color: ${({ theme }) => theme.color.heavyMetal};
`
