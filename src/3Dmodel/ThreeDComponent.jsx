import { Canvas, useFrame, useThree } from '@react-three/fiber'
import Model from './Model'
import { Suspense, useDeferredValue, useEffect} from 'react'
import { useProgress, Html, ScrollControls, ContactShadows, Environment } from '@react-three/drei'

import { Vector3 } from 'three'

const vec = new Vector3()

function ResizeHandler() {
  const { camera, gl } = useThree();

  useEffect(() => {
      const handleResize = () => {
          // Update camera aspect ratio and renderer size
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          gl.setSize(window.innerWidth, window.innerHeight);
      };

      window.addEventListener('resize', handleResize);

      return () => {
          window.removeEventListener('resize', handleResize);
      };
  }, [camera, gl]);

  return null;
}


function Rig() {
    return useFrame(({ camera, pointer }) => {
      vec.set(pointer.x * 2, pointer.y * 2, camera.position.z)
      camera.position.lerp(vec, 0.025)
      camera.lookAt(0, 0, 0)
    })
  }

function Loader() {
    const { active, progress } = useProgress()
    return <Html center>{progress.toFixed(1)} % loaded</Html> 
}

function ThreeDComponent() {
    // const deferred = useDeferredValue('stars.jpg')
 
  return (
    <div id='container3D'>
        <Canvas gl={{ antialias: true}} dpr={[1, 1.5]} camera={{ position: [-7, 1, 7] }}>
          <ResizeHandler />
            <ambientLight intensity={3} />
            <pointLight position={[20, 30, 40]} intensity={1} />
            <Environment preset='city'  environmentIntensity={1}/>
            <directionalLight position={[0, 0, 5]} intensity={1} />
            
            <directionalLight position={[3.3, 1.0, 4.4]} intensity={4} />
            <hemisphereLight skyColor={'blue'} groundColor={'neon'} intensity={10} />
            <Suspense   fallback={<Loader />}>
                {/* <ScrollControls damping={0.5} > */}
                  <Model />                    
                {/* </ScrollControls> */}
            </Suspense>
            {/* <ContactShadows scale={20} blur={10} far={20} /> */}
            {/* <Rig /> */}
            {/* <gridHelper /> */}
            
        </Canvas>
    </div>
  )
}

export default ThreeDComponent