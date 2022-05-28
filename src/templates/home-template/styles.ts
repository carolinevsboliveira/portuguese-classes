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
  border-radius: 60px 60px 0 0;
  width: 100%;
  padding: 3rem;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`
