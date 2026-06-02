import {Menu} from 'lucide-react'

export function NavBar(){
    return(
        <nav className='flex justify-between p-5 bg-white rounded-b-3xl shadow'>
            <p className='text-3xl text-black font-medium'>Area</p>
            <Menu className='text-black size-7'/>
        </nav>
    )
}