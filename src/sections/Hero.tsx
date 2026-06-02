import { NavBar } from "../components/NavBar";
import iphone from '../assets/HeroImg.png'

export function Hero(){
    return(
     
        <section className="">
            <NavBar/>
            <div className="flex flex-col px-4 ">
                <h1 className="mt-10.5 text-6xl font-normal leading-[90%] text-center">Browse everything.</h1>
                <img className="mt-17.75" src={iphone} alt="" />
            </div>
        </section>
       
    )
}