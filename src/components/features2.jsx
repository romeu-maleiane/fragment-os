'use client'
import React from 'react'
import FeatureCard2 from './featureCard2'
import { Event, Flag, Money, SelfImprovement, StickyNote2, Task } from '@mui/icons-material'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function Features2() {

    useGSAP(() => {
        const cards = document.querySelectorAll('.feature-card-2')

        cards.forEach((card) => {
            gsap.timeline({
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
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
        <section className='features-2 flex-x-center personalized-container'>
            <div className='wrapper flex-x-center gap-16 px-10'>
                <div className='max-w-3xl text-center'>
                    <h2 className='text-4xl text-gray-950 font-semibold pb-6'>
                        Stay focused and organized
                    </h2>
                    <p className='text-m text-gray-500 font-normal'>
                        Empower coaches, educators, and trainers to seamlessly craftcomprehensive learning experiences.
                    </p>
                </div>

                <div className='features grid md:grid-cols-3 md:grid-rows-2 grid-cols-1 grid-rows-6 gap-10'>
                    <FeatureCard2 icon={<Task />} title={'Projects and Tasks'} description={'Effortlessly manage, track, and prioritize your tasks and projects.'} />
                    <FeatureCard2 icon={<StickyNote2 />} title={'Resources and Notes'} description={'Effortlessly manage resources, notes, and connect them to projects.'} />
                    <FeatureCard2 icon={<Flag />} title={'Goals Tracker'} description={'Easily manage goals and todos, reach what you want, track progress.'} />
                    <FeatureCard2 icon={<Event />} title={'Contacts and Events'} description={'Categorize contacts, create and manage events, and link them to projects.'} />
                    <FeatureCard2 icon={<Money />} title={'Finances'} description={'Easily manage your income, expenses, categories, and connect to projects.'} />
                    <FeatureCard2 icon={<SelfImprovement />} title={'Habits'} description={'Track and monitor daily habits to establish positive routines and achieve goals.'} />
                </div>
            </div>
        </section>
    )
}

export default Features2
