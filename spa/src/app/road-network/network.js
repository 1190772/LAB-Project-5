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

// const light = new THREE.DirectionalLight(0xffffff, 1);
// light.position.set(2,2,5);

const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper)


let gData = {
    nodes: [
        {"id": 1, "name": "Arouca", "lat": -50.0000, "lon": -42.6618, "alt": 15.6250, "links": [6, 13]},                          // 0
        {"id": 2, "name": "Espinho", "lat": 26.6951, "lon": -36.7615, "alt": 34.3750, "links": [4, 9, 16]},                      // 1
        {"id": 3, "name": "Gondomar", "lat": 50.0000, "lon": 50.0000, "alt": 12.5000, "links": [3, 8, 10, 12]},                 // 2
        {"id": 4, "name": "Maia", "lat": 22.8206, "lon": -19.4217, "alt": 43.7500, "links": [4, 7, 12, 15, 16]},                 // 3
        {"id": 5, "name": "Matosinhos", "lat": 37.4080, "lon": -22.8394, "alt": 21.8750, "links": [15]},                         // 4
        {"id": 6, "name": "Oliveira de Azeméis", "lat": -5.0756, "lon": -50.0000, "alt": 46.8750, "links": [9, 11, 13]},         // 5
        {"id": 7, "name": "Paredes", "lat": -33.4754, "lon": -21.2052, "alt": 0.0000, "links": [10, 13, 14]},                      // 6
        {"id": 8, "name": "Porto", "lat": 24.3898, "lon": -24.9214, "alt": 37.5000, "links": [16]},                              // 7
        {"id": 9, "name": "Póvoa de Varzim", "lat": 49.9225, "lon": -7.4403, "alt": 25.0000, "links": [15]},                    // 8
        {
            "id": 10,
            "name": "Santa Maria da Feira",
            "lat": 8.7369,
            "lon": -43.0783,
            "alt": 6.2500,
            "links": [11, 12, 14, 16]
        },  // 9
        {"id": 11, "name": "Santo Tirso", "lat": -5.6955, "lon": -10.3708, "alt": 40.6250, "links": [12, 14]},                   // 10
        {"id": 12, "name": "São João da Madeira", "lat": -2.4215, "lon": -45.1446, "alt": 18.7500, "links": [13, 14]},           // 11
        {"id": 13, "name": "Trofa", "lat": 11.0035, "lon": -10.6851, "alt": 28.1250, "links": [14]},                             // 12
        {"id": 14, "name": "Vale de Cambra", "lat": -20.8446, "lon": -49.6622, "alt": 3.1250, "links": []},                       // 13
        {"id": 15, "name": "Valongo", "lat": -0.9492, "lon": -22.5016, "alt": 50.0000, "links": []},                             // 14
        {"id": 16, "name": "Vila do Conde", "lat": 47.4041, "lon": -9.6952, "alt": 9.3750, "links": []},                       // 15
        {"id": 17, "name": "Vila Nova de Gaia", "lat": 21.0384, "lon": -27.5927, "alt": 31.2500, "links": []}
    ]
}
const K_CIRCULO = 2.1;
const LARGURA_ARCO = 1.5;
const raio_circle = K_CIRCULO * LARGURA_ARCO / 2;
const aux_circle_mesh_array = [];


const gltfloader = new GLTFLoader();



for (let node of gData.nodes) {

    const circleGeometry = new THREE.CircleGeometry(raio_circle, 32);
    const circleMaterial = new THREE.MeshBasicMaterial({
        color: 0x3598A0,
        side: THREE.DoubleSide,
    });
    const circle = new THREE.Mesh(circleGeometry, circleMaterial);
    aux_circle_mesh_array.push(circle);
    // z = altura
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
        newRoot.rotateX(Math.PI/2);

        console.log(node.lon);
        console.log(node.lat);
        console.log(node.alt);
        plane_mesh.add(newRoot);
        console.log(gltf)
    })




}

const K_LIGACAO = 1.2;
const comprimento = K_LIGACAO * raio_circle;
const INFINITESIMO = 0.01;


const connections_mesh_array = [];

for (let i = 0; i < aux_circle_mesh_array.length; i++) {

    const ligacaoGeometry = new THREE.PlaneGeometry(comprimento, LARGURA_ARCO);
    const ligacaoMaterial = new THREE.MeshBasicMaterial({
        color: 0xFF0000,

        side: THREE.DoubleSide,
    });
    const ligacao = new THREE.Mesh(ligacaoGeometry, ligacaoMaterial);

    ligacao.position.x = aux_circle_mesh_array[i].position.x;
    ligacao.position.y = aux_circle_mesh_array[i].position.y;
    ligacao.position.z = aux_circle_mesh_array[i].position.z - INFINITESIMO;

    ligacao.geometry.translate(comprimento / 2, 0, 0);

    plane_mesh.add(ligacao);
    connections_mesh_array.push(ligacao);

}

createArcos(0, 6);
orientante(0, 6);
createArcos(0, 13);
orientante(0, 13);
createArcos(6, 10);
orientante(6, 10);
createArcos(6, 11);
orientante(6, 11);
createArcos(13, 5);
orientante(13, 5);
createArcos(13, 11);
orientante(13, 11);
createArcos(5, 9);
orientante(5, 9);
createArcos(11, 9);
orientante(11, 9);
createArcos(10, 14);
orientante(10, 14);
createArcos(14, 9);
orientante(14, 9);
createArcos(14, 12);
orientante(14, 12);
createArcos(9, 1);
orientante(9, 1);
createArcos(1, 7);
orientante(1, 7);
createArcos(7, 16);
orientante(7, 16);
createArcos(7, 4);
orientante(7, 4);
createArcos(16, 3);
orientante(16, 3);
createArcos(3, 4);
orientante(3, 4);
createArcos(12, 16);
orientante(12, 16);
createArcos(12, 2);
orientante(12, 2);
createArcos(2, 8);
orientante(2, 8);
createArcos(8, 15);
orientante(8, 15);
createArcos(4, 15);
orientante(4, 15);
createArcos(3, 15);
orientante(3, 15);



function createArcos(start_index, finish_index) {
    const comprimento_projecao = Math.sqrt(Math.pow((connections_mesh_array[finish_index].position.x - connections_mesh_array[start_index].position.x), 2)
        + Math.pow((connections_mesh_array[finish_index].position.y - connections_mesh_array[start_index].position.y), 2)) - comprimento - comprimento;

    const desnivel = connections_mesh_array[finish_index].position.z - connections_mesh_array[start_index].position.z;
    const inclinacao = Math.atan(desnivel / comprimento_projecao);

// middle point between 2 coordinates
//If we have coordinates (x₁,y₁) and (x₂,y₂) , then the midpoint of these coordinates is determined by (x₁ + x₂)/2, (y₁ + y₂)/2
    const x_coordinate = (connections_mesh_array[start_index].position.x + connections_mesh_array[finish_index].position.x) / 2;
    const y_coordinate = (connections_mesh_array[start_index].position.y + connections_mesh_array[finish_index].position.y) / 2;
    const z_coordinate = (connections_mesh_array[start_index].position.z + connections_mesh_array[finish_index].position.z) / 2;

    const comprimento_road = Math.sqrt(Math.pow(comprimento_projecao, 2) + Math.pow(desnivel, 2));


    let orientation = Math.atan2(aux_circle_mesh_array[finish_index].position.y - aux_circle_mesh_array[start_index].position.y, aux_circle_mesh_array[finish_index].position.x - aux_circle_mesh_array[start_index].position.x);


    const road_material = new THREE.MeshBasicMaterial({color: 0x060606});
    const road_geometry = new THREE.PlaneGeometry(comprimento_road, LARGURA_ARCO);

    const road_mesh = new THREE.Mesh(road_geometry, road_material);

    road_mesh.rotateZ(orientation);
    road_mesh.rotateY(-inclinacao);
    road_mesh.position.x = x_coordinate;
    road_mesh.position.y = y_coordinate;
    road_mesh.position.z = z_coordinate;
    plane_mesh.add(road_mesh);


}

function orientante(start_index, finish_index) {
    let aux = Math.atan2(aux_circle_mesh_array[finish_index].position.y - aux_circle_mesh_array[start_index].position.y, aux_circle_mesh_array[finish_index].position.x - aux_circle_mesh_array[start_index].position.x);


    connections_mesh_array[start_index].rotateZ(aux);
    connections_mesh_array[finish_index].rotateZ(aux + Math.PI);
}




// αij = arctan2((yj - yi) / (xj - xi)) (em radianos)
// Orientacao = Math.atan2(y_final - y_inicial, x_final - x_inicial)

// arouca - paredes
// orientate(ligacao_Arouca,ligacao_paredes)
// ligacao inicial = rotateZ(Orientacao)
// ligacao final = rotateZ(Orientacao) + Math.PI

// desnivel = altura_ligacao (z) (final - inicial)
// largula = LARGURA_ARCO
// Inclinacao = arctan(hij / pij). arctan(desnivel / comprimento_projecao)
// Comprimento_Projecao = √((x_final - x_inical)^2 + (y_final - y_inicial)^2) - comprimento_ligacao - comprimentos_ligacao;
// Comprimento_arco = √(pij2 + hij2); sqr(comprimento_projecao^2 + desnivel^2);