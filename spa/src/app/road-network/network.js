import {scene} from "./index.js";

import * as THREE from 'three';

import {GLTFLoader} from 'https://unpkg.com/three@0.146.0/examples/jsm/loaders/GLTFLoader.js';


const plane_geometry = new THREE.PlaneGeometry(200, 200);
const plane_material = new THREE.MeshBasicMaterial({
  color: 0x808080,
})
export const plane_mesh = new THREE.Mesh(plane_geometry, plane_material);
scene.add(plane_mesh);

plane_mesh.rotateX(-Math.PI / 2);

const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper)


let gData = {
  nodes: [
    {"id": 1, "name": "Arouca", "lat": -50.0000, "lon": -42.6618, "alt": 15.6250},
    {"id": 2, "name": "Espinho", "lat": 26.6951, "lon": -36.7615, "alt": 34.3750},
    {"id": 3, "name": "Gondomar", "lat": 50.0000, "lon": 50.0000, "alt": 12.5000},
    {"id": 4, "name": "Maia", "lat": 22.8206, "lon": -19.4217, "alt": 43.7500},
    {"id": 5, "name": "Matosinhos", "lat": 37.4080, "lon": -22.8394, "alt": 21.8750},
    {"id": 6, "name": "Oliveira de Azeméis", "lat": -5.0756, "lon": -50.0000, "alt": 46.8750},
    {"id": 7, "name": "Paredes", "lat": -33.4754, "lon": -21.2052, "alt": 0.0000},
    {"id": 8, "name": "Porto", "lat": 24.3898, "lon": -24.9214, "alt": 37.5000},
    {"id": 9, "name": "Póvoa de Varzim", "lat": 49.9225, "lon": -7.4403, "alt": 25.0000},
    {"id": 10, "name": "Santa Maria da Feira", "lat": 8.7369, "lon": -43.0783, "alt": 6.2500},
    {"id": 11, "name": "Santo Tirso", "lat": -5.6955, "lon": -10.3708, "alt": 40.6250},
    {"id": 12, "name": "São João da Madeira", "lat": -2.4215, "lon": -45.1446, "alt": 18.7500},
    {"id": 13, "name": "Trofa", "lat": 11.0035, "lon": -10.6851, "alt": 28.1250},
    {"id": 14, "name": "Vale de Cambra", "lat": -20.8446, "lon": -49.6622, "alt": 3.1250},
    {"id": 15, "name": "Valongo", "lat": -0.9492, "lon": -22.5016, "alt": 50.0000},
    {"id": 16, "name": "Vila do Conde", "lat": 47.4041, "lon": -9.6952, "alt": 9.3750},
    {"id": 17, "name": "Vila Nova de Gaia", "lat": 21.0384, "lon": -27.5927, "alt": 31.2500}
  ]
}
const K_CIRCLE = 2.1;
const ARC_WIDTH = 1.5;
const radius_circle = K_CIRCLE * ARC_WIDTH / 2;
const aux_circle_mesh_array = [];


const gltfloader = new GLTFLoader();


for (let node of gData.nodes) {

  const circleGeometry = new THREE.CircleGeometry(radius_circle, 32);
  const circleMaterial = new THREE.MeshBasicMaterial({
    color: 0x3598A0,
    side: THREE.DoubleSide,
  });
  const circle = new THREE.Mesh(circleGeometry, circleMaterial);
  aux_circle_mesh_array.push(circle);
  circle.position.x = node.lat;
  circle.position.y = node.lon;
  circle.position.z = node.alt;

  circle.position.z *= 0.3;

  plane_mesh.add(circle);


  gltfloader.load('./oldWarehouse/scene.gltf', (gltf) => {
    let root = gltf.scene;
    let newRoot = root.clone();
    newRoot.scale.set(0.004, 0.004, 0.004);
    newRoot.position.x = node.lat - 4;
    newRoot.position.y = node.lon;
    newRoot.position.z = node.alt;
    newRoot.position.z *= 0.3;
    newRoot.rotateX(Math.PI / 2);

    console.log(node.lon);
    console.log(node.lat);
    console.log(node.alt);
    plane_mesh.add(newRoot);
    console.log(gltf)
  })


}

const K_CONNECTION = 1.2;
const length = K_CONNECTION * radius_circle;
const INFINITESIMAL = 0.01;

const connections_mesh_array = [];

for (let i = 0; i < aux_circle_mesh_array.length; i++) {

  const connectionGeometry = new THREE.PlaneGeometry(length, ARC_WIDTH);
  const connectionMaterial = new THREE.MeshBasicMaterial({
    color: 0xFF0000,

    side: THREE.DoubleSide,
  });
  const connection = new THREE.Mesh(connectionGeometry, connectionMaterial);

  connection.position.x = aux_circle_mesh_array[i].position.x;
  connection.position.y = aux_circle_mesh_array[i].position.y;
  connection.position.z = aux_circle_mesh_array[i].position.z - INFINITESIMAL;

  connection.geometry.translate(length / 2, 0, 0);

  plane_mesh.add(connection);
  connections_mesh_array.push(connection);

}

createEdges(0, 6);
orientate(0, 6);
createEdges(0, 13);
orientate(0, 13);
createEdges(6, 10);
orientate(6, 10);
createEdges(6, 11);
orientate(6, 11);
createEdges(13, 5);
orientate(13, 5);
createEdges(13, 11);
orientate(13, 11);
createEdges(5, 9);
orientate(5, 9);
createEdges(11, 9);
orientate(11, 9);
createEdges(10, 14);
orientate(10, 14);
createEdges(14, 9);
orientate(14, 9);
createEdges(14, 12);
orientate(14, 12);
createEdges(9, 1);
orientate(9, 1);
createEdges(1, 7);
orientate(1, 7);
createEdges(7, 16);
orientate(7, 16);
createEdges(7, 4);
orientate(7, 4);
createEdges(16, 3);
orientate(16, 3);
createEdges(3, 4);
orientate(3, 4);
createEdges(12, 16);
orientate(12, 16);
createEdges(12, 2);
orientate(12, 2);
createEdges(2, 8);
orientate(2, 8);
createEdges(8, 15);
orientate(8, 15);
createEdges(4, 15);
orientate(4, 15);
createEdges(3, 15);
orientate(3, 15);


function createEdges(start_index, finish_index) {
  const projection_length = Math.sqrt(Math.pow((connections_mesh_array[finish_index].position.x - connections_mesh_array[start_index].position.x), 2)
    + Math.pow((connections_mesh_array[finish_index].position.y - connections_mesh_array[start_index].position.y), 2)) - length - length;

  const unevenness = connections_mesh_array[finish_index].position.z - connections_mesh_array[start_index].position.z;
  const slope = Math.atan(unevenness / projection_length);


  const x_coordinate = (connections_mesh_array[start_index].position.x + connections_mesh_array[finish_index].position.x) / 2;
  const y_coordinate = (connections_mesh_array[start_index].position.y + connections_mesh_array[finish_index].position.y) / 2;
  const z_coordinate = (connections_mesh_array[start_index].position.z + connections_mesh_array[finish_index].position.z) / 2;

  const length_road = Math.sqrt(Math.pow(projection_length, 2) + Math.pow(unevenness, 2));


  let orientation = Math.atan2(aux_circle_mesh_array[finish_index].position.y - aux_circle_mesh_array[start_index].position.y, aux_circle_mesh_array[finish_index].position.x - aux_circle_mesh_array[start_index].position.x);


  const road_material = new THREE.MeshBasicMaterial({color: 0x060606});
  const road_geometry = new THREE.PlaneGeometry(length_road, ARC_WIDTH);

  const road_mesh = new THREE.Mesh(road_geometry, road_material);

  road_mesh.rotateZ(orientation);
  road_mesh.rotateY(-slope);
  road_mesh.position.x = x_coordinate;
  road_mesh.position.y = y_coordinate;
  road_mesh.position.z = z_coordinate;
  plane_mesh.add(road_mesh);


}

function orientate(start_index, finish_index) {
  let aux = Math.atan2(aux_circle_mesh_array[finish_index].position.y - aux_circle_mesh_array[start_index].position.y, aux_circle_mesh_array[finish_index].position.x - aux_circle_mesh_array[start_index].position.x);


  connections_mesh_array[start_index].rotateZ(aux);
  connections_mesh_array[finish_index].rotateZ(aux + Math.PI);
}


