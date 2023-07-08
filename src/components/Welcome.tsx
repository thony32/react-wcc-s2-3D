import kids from "../assets/Kids.svg";
function Welcome() {
  return (
    <div className='h-screen'>
      <div className="lg:px-[10%] grid md:grid-cols-2 ">
        <div className="flex flex-col md:justify-between gap-8 2xl:gap-16 py-8 px-5 md:py-0 md:px-0 2xl:py-0 2xl:px-0">

          <div>
            <h1 className="fortnite text-5xl md:text-7xl text-center lg:text-left 2xl:text-9xl font-bold">
              Tongasoa eto amin'ny TIA ZAZA
            </h1>
          </div>
          <div className='flex justify-center lg:justify-start'>
            <p className="text-sm md:text-xl text-center lg:text-left 2xl:text-2xl w-full lg:w-2/3">Andeha isika hilalao rankizy ! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae magnam consequuntur hic voluptatem voluptatibus, eligendi, aut iusto corporis placeat dicta quod labore </p>
          </div>
          <div className="flex justify-center lg:justify-start">
            <button className="flex items-center text-sm md:text-2xl bg-primary hover:translate- hover:transition hover:duration-300 text-base-100 p-2 md:p-4 rounded-full font-bold">
              <span className="mx-4">Ireo kilalaontsika</span>
              <svg className="w-8 h-8 stroke-base-100 animate-bounce" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4L12 20M12 20L18 14M12 20L6 14" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button className="flex items-center text-sm md:text-2xl p-2 md:p-4 font-bold">
              <span className="mx-4"> Andao hilalao</span>
              <svg className="w-8 h-8 stroke-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.8876 9.9348C14.9625 10.8117 15.5 11.2501 15.5 12C15.5 12.7499 14.9625 13.1883 13.8876 14.0652C13.5909 14.3073 13.2966 14.5352 13.0261 14.7251C12.7888 14.8917 12.5201 15.064 12.2419 15.2332C11.1695 15.8853 10.6333 16.2114 10.1524 15.8504C9.6715 15.4894 9.62779 14.7336 9.54038 13.2222C9.51566 12.7947 9.5 12.3757 9.5 12C9.5 11.6243 9.51566 11.2053 9.54038 10.7778C9.62779 9.26636 9.6715 8.51061 10.1524 8.1496C10.6333 7.78859 11.1695 8.11466 12.2419 8.76679C12.5201 8.93597 12.7888 9.10831 13.0261 9.27492C13.2966 9.46483 13.5909 9.69274 13.8876 9.9348Z" stroke="#1C274C" strokeWidth="1.5" />
                <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" strokeWidth="1.5" strokeLinecap="round" />
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