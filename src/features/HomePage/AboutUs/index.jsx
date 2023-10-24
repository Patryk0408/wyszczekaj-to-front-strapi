import { Wrapper, Description, Title, TitleRed, Paragraph, Dogs, Empty } from './styled'
import dogsPhoto from '../../../img/o-nas.jpg'

const AboutUs = () => {
	return (
		<Wrapper id='AboutUs'>
			<Description>
				<Title>
					Czym się
					<TitleRed> zajmujemy?</TitleRed>
				</Title>

				<Dogs src={dogsPhoto} alt='Dogs' />
				<Empty></Empty>
				<Paragraph>
					Witamy w Wyszczekaj To Centrum Szkolenia Psów, gdzie zrozumienie psiej komunikacji jest kluczem do skutecznego
					treningu i budowania głębokiej więzi z naszymi czworonożnymi przyjaciółmi! Wierzymy, że komunikacja jest
					kluczem do udanej relacji z psem. Uczymy właścicieli rozpoznawania subtelnych znaków i sygnałów wysyłanych
					przez psy, które często wyrażają emocje, potrzeby i zamiary. Poprzez zrozumienie mowy ciała i języka psów,
					możemy lepiej zareagować na ich sygnały, co prowadzi do efektywniejszego treningu i większej harmonii w
					naszych interakcjach. Dołącz do nas, aby zrozumieć swojego psa lepiej niż kiedykolwiek wcześniej i zbudować
					trwałą, pełną zaufania relację między Wami. Czekamy na Was z otwartymi sercami i entuzjazmem!
				</Paragraph>
			</Description>
		</Wrapper>
	)
}

export default AboutUs
