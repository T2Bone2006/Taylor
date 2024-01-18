"use client"

import ProgrammingIllustration from "@/public/illustrations/programmingIllustration.svg"            
import { client, urlFor } from "@/sanity/sanity-utils"
import { SanityTypes } from "@/sanity/types"
import { useEffect, useState } from "react"


const Hero = () => {

    const [inSiteItems, setMenuItems] = useState<SanityTypes[]>([])

    useEffect(() => {
        const query = `*[_type == "techInSite"]`;
        client.fetch(query).then((data: SanityTypes[]) => {
            setMenuItems(data);
        });
    }, [])



    return (
        <div className="h-screen -mt-16 w-full flex items-center py-32 md:py-0 ">
            <div className="w-full min-h-full md:min-h-0 bg-mainBlue flex justify-evenly items-center flex-col md:flex-row p-10 gap-4 md:gap-0">
                <div className="w-full flex flex-col items-center md:block">
                    <h1 className="font-bold text-3xl md:text-6xl text-center md:text-start">I'm <span className="text-white"><a target="_blank" href="https://www.linkedin.com/in/taylor-burrows-30b1a1234/">Taylor Burrows</a></span></h1>
                    <p className="mt-4 text-center md:text-start">Technologies used in this Site</p>
                    <div className="flex flex-row gap-2 mt-4 w-[fit-content] bg-white p-2 rounded-full">
                        {inSiteItems.map((inSiteItems) => (
                            <img className="h-4 w-4 md:h-8 md:w-8" src={urlFor(inSiteItems.icon).url()}></img>
                        ))}
                    </div>
                </div>
                <div className="w-full md:max-w-[50%]">
                    <ProgrammingIllustration/>
                </div>
            </div>
        </div>
    )
    }

export default Hero