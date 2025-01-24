import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useRef } from "react";
import { useFrame } from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei";

function DogAR() {
        //useRef: hook de react para darnos acceso directo a un elemento, en este
    //caso para darnos acceso directo al cubo (objeto 3D) que vamos a mostrar
    const dogRef = useRef();
    
    
    //useFrame: hook de react-three/fiber (librería para trabajar en 3D) que
    //permite rotar el objeto 3D alrededor de un eje, x, y o z. 
    //En este ejemplo es en el eje y
    useFrame((state, delta) => {
        //console.log(cubeRef)    
        dogRef.current.rotation.y += delta;
    
    });
 const gltf = useLoader(GLTFLoader, './model.gltf')
 return (<>
    <ambientLight/>
    <OrbitControls />
    <mesh ref={dogRef} position={[0, 0, -5]}>
        <primitive object={gltf.scene} position={[0,0,-5]} scale={[4,4,4]}/>
    </mesh>
    
    </>)
}
export default DogAR; 
