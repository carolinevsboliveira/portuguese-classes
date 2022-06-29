import styled from 'styled-components'

export const ContentWrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;

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

export const ErrorMessage = styled.span`
  color: #d32f2f;
  margin-top: 0.5rem;
  margin-left: 0.5rem;
  font-size: 0.8rem;
`

export const Title = styled.h1`
  color: var(--primary);
`

export const FormWrapper = styled.form`
  display: flex;
  align-items: stretch;
  flex-direction: column;
  padding: 0 2rem;
  width: 100%;
  max-width: 600px;
`
