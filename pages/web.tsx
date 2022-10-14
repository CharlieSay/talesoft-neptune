import { NextPage } from 'next'
import styled from 'styled-components'

const FancyPopover = styled.div`
  background: white;

  &[data-placement='top'] {
    margin-bottom: 6px;
  }

  &[data-placement='bottom'] {
    margin-top: 6px;
  }

  &[data-entering] {
    animation: zoom 200ms;
  }
`

const Web: NextPage = () => {
  return (
    <section>
      <h1>Web</h1>
      <FancyPopover>What does this look like?</FancyPopover>
    </section>
  )
}

export default Web
