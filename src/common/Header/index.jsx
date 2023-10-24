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
					<HyperLink to='AboutUs' smooth={true} duration={500} offset={-75}>
						O nas
					</HyperLink>
				</NavItem>
				<NavItem>
					<HyperLink to='Offer' smooth={true} duration={500} offset={-75}>
						Oferta
					</HyperLink>
				</NavItem>
				<NavItem>
					<HyperLink to='Contact' smooth={true} duration={500} offset={-75}>
						Kontakt
					</HyperLink>
				</NavItem>
			</Nav>
		</Wrapper>
	)
}

export default Header
