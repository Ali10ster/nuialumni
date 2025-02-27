import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";


function XrTriangle() {

    //useRef: hook de react para darnos acceso directo a un elemento, en este
    //caso para darnos acceso directo al cubo (objeto 3D) que vamos a mostrar
    const triangleRef = useRef();
    
    
    //useFrame: hook de react-three/fiber (librería para trabajar en 3D) que
    //permite rotar el objeto 3D alrededor de un eje, x, y o z. 
    //En este ejemplo es en el eje y
    useFrame((state, delta) => {
        //console.log(cubeRef)    
        triangleRef.current.rotation.y += delta;
    
    });

return (<>
    {/*<OrbitControls /> permite mover los objetos con el ratón. 
    Sólo sirve para la web, pero no cuando estemos en RA*/}
    <OrbitControls />
    {/*<ambientLight es para poner luz a la escena*/}
    <ambientLight />
    {/*dentro del mesh se dibuja la figura, que en este caso es un cubo (box)*/}
    <mesh ref={triangleRef} position={[0, 0, -5]}>
        <coneGeometry args={[2, 5, 8]}/>
        <meshStandardMaterial color='yellow' />
    </mesh>
     

    </>

)
}

export default XrTriangle;
