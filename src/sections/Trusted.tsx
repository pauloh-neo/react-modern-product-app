import logo1 from '../assets/logos/Logo-1.png'
import logo2 from '../assets/logos/Logo-2.png'
import logo3 from '../assets/logos/Logo-3.png'
import logo4 from '../assets/logos/Logo-4.png'
import logo5 from '../assets/logos/Logo-5.png'
import logo6 from '../assets/logos/Logo-6.png'

export function Trusted(){
    return(
        <section className="flex flex-col px-4 py-12.5">
            <p className="text-[15px] font-normal text-[#6F6F6F]">Trusted by:</p>
            <ul className='grid grid-cols-2 mt-7.5 gap-10 md:grid md:grid-cols-4 lg:flex lg:justify-around'>
                <li className='p-5'>
                    <img src={logo1} alt="" />
                </li>
                <li className='p-5'>
                    <img src={logo2} alt="" />
                </li>
                <li className='p-5'>
                    <img src={logo3} alt="" />
                </li>
                <li className='p-5'>
                    <img src={logo4} alt="" />
                </li>
                <li className='p-5 md:col-start-2 md:col-end-2'>
                    <img src={logo5} alt="" />
                </li>
                <li className='p-5'>
                    <img src={logo6} alt="" />
                </li>
            </ul>
        </section>
    )
}