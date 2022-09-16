import styled from 'styled-components'

export const TitleH1 = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
`
export const TitleH2 = styled.h2`
  color: white;
  font-weight: 400;
`

export const TimesP = styled.p`
  font-family: 'Times New Roman', Times, serif;
  color: 'white';
  font-size: 1.5rem;
`

export const Glow = styled.span`
  text-align: center;
  background: linear-gradient(
    to right,
    var(--white) 20%,
    var(--white) 40%,
    var(--white) 60%,
    var(--white) 80%
  );
  background-size: 200% auto;
  text-transform: uppercase;
  color: var(--white);
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: glow 2s ease-in-out infinite alternate;

  @keyframes glow {
    from {
      text-shadow: 1px 2px 20px var(--primary);
    }
    to {
      text-shadow: 0 0 30px var(--primary), 0 0 10px var(--primary);
    }
  }
`
