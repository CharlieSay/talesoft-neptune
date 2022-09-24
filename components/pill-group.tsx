import Link from 'next/link'
import { PillGroupContainer, Pill, PillText } from './pill.styles'

export const PillGroup = (props: {
  areas: { text: string; link: string; thumbLoc: string }[]
}) => {
  return (
    <PillGroupContainer>
      {props.areas.map((area) => (
        <Link passHref href={area.link} key={area.text}>
          <Pill>
            <PillText>{area.text}</PillText>
          </Pill>
        </Link>
      ))}
    </PillGroupContainer>
  )
}
