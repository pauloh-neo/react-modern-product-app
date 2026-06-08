import { Button } from "../components/Button";
import { MapSuccessSlider } from "../components/MapSuccessSlider";

export function MapYourSuccess(){
    return(
        <>
            <section className="px-4 pt-20">
                <div className="flex flex-col gap-10 justify-center items-center">
                    <h3 className="text-4xl font-medium text-black whitespace-nowrap">Map your Success</h3>
                    <Button>
                        Discover More
                    </Button>
                </div>
            </section>
            <section>
                <MapSuccessSlider/>
            </section>
        </>
    )
}