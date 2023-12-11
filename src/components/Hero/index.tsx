import { Container } from '../../styles'
import { HeroStyled, HeroTitle, HeroDiv } from './styles'

const Hero = () => (
  <HeroStyled>
    <Container>
      <HeroDiv>
        <HeroTitle>
          As melhores vagas para tecnologia, design e artes visuais.
        </HeroTitle>
      </HeroDiv>
    </Container>
  </HeroStyled>
)

export default Hero
