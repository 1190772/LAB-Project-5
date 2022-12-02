import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as THREE from "three";

@Component({
  selector: 'app-road-network',
  templateUrl: './road-network.component.html',
  styleUrls: ['./road-network.component.css']
})
export class RoadNetworkComponent implements OnInit, AfterViewInit {

  @ViewChild('canvas')
  private canvasRef: ElementRef | undefined;

  @Input() public rotationSpeedX: number = 0.05;
  @Input() public rotationSpeedY: number = 0.01;
  @Input() public size: number = 200;
  @Input() public texture: string = "/assets/camiao.jpg"

  @Input() public cameraZ: number = 400;
  @Input() public fieldOfView: number = 1;
  @Input('nearClipping') public nearClippingPlane: number = 1;
  @Input('farClipping') public farClippingPlane: number = 1000;

  private camera!: THREE.PerspectiveCamera;

  private get canvas(): HTMLCanvasElement {
    return this.canvasRef?.nativeElement;
  }


  private loader = new THREE.TextureLoader();
  private geometry = new THREE.BoxGeometry(1,1,1);
  private material = new THREE.MeshBasicMaterial({map: this.loader.load(this.texture)});

  private cube: THREE.Mesh = new THREE.Mesh(this.geometry, this.material);

  private renderer !: THREE.WebGLRenderer;

  private scene!: THREE.Scene;

  private createScene() {

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xFFFFFF);

    let gData= {
      nodes: [
        { "id": 1, "name": "Arouca", "lat": -50.0000, "lon": -42.6618, "alt": 15.6250, "links": [6, 13] },                          // 0
        { "id": 2, "name": "Espinho", "lat": 41.0072, "lon": 8.6410, "alt": 550, "links": [4, 9, 16] },                      // 1
        { "id": 3, "name": "Gondomar", "lat": 42.1115, "lon": 8.7613, "alt": 200, "links": [3, 8, 10, 12] },                 // 2
        { "id": 4, "name": "Maia", "lat": 41.2279, "lon": 8.6210, "alt": 700, "links": [4, 7, 12, 15, 16] },                 // 3
        { "id": 5, "name": "Matosinhos", "lat": 41.1844, "lon": 8.6963, "alt": 350, "links": [15] },                         // 4
        { "id": 6, "name": "Oliveira de Azeméis", "lat": 40.8387, "lon": 8.4770, "alt": 750, "links": [9, 11, 13] },         // 5
        { "id": 7, "name": "Paredes", "lat": 41.2052, "lon": 8.3304, "alt": 0, "links": [10, 13, 14] },                      // 6
        { "id": 8, "name": "Porto", "lat": 41.1579, "lon": 8.6291, "alt": 600, "links": [16] },                              // 7
        { "id": 9, "name": "Póvoa de Varzim", "lat": 41.3804, "lon": 8.7609, "alt": 400, "links": [15] },                    // 8
        { "id": 10, "name": "Santa Maria da Feira", "lat": 40.9268, "lon": 8.5483, "alt": 100, "links": [11, 12, 14, 16] },  // 9
        { "id": 11, "name": "Santo Tirso", "lat": 41.3431, "lon": 8.4738, "alt": 650, "links": [12, 14] },                   // 10
        { "id": 12, "name": "São João da Madeira", "lat": 40.9005, "lon": 8.4907, "alt": 300, "links": [13, 14] },           // 11
        { "id": 13, "name": "Trofa", "lat": 41.3391, "lon": 8.5600, "alt": 450, "links": [14] },                             // 12
        { "id": 14, "name": "Vale de Cambra", "lat": 40.8430, "lon": 8.3956, "alt": 50, "links": [] },                       // 13
        { "id": 15, "name": "Valongo", "lat": 41.1887, "lon": 8.4983, "alt": 800, "links": [] },                             // 14
        { "id": 16, "name": "Vila do Conde", "lat": 41.3517, "lon": 8.7479, "alt": 150, "links": [] },                       // 15
        { "id": 17, "name": "Vila Nova de Gaia", "lat": 41.1239, "lon": 8.6118, "alt": 500, "links": [] }
      ]
    }

    for(const node of gData.nodes){
      let cube = new THREE.Mesh(this.geometry, this.material);

      cube.position.set(node.lat, node.lon, node.alt)
      this.scene.add(cube);

    }

    this.scene.add(this.cube);

    let aspectRatio = this.getAspectRatio();
    this.camera = new THREE.PerspectiveCamera(
      this.fieldOfView,
      aspectRatio,
      this.nearClippingPlane,
      this.farClippingPlane
    )
    this.camera.position.z = 1000;
  }

  private getAspectRatio() {
    return this.canvas.clientWidth / this.canvas.clientHeight;
  }

  private animateCube() {
    this.cube.rotation.x += this.rotationSpeedX;
    this.cube.rotation.y += this.rotationSpeedY;
  }

  private startRenderingLoop(){
    this.renderer = new THREE.WebGLRenderer({canvas: this.canvas});
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);

    let component: RoadNetworkComponent = this;
    (function render(){
      requestAnimationFrame(render);
      component.animateCube();
      component.renderer.render(component.scene, component.camera);
    }())
  }



  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.createScene();
    this.startRenderingLoop()
  }

}
