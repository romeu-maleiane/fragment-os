import React from 'react'
import Link from 'next/link'
import {Button} from './ui/button'

function Navbar() {
  return (
    <header className='flex flex-row relative gap-0 h-fit items-center text-black bg-white backdrop-blur-[10px] border-b border-gray-50 w-full py-0 xl:px-20 lg:px-10'>
      <nav className='px-10 py-4 w-full flex-between'>
        <div className='flex-between gap-10'>
            <div className='size-10 rounded-lg bg-black'>

            </div>

            <ul className='flex-between gap-10'>
                <li className='text-gray-500 hover:text-gray-950'>
                    <Link href={'#'}>
                        Home
                    </Link>
                </li>
                <li className='text-gray-500 hover:text-gray-950'>
                    <Link href={'#'}>
                        Features
                    </Link>
                </li>
                <li className='text-gray-500 hover:text-gray-950'>
                    <Link href={'#'}>
                        Pricing
                    </Link>
                </li>
                <li className='text-gray-500 hover:text-gray-950'>
                    <Link href={'#'}>
                        FAQs
                    </Link>
                </li>
            </ul>
        </div>

        <div className='flex-between gap-4'>
            <Button size={'sm'} variant={'secondary'} className={'rounded-full'}>
                Get full access
            </Button>
            <Button size={'sm'} className={'rounded-full'}>
                Get it now
            </Button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
