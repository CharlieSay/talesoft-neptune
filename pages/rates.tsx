import type { NextPage } from 'next'
import { Center } from '../components/layout/layout.styles'
import {
  MasterContainer,
  SubTextTable,
  TableContainer,
  THead,
} from '../styles/form.styles'
import {
  RatesSectionFooterText,
  TitleH1,
  TitleH2,
} from '../styles/typography.styles'

const RatesData = [
  {
    section: 'Hourly Rates',
    subText: '',
    rates: [
      { name: 'Video Switching', price: '£28' },
      { name: 'Production Mgmt / Support', price: '£30' },
    ],
    footerText:
      'If out of hours (before 8am, after 10pm) per hour, 1.5x is charged',
  },
  {
    section: 'Daily Rates (8 Hours)',
    subText: '',
    rates: [
      { name: 'Video Switching', price: '£200' },
      { name: 'Production Mgmt / Support', price: '£220' },
    ],
    footerText: 'No extra charges.',
  },
]

const Rates: NextPage = () => {
  return (
    <Center>
      <TitleH1>RATES</TitleH1>
      {RatesData.map((rateData) => (
        <section key={rateData.section}>
          <TitleH2 alternative={true}>{rateData.section}</TitleH2>
          <MasterContainer>
            <TableContainer>
              <THead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                </tr>
              </THead>
              <tbody>
                {rateData.rates.map((rate) => (
                  <tr key={rate.name}>
                    <th>{rate.name}</th>
                    <th>{rate.price}</th>
                  </tr>
                ))}
              </tbody>
            </TableContainer>
          </MasterContainer>
          <RatesSectionFooterText>{rateData.footerText}</RatesSectionFooterText>
        </section>
      ))}
    </Center>
  )
}

export default Rates
