//Ejemplo de un cubo en RA
import { Canvas} from "@react-three/fiber";
import DogAR from "./DogAR";
import { ARButton, XR } from "@react-three/xr";


function ARAlisterDog(){


    return(
        <>
            <ARButton/>
            <Canvas>
                <XR>
                    <DogAR />
                </XR>
            </Canvas>
        </>
)

}

export default ARAlisterDog;