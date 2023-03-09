import Link from 'next/link'
import React from 'react'

import { footerList1, footerList2, footerList3 } from '../utils/constants'

const List = ({ items, mt }: { items: string[], mt:boolean }) => (
  <div className={`flex flex-wrap gap-2 ${mt && 'mt-5'}`}>
        {items.map((item) => (
          <div className='hover:underline'>
          <Link href='/SDP'>
            {item}
          </Link>
          </div>
        ))}
      </div>
)
const Footer = () => {
  return (
    <div className='mt-6 hidden xl:block'>
      <List items={footerList2} mt={false}/>
      <List items={footerList3} mt/>
    </div>
  )
}

export default Footer