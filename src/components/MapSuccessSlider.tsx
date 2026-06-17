
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const SuccessData = [
    {
        id: 0,
        number: "01",
        title: "Get Started",
        description: "With our intuitive setup, you’re up and running in minutes."
    },
    {
        id: 1,
        number: "02",
        title: "Customize and Configure",
        description: "Adapt Area to your specific requirements and preferences."
    },
    {
        id: 2,
        number: "03",
        title: "Grow Your Business",
        description: "Make informed decisions to exceed your goals."
    },
]

export function MapSuccessSlider() {
  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 2,
      spacing: 20,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: {
          perView: 2,
          spacing: 20,
        },
      },
      "(min-width: 768px)": {
        slides: {
          perView: 3,
          spacing: 20,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 3,
          spacing: 20,
        },
      },
    },
  })
  return (
    <div ref={ref} className="keen-slider mt-20 pl-4 mb-30.25 gap-5">
          <div className="keen-slider pt-15 pr-8 pb-5">
            {SuccessData.map((item) => (
                <div
                key={item.id}
                className="keen-slider__slide"
                >
                <p className="text-[#929292] text-7xl mb-14">{item.number}</p>
                <div className="flex flex-col gap-5">
                    <p className="text-black text-[18px] whitespace-nowrap">{item.title}</p>
                    <p className="text-[#6F6F6F] text-[15px]">{item.description}</p>
                </div>
            </div>
        ))}
        </div>
    </div>
  )
}
