import {Menu} from 'lucide-react'
import { useEffect, useState } from 'react'
import { Button } from './Button'

type Breakpoints = "mobile" | "tablet" | "desktop"

function getBreakPoints(width: number): Breakpoints{
    if(width < 768) return 'mobile'
    if(width < 1024) return 'tablet'
    return 'desktop'
}

export function NavBar(){

    const[breakpoint, setBreakPoint] = useState<Breakpoints>(getBreakPoints(window.innerWidth))

    useEffect(() => {
    function handleResize() {
      setBreakPoint(getBreakPoints(window.innerWidth));
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

    return(
        <nav className='bg-white md:pt-6.5'>
            {breakpoint === 'mobile' && 
            <div className='flex items-center justify-between p-5 rounded-b-3xl shadow'>
                <p className='text-3xl text-black font-medium'>Area</p>
                <Menu className='text-black size-7'/>
            </div>}
            {breakpoint === 'tablet' && 
            <div className='flex justify-around items-center'>
                
                <p className='text-3xl text-black font-medium'>Area</p>
                <ul className='flex items-center gap-7 text-black font-medium'>
                    <li>Benefits</li>
                    <li>Specifications</li>
                    <li>How-to</li>
                    <li>Contact Us</li>
                </ul>

                <button className='bg-[#485C11] text-white font-medium px-5.5 py-3.5 rounded-4xl w-fit'>
                    Learn More
                </button>  
            </div>}

            
            {breakpoint === "desktop" &&  (
                <div className='flex justify-between items-center'>
                
                    <p className='text-3xl text-black font-medium '>Area</p>
                    <ul className='flex items-center gap-7 text-black font-medium'>
                        <li>Benefits</li>
                        <li>Specifications</li>
                        <li>How-to</li>
                        <li>Contact Us</li>
                    </ul>

                    <button className='bg-[#485C11] text-white font-medium px-5.5 py-3.5 rounded-4xl w-fit'>
                        Learn More
                    </button>  
                </div>
            )}
        </nav>
    )
}