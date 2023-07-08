import kids from "../assets/Kids.svg";
import triangle3d from "../assets/triangle3D.svg";
import star3d from "../assets/star3D.svg";

function Presentation() {
  return (
    <div>
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
      <div className="grid lg:grid-cols-5 bg-red-200">
        <div>
          <img src={triangle3d} alt="" />
        </div>
        <div className="col-span-3">
          <div>
            <h1>Momba ireo kilalao rehetra !</h1>
          </div>
          <div>
            <h1></h1>
          </div>
          <div className="grid grid-cols-3">

          </div>
        </div>
        <div>
          <img src={star3d} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Presentation;
