import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "./Model";
import { Suspense, useRef } from "react";
import { Loading } from "./Loading";

function Planet() {
  const planet_ref = useRef() as any;
  const dezoom = () => {
    planet_ref.current.dezoom();
  };
  return (
    <div className="h-[80vh]">
      <Suspense fallback={<Loading />}>
        <Canvas shadows dpr={[1, 2]}>
          <directionalLight color="white" position={[0, 8, 0]} />
          <Model ref={planet_ref} />
          <OrbitControls />
        </Canvas>
      </Suspense>
      <div className="flex justify-center">
        <button onClick={dezoom} className="btn btn-primary">
          Dezoom
        </button>
      </div>
    </div>
  );
}

export default Planet;
