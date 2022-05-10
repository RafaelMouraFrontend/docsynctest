import Card from './components/Card'
import * as S from '../styles/home'

export default function Home() {
  return (
    <S.Container>
      <S.Row>
        <Card />
        <Card />
        <Card />
        <Card />
      </S.Row>
    </S.Container>
  )
}
