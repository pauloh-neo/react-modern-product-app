import { NavBar } from "../components/NavBar";
import mobile from '../assets/HeroImg.png'
import tablet from  '../assets/ipadTablet.png'
import desktop from '../assets/IpadDesktop.png'

export function Hero(){
    return(
     
        <section className="md:px-10">
            <NavBar/>
                <h1 className="mt-10.5 text-6xl font-normal leading-[90%] text-center md:text-8xl md:font-medium md:mb-20">Browse everything.</h1>
                <img
                    src={mobile}
                    alt="Hero"
                    className="block md:hidden w-full h-auto object-cover"
                />

            {/* Tablet (768px - 1023px) */}
                <img
                    src={tablet}
                    alt="Hero"
                    className="hidden md:block lg:hidden w-full h-auto object-cover"
                />

            {/* Desktop (≥ 1024px) */}
                <img
                    src={desktop}
                    alt="Hero"
                    className="hidden lg:block w-full h-auto object-cover"
                />
   
            {/* <div className="flex flex-col px-4 ">
                <h1 className="mt-10.5 text-6xl font-normal leading-[90%] text-center md:text-8xl md:font-medium">Browse everything.</h1>
                <img className="mt-17.75" src={ipadTablet} alt="" />
            </div> */}
        </section>
       
    )
}