import {useAnimations, useGLTF, useScroll, OrbitControls, Stats} from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three';
import { MathUtils } from 'three'

useGLTF.preload('/astronaut.glb')

function Model() {
  const [hovered, setHovered] = useState(false)
    const group = useRef(null)
    const { nodes, materials, animations, scene } = useGLTF('/rocket_ship.glb')
    const {actions, clips, mixer} = useAnimations(animations, scene)
    const scroll = useScroll()
    const target = new THREE.Vector3(2, 0, 0);
    // const [scrollY, setScrollY] = useState(window.scrollY);

    // useEffect(() => {
    //     const handleScroll = () => setScrollY(window.scrollY);
    //     window.addEventListener('scroll', handleScroll);
    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, []);


    // for scrolling animation/
    // useEffect(() => {
    //     console.log(actions)
    //     actions['Take 001'].play().paused = true
    // }, []) 

    // useFrame(() => {
    //     (actions['Take 001'].time = 
    //     (actions['Take 001'].getClip().duration * scroll.offset) / 4)
    // })
    useFrame((_, delta) => {
      // hovered
      // ? MathUtils.lerp(group.current.rotation.x, -Math.PI * 2, 0.025)
      // : MathUtils.lerp(group.current.rotation.x, 0, 0.025)

    // group.current.position.z = selected
    //   ? MathUtils.lerp(group.current.position.z, 0, 0.025)
    //   : MathUtils.lerp(group.current.position.z, -3, 0.025)
      // group.current.rotation.x += delta
      // group.current.rotation.y += 0.5 * delta
    })

    // useFrame(({ clock }) => {
      // group.current.rotation.x = clock.getElapsedTime()
        // group.current.rotation.z += 0.0001; 
        // group.current.rotation.x += 0.004
        // group.current.rotation.
    // });

    useEffect(() => {
        actions['Take 001'].play().setDuration(20)
        if(hovered){
          actions['Take 001'].play().setDuration(10)
        }
        // actions['Take 001'].stop()
    }, [actions, hovered]) 

  function handleHover(){
      console.log('hovered')
      // actions['Take 001'].play()
      setHovered(true)

  }

  const handlePointerOut = () => {
    setHovered(false)
    console.log('pointer out')
    actions['Take 001'].play().setDuration(60)
    // actions['Take 001'].stop()
    // actions['Take 001'].play().repetitions = 0
    // // actions['Take 001'].stop()
}

  return (
    <>
      <group  ref={group} position={[3 , -1.9 , 0 ]} rotation={[0 + scrollY * 0.001, 0,1.1]} scale={0.025} >
          <primitive object={scene} onPointerOver={handleHover} onPointerOut={handlePointerOut} />
      </group>  
      <OrbitControls 
      minAzimuthAngle={-Math.PI / 4}
      maxAzimuthAngle={Math.PI / 4}
      minPolarAngle={Math.PI / 6}
      maxPolarAngle={Math.PI - Math.PI / 6}
      enableZoom={false}
      />  
      {/* <axesHelper args={[5]} /> */}
      {/* <OrbitControls target={[0, 1, 0]} autoRotate autoRotateSpeed={22}  />   */}
    </>

    )
}

export default Model