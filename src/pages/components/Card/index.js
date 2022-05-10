import * as S from './styles'
import Image from 'next/image'

const Card = ({ card }) => (
  <>
    <S.Card>
      <S.ImageContainer>
        <Image
          src="/images/colorado.jpg"
          alt="Cerveja Preta Colorado"
          width={308}
          height={876}
        />
      </S.ImageContainer>

      <S.Description>
        <S.Title>{card.title}</S.Title>

        <S.HorizontalList>
          <p>12 Unit • </p>
          <p> 330ml Bottle</p>
        </S.HorizontalList>

        <S.Price>RD$32,00/unit</S.Price>
        <S.Offer>Buy 3 get 1 free</S.Offer>
        <S.Link>view details</S.Link>
      </S.Description>

      <S.FooterCard>
        <S.Flex>
          <S.ButtomMinus>-</S.ButtomMinus>
          <S.InputQtd type="number" />
          <S.ButtomPlus>+</S.ButtomPlus>
        </S.Flex>
        <S.ButtonAdd>Add</S.ButtonAdd>
      </S.FooterCard>
    </S.Card>
  </>
)

export default Card
