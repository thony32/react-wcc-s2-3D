import triangle3d from "../assets/triangle3D.svg";
import star3d from "../assets/star3D.svg";
import line from "../assets/underline.svg";
function Presentation() {
  return (
    <div className="">
      <div className="hidden">
        <img src={star3d} alt="" />
        <img src={triangle3d} alt="" />
        <img src={line} alt="" className="w-2/3 h-4" />
      </div>

      <div className="relative">
        <div className="flex justify-center">
        <img className="absolute top-8 2xl:top-20 2xl:left-20 left-5 z-10 transform scale-100 2xl:scale-150" src={triangle3d} alt="" />
          <div className="card w-5/6 bg-neutral text-neutral-content mx-auto">
            <div className="card-body gap-y-16 2xl:gap-y-28 my-5 2xl:my-10">
              <div className="flex justify-center">
                <div className="text-center space-y-2">
                  <h2 className="text-left text-lg md:text-2xl">Ireo lalao</h2>
                  <p className="fortnite text-left text-5xl md:text-7xl 2xl:text-8xl">Inona avy ary ireo karazana lalao?</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 divide-x-2 px-0 md:px-8 2xl:px-32 space-y-10 md:space-y-0 ">
                <div className="flex justify-start items-center">
                  <div className="mx-20 space-y-16">
                    <svg className="stroke-base-100 w-20 h-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 6.99999C19 6.99999 13.5 6.99999 11.5 12.5C9.5 18 5 18 2 18" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M20 5C20 5 21.219 6.21895 22 7C21.219 7.78105 20 9 20 9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M22 18C19 18 13.5 18 11.5 12.5C9.5 6.99999 5 7.00001 2 7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M20 20C20 20 21.219 18.781 22 18C21.219 17.219 20 16 20 16" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <div className="space-y-2">
                    <h1 className="font-bold text-4xl">Mampitovy</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere sint animi saepe doloribus</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <div className="mx-6 space-y-16">
                    <svg className="fill-base-100 w-20 h-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C12.4142 1.25 12.75 1.58579 12.75 2C12.75 2.41421 12.4142 2.75 12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 11.5858 21.5858 11.25 22 11.25C22.4142 11.25 22.75 11.5858 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM16.7705 2.27591C18.1384 0.908028 20.3562 0.908028 21.7241 2.27591C23.092 3.6438 23.092 5.86158 21.7241 7.22947L15.076 13.8776C14.7047 14.2489 14.4721 14.4815 14.2126 14.684C13.9069 14.9224 13.5761 15.1268 13.2261 15.2936C12.929 15.4352 12.6169 15.5392 12.1188 15.7052L9.21426 16.6734C8.67801 16.8521 8.0868 16.7126 7.68711 16.3129C7.28742 15.9132 7.14785 15.322 7.3266 14.7857L8.29477 11.8812C8.46079 11.3831 8.56479 11.071 8.7064 10.7739C8.87319 10.4239 9.07761 10.0931 9.31605 9.78742C9.51849 9.52787 9.7511 9.29529 10.1224 8.924L16.7705 2.27591ZM20.6634 3.33657C19.8813 2.55448 18.6133 2.55448 17.8312 3.33657L17.4546 3.7132C17.4773 3.80906 17.509 3.92327 17.5532 4.05066C17.6965 4.46372 17.9677 5.00771 18.48 5.51999C18.9923 6.03227 19.5363 6.30346 19.9493 6.44677C20.0767 6.49097 20.1909 6.52273 20.2868 6.54543L20.6634 6.16881C21.4455 5.38671 21.4455 4.11867 20.6634 3.33657ZM19.1051 7.72709C18.5892 7.50519 17.9882 7.14946 17.4193 6.58065C16.8505 6.01185 16.4948 5.41082 16.2729 4.89486L11.2175 9.95026C10.801 10.3668 10.6376 10.532 10.4988 10.7099C10.3274 10.9297 10.1804 11.1676 10.0605 11.4192C9.96337 11.623 9.88868 11.8429 9.7024 12.4017L9.27051 13.6974L10.3026 14.7295L11.5983 14.2976C12.1571 14.1113 12.377 14.0366 12.5808 13.9395C12.8324 13.8196 13.0703 13.6726 13.2901 13.5012C13.468 13.3624 13.6332 13.199 14.0497 12.7825L19.1051 7.72709Z" />
                    </svg>
                    <div className="space-y-2">
                    <h1 className="font-bold text-4xl">Lokoy</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere sint animi saepe doloribus nobis autem nostrum totam </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">

                  <div className="mx-6 space-y-16">
                    <svg className="stroke-base-100 w-20 h-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.4207 5.63965H21.7007" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M2.29956 5.64014H9.57956" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M14.4207 15.3301H21.7007" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M14.4207 21.3896H21.7007" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M18.0894 9.27V2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M2.29956 22L9.57956 14.73" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M9.57956 22L2.29956 14.73" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <div className="space-y-2">
                    <h1 className="font-bold text-4xl">Kajio</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere sint animi saepe doloribus nobis autem nostrum totam</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img className="absolute top-36 2xl:top-56 right-8 2xl:right-20 z-10 transform scale-100 2xl:scale-150" src={star3d} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Presentation;
