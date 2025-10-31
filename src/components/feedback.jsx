'use client'
import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import Image from 'next/image'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function Feedback() {

    useGSAP(() => {
        const feedbackCardTween = gsap.timeline({
                scrollTrigger: {
                    trigger: '#feedback-card',
                    start: 'top 85%',
                    end: 'bottom 20%',
                    toggleActions: 'play reverse play reverse',
                }
            })
    
        feedbackCardTween.fromTo('#feedback-card',{ opacity: 0 }, { opacity: 1, duration: 0.4, ease: 'power1.inOut' })
    })

    return (
        <section className='flex-x-center py-40'>
            <div id='feedback-card' className='flex-x-center gap-4 py-6 sm:w-120 w-90'>
                <div className='flex gap-2 justify-center'>
                    <StarIcon fill="#FFCF33" className='text-[#FFCF33]' />
                    <StarIcon fill="#FFCF33" className='text-[#FFCF33]' />
                    <StarIcon fill="#FFCF33" className='text-[#FFCF33]' />
                    <StarIcon fill="#FFCF33" className='text-[#FFCF33]' />
                    <StarHalfIcon fill="#FFCF33" className='text-[#FFCF33]' />
                </div>

                <p className='heading-3 text-center text-gray-950 font-medium'>
                    "It's worth it for me not to have to spend any time and energy figuring out how to set up a Second Brain in Notion."
                </p>

                <div className='flex gap-4 p-0'>
                    <Image src={'/feedback.png'} height={54} width={54} alt={'Jasmine'} className='rounded-full sm:size-14 size-12 object-center object-cover' />
                    <div className='flex flex-col'>
                        <div className='text-m text-gray-500'>Jasmine Reinhard</div>
                        <div className='text-s text-gray-400'>Copywriter</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Feedback
