import * as THREE from 'three';



export const scene = new THREE.Scene();
export const camera = new THREE.PerspectiveCamera(75,innerWidth/innerHeight, 0.1, 1000);
export const renderer = new THREE.WebGLRenderer();



renderer.setSize(window.innerWidth, window.innerHeight)

renderer.setPixelRatio(window.devicePixelRatio);

document.body.appendChild(renderer.domElement);


function animate(){
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}


animate();