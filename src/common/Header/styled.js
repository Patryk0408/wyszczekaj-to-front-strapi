import styled, { css } from 'styled-components'
import { NavLink } from 'react-router-dom'

export const HyperLink = styled.span`
	display: block;
	width: 100%;
	-webkit-tap-highlight-color: transparent !important;
	padding: 20px;

	${({ logo }) =>
		logo &&
		css`
			padding: 0;
		`}
`

export const StyledNavLink = styled(NavLink)`
	display: block;
	width: 100%;
	-webkit-tap-highlight-color: transparent !important;
	padding: 0;

	${({ logo }) =>
		logo &&
		css`
			padding: 0;
		`}
`

export const Wrapper = styled.div`
	width: 100%;
	height: 80px;
	display: flex;
	justify-content: space-between;
	position: fixed;
	background-color: ${({ theme }) => theme.color.white};
	z-index: 1;
	box-shadow: 0px 3px 20px ${({ theme }) => theme.color.doveGray};
	@media (min-width: ${({ theme }) => theme.breakpoint.mobile}) {
		height: 100px;
	}
`

export const Logo = styled.img`
	height: 80px;
	padding: 10px;
	@media (min-width: ${({ theme }) => theme.breakpoint.mobile}) {
		height: 100px;
	}
`

export const Nav = styled.ul`
	opacity: 0;
	transition: opacity 0.1s ease;
	position: absolute;
	background-color: ${({ theme }) => theme.color.white};
	list-style-type: none;
	right: -5px;
	width: 200px;
	top: 60px;
	padding: 0;
	border-radius: 0 0 0 30px;

	${({ active }) =>
		active &&
		css`
			opacity: 0.95;
		`};

	@media (min-width: ${({ theme }) => theme.breakpoint.mobile}) {
		top: 80px;
	}
	@media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
		display: flex;
		align-items: center;
		font-weight: 700;
		font-size: 24px;
		padding: 0 20px 0 0;
		position: unset;
		background-color: unset;
		width: unset;
		border-radius: unset;
		opacity: unset;
	}

	@media (min-width: ${({ theme }) => theme.breakpoint.laptop}) {
		gap: 75px;
	}
`

export const NavItem = styled.li`
	font-size: 1.2em;
	-webkit-tap-highlight-color: transparent !important;
	&:hover {
		cursor: pointer;
	}

	@media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
		width: max-content;
	}
`

// export const MenuMobile = styled.span`
// 	display: grid;
// 	font-size: 2.5em;
// 	align-items: center;
// 	margin: 0 20px;
// 	cursor: pointer;
// 	@media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
// 		display: none;
// 	}
// 	-webkit-tap-highlight-color: transparent !important;
// `
