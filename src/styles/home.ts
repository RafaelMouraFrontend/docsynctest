import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 40px;
  @media (max-width: 1200px) {
    padding: 0 15px;
  }
`

export const Row = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  column-gap: 20px;
  display: grid;
  grid-template-columns: auto auto auto auto;
  @media (max-width: 1026px) {
    row-gap: 20px;
    grid-template-columns: auto auto auto;
  }
  @media (max-width: 768px) {
    grid-template-columns: auto auto;
  }
  @media (max-width: 400px) {
    grid-template-columns: auto;
  }
`
