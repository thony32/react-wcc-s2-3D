import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Girl3D(props: any) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/little_girl/scene.gltf') as any
  const { actions } = useAnimations(animations, group) as any

  // * play animation
  React.useEffect(() => {
    actions["ChicaAction"].play()
  }, [actions])
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.9}>
          <group name="Root">
            <group name="Chica">
              <primitive object={nodes.Chica_rootJoint} />
              <group name="vsn_mesh_1_002" position={[0, -0.012, 1.861]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={0.074} />
              <group name="vsn_mesh_2_001" position={[0, -0.032, 1.885]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={0.072} />
              <group name="mesh_0_" rotation={[Math.PI / 2, 0, 0]} scale={0.069} />
              <group name="mesh_0_001" rotation={[Math.PI / 2, 0, 0]} scale={0.074} />
              <group name="vsn_mesh_1_001" position={[0, -0.023, 1.884]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={0.072} />
              <skinnedMesh name="vsn_mesh_1_002_0" geometry={nodes.vsn_mesh_1_002_0.geometry} material={materials.Eyes} skeleton={nodes.vsn_mesh_1_002_0.skeleton} />
              <skinnedMesh name="vsn_mesh_2_001_0" geometry={nodes.vsn_mesh_2_001_0.geometry} material={materials.Mouth} skeleton={nodes.vsn_mesh_2_001_0.skeleton} />
              <skinnedMesh name="mesh_0__0" geometry={nodes.mesh_0__0.geometry} material={materials.Body} skeleton={nodes.mesh_0__0.skeleton} />
              <skinnedMesh name="mesh_0_001_0" geometry={nodes.mesh_0_001_0.geometry} material={materials.Body} skeleton={nodes.mesh_0_001_0.skeleton} />
              <skinnedMesh name="vsn_mesh_1_001_0" geometry={nodes.vsn_mesh_1_001_0.geometry} material={materials.Body} skeleton={nodes.vsn_mesh_1_001_0.skeleton} />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
