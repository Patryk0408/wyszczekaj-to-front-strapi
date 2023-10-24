import { Wrapper, Description, Title, Training, Paragraph, Background, IconDown, IconWrapper } from './styled'
import { Link } from 'react-scroll'

const Home = () => {
	return (
		<Wrapper id='Home'>
			<Background />
			<Description>
				<Title>
					Centrum <Training>szkolenia</Training> psów
				</Title>
				<Paragraph>U nas dowiesz się jak dogadać się ze swoim psem</Paragraph>
			</Description>
			<Link to='AboutUs' smooth={true} duration={500} offset={-75}>
				<IconWrapper>
					<IconDown />
				</IconWrapper>
			</Link>
		</Wrapper>
	)
}

export default Home
