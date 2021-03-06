import styled from 'styled-components'

export const ContentWrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 1rem;
  overflow: scroll;

  h1 {
    margin-bottom: 2rem;
  }
`

export const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  top: 0;
`

export const JustifiedClassesContainer = styled.div`
  margin-top: 4rem;
  text-align: center;
`

export const Title = styled.h1`
  color: var(--primary);
`
