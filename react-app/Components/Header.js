import React from 'react'
import Link from 'next/link'
const Header = (props) => {
  return (
    <>
        <div className='h-12 bg-black text-white p-5 text-2xl flex items-center justify-between font-bold'>
        <Link href='./'> <h2>{props.marks}'s Page</h2> </Link>
        <div className='flex gap-8'>
            <Link href='/About'>About</Link>
            <Link href='/Products'>Products</Link>
            <Link href='/Courses'>Courses</Link>
            <Link href='/Contacts'>Contacts</Link>
        </div>
        </div>

    </>
  )
}

export default Header
