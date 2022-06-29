import styled from 'styled-components'

export const NavBarWrapper = styled.nav`
  width: 100%;
  display: flex;
  justify-content: end;
  padding: 2rem;
`
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 3rem;
`
export const LottieInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  h1 {
    text-align: center;
  }
`
export const ClassListWrapper = styled.div`
  display: flex;
  padding: 3rem;
  background: #5d88be;
  border-radius: 40px;
`

export const BannersWrapper = styled.div`
  display: flex;
  gap: 4rem;
  margin: 0rem 2rem;

  @media (max-width: 730px) {
    flex-direction: column;
    flex-wrap: wrap;
  }
`
