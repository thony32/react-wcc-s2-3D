import logo from '../assets/TiaZaza.svg';
import kids from "../assets/Kids.svg";
function Welcome() {
  return (
    <div>
      <div className="navbar border-b-4 border-gray-100">
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
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="m-2 flex items-center text-lg">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 7C3 5.11438 3 4.17157 3.58579 3.58579C4.17157 3 5.11438 3 7 3V3V3C8.88562 3 9.82843 3 10.4142 3.58579C11 4.17157 11 5.11438 11 7V12V17C11 18.8856 11 19.8284 10.4142 20.4142C9.82843 21 8.88562 21 7 21V21V21C5.11438 21 4.17157 21 3.58579 20.4142C3 19.8284 3 18.8856 3 17V12V7Z" stroke="#323232" stroke-width="2" stroke-linejoin="round" />
                <path d="M11 7.5L12.6716 5.82843C14.0049 4.49509 14.6716 3.82843 15.5 3.82843C16.3284 3.82843 16.9951 4.49509 18.3284 5.82843L19.1716 6.67157C20.5049 8.00491 21.1716 8.67157 21.1716 9.5C21.1716 10.3284 20.5049 10.9951 19.1716 12.3284L11 20.5" stroke="#323232" stroke-width="2" stroke-linejoin="round" />
                <path d="M7 21L17 21C18.8856 21 19.8284 21 20.4142 20.4142C21 19.8284 21 18.8856 21 17L21 15.5C21 15.0353 21 14.803 20.9616 14.6098C20.8038 13.8164 20.1836 13.1962 19.3902 13.0384C19.197 13 18.9647 13 18.5 13V13" stroke="#323232" stroke-width="2" stroke-linejoin="round" />
                <path d="M7 17.01L7 17" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg> Bika
              <svg className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z" fill="#000000" />
              </svg>
            </label>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 rounded-box w-52">
              <li><a><span>🧒</span><label htmlFor="">Lahy</label></a></li>
              <li><a><span>🧑</span><label htmlFor="">Vavy</label></a></li>
              <li><a><span>🌚</span><label htmlFor="">Maizina</label></a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 ">
        <div className="flex flex-col justify-between gap-8 py-44 px-16">
          <div>
            <h1 className="fortnite text-8xl font-bold">
              Tongasoa eto amin'ny TIA ZAZA
            </h1>
          </div>
          <div>
            <p className="text-2xl">Andeha isika hilalao rankizy !</p>
          </div>
          <div className="">
            <button className="text-2xl bg-[#5658D9] hover:bg-[#353789] hover:transition hover:duration-300 text-base-100 p-4 rounded-full font-bold">
              Ireo kilalaontsika {"->"}{" "}
            </button>
          </div>
        </div>
        <div className="">
          <img src={kids} alt="" className="" />
        </div>
      </div>
    </div>
  )
}

export default Welcome