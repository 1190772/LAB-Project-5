import {camera} from "./index.js"
import {renderer} from "./index.js"
import * as orbit from "orbit";
const orbit_controler = new orbit.OrbitControls(camera,renderer.domElement);
camera.position.y = 10;
camera.position.z = 30;
