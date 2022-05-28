import styled from 'styled-components'
//TODO: Add google fonts API
export const FullHeightWrapper = styled.div`
  height: 100%;
  background-color: var(--highlight);
`
export const NavBarWrapper = styled.div`
  display: flex;
  width: 100%;
  align-content: stretch;
  justify-content: end;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 2;
  gap: 2rem;
  padding: 1rem 2rem;
  @media (max-width: 280px) {
    justify-content: center;
  }
`
export const LottieSection = styled.div`
  display: flex;
  margin: 0;
  width: 100%;
  align-content: stretch;
  justify-content: end;
  align-items: center;
  min-height: 400px;
  margin-bottom: 0;
`

export const InformationTextContainer = styled.div`
  display: flex;
  margin: 0;
  padding: 2rem 0;
  width: 100%;
  text-align: center;
  flex-direction: column;
  h1 {
    color: var(--primary);
    padding: 1rem;
  }
  h2 {
    color: var(--secondary);
    padding: 0.5rem;
  }
`

export const AdditionalInfoWrapper = styled.div`
  background-color: var(--light);
  display: flex;
  flex-direction: column;
  border-radius: 60px;
  padding: 0.5rem;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  @media (max-width: 290px) {
    padding: 0;
  }
`
export const PapersWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 0 2rem;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  @media (max-width: 730px) {
    flex-direction: column;
    flex-wrap: wrap;
  }
`

export const TeacherCardsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 2rem 0;
  padding: 2rem;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  h1 {
    color: var(--primary);
    text-align: center;
  }
  @media (max-width: 730px) {
    flex-direction: column;
    flex-wrap: wrap;
  }
`
