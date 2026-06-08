import discoverImg from '../assets/discoverImg.png'
import { Button } from '../components/Button'

const DataFeatures = [
    {
        number: "01",
        description: "Spot Trends in Seconds: No more digging through numbers."
    },
    {
        number: "02",
        description: "Get Everyone on the Same Page: Share easy-to-understand reports with your team. "
    },
    {
        number: "03",
        description: "Make Presentations Pop: Interactive maps and dashboards keep your audience engaged."
    },
    {
        number: "04",
        description: "Your Global Snapshot: Get a quick, clear overview of your entire operation."
    }
]


export function BigPicture(){
    return(
        <>
            {/* <span className="flex border border-[#6F6F6F]"></span> */}
            <section className="px-8 pt-15 pb-10 border-t border-[#E9E9E9]">
                <div className="flex flex-col gap-10">
                    <h3 className="text-black text-6xl">See the Big picture</h3>
                    <p className="text-[#6F6F6F] text-[15px]">Area turns your data into clear, vibrant visuals that show you exactly what's happening in each region.</p>
                </div>
                <ul className="py-10">
                    {DataFeatures.map((el) => (
                        <li className="flex gap-7.5 py-5 border-t border-[#E9E9E9]" key={el.number}>
                            <span className="text-[#6F6F6F] text-xl font-medium">{el.number}</span>
                            <span className="text-black text-[15px]]">{el.description}</span>
                        </li>
                    ))}
                </ul>
            </section>
            <section className='flex flex-col gap-20 px-8 mb-20'>
                <Button>
                    Discover More
                </Button>
                <img src={discoverImg} alt="" />
            </section>
        </>
    )
}