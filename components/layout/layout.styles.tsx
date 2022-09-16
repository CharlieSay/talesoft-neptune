import styled from 'styled-components'

export const Container = styled.main`
  max-width: 960px;
  width: 100%; //Fall back for browsers that doesn't support calc() function
  width: calc(
    100% - 1rem
  ); // Override the width for  browsers that support calc function
  margin: 50px auto;
  padding: 50px;
`

export const Center = styled.section`
  h1,
  h2,
  a,
  p {
    text-align: center;
  }
`
