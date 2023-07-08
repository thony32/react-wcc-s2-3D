
import triangle3d from "../assets/triangle3D.svg";
import star3d from "../assets/star3D.svg";

function Presentation() {
  return (
    <div>

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
