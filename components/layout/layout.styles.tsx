import styled from 'styled-components'

export const Container = styled.main`
  max-width: 960px;
  width: 100%; //Fall back for browsers that doesn't support calc() function
  width: calc(
    100% - 1rem
  ); // Override the width for  browsers that support calc function
  margin: 0 auto;
  background-color: var(--black);
  padding: 24px;
`

export const Center = styled.section`
  h1,
  h2,
  a,
  p {
    text-align: center;
  }
`

export const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 2rem 0;
  justify-content: center;
  align-items: center;
`
