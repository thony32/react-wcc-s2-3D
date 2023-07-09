import { useGLTF, useAnimations } from '@react-three/drei'
import React, { useRef } from 'react'
import { animated } from '@react-spring/three'

export function Boy3D(props : any) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/puppet_kid_free_demo/scene.gltf') as any
  const { actions } = useAnimations(animations, group) as any

    // * play animation
    React.useEffect(() => {
      actions["Idle"].play()
    }, [actions])
  return (
    <animated.mesh ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="2ab5a54e0de8404ab8056003d6acf768fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Puppet_Kid_Armature">
                  <group name="Object_5">
                    <primitive object={nodes._rootJoint} />
                    <group name="Object_37" />
                    <group name="Object_40" />
                    <group name="Object_43" />
                    <group name="Object_46" />
                    <group name="Object_49" />
                    <group name="Object_52" />
                    <group name="Object_55" />
                    <group name="Object_58" />
                    <group name="Object_61" />
                    <skinnedMesh name="Object_38" geometry={nodes.Object_38.geometry} material={materials.puppet_material} skeleton={nodes.Object_38.skeleton} />
                    <skinnedMesh name="Object_39" geometry={nodes.Object_39.geometry} material={materials.Outline_Material} skeleton={nodes.Object_39.skeleton} />
                    <skinnedMesh name="Object_41" geometry={nodes.Object_41.geometry} material={materials.puppet_material} skeleton={nodes.Object_41.skeleton} />
                    <skinnedMesh name="Object_42" geometry={nodes.Object_42.geometry} material={materials.Outline_Material} skeleton={nodes.Object_42.skeleton} />
                    <skinnedMesh name="Object_44" geometry={nodes.Object_44.geometry} material={materials.puppet_material} skeleton={nodes.Object_44.skeleton} />
                    <skinnedMesh name="Object_45" geometry={nodes.Object_45.geometry} material={materials.Outline_Material} skeleton={nodes.Object_45.skeleton} />
                    <skinnedMesh name="Object_47" geometry={nodes.Object_47.geometry} material={materials.puppet_material} skeleton={nodes.Object_47.skeleton} />
                    <skinnedMesh name="Object_48" geometry={nodes.Object_48.geometry} material={materials.Outline_Material} skeleton={nodes.Object_48.skeleton} />
                    <skinnedMesh name="Object_50" geometry={nodes.Object_50.geometry} material={materials.puppet_material} skeleton={nodes.Object_50.skeleton} />
                    <skinnedMesh name="Object_51" geometry={nodes.Object_51.geometry} material={materials.Outline_Material} skeleton={nodes.Object_51.skeleton} />
                    <skinnedMesh name="Object_53" geometry={nodes.Object_53.geometry} material={materials.puppet_material} skeleton={nodes.Object_53.skeleton} />
                    <skinnedMesh name="Object_54" geometry={nodes.Object_54.geometry} material={materials.Outline_Material} skeleton={nodes.Object_54.skeleton} />
                    <skinnedMesh name="Object_56" geometry={nodes.Object_56.geometry} material={materials.puppet_material} skeleton={nodes.Object_56.skeleton} />
                    <skinnedMesh name="Object_57" geometry={nodes.Object_57.geometry} material={materials.Outline_Material} skeleton={nodes.Object_57.skeleton} />
                    <skinnedMesh name="Object_59" geometry={nodes.Object_59.geometry} material={materials.puppet_material} skeleton={nodes.Object_59.skeleton} />
                    <skinnedMesh name="Object_60" geometry={nodes.Object_60.geometry} material={materials.Outline_Material} skeleton={nodes.Object_60.skeleton} />
                    <skinnedMesh name="Object_62" geometry={nodes.Object_62.geometry} material={materials.puppet_material} skeleton={nodes.Object_62.skeleton} />
                    <skinnedMesh name="Object_63" geometry={nodes.Object_63.geometry} material={materials.Outline_Material} skeleton={nodes.Object_63.skeleton} />
                  </group>
                </group>
                <group name="head" />
                <group name="body" />
                <group name="eyebrows" />
                <group name="eyes" />
                <group name="hair" />
                <group name="mouth" />
                <group name="slippers" />
                <group name="shirt" />
                <group name="shorts" />
              </group>
            </group>
          </group>
        </group>
      </group>
    </animated.mesh>
  )
}

useGLTF.preload('/scene.gltf')
