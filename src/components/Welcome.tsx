import kids from "../assets/Kids.svg";
function Welcome() {
  return (
    <div className='h-screen pt-[5%]'>
      <div className="lg:px-[5%] grid md:grid-cols-2 ">
        <div className="flex flex-col md:justify-between gap-8 py-8 px-5 md:px-0 2xl:py-0 2xl:px-0">
          <div>
            <h1 className="fortnite text-5xl md:text-7xl text-center lg:text-left 2xl:text-9xl font-bold">
              Tongasoa eto amin'ny <label className="text-primary">TIA ZAZA</label>
            </h1>
          </div>
          <div className='flex justify-center lg:justify-start'>
            <p className="text-sm md:text-xl text-center lg:text-left 2xl:text-2xl w-full lg:w-2/3">Tonga ity ny fialan-tsasatra koa indro ary ny tranokala iray izay manolotra ireo ankizy karzana kilalao telo mba hialan'izy ireo voly. Koa Andeha isika hilalao rankizy !</p>
          </div>
          <div className="flex justify-center lg:justify-start">
            <button className="flex items-center text-sm md:text-2xl bg-primary hover:translate- hover:transition hover:duration-300 text-base-100 p-2 md:p-4 rounded-full font-bold">
              <span className="mx-4">Ireo kilalaontsika</span>
              <svg className="w-8 h-8 stroke-base-100 animate-bounce" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4L12 20M12 20L18 14M12 20L6 14" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center order-first lg:order-last">
          <img src={kids} alt="" className="" />
        </div>
      </div>
    </div>
  )
}

export default Welcome