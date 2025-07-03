'use client'

import { useState } from "react"
import DivisionAccordion from "./division-accordion"
import BouncingSquares from "../animations/bouncing-square"

interface DivisionItem {
    id: number
    title: string
    description: string
    img: string
    icon: string
    color: 'green' | 'blue' | 'pink' | 'yellow' | 'purple'
}

const group1: DivisionItem[] = [
    {
        id: 1,
        title: 'Graphic Designer',
        description: 'The Graphic Design Division is responsible for creating visual content that represents the identity. This includes designing posters, social media posts, and other. Members of this division must be creative and skilled in design software to effectively communicate through visuals.',
        img: '/icons/dg-thumbnail.png',
        icon: '/icons/dg-icon.png',
        color: 'green'
    },
    {
        id: 2,
        title: 'Photographer',
        description: 'The Photography Division captures important moments from campus events and activities through compelling photographs. Members are expected to master camera equipment and basic editing techniques to produce high-quality visual documentation that will become a need for publication.',
        img: '/icons/fg-thumbnail.png',
        icon: '/icons/fg-icon.png',
        color: 'blue'
    },
    {
        id: 3,
        title: 'Web Master',
        description: 'The Webmaster Division is in charge of managing and maintaining the organization’s website. This includes uploading content, ensuring smooth navigation, and handling technical aspects. Members should have basic knowledge of web development.',
        img: '/icons/wm-thumbnail.png',
        icon: '/icons/wm-icon.png',
        color: 'pink'
    }
]

const group2: DivisionItem[] = [
    {
        id: 1,
        title: 'Reporter',
        description: "The Reporter Division is responsible for gathering, writing, and editing news or articles related to campus. Members conduct interviews, write reports, and help maintain the credibility and journalistic integrity of the organization’s media publications.",
        img: '/icons/rp-thumbnail.png',
        icon: '/icons/rp-icon.png',
        color: 'purple'
    },
    {
        id: 2,
        title: 'Videographer',
        description: 'The Videography Division focuses on producing video content such as event documentation,  and  probably some creative projects. Members work on shooting, and editing videos to engage the audience and convey messages effectively through moving images.',
        img: '/icons/vg-thumbnail.png',
        icon: '/icons/vg-icon.png',
        color: 'yellow'
    }
]

const accordionMobile: DivisionItem[] = [
    {
        id: 1,
        title: 'Graphic Designer',
        description: 'The Graphic Design Division is responsible for creating visual content that represents the identity. This includes designing posters, social media posts, and other. Members of this division must be creative and skilled in design software to effectively communicate through visuals.',
        img: '/icons/dg-thumbnail.png',
        icon: '/icons/dg-icon.png',
        color: 'green'
    },
    {
        id: 2,
        title: 'Photographer',
        description: 'The Photography Division captures important moments from campus events and activities through compelling photographs. Members are expected to master camera equipment and basic editing techniques to produce high-quality visual documentation that will become a need for publication.',
        img: '/icons/fg-thumbnail.png',
        icon: '/icons/fg-icon.png',
        color: 'blue'
    },
    {
        id: 3,
        title: 'Web Master',
        description: 'The Webmaster Division is in charge of managing and maintaining the organization’s website. This includes uploading content, ensuring smooth navigation, and handling technical aspects. Members should have basic knowledge of web development.',
        img: '/icons/wm-thumbnail.png',
        icon: '/icons/wm-icon.png',
        color: 'pink'
    },
        {
        id: 4,
        title: 'Reporter',
        description: "The Reporter Division is responsible for gathering, writing, and editing news or articles related to campus. Members conduct interviews, write reports, and help maintain the credibility and journalistic integrity of the organization’s media publications.",
        img: '/icons/rp-thumbnail.png',
        icon: '/icons/rp-icon.png',
        color: 'purple'
    },
    {
        id: 5,
        title: 'Videographer',
        description: 'The Videography Division focuses on producing video content such as event documentation,  and  probably some creative projects. Members work on shooting, and editing videos to engage the audience and convey messages effectively through moving images.',
        img: '/icons/vg-thumbnail.png',
        icon: '/icons/vg-icon.png',
        color: 'yellow'
    }
]

export default function DivisionSection() {
    const [activeGroup1, setActiveGroup1] = useState<number | null>(1)
    const [activeGroup2, setActiveGroup2] = useState<number | null>(2)
    const [activeAccordionMobile, setActiveAccordionMobile] = useState<number | null>(1)

    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-start my-32">
            {/* decorative components */}
            <BouncingSquares size="lg" isMobile={false} isFlip className="left-36 top-5" />
            <BouncingSquares size="md" isMobile={false} isFlip={false} className="right-36 top-42" />

            {/* title section */}
            <div className="flex max-md:px-5 flex-col items-center space-y-10">
                {/* title */}
                <h1 className="font-medium text-6xl text-center leading-snug">Let&apos;s Dive In Deeper <br />Get To Know The Divisions</h1>
                <p className="w-full max-w-4xl text-center text-lg">
                    To support the needs, in the ENT student unit there are divisions that will work according to their expert fields. What divisions are there in ENT? Let&apos;s find out!
                </p>
            </div>

            {/* accordion view */}
            <div className="mt-24 flex max-md:hidden justify-center items-center w-full gap-5">
                {/* group1 */}
                <div className="flex flex-col gap-y-5">
                    {/* group1  */}
                    {group1.map((item) => (
                        <DivisionAccordion 
                            key={item.id}
                            title={item.title}
                            description={item.description}
                            img={item.img}
                            icon={item.icon}
                            isOpen={activeGroup1 === item.id}
                            color={item.color}
                            onToggle={() => setActiveGroup1(activeGroup1 === item.id ? null : item.id)} 
                        />
                    ))}
                </div>
                {/* group2 */}
                <div className="flex flex-col gap-y-5">
                    {group2.map((item) => (
                        <DivisionAccordion 
                            key={item.id}
                            title={item.title}
                            description={item.description}
                            img={item.img}
                            icon={item.icon}
                            isOpen={activeGroup2 === item.id}
                            color={item.color}
                            onToggle={() => setActiveGroup2(activeGroup2 === item.id ? null : item.id)} 
                        />
                    ))}
                </div>
            </div>

            {/* accordion mobile */}
            <div className="mt-24 flex md:hidden flex-col justify-center items-center w-full gap-5">
                {accordionMobile.map((item) => (
                    <DivisionAccordion 
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        img={item.img}
                        icon={item.icon}
                        isOpen={activeAccordionMobile === item.id}
                        color={item.color}
                        onToggle={() => setActiveAccordionMobile(activeAccordionMobile === item.id ? null : item.id)} 
                    />
                ))}
            </div>
        </section>
    )
}