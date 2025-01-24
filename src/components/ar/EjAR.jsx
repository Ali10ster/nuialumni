//Ejemplo de un cubo en RA
import { Canvas} from "@react-three/fiber";
import XrCube from './XrCube';
import XrTriangle from './XrTriangle'
import { ARButton, XR } from "@react-three/xr";


function EjAR(){


    return(
        <>
            <ARButton/>
            <Canvas>
                <XR>
                    <XrCube />
                </XR>
            </Canvas>
            <Canvas>
            <XR>
                <XrTriangle/>
            </XR>
            </Canvas>
        </>
)

}

export default EjAR;