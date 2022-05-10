import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100%;
  border: 1px #ccc solid;
  padding: 1.5rem;
  border-radius: 5px;
`
export const ImageContainer = styled.div`
  max-width: 100px;
  margin: 0 auto;
`

export const Description = styled.div``

export const Title = styled.p`
  font-size: 2.2rem;
  font-weight: 600;
`

export const HorizontalList = styled.span`
  display: flex;
  font-size: 1.4rem;
  color: #979797;
`

export const Price = styled.p`
  font-size: 1.6rem;
  margin-top: 1rem;
`

export const Offer = styled.p`
  font-size: 1.6rem;
  margin-top: 1rem;
  color: #1fa52b;
`

export const Link = styled.a`
  font-size: 1.6rem;
  color: #2344e8;
  margin-top: 20px;
  text-decoration: underline;
`

export const FooterCard = styled.div`
  display: flex;
  margin-top: 20px;
`
export const Flex = styled.div`
  display: flex;
`

export const ButtomMinus = styled.button`
  background-color: #fff;
  border: 1px solid #3892d8;
  border-radius: 50%;
  width: 25px;
  height: 25px;
`
export const ButtomPlus = styled.button`
  background-color: #fff;
  border: 1px solid #3892d8;
  border-radius: 50%;
  width: 25px;
  height: 25px;
`

export const InputQtd = styled.input`
  width: 40px;
  height: 25px;
  margin-left: 5px;
  margin-right: 5px;
`

export const ButtonAdd = styled.button`
  width: 100%;
  border: 1px solid #3892d8;
  background-color: #fff;
  height: 25px;
  border-radius: 3px;
  margin-left: 20px;
  color: #3892d8;
  font-weight: 600;
`
