import React from "react"
import SmallHero from "./SmallHero"
import OutLookCard from "./OutlookCard"

export default function OutlookPage({ year }: { year: string }) {
  const sample = [
    {
      path: "/_pdf/test.pdf",
      infoId: 1,
      title: "September",
    },
    {
      path: "/_pdf/test.pdf",
      infoId: 2,
      title: "August",
    },
    {
      path: "/_pdf/test.pdf",
      infoId: 3,
      title: "July",
    },
    {
      path: "/_pdf/test.pdf",
      infoId: 4,
      title: "June",
    },
    {
      path: "/_pdf/test.pdf",
      infoId: 5,
      title: "May",
    },
    {
      path: "/_pdf/test.pdf",
      infoId: 6,
      title: "April",
    },
    {
      path: "/_pdf/test.pdf",
      infoId: 7,
      title: "March",
    },
    {
      path: "/_pdf/test.pdf",
      infoId: 8,
      title: "February",
    },
    {
      path: "/_pdf/test.pdf",
      infoId: 9,
      title: "January",
    },
  ]

  return (
    <>
      <SmallHero year={year} />
      <div className='grid grid-cols-3 mx-auto max-w-7xl gap-y-16 my-16'>
        {sample.map((e, i) => (
          <OutLookCard data={e} key={i} />
        ))}
      </div>
    </>
  )
}
