import triangle3d from "../assets/triangle3D.svg";
import star3d from "../assets/star3D.svg";

function Presentation() {
  return (
    <div>
      <div className="grid lg:grid-cols-5 bg-red-200 px-36 py-12">
        <div className="px-16 py-16">
          <img src={triangle3d} alt="" />
        </div>
        <div className="col-span-3 space-y-4 p-8 bg-slate-500 rounded-2xl">
          <div className="">
            <h1 className="p-2 border-b-2 border-base-500 w-1/2 text-xl text-base-300">Momba ireo kilalao rehetra !</h1>
          </div>
          <div>
            <h1 className="text-2xl font-bold">
              Toy izao ny fomba hilalaovana azy ireo...
              
            </h1>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-4">
              <div>
                <h1>Puzzle</h1>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  non facere dicta libero possimus veniam quibusdam maiores
                  minus inventore perspiciatis expedita nemo consequuntur
                  voluptates excepturi, deserunt reiciendis. Iusto, molestiae
                  dolor.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h1>Lokoy ny sary</h1>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere qui modi nam amet eaque molestias, aperiam maxime,
                  doloremque repellat inventore accusamus. Voluptatem debitis
                  nisi nesciunt accusantium sint beatae magnam ipsum?
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h1>Fantaro hoe firy ny mifanaraka?</h1>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                  tenetur hic quos eaque omnis qui porro praesentium deserunt
                  libero rem expedita, a debitis laudantium, quod et nam sequi!
                  Architecto, facere!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-16 py-16">
          <img src={star3d} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Presentation;
