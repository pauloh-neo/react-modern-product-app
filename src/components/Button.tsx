import type { PropsWithChildren } from "react";


type ButtonProps = PropsWithChildren

export function Button({children}:ButtonProps){
    return(
        <button className='bg-[#DFECC6] text-black font-medium px-5.5 py-3.5 rounded-4xl w-fit'>
            {children}
        </button>
    )
}