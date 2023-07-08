import { useGLTF } from '@react-three/drei'

export function Shapes(props : any) {
  const { nodes, materials } = useGLTF('/3d_primitives_essentials/scene.gltf') as any
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_7.geometry} material={materials.material_1} position={[-0.45, 0, 0]} rotation={[0, 0, 0]} scale={0.002} />
      <mesh geometry={nodes.Object_5.geometry} material={materials.material} position={[0, 0, 0]} rotation={[0, 0, 0]} scale={0.0015} />
      <mesh geometry={nodes.Object_13.geometry} material={materials.material_4} position={[0.45, 0, 0]} rotation={[0, 0, 0]} scale={0.0015} />
    </group>
  )
}

useGLTF.preload('/scene.gltf')
