import type { NextPage } from 'next'

const ratesData = [
  {
    section: 'Live Events',
    sectionGroup: [
      {
        title: 'Video Switching',
        rates: [
          { value: 28, type: 'Hour' },
          { value: 200, type: 'Day (8 Hours)' },
        ],
        subText:
          'If out of hours (before 8am, after 10pm) per hour, 1.5x is charged of hourly rate',
      },
      {
        title: 'Production Management',
        rates: [
          { value: 30, type: 'Hour' },
          { value: 220, type: 'Day (8 Hours)' },
        ],
        subText:
          'If out of hours (before 8am, after 10pm) per hour, 1.5x is charged of hourly rate',
      },
    ],
  },
  {
    section: 'Creative / Media',
    sectionGroup: [
      {
        title: 'Adaptation',
        rates: [{ value: 25, type: 'Hour' }],
      },
      {
        title: 'Creation',
        rates: [{ value: 39, type: 'Hour' }],
      },
      {
        title: 'Design',
        rates: [{ value: 'Negotiable', type: 'Hour' }],
      },
    ],
  },
  {
    section: 'Software Consulting',
    sectionGroup: [
      {
        title: 'Backend',
        rates: [{ value: 50, type: 'Hour' }],
      },
      {
        title: 'Web / Full-stack',
        rates: [{ value: 45, type: 'Hour' }],
      },
    ],
  },
]

const Rates: NextPage = () => {
  return (
    <div className="my-auto grid grid-cols-1 gap-4 w-1/2">
      {ratesData.map((rateData) => (
        <section
          className="flex flex-col justify-center bg-zinc-800 rounded-md p-4"
          key={rateData.section}
        >
          <h1 className="text-2xl font-bold uppercase">{rateData.section}</h1>
          {rateData.sectionGroup.map((group) => (
            <section key={group.title} className="pb-8 ">
              <h1 className="text-xl lowercase py-2">{group.title}</h1>
              <table className="min-w-full pb-4 text-left">
                <thead className="bg-zinc-700">
                  <tr>
                    <th scope="col" className="px-6 py-3 font-bold">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3 font-bold">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {group.rates.map((rate) => (
                    <tr
                      className="border-b w-full hover:bg-zinc-900 hover:cursor-pointer"
                      key={group.title}
                    >
                      <th
                        scope="col"
                        key={rate.type}
                        className="px-6 py-3 font-medium"
                      >
                        {rate.type}
                      </th>{' '}
                      <th
                        scope="col"
                        key={rate.type}
                        className="px-6 py-3 font-medium"
                      >
                        £{rate.value}
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          ))}
        </section>
      ))}
    </div>
  )
}

export default Rates