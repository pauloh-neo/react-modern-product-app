import amplifyInsights from '../assets/benefitsImgs/amplifyInsights.png'
import globalPresence from '../assets/benefitsImgs/globalPresence.png'
import languageBarries from '../assets/benefitsImgs/languageBarries.png'
import visualizeGrowth from '../assets/benefitsImgs/visualizeGrowth.png'

export function Benefits(){
    return(
        <section className="mt-20 px-4">
            <div className="flex flex-col gap-7.5">
                <h2 className="text-xs text-[#485C11]">Benefits</h2>
                <p className="flex  text-5xl text-black">We’ve cracked the code.</p>
                <p className="text-[18px] text-[#6F6F6F]">Area provides real insights, without the data overload.</p>
            </div>
            <ul className="mt-12.5 border-t-2 border-[#E9E9E9]">
                <li className='pt-10 pr-5 pb-10 pl-0'>
                    <img src={amplifyInsights} alt="" />
                    <div className='flex flex-col gap-5 mt-6'>
                        <p className='text-black text-[18px] font-medium'>Amplify Insights</p>
                        <p className='text-[15px] text-[#6F6F6F]'>Unlock data-driven decisions with comprehensive analytics, revealing key opportunities for strategic regional growth.</p>
                    </div>
                </li>
                <li className='pt-10 pr-5 pb-10 pl-0 border-t-2 border-[#E9E9E9]'>
                    <img src={globalPresence} alt="" />
                    <div className='flex flex-col gap-5 mt-6'>
                        <p className='text-black text-[18px] font-medium'>Control Your Global Presence</p>
                        <p className='text-[15px] text-[#6F6F6F]'>Manage and track satellite offices, ensuring consistent performance and streamlined operations everywhere.</p>
                    </div>
                </li>
                <li className='pt-10 pr-5 pb-10 pl-0 border-t-2 border-[#E9E9E9]'>
                    <img src={languageBarries} alt="" />
                    <div className='flex flex-col gap-5 mt-6'>
                        <p className='text-black text-[18px] font-medium'>Remove Language Barries</p>
                        <p className='text-[15px] text-[#6F6F6F]'>Adapt to diverse markets with built-in localization for clear communication and enhanced user experience.</p>
                    </div>
                </li>
                <li className='pt-10 pr-5 pb-10 pl-0 border-t-2 border-[#E9E9E9]'>
                    <img src={visualizeGrowth} alt="" />
                    <div className='flex flex-col gap-5 mt-6'>
                        <p className='text-black text-[18px] font-medium'>Visualize Growth</p>
                        <p className='text-[15px] text-[#6F6F6F]'>Generate precise, visually compelling reports that illustrate your growth trajectories across all regions.</p>
                    </div>
                </li>
            </ul>
        </section>
    )
}