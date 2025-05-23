import React from 'react'
import { useTexture } from '@react-three/drei'
import { SRGBColorSpace } from 'three'

const Imgs = () => {
  const hoshTexture = useTexture("/assets/imgs/Hosh.png")
  const hoshMobileTexture = useTexture("/assets/imgs/Hosh-mobile.png")
  const ThreeJSTexture = useTexture("/assets/imgs/ThreeJS.png")
  const SwiftTexture = useTexture("/assets/imgs/Swift.png")
  
  hoshTexture.colorSpace = SRGBColorSpace
  
    // const { scale, color, wireframe, positionX, positionY, positionZ, rotationX, rotationY, rotationZ, scaleX, scaleY, scaleZ } = useControls({
    //   scale: { value: 1, min: 0.5, max: 3, step: 0.1 },
    //   color: "#ff0000",
    //   positionX: { value:0, min: -20, max: 20, step:0.001 },
    //   positionY: { value:0, min: -20, max: 20, step:0.001 },
    //   positionZ: { value:0, min: -20, max: 20, step:0.001 },
    //   rotationX: { value:0, min: -Math.PI, max: Math.PI, step:0.001 },
    //   rotationY: { value:0, min: -Math.PI, max: Math.PI, step:0.001 },
    //   rotationZ: { value:0, min: -Math.PI, max: Math.PI, step:0.001 },
    //   scaleX: { value:1, min: 0, max: 20, step:0.001 },
    //   scaleY: { value:1, min: 0, max: 20, step:0.001 },
    //   scaleZ: { value:1, min: 0, max: 20, step:0.001 },

    // });

  return (
    <>
       <mesh position={[ -12.41, 4.55, -0.48 ]} scale={ [ 0.77, 0.44, 1 ] } rotation={[ 0, - Math.PI * 0.058, 0 ]}>
        <planeGeometry />
        <meshBasicMaterial map={ hoshTexture } />
       </mesh>
       <mesh position={[ -13.07, 4.5, -0.51 ]} rotation={ [ 0, 0.2, 0 ] } scale={ [0.39, 0.70, 1.0] }>
        <planeGeometry />
        <meshBasicMaterial map={ hoshMobileTexture } />
       </mesh>
       <mesh position={[ -12.12, 4.03, -0.37 ]} rotation={ [ 0, -0.35, 0 ] } scale={ [0.73, 0.43, 1] }>
        <planeGeometry />
        <meshBasicMaterial map={ ThreeJSTexture } />
       </mesh>

       <mesh position={[ -8.25, 1.4, -8.78 ]} rotation={ [ 0, 1.72, 0 ] } scale={ [1, 0.8, 1] }>
        <planeGeometry />
        <meshBasicMaterial map={ SwiftTexture } />
       </mesh>
       <mesh position={[ -8.16, 1.41, -9.95 ]} rotation={ [ 0, 1.25, 0 ] } scale={ [0.98, 0.8, 1] }>
        <planeGeometry />
        <meshBasicMaterial map={ SwiftTexture } />
       </mesh>

       <mesh position={[ -4.15, 1.46, -10.08 ]} rotation={ [ 0, -0.7, 0 ] } scale={ [1.1, 0.6, 1] }>
        <planeGeometry />
        <meshBasicMaterial map={ SwiftTexture } />
       </mesh>
    </>
  )
}

export default Imgs