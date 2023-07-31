 import { useEffect, useState } from 'react';
import flutterwavelogo from '../assets/Flutterwave-Logo.png';

 function Navbar() {

//DARK MODE     

    const [darkToggle, setDarkToggle] = useState(null)


    useEffect(() => {
        if ( darkToggle === "dark") {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [darkToggle])



    const ToggleDarkMode = (() => {
        setDarkToggle(darkToggle === "dark"?"light": "dark")
        console.log("dark mode toggled")
    })
    
    return(
        <div>
        <nav className='p-10 flex items-center' >
        <img src= {flutterwavelogo} alt='flutterwavelogo' className=' w-40 flex' />
        
        <ul className='hidden lg:flex items-center pl-64 font-semibold '>
        
            <li className=' mr-5 hover:underline decoration-orange-400 cursor-pointer'>Enterprise</li>
            <li className='mr-5 hover:underline decoration-orange-400 cursor-pointer'>SME</li>
            <li className='mr-5 hover:underline decoration-orange-400 cursor-pointer'>Personal</li>
            <li className='mr-5 hover:underline decoration-orange-400 cursor-pointer'>Resources</li>
            <li className='mr-5 hover:underline decoration-orange-400 cursor-pointer' >Developers</li>
            <li className='mr-5 hover:underline decoration-orange-400 cursor-pointer'>Company</li>

        </ul>
        <ul className='hidden lg:flex items-center ml-auto'>
            <li className='lg:mr-16'><button className='bg-slate-200 p-2 pl-10 pr-10 rounded-md hover:bg-blue-950 hover:text-white dark:text-blue-950 hover:dark:text-white'>Sign in</button></li>
            <li>
                <label className="lg:relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="lg:sr-only peer"/>
                    <div onClick={ToggleDarkMode} className="lg:w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 dark:peer-focus:ring-orange-500 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange-300"></div>
                    <span className="lg:ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Dark mode</span>
                </label>
            </li>
            </ul>
        </nav>
        
            
        </div>
    )
 }

 export default Navbar;