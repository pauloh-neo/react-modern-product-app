import { Benefits } from "../sections/Benefits";
import { Hero } from "../sections/Hero";
import { Trusted } from "../sections/Trusted";

export function Home(){
    return(
        <main className="h-screen bg-white">
            <Hero/>
            <Trusted/>
            <Benefits/>
        </main>
    )
}