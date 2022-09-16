import styled from 'styled-components'

export const PillGroupContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  margin-top: 32px;

  @media (max-width: 757px) {
    grid-template-columns: auto;
  }
`

export const Pill = styled.section`
  height: 105px;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px;
  border-radius: 10px;
  margin: auto;
  position: relative;
  cursor: pointer;
  transition: 0.75s;
`

export const PillImage = styled.img`
  inset: 0px;
  display: block;
  height: 100%;
  object-fit: cover;
  width: 100%;
  z-index: 0;
  border-radius: 10px;
  transition: inherit;
  :hover {
    -webkit-filter: grayscale(75%);
    filter: grayscale(75%);
  }
`

export const PillText = styled.p`
  font-size: 1.2rem;
  margin: 0;
  z-index: 1;
  white-space: nowrap;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`
