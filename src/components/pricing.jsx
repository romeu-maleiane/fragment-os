'use client'
import { Check } from '@mui/icons-material'
import React from 'react'
import { Button } from './ui/button'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


function Pricing() {

    useGSAP(() => {
            const cards = document.querySelectorAll('.pricing-card')
    
            cards.forEach((card) => {
                gsap.timeline({
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 90%',
                        end: 'bottom 20%',
                        toggleActions: 'play reverse play reverse',
                    }
                }).fromTo(card,
                    { opacity: 0, },
                    {
                        opacity: 1,
                        duration: 0.4,
                        ease: 'power1.inOut'
                    }
                )
            })
        })

    return (
        <section className='pricing'>
            <div className='wrapper'>
                <div className='max-w-3xl text-center'>
                    <h2>
                        Pay once, use forever
                    </h2>
                    <p>
                        Enjoy lifetime access, community support, and no subscription fees.
                    </p>
                </div>

                <div className='flex flex-wrap gap-6'>
                    <div className='pricing-card p-7.5 h-120 w-80 border border-gray-100 rounded-4xl flex flex-col justify-between'>
                        <div>
                            <div className='flex pb-3 flex-col gap-3'>
                                <h3 className='test-m text-gray-500'>Basic</h3>
                                <h1 className='heading-1 font-medium text-gray-950'>
                                    $24
                                </h1>
                                <p className='text-m font-semibold text-gray-500'>One-time payment</p>
                            </div>

                            <hr />

                            <div className='flex flex-col gap-2 pt-3 text-s text-gray-500'>
                                <p className='flex items-center gap-1'><Check fontSize='16' /> Second Brain template</p>
                                <p className='flex items-center gap-1'><Check fontSize='16' /> Tutorials and examples</p>
                                <p className='flex items-center gap-1'><Check fontSize='16' /> 30-day money-back guarantee</p>
                            </div>
                        </div>

                        <Button size={'lg'} className={'rounded-full'}>
                            Get it now
                        </Button>
                    </div>

                    <div className='pricing-card p-7.5 bg-gray-950 h-120 w-80 border rounded-4xl flex flex-col justify-between'>
                        <div>
                            <div className='flex pb-3 flex-col gap-3'>
                                <h3 className='test-m text-gray-100'>Basic</h3>
                                <h1 className='heading-1 text-white font-medium'>
                                    $24
                                </h1>
                                <p className='text-m font-semibold text-gray-100'>One-time payment</p>
                            </div>

                            <hr />

                            <div className='flex flex-col gap-2 pt-3 text-s text-gray-100'>
                                <p className='flex items-center gap-1'><Check fontSize='16' /> Second Brain template</p>
                                <p className='flex items-center gap-1'><Check fontSize='16' /> Tutorials and examples</p>
                                <p className='flex items-center gap-1'><Check fontSize='16' /> 30-day money-back guarantee</p>
                            </div>
                        </div>

                        <Button size={'lg'} variant={'secondary'} className={'rounded-full'}>
                            Get it now
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing
