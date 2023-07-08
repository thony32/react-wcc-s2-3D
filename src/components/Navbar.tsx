import ThemeChanger from "./ThemeChanger"
import logo from '../assets/TiaZaza.svg';

function Navbar() {
    return (
        <div className="navbar sticky top-0 bg-base-100 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a className='text-lg'>Fandraisana</a></li>
                        <li><a className='text-lg'>Ireo Kilalao</a></li>
                        <li><a className='text-lg'>Kilalao 1</a></li>
                        <li><a className='text-lg'>Kilalao 2</a></li>
                        <li><a className='text-lg'>Kilalao 3</a></li>
                    </ul>
                </div>
                <a className="normal-case text-xl"><img src={logo} alt="" className='w-48 h-20' /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <div className="menu menu-horizontal px-3 space-x-8">
                    <div><button className='border border-[#5658D9] text-lg p-3 rounded-md font-bold'>Fandraisana</button></div>
                    <div><button className='border border-[#5658D9] text-lg p-3 rounded-md font-bold'>Ireo Kilalao</button></div>
                    <div><button className='border border-[#5658D9] text-lg p-3 rounded-md font-bold'>Kilalao 1</button></div>
                    <div><button className='border border-[#5658D9] text-lg p-3 rounded-md font-bold'>Kilalao 2</button></div>
                    <div><button className='border border-[#5658D9] text-lg p-3 rounded-md font-bold'>Kilalao 3</button></div>
                </div>
            </div>
            <div className="navbar-end">
                <ThemeChanger />
            </div>
        </div>
    )
}

export default Navbar