import { Canvas } from "@react-three/fiber"
import { BufferAttribute, BufferGeometry } from "three";
import { Shapes } from "../3D/Shapes";

function GameOne() {
  const triangleGeometry = new BufferGeometry();
  triangleGeometry.setAttribute(
    "position",
    new BufferAttribute(new Float32Array([0, 1, 0, -1, -1, 0, 1, -1, 0]), 3)
  );
  return (
    <div className="px-[10%] space-y-5">
      <h1>Guess the shape</h1>
      <div className="h-[75vh] bg-red-300">
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Shapes scale={5}/>
        </Canvas>
      </div>
    </div>
  )
}

export default GameOne