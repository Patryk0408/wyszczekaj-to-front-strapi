import styled from 'styled-components'

export const Wrapper = styled.section`
	background-color: ${({ theme }) => theme.color.mandy};
	padding: 0 20px 20px;
`

export const Title = styled.h2`
	font-size: 50px;
	text-transform: uppercase;
	text-align: center;
	padding: 70px 0 0;

	@media (min-width: ${({ theme }) => theme.breakpoint.mobile}) {
		font-size: 75px;
	}

	@media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
		font-size: 90px;
		padding: 110px 0 0;
	}
`

export const TitleWhite = styled.span`
	color: ${({ theme }) => theme.color.white};
	font-family: 'Chewy', cursive;
	text-transform: capitalize;
`
export const Offers = styled.div`
	padding: 0 20px 80px;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 50px;
`

export const OfferItem = styled.div`
	max-width: 260px;
	background-color: ${({ theme }) => theme.color.white};
	border-radius: 30px;
	padding: 30px 20px;
`

export const OfferTitle = styled.h3`
	font-size: 24px;
	text-align: center;
	margin: 0;
`

export const OfferDescription = styled.p`
	margin: 25px 0 0;
`

export const OfferStar = styled.span`
	font-size: 14px;
`
