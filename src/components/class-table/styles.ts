import styled from 'styled-components'

export const Table = styled.div`
  display: flex;
  flex-direction: column;
`
export const Row = styled.div`
  display: flex;
  @media (max-width: 599px) {
    flex-direction: column;
  }

  @media (max-width: 900px) {
    flex-wrap: wrap;
  }
`
export const Cell = styled.div`
  flex-grow: 1;
  width: auto;
  @media (max-width: 900px) {
    width: 50%;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`
