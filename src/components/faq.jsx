'use client'
import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


function FAQ() {
    useGSAP(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: '#faq-group',
                start: 'top 90%',
                end: 'bottom 20%',
                toggleActions: 'play reverse play reverse',
            }
        }).fromTo('#faq-group',
            { opacity: 0, },
            {
                opacity: 1,
                duration: 0.3,
                ease: 'power1.inOut'
            }
        )
    })

    return (
        <section id='faq'>
            <div className='wrapper'>
                <div className='max-w-3xl text-center'>
                    <h2>
                        FAQ
                    </h2>
                    <p>
                        Frequently Asked Questions
                    </p>
                </div>

                <Accordion
                    id='faq-group'
                    type="single"
                    collapsible
                    className="md:w-146 w-full"
                >
                    <AccordionItem value="item-1">
                        <AccordionTrigger className={'text-xl text-gray-950 font-semibold'}>How does this work?</AccordionTrigger>
                        <AccordionContent className="text-gray-500">
                            <p>
                                After purchase, you'll receive a link to duplicate the template into your Notion account. If you're new to Notion, I've included a video to help you get started.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className={'text-xl text-gray-950 font-semibold'}>Can I use this with Notion free plan?</AccordionTrigger>
                        <AccordionContent className="text-gray-500">
                            <p>
                                Yes, you can absolutely use our Notion templates with a free account.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className={'text-xl text-gray-950 font-semibold'}>Do you offer educational/ non-profit discount?</AccordionTrigger>
                        <AccordionContent className="text-gray-500">
                            <p>
                                Absolutely, we offer discounts for students, teachers, and non-profit organizations.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger className={'text-xl text-gray-950 font-semibold'}>Can I upgrade to a higher tier later on?</AccordionTrigger>
                        <AccordionContent className="text-gray-500">
                            <p>
                                Yes, you can upgrade to a higher tier later. Just send an email to me, and I'll send you a discounted upgrade link.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div >

        </section >
    )
}

export default FAQ
