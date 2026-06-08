import {Check, X, type LucideIcon} from 'lucide-react'
import { Button } from "../components/Button";

type AreaItem = {
  id: number;
  icon: LucideIcon;
  description: string;
};


const AreaData: AreaItem[] = [
    {   
        id: 0,
        icon: Check,
        description: "Ultra-fast browsing"
    },
    {   
        id: 1,
        icon: Check,
        description: "Advanced AI insights"
    },
    {   
        id: 2,
        icon: Check,
        description: "Seamless integration"
    },
    {   
        id: 3,
        icon: Check,
        description: "Advanced AI insights"
    },
    {   
        id: 4,
        icon: Check,
        description: "Ultra-fast browsing"
    },
    {   
        id: 5,
        icon: Check,
        description: "Full UTF-8 support"
    },
]
const WebSurgeData: AreaItem[] = [
    {   
        id: 0,
        icon: Check,
        description: "Fast browsing"
    },
    {   
        id: 1,
        icon: Check,
        description: "AI recommendations"
    },
    {   
        id: 2,
        icon: Check,
        description: "Restricts customization"
    },
    {   
        id: 3,
        icon: X,
        description: "Basic AI insights"
    },
    {   
        id: 4,
        icon: Check,
        description: "Fast browsing"
    },
    {   
        id: 5,
        icon: X,
        description: "Potential display errors"
    },
]

export function WhyChooseArea(){
    return(
        <>
            <section className="px-4 py-20">
                <div className="flex flex-col justify-center items-center gap-7.5">
                    <p className="text-center text-6xl text-black font-medium">Why Choose Area?</p>
                    <p className="text-center text-[15px] text-[#6F6F6F]">You need a solution that keeps up. That’s why we developed Area. A developer-friendly approach to streamline your business. </p>
                    <Button>
                        Discover More
                    </Button>
                </div>
            </section>

            <section className="grid grid-cols-2 px-2">
                <ul className="text-center border border-[#E9E9E9] shadow-2xl shadow-[#E9E9E9]">
                    <span className="text-3xl text-black font-medium">Area</span>
                    {AreaData.map((item) => (
                        
                        <li className='flex justify-center items-center gap-1 px-7.5 py-8 border-t border-[#E9E9E9]' key={item.id}> 
                             <item.icon size={12} />
                            <span className='text-[12px] whitespace-nowrap'>{item.description}</span>
                        </li>
                    ))}
                </ul>

                <ul className="text-center border border-[#E9E9E9] shadow-2xl shadow-[#E9E9E9]">
                    <p className="text-3xl  text-black font-medium">WebSurge</p>
                    {WebSurgeData.map((item) => (
                        <li className='flex justify-center items-center gap-1  py-8 border-t border-[#E9E9E9]' key={item.id}> 
                            <item.icon size={12} />
                            <span className='text-[12px] whitespace-nowrap'>{item.description}</span>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    )
}