import { Html, useGLTF } from '@react-three/drei'

export function Shapes(props: any) {
  const { nodes, materials } = useGLTF('/3d_primitives_essentials/scene.gltf') as any
  return (
    <group {...props} dispose={null}>
      {/* shape */}
      <Html position={[-1.7,0.6,0]}>
        <div className=''>
          <svg xmlns="http://www.w3.org/2000/svg" width="800" zoomAndPan="magnify"
            viewBox="0 0 1440 809.999993" height="600" preserveAspectRatio="xMidYMid meet" version="1.0">
            <defs>
              <clipPath id="0f42b632f8">
                <path
                  d="M 128.960938 105.695312 L 1311.039062 105.695312 L 1311.039062 704.304688 L 128.960938 704.304688 Z M 128.960938 105.695312 "
                  clipRule="nonzero" />
              </clipPath>
              <clipPath id="131771d32a">
                <path d="M 268.253906 283.5 L 511.253906 283.5 L 511.253906 526.5 L 268.253906 526.5 Z M 268.253906 283.5 "
                  clipRule="nonzero" />
              </clipPath>
              <clipPath id="64d9971a9e">
                <path
                  d="M 389.753906 283.5 C 322.648438 283.5 268.253906 337.898438 268.253906 405 C 268.253906 472.101562 322.648438 526.5 389.753906 526.5 C 456.855469 526.5 511.253906 472.101562 511.253906 405 C 511.253906 337.898438 456.855469 283.5 389.753906 283.5 "
                  clipRule="nonzero" />
              </clipPath>
              <clipPath id="a926284f58">
                <path
                  d="M 584.8125 289.921875 L 855.1875 289.921875 L 855.1875 526.5 L 584.8125 526.5 Z M 584.8125 289.921875 "
                  clipRule="nonzero" />
              </clipPath>
              <clipPath id="017abbcf91">
                <path d="M 720 289.921875 L 855.1875 526.5 L 584.8125 526.5 L 720 289.921875 " clipRule="nonzero" />
              </clipPath>
              <clipPath id="75bab73afe">
                <path
                  d="M 940.941406 283.5 L 1183.941406 283.5 L 1183.941406 526.5 L 940.941406 526.5 Z M 940.941406 283.5 "
                  clipRule="nonzero" />
              </clipPath>
            </defs>
            <g clip-path="url(#0f42b632f8)">
              <path fill="#d9d9d9"
                d="M 128.960938 105.695312 L 1311.054688 105.695312 L 1311.054688 704.335938 L 128.960938 704.335938 Z M 128.960938 105.695312 "
                fillOpacity="1" fillRule="nonzero" />
            </g>
            <g clip-path="url(#131771d32a)">
              <g clip-path="url(#64d9971a9e)">
                <path fill="#000000"
                  d="M 268.253906 283.5 L 511.253906 283.5 L 511.253906 526.5 L 268.253906 526.5 Z M 268.253906 283.5 "
                  fillOpacity="1" fillRule="nonzero" />
              </g>
            </g>
            <g clip-path="url(#a926284f58)">
              <g clip-path="url(#017abbcf91)">
                <path fill="#000000"
                  d="M 584.8125 289.921875 L 855.1875 289.921875 L 855.1875 526.5 L 584.8125 526.5 Z M 584.8125 289.921875 "
                  fillOpacity="1" fillRule="nonzero" />
              </g>
            </g>
            <g clip-path="url(#75bab73afe)">
              <path fill="#000000"
                d="M 940.941406 283.5 L 1183.941406 283.5 L 1183.941406 526.5 L 940.941406 526.5 Z M 940.941406 283.5 "
                fillOpacity="1" fillRule="nonzero" />
            </g>
          </svg>
        </div>
      </Html>

      {/* models 3D */}
      <group position={[0.2,0,0]} rotation={[0,0,0]}>
        <mesh geometry={nodes.Object_7.geometry} material={materials.material_1} position={[0, 0.2, 0]} rotation={[0, 0, 0]} scale={0.0005} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.material} position={[0, 0, 0]} rotation={[0, 0, 0]} scale={0.0005} />
        <mesh geometry={nodes.Object_13.geometry} material={materials.material_4} position={[0, -0.2, 0]} rotation={[0, 0, 0]} scale={0.0005} />
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
