import { Wrapper, Logo, Nav, NavItem, HyperLink, StyledNavLink } from './styled'
import pageLogo from '../../img/logo.png'
import { toHome, toShop } from '../../routes'

const Header = () => {
	return (
		<Wrapper>
			<StyledNavLink to={toHome}>
				<Logo src={pageLogo} href='logo' />
			</StyledNavLink>
			<Nav>
				<StyledNavLink to={toShop}>Sklep</StyledNavLink>
				<NavItem>
					<HyperLink>O nas</HyperLink>
				</NavItem>
				<NavItem>
					<HyperLink>Oferta</HyperLink>
				</NavItem>
				<NavItem>
					<HyperLink>Kontakt</HyperLink>
				</NavItem>
			</Nav>
		</Wrapper>
	)
}

export default Header
