import FooterLogo from '../assets/footerLogo.png'

export function Footer(){
    const currentYear = new Date().getFullYear();

    return(
        <footer className='flex flex-col gap-20 px-4 pt-10 pb-5'>
            <section className='flex flex-col gap-10 p-4'>
                <h3 className='text-5xl text-center'>Connect with us</h3>
                <p className='text-[#6F6F6F] text-center'>Schedule a quick call to learn how Area can turn your regional data into a powerful advantage.</p>
                <button className='text-white px-5 py-3.5 bg-[#485C11] rounded-4xl w-full'>
                    Learn More
                </button>
            </section>
            <ul className='flex flex-col gap-4 md:flex-row md:gap-6.75'>
                <li><a className='text-[14px] font-medium' href="">Benefits</a></li>
                <li><a className='text-[14px] font-medium' href="">Specifications</a></li>
                <li><a className='text-[14px] font-medium' href="">How-to</a></li>
            </ul>
            <ul className='flex items-end gap-10'>
                <img src={FooterLogo} alt="" />
                <span className='flex gap-4'>
                    <li className='text-[#485C11]'>Area</li>
                    <li className='text-[#485C11]'>{currentYear}</li>
                </span>
                <li className='text-[#485C11]'>All Rights Reserved</li>
            </ul>
        </footer>
    )
}