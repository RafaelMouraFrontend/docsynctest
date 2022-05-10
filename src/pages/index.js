import Card from './components/Card'
import * as S from '../styles/home'
import { useSelector } from 'react-redux'

export default function Home() {
  const state = useSelector((state) => state.cards)

  return (
    <S.Container>
      <S.Row>
        {state.map((card, index) => {
          return <Card key={index} card={card} />
        })}
      </S.Row>
    </S.Container>
  )
}
