'use client'
import React from 'react'
import { Button } from './ui/button'
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import Image from 'next/image'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger)

function Hero() {

    useGSAP(() => {
        const imageTween = gsap.timeline({
            scrollTrigger: {
                trigger: '.hero-image',
                scrub: true,
                start: 'top bottom',
                end: 'top top',
            }
        })

        imageTween.fromTo('.hero-image', { scale: 0.5, rotateX: '24deg', ease: 'power1.inOut' }, {
            scale: 1,
            rotateX: '0deg',
            ease: 'power1.inOut'
        })
    }, [])

    return (
        <section className='hero'>
            <div className='wrapper flex-x-center w-full gap-30 px-20'>
                <div className='content'>
                    <div className='content-text'>
                        <h1 className='heading-1 text-gray-950 font-medium'>
                            Fragment OS Your Second Brain
                        </h1>

                        <p className='text-l text-gray-500 font-normal'>
                            Fragment OS is an all-in-one Notion system that centralizes tasks,
                            projects, notes, resources, and everything in between.
                        </p>
                    </div>

                    <div className='content-buttons'>
                        <Button size={'lg'} variant={'secondary'} className={'rounded-full'}>
                            See features
                        </Button>
                        <Button size={'lg'} className={'rounded-full'}>
                            Purchase now
                        </Button>
                    </div>

                    <div className='flex-x-center gap-2'>
                        <div className='flex gap-2 justify-center'>
                            <StarIcon fill="#FFCF33" className='text-[#FFCF33]' />
                            <StarIcon fill="#FFCF33" className='text-[#FFCF33]' />
                            <StarIcon fill="#FFCF33" className='text-[#FFCF33]' />
                            <StarIcon fill="#FFCF33" className='text-[#FFCF33]' />
                            <StarHalfIcon fill="#FFCF33" className='text-[#FFCF33]' />
                        </div>

                        <p className='text-s font-normal text-gray-500'>4.9/5 from 3,470 customers</p>
                    </div>
                </div>

                <div className='hero-image'>
                    <div className='h-294  absolute top-0 right-0 left-0 '>
                        <Image height={3392} width={2880} alt='Fragment OS' src={'/product-image.avif'} className='object-cover object-center' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
