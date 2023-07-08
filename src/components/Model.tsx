import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useSpring, animated, config } from "@react-spring/three";

export const Model = forwardRef((props: any, ref: any) => {
  const group = useRef();
  const { nodes, materials } = useGLTF(
    "/kamisama_planet/scene.gltf"
  ) as any;

  const [zoomValue, setZoom] = useState(0.03);
  const { scale_value } = useSpring({
    scale_value: zoomValue,
    config: config.wobbly,
  }) as any;

  const zoom = () => {
    setZoom(zoomValue + 0.01);
  };

  useImperativeHandle(ref as any, () => ({
    dezoom() {
      setZoom(zoomValue - 0.01);
    },
  }));

  return (
    <animated.mesh
      scale={scale_value}
      rotation={[0, Math.PI / 2, 0]}
      ref={group}
      {...props}
      dispose={null}
    >
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="7d7168bd70724ea9a7db1307f167589bfbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="Mesh" />
                <group name="Mesh_(2)" />
                <group name="CAMINO" scale={1.005}>
                  <mesh
                    name="CAMINO_CAMINO_0"
                    geometry={nodes.CAMINO_CAMINO_0.geometry}
                    material={materials.CAMINO}
                  />
                </group>
                <group
                  name="casa"
                  position={[-27.521, 32.308, 8.468]}
                  rotation={[0.29, -0.034, 0.671]}
                >
                  <mesh
                    name="casa_HOME_0"
                    geometry={nodes.casa_HOME_0.geometry}
                    material={materials.HOME}
                  />
                  <mesh
                    name="casa_HC2_0"
                    geometry={nodes.casa_HC2_0.geometry}
                    material={materials.material}
                  />
                  <mesh
                    name="casa_HC1_0"
                    geometry={nodes.casa_HC1_0.geometry}
                    material={materials.material_3}
                  />
                </group>
                <group name="Mesh_(3)" />
                <group name="Mesh_(6)" />
                <group name="Mesh_(7)" />
                <group name="Mesh_(8)" />
                <group name="Cube_(13)" scale={1.086}>
                  <mesh
                    name="Cube_(13)_BOLA_0"
                    geometry={nodes["Cube_(13)_BOLA_0"].geometry}
                    material={materials.BOLA}
                  />
                </group>
                <group
                  name="Camera"
                  position={[-133.911, 1162.916, -250.098]}
                  rotation={[-0.781, -0.927, -0.666]}
                >
                  <group name="Object_19" />
                </group>
                <group
                  name="Camera_(2)"
                  position={[-376.918, -26.206, 110.282]}
                  rotation={[0, 0.285, 0.067]}
                >
                  <group name="Object_21" />
                </group>
                <group name="Texture_Group">
                  <group name="Cobblestone_1lxp" />
                </group>
                <group name="PISO_CASA" rotation={[0.109, 0.18, 0.71]}>
                  <group
                    name="PISO_CASA_(2)"
                    position={[0, 45.936, 0]}
                    rotation={[0, 0, 0.009]}
                    scale={[1.125, 1, 1.125]}
                  >
                    <mesh
                      name="PISO_CASA_(2)_HC1_0"
                      geometry={nodes["PISO_CASA_(2)_HC1_0"].geometry}
                      material={materials.material_3}
                    />
                  </group>
                </group>
                <group
                  onClick={zoom}
                  name="HANGAR"
                  rotation={[0.347, 0.198, 0.153]}
                >
                  <group name="Group_Locator_(2)" rotation={[0, 0.454, 0]}>
                    <group
                      name="Cube_(3)"
                      position={[1.08, 38.442, 0]}
                      scale={[0.113, 0.182, 0.113]}
                    >
                      <mesh
                        name="Cube_(3)_HOME_0"
                        geometry={nodes["Cube_(3)_HOME_0"].geometry}
                        material={materials.HOME}
                      />
                    </group>
                    <group
                      name="Cube_(4)"
                      position={[-3.82, 46.985, 0]}
                      scale={[1, 0.905, 0.905]}
                    >
                      <mesh
                        name="Cube_(4)_HC1_0"
                        geometry={nodes["Cube_(4)_HC1_0"].geometry}
                        material={materials.material_3}
                      />
                    </group>
                  </group>
                </group>
                <group name="ARBOLOTE" rotation={[-0.034, -0.082, 0.625]}>
                  <group
                    name="Sphere_(3)"
                    position={[0.432, 61.414, -0.403]}
                    scale={0.926}
                  >
                    <mesh
                      name="Sphere_(3)_ARBOL-PLANTAS_0"
                      geometry={nodes["Sphere_(3)_ARBOL-PLANTAS_0"].geometry}
                      material={materials["ARBOL-PLANTAS"]}
                    />
                  </group>
                  <group
                    name="Sphere_(5)"
                    position={[-2.09, 60.914, -5.29]}
                    rotation={[-1.234, 0.395, -2.309]}
                    scale={0.968}
                  >
                    <mesh
                      name="Sphere_(5)_ARBOL-PLANTAS_0"
                      geometry={nodes["Sphere_(5)_ARBOL-PLANTAS_0"].geometry}
                      material={materials["ARBOL-PLANTAS"]}
                    />
                  </group>
                  <group
                    name="Sphere_(2)"
                    position={[-0.775, 60.914, 2.013]}
                    rotation={[-1.234, 0.395, -2.309]}
                    scale={0.968}
                  >
                    <mesh
                      name="Sphere_(2)_ARBOL-PLANTAS_0"
                      geometry={nodes["Sphere_(2)_ARBOL-PLANTAS_0"].geometry}
                      material={materials["ARBOL-PLANTAS"]}
                    />
                  </group>
                  <group
                    name="Sphere_(4)"
                    position={[3.832, 61.414, 1.461]}
                    rotation={[-1.947, -0.374, -2.395]}
                    scale={0.977}
                  >
                    <mesh
                      name="Sphere_(4)_ARBOL-PLANTAS_0"
                      geometry={nodes["Sphere_(4)_ARBOL-PLANTAS_0"].geometry}
                      material={materials["ARBOL-PLANTAS"]}
                    />
                  </group>
                  <group
                    name="Cube_(5)"
                    position={[-0.131, 45.194, -0.163]}
                    scale={[0.74, 0.71, 0.74]}
                  >
                    <mesh
                      name="Cube_(5)_HC1_0"
                      geometry={nodes["Cube_(5)_HC1_0"].geometry}
                      material={materials.material_3}
                    />
                  </group>
                </group>
                <group name="ARBOLOTE_(2)" rotation={[-0.606, 0.162, 2.823]}>
                  <group
                    name="Sphere_(8)"
                    position={[0.432, 61.414, -0.403]}
                    rotation={[Math.PI, -0.897, -Math.PI]}
                    scale={0.926}
                  >
                    <mesh
                      name="Sphere_(8)_ARBOL-PLANTAS_0"
                      geometry={nodes["Sphere_(8)_ARBOL-PLANTAS_0"].geometry}
                      material={materials["ARBOL-PLANTAS"]}
                    />
                  </group>
                  <group
                    name="Sphere_(9)"
                    position={[-2.09, 60.914, -5.29]}
                    rotation={[-1.445, -0.499, 1.83]}
                    scale={0.968}
                  >
                    <mesh
                      name="Sphere_(9)_ARBOL-PLANTAS_0"
                      geometry={nodes["Sphere_(9)_ARBOL-PLANTAS_0"].geometry}
                      material={materials["ARBOL-PLANTAS"]}
                    />
                  </group>
                  <group
                    name="Sphere_(6)"
                    position={[-0.775, 60.914, 2.013]}
                    rotation={[-1.445, -0.499, 1.83]}
                    scale={0.968}
                  >
                    <mesh
                      name="Sphere_(6)_ARBOL-PLANTAS_0"
                      geometry={nodes["Sphere_(6)_ARBOL-PLANTAS_0"].geometry}
                      material={materials["ARBOL-PLANTAS"]}
                    />
                  </group>
                  <group
                    name="Sphere_(7)"
                    position={[3.832, 61.414, 1.461]}
                    rotation={[-1.654, 0.518, 1.738]}
                    scale={0.977}
                  >
                    <mesh
                      name="Sphere_(7)_ARBOL-PLANTAS_0"
                      geometry={nodes["Sphere_(7)_ARBOL-PLANTAS_0"].geometry}
                      material={materials["ARBOL-PLANTAS"]}
                    />
                  </group>
                  <group
                    name="Cube_(2)"
                    position={[-0.131, 45.854, -0.163]}
                    rotation={[-Math.PI, -0.897, -Math.PI]}
                    scale={[0.74, 0.71, 0.74]}
                  >
                    <mesh
                      name="Cube_(2)_HC1_0"
                      geometry={nodes["Cube_(2)_HC1_0"].geometry}
                      material={materials.material_3}
                    />
                  </group>
                </group>
                <group name="ARBOLOTE_(3)" rotation={[-0.351, 0.045, 2.796]}>
                  <group
                    name="Sphere_(11)"
                    position={[0.432, 61.414, -0.403]}
                    rotation={[0, 0.955, 0]}
                    scale={0.926}
                  >
                    <mesh
                      name="Sphere_(11)_ARBOL-PLANTAS_0"
                      geometry={nodes["Sphere_(11)_ARBOL-PLANTAS_0"].geometry}
                      material={materials["ARBOL-PLANTAS"]}
                    />
                  </group>
                  <group
                    name="Sphere_(13)"
                    position={[-2.09, 60.914, -5.29]}
                    rotation={[-1.728, 0.491, -1.247]}
                    scale={0.968}
                  >
                    <mesh
                      name="Sphere_(13)_ARBOL-PLANTAS_0"
                      geometry={nodes["Sphere_(13)_ARBOL-PLANTAS_0"].geometry}
                      material={materials["ARBOL-PLANTAS"]}
                    />
                  </group>
                  <group
                    name="Sphere_(10)"
                    position={[-0.775, 60.914, 2.013]}
                    rotation={[-1.728, 0.491, -1.247]}
                    scale={0.968}
                  >
                    <mesh
                      name="Sphere_(10)_ARBOL-PLANTAS_0"
                      geometry={nodes["Sphere_(10)_ARBOL-PLANTAS_0"].geometry}
                      material={materials["ARBOL-PLANTAS"]}
                    />
                  </group>
                  <group
                    name="Sphere_(12)"
                    position={[3.832, 61.414, 1.461]}
                    rotation={[-1.455, -0.512, -1.338]}
                    scale={0.977}
                  >
                    <mesh
                      name="Sphere_(12)_ARBOL-PLANTAS_0"
                      geometry={nodes["Sphere_(12)_ARBOL-PLANTAS_0"].geometry}
                      material={materials["ARBOL-PLANTAS"]}
                    />
                  </group>
                  <group
                    name="Cube_(6)"
                    position={[-0.131, 45.834, -0.163]}
                    rotation={[-Math.PI, -1.208, -Math.PI]}
                    scale={[0.74, 0.71, 0.74]}
                  >
                    <mesh
                      name="Cube_(6)_HC1_0"
                      geometry={nodes["Cube_(6)_HC1_0"].geometry}
                      material={materials.material_3}
                    />
                  </group>
                </group>
                <group name="ARBOLOTE_(4)" rotation={[0.808, 1.157, -0.302]}>
                  <group
                    name="Sphere_(14)"
                    position={[0.432, 61.614, -0.403]}
                    rotation={[Math.PI, 0.827, -Math.PI]}
                    scale={0.926}
                  >
                    <mesh
                      name="Sphere_(14)_ARBOL-PLANTAS_0"
                      geometry={nodes["Sphere_(14)_ARBOL-PLANTAS_0"].geometry}
                      material={materials["ARBOL-PLANTAS"]}
                    />
                  </group>
                  <group
                    name="Sphere_(15)"
                    position={[-2.09, 61.114, -5.29]}
                    rotation={[-2.083, -0.036, 0.064]}
                    scale={0.968}
                  >
                    <mesh
                      name="Sphere_(15)_ARBOL-PLANTAS_0"
                      geometry={nodes["Sphere_(15)_ARBOL-PLANTAS_0"].geometry}
                      material={materials["ARBOL-PLANTAS"]}
                    />
                  </group>
                  <group
                    name="Sphere_(17)"
                    position={[-0.775, 61.114, 2.013]}
                    rotation={[-2.083, -0.036, 0.064]}
                    scale={0.968}
                  >
                    <mesh
                      name="Sphere_(17)_ARBOL-PLANTAS_0"
                      geometry={nodes["Sphere_(17)_ARBOL-PLANTAS_0"].geometry}
                      material={materials["ARBOL-PLANTAS"]}
                    />
                  </group>
                  <group
                    name="Sphere_(16)"
                    position={[3.832, 61.614, 1.461]}
                    rotation={[-1.047, -0.004, -0.008]}
                    scale={0.977}
                  >
                    <mesh
                      name="Sphere_(16)_ARBOL-PLANTAS_0"
                      geometry={nodes["Sphere_(16)_ARBOL-PLANTAS_0"].geometry}
                      material={materials["ARBOL-PLANTAS"]}
                    />
                  </group>
                  <group
                    name="Cube_(7)"
                    position={[-0.131, 45.194, -0.163]}
                    rotation={[Math.PI, 0.827, Math.PI]}
                    scale={[0.74, 0.71, 0.74]}
                  >
                    <mesh
                      name="Cube_(7)_HC1_0"
                      geometry={nodes["Cube_(7)_HC1_0"].geometry}
                      material={materials.material_3}
                    />
                  </group>
                </group>
                <group name="ARBOLOTE_(5)" rotation={[-2.657, -0.734, -0.761]}>
                  <group
                    name="Sphere_(21)"
                    position={[0.432, 61.414, -0.403]}
                    rotation={[0, -0.576, 0]}
                    scale={0.926}
                  >
                    <mesh
                      name="Sphere_(21)_ARBOL-PLANTAS_0"
                      geometry={nodes["Sphere_(21)_ARBOL-PLANTAS_0"].geometry}
                      material={materials["ARBOL-PLANTAS"]}
                    />
                  </group>
                  <group
                    name="Sphere_(18)"
                    position={[-2.09, 60.914, -5.29]}
                    rotation={[-1.08, 0.157, -2.856]}
                    scale={0.968}
                  >
                    <mesh
                      name="Sphere_(18)_ARBOL-PLANTAS_0"
                      geometry={nodes["Sphere_(18)_ARBOL-PLANTAS_0"].geometry}
                      material={materials["ARBOL-PLANTAS"]}
                    />
                  </group>
                  <group
                    name="Sphere_(19)"
                    position={[-0.775, 60.914, 2.013]}
                    rotation={[-1.08, 0.157, -2.856]}
                    scale={0.968}
                  >
                    <mesh
                      name="Sphere_(19)_ARBOL-PLANTAS_0"
                      geometry={nodes["Sphere_(19)_ARBOL-PLANTAS_0"].geometry}
                      material={materials["ARBOL-PLANTAS"]}
                    />
                  </group>
                  <group
                    name="Sphere_(20)"
                    position={[3.832, 61.414, 1.461]}
                    rotation={[-2.082, -0.12, -2.93]}
                    scale={0.977}
                  >
                    <mesh
                      name="Sphere_(20)_ARBOL-PLANTAS_0"
                      geometry={nodes["Sphere_(20)_ARBOL-PLANTAS_0"].geometry}
                      material={materials["ARBOL-PLANTAS"]}
                    />
                  </group>
                  <group
                    name="Cube_(8)"
                    position={[-0.131, 45.194, -0.163]}
                    rotation={[0, -0.576, 0]}
                    scale={[0.74, 0.71, 0.74]}
                  >
                    <mesh
                      name="Cube_(8)_HC1_0"
                      geometry={nodes["Cube_(8)_HC1_0"].geometry}
                      material={materials.material_3}
                    />
                  </group>
                </group>
                <group
                  name="ARBOLOTE_(5)_(2)"
                  rotation={[-2.177, -1.03, -0.437]}
                >
                  <group
                    name="Sphere_(25)"
                    position={[0.432, 61.414, -0.403]}
                    rotation={[-Math.PI, 1.134, -Math.PI]}
                    scale={[1.269, 0.926, 1.269]}
                  >
                    <mesh
                      name="Sphere_(25)_ARBOL-PLANTAS_0"
                      geometry={nodes["Sphere_(25)_ARBOL-PLANTAS_0"].geometry}
                      material={materials["ARBOL-PLANTAS"]}
                    />
                  </group>
                  <group
                    name="Sphere_(22)"
                    position={[-2.09, 60.914, -5.29]}
                    rotation={[-2.072, 0.114, -0.205]}
                    scale={[1.326, 0.968, 1.326]}
                  >
                    <mesh
                      name="Sphere_(22)_ARBOL-PLANTAS_0"
                      geometry={nodes["Sphere_(22)_ARBOL-PLANTAS_0"].geometry}
                      material={materials["ARBOL-PLANTAS"]}
                    />
                  </group>
                  <group
                    name="Sphere_(24)"
                    position={[-0.775, 60.914, 2.013]}
                    rotation={[-2.072, 0.114, -0.205]}
                    scale={[1.326, 0.968, 1.326]}
                  >
                    <mesh
                      name="Sphere_(24)_ARBOL-PLANTAS_0"
                      geometry={nodes["Sphere_(24)_ARBOL-PLANTAS_0"].geometry}
                      material={materials["ARBOL-PLANTAS"]}
                    />
                  </group>
                  <group
                    name="Sphere_(23)"
                    position={[3.832, 61.414, 1.461]}
                    rotation={[-1.069, -0.156, -0.276]}
                    scale={[1.339, 0.977, 1.339]}
                  >
                    <mesh
                      name="Sphere_(23)_ARBOL-PLANTAS_0"
                      geometry={nodes["Sphere_(23)_ARBOL-PLANTAS_0"].geometry}
                      material={materials["ARBOL-PLANTAS"]}
                    />
                  </group>
                  <group
                    name="Cube_(9)"
                    position={[-0.131, 45.194, -0.163]}
                    rotation={[-Math.PI, 1.134, -Math.PI]}
                    scale={[0.74, 0.71, 0.74]}
                  >
                    <mesh
                      name="Cube_(9)_HC1_0"
                      geometry={nodes["Cube_(9)_HC1_0"].geometry}
                      material={materials.material_3}
                    />
                  </group>
                </group>
                <group
                  name="ARBOLOTE_(5)_(3)"
                  rotation={[-2.107, -0.811, -0.748]}
                >
                  <group
                    name="Sphere_(26)"
                    position={[0.432, 61.414, -0.403]}
                    rotation={[0, -0.576, 0]}
                    scale={0.926}
                  >
                    <mesh
                      name="Sphere_(26)_ARBOL-PLANTAS_0"
                      geometry={nodes["Sphere_(26)_ARBOL-PLANTAS_0"].geometry}
                      material={materials["ARBOL-PLANTAS"]}
                    />
                  </group>
                  <group
                    name="Sphere_(29)"
                    position={[-2.09, 60.914, -5.29]}
                    rotation={[-1.08, 0.157, -2.856]}
                    scale={0.968}
                  >
                    <mesh
                      name="Sphere_(29)_ARBOL-PLANTAS_0"
                      geometry={nodes["Sphere_(29)_ARBOL-PLANTAS_0"].geometry}
                      material={materials["ARBOL-PLANTAS"]}
                    />
                  </group>
                  <group
                    name="Sphere_(28)"
                    position={[-0.775, 60.914, 2.013]}
                    rotation={[-1.08, 0.157, -2.856]}
                    scale={0.968}
                  >
                    <mesh
                      name="Sphere_(28)_ARBOL-PLANTAS_0"
                      geometry={nodes["Sphere_(28)_ARBOL-PLANTAS_0"].geometry}
                      material={materials["ARBOL-PLANTAS"]}
                    />
                  </group>
                  <group
                    name="Sphere_(27)"
                    position={[3.832, 61.414, 1.461]}
                    rotation={[-2.082, -0.12, -2.93]}
                    scale={0.977}
                  >
                    <mesh
                      name="Sphere_(27)_ARBOL-PLANTAS_0"
                      geometry={nodes["Sphere_(27)_ARBOL-PLANTAS_0"].geometry}
                      material={materials["ARBOL-PLANTAS"]}
                    />
                  </group>
                  <group
                    name="Cube_(10)"
                    position={[-0.131, 45.194, -0.163]}
                    rotation={[0, -0.576, 0]}
                    scale={[0.74, 0.71, 0.74]}
                  >
                    <mesh
                      name="Cube_(10)_HC1_0"
                      geometry={nodes["Cube_(10)_HC1_0"].geometry}
                      material={materials.material_3}
                    />
                  </group>
                </group>
                <group name="MESA" rotation={[0.231, 0.414, 0.599]}>
                  <group
                    name="Cube"
                    position={[1.68, 46.42, 0]}
                    rotation={[0, 0.384, -0.079]}
                  >
                    <mesh
                      name="Cube_HC1_0"
                      geometry={nodes.Cube_HC1_0.geometry}
                      material={materials.material_3}
                    />
                  </group>
                </group>
                <group name="POZO" rotation={[0.699, 0.107, 0.561]}>
                  <group
                    name="Mesh_(4)"
                    position={[0, 48.688, 0]}
                    scale={0.067}
                  >
                    <group
                      name="Mesh_(5)"
                      position={[0, 0.508, 0]}
                      scale={1.695}
                    >
                      <mesh
                        name="Mesh_(5)_piso_0"
                        geometry={nodes["Mesh_(5)_piso_0"].geometry}
                        material={materials.piso}
                      />
                    </group>
                    <mesh
                      name="Mesh_(4)_HC1_0"
                      geometry={nodes["Mesh_(4)_HC1_0"].geometry}
                      material={materials.material_3}
                    />
                  </group>
                </group>
                <group name="EMBACES" rotation={[Math.PI / 9, 0, 0.911]}>
                  <group
                    name="Cube_(11)"
                    position={[0, 46.625, 0]}
                    scale={0.013}
                  >
                    <mesh
                      name="Cube_(11)_piso_0"
                      geometry={nodes["Cube_(11)_piso_0"].geometry}
                      material={materials.piso}
                    />
                    <mesh
                      name="Cube_(11)_TAPA-Embace_0"
                      geometry={nodes["Cube_(11)_TAPA-Embace_0"].geometry}
                      material={materials["TAPA-Embace"]}
                    />
                  </group>
                </group>
                <group name="EMBACES_(2)" rotation={[0.304, -0.02, 0.921]}>
                  <group
                    name="Cube_(12)"
                    position={[0, 46.625, 0]}
                    scale={0.013}
                  >
                    <mesh
                      name="Cube_(12)_piso_0"
                      geometry={nodes["Cube_(12)_piso_0"].geometry}
                      material={materials.piso}
                    />
                    <mesh
                      name="Cube_(12)_TAPA-Embace_0"
                      geometry={nodes["Cube_(12)_TAPA-Embace_0"].geometry}
                      material={materials["TAPA-Embace"]}
                    />
                  </group>
                </group>
                <group
                  name="Directional_Light"
                  position={[-555, 660, 780]}
                  rotation={[Math.PI / 2, 0, 0]}
                >
                  <group name="Object_127" rotation={[Math.PI / 2, 0, 0]}>
                    <group name="Object_128" />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </animated.mesh>
  );
});

useGLTF.preload("/scene.gltf");
