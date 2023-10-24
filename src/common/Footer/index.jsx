import {
	Wrapper,
	Background,
	ContactWrapper,
	TextWrapper,
	Title,
	TitleSpan,
	TitleParagraph,
	Description,
	Wave,
	Send,
	SendTitle,
	Mail,
	SocialMedia,
	SocialMediaContainer,
	Connection,
	ConnectionTitle,
	ConnectionItem,
	SocialTitle,
	Copyright,
	CopyrightLink,
} from './styled'
import { ReactComponent as FacebookIcon } from '../../img/facebook.svg'
import { ReactComponent as InstagramIcon } from '../../img/instagram.svg'

const Footer = () => {
	return (
		<>
			<Wrapper id='Contact'>
				<Background />
				<ContactWrapper>
					<TextWrapper>
						<Title>
							Umów się na <br />
							<TitleSpan>darmową</TitleSpan> <TitleParagraph>konsultacje telefoniczną</TitleParagraph>
						</Title>
						<Description>Nie rozumiesz co twój pies ma ci do powiedzenia? Rozwiążmy tę zagadkę razem!!!</Description>
					</TextWrapper>
					<Send>
						<SendTitle>Napisz do nas!</SendTitle>
						<Mail href='mailto:wyszczekajto@opoczta.pl'>wyszczekajto@opoczta.pl</Mail>
					</Send>
				</ContactWrapper>
				<Wave>
					<SocialMediaContainer>
						<SocialMedia href='https://www.instagram.com/wyszczekajto_szkoleniepsow/' rel='nofollow' target='_blank'>
							<InstagramIcon width='40' height='40' />
							<SocialTitle>@wyszczekajto_szkoleniepsow</SocialTitle>
						</SocialMedia>
						<SocialMedia href='https://www.facebook.com/profile.php?id=100089853856901' rel='nofollow' target='_blank'>
							<FacebookIcon width='30' height='30' />
							<SocialTitle>Wyszczekaj To - Centrum Szkolenia Psów</SocialTitle>
						</SocialMedia>
					</SocialMediaContainer>
					<Connection>
						<ConnectionTitle>Kontakt</ConnectionTitle>
						<ConnectionItem>( +48 ) 574-438-867 </ConnectionItem>
						<ConnectionItem>wyszczekajto@opoczta.pl</ConnectionItem>
					</Connection>
				</Wave>
				<Copyright>
					&copy; Powered by{' '}
					<CopyrightLink href='https://www.linkedin.com/in/patryk-krawczyk-b651b8260/' rel='nofollow' target='_blank'>
						Patryk0408
					</CopyrightLink>
				</Copyright>
			</Wrapper>
		</>
	)
}

export default Footer
