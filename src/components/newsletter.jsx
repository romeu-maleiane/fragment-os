'use client'
import React from 'react'
import { Button } from './ui/button'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function Newsletter() {
    useGSAP(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: '.newsletter > .wrapper',
                start: 'top 90%',
                end: 'bottom 20%',
                toggleActions: 'play reverse play reverse',
            }
        }).fromTo('.newsletter > .wrapper',
            { opacity: 0, },
            {
                opacity: 1,
                duration: 0.4,
                ease: 'power1.inOut'
            }
        )
    })

    return (
        <section className='newsletter'>
            <div className="wrapper">
                <div className='max-w-3xl text-center'>
                    <h2>
                        Subscribe future updates
                    </h2>
                    <p>
                        Enjoy a peace of mind with everything organized in one place.Find what you need, when you need it.
                    </p>
                </div>

                <div className='flex md:flex-row flex-col md:w-fit w-[90%] items-center gap-2.5'>
                    <input className='bg-white md:w-fit w-full rounded-full border border-gray-100 font-medium text-gray-500 h-11 py-3 px-6 text-xl' type="text" placeholder='Enter your email' />
                    <Button size={'lg'} className={'rounded-full md:w-fit w-full'}>
                        Subscribe
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default Newsletter
