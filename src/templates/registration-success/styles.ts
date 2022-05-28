import styled from 'styled-components'

export const SuccessPageWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1059%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(212%2c 241%2c 255%2c 1)'%3e%3c/rect%3e%3cpath d='M 0%2c117 C 144%2c141.2 432%2c243.2 720%2c238 C 1008%2c232.8 1296%2c120.4 1440%2c91L1440 560L0 560z' fill='rgba(93%2c 136%2c 190%2c 1)'%3e%3c/path%3e%3cpath d='M 0%2c338 C 96%2c380.8 288%2c558.2 480%2c552 C 672%2c545.8 768%2c330.4 960%2c307 C 1152%2c283.6 1344%2c409.4 1440%2c435L1440 560L0 560z' fill='rgba(0%2c 17%2c 91%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1059'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
  background-size: cover;
`

export const ContentWrapper = styled.div`
  margin: 2rem;
`
export const TextWrapper = styled.div`
  text-align: center;
  padding: 2rem;
  h1 {
    color: #000a36;
  }
  h2 {
    color: #17326b;
  }
`
export const ButtonWrapper = styled.div`
  max-width: 400px;
`
