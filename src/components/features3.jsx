'use client'
import React from 'react'
import Image from 'next/image'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function Features3() {

    useGSAP(() => {
            const cards = document.querySelectorAll('.feature-3-card')
    
            cards.forEach((card) => {
                gsap.timeline({
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%',
                        end: 'bottom 30%',
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
        <section className='features-3'>
            <div className='wrapper'>
                <div className='max-w-3xl text-center'>
                    <h2>
                        Build your Second Brain
                    </h2>
                    <p>
                        Take control of your life by capturing and organizing all your projects,tasks, notes, goals, finances, resources, events, contacts, and habits in onestreamlined system.
                    </p>
                </div>

                <div className='feature-3-card-group'>
                    <div className='feature-3-card'>
                        <div className='feature-3-card-image'>
                            <Image src={'/feature-image_1.png'} height={300} width={300} alt='feature image 1' className='object-fill object-center scale-150' />
                        </div>
                        <h3>
                            Manage your Projects and Tasks
                        </h3>
                        <p>
                            Easily manage and track your projects and tasks all in one place.
                        </p>
                    </div>
                    <div className='feature-3-card'>
                        <div className='feature-3-card-image'>
                            <Image src={'/feature-image_2.png'} height={300} width={300} alt='feature image 2' className='object-fill object-center md:scale-200 scale-150' />
                        </div>
                        <h3>
                            Manage your Projects and Tasks
                        </h3>
                        <p>
                            Easily manage and track your projects and tasks all in one place.
                        </p>
                    </div>
                    <div className='feature-3-card'>
                        <div className='feature-3-card-image'>
                           <Image src={'/feature-image_3.png'} height={300} width={300} alt='feature image 3' className='object-fill object-center scale-200' />
                        </div>
                        <h3>
                            Manage your Projects and Tasks
                        </h3>
                        <p>
                            Easily manage and track your projects and tasks all in one place.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features3
