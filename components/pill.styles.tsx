import styled from 'styled-components'

export const PillGroupContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0px;
  margin-top: 32px;

  @media (max-width: 757px) {
    grid-template-columns: auto;
  }
`

export const Pill = styled.section`
  border: 2px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.45s;
`

export const PillText = styled.p`
  text-align: center;
  font-size: 1.2rem;
  margin: 0;
  z-index: 1;
  white-space: nowrap;
`
