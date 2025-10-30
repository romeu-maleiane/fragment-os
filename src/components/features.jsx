'use client'
import { Bolt, Book, Inventory, Lightbulb } from '@mui/icons-material'
import React from 'react'
import Image from 'next/image'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function Features() {

    useGSAP(() => {
        const featureImageTween = gsap.timeline({
            scrollTrigger: {
                trigger: '.feature-card-highlited',
                start: 'top bottom',
                end: 'bottom 90%',
                scrub: true
            }
        })

        featureImageTween.fromTo('.feature-image',{ scale: 0.5 }, { scale: 1, ease: 'power1.inOut' })

        const featureCardTween = gsap.timeline({
                scrollTrigger: {
                    trigger: '.feature-card-group',
                    start: 'top 80%',
                    end: 'top 5%',
                    toggleActions: 'play reverse play reverse'
                }
            })
    
        featureCardTween.fromTo('.feature-card',{ opacity: 0 }, { opacity: 1, stagger: 0.1, ease: 'power1.inOut' })
    })


    return (
        <section className='features'>
            <div className='wrapper'>
                <div className='text-center max-w-3xl'>
                    <h2>Arrange all within one spot</h2>
                    <p>
                        Take charge of your tasks, projects, finances, contacts, events, resources,
                        notes, habits, and goals in one seamless hub.
                    </p>
                </div>

                <div className='feature-card-highlited'>
                    <div className='relative'>
                        <div className='w-73 pl-8'>
                            <Lightbulb />
                            <h3 className='text-l font-semibold pt-6 pb-3'>Quick Capture</h3>
                            <p className='text-m text-gray-500 font-normal'>Capture new ideas, tasks, and bookmarks instantly.</p>
                        </div>

                        <div className='feature-image'>
                            <Image height={3392} width={2880} alt='Fragment OS' src={'/product-image.avif'} className='object-cover object-center rounded-2xl' />
                        </div>
                    </div>
                </div>

                <div className='feature-card-group'>
                    <div className='feature-card'>
                        <Bolt />
                        <h3>PARA Method</h3>
                        <p>Ground your organization in the robust framework of PARA, developed by leading productivity expert Tiago Forte.</p>
                    </div>
                    <div className='feature-card'>
                        <Inventory />
                        <h3>Advanced Project Management</h3>
                        <p>Effortlessly track your projects, break them down into manageable steps, and access saved notes and resources quickly.</p>
                    </div>
                    <div className='feature-card'>
                        <Book />
                        <h3>Connect Your Knowledge</h3>
                        <p>Easily connect related data, such as linking projects to helpful video resources.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features
