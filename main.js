import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.152.0/build/three.module.js';

// element canvas
const heroElement = document.getElementById('hero')
const heroElementHeight = heroElement.clientHeight;
const canvasElement = document.getElementById('canvas')
const canvasWidth = canvasElement.clientWidth;

// Création de la scène
const scene = new THREE.Scene();

// Création de la caméra
const camera = new THREE.PerspectiveCamera(
    // fov
    75, 
    // ratio
    canvasWidth / heroElementHeight, 
    0.1, 
    1000
);

// Création du renderer (moteur de rendu)
const renderer = new THREE.WebGLRenderer({ canvas: canvas });
// dimension du render
renderer.setSize(canvasWidth, heroElementHeight);

// Création d'une boîte (cube)
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Position de la caméra
camera.position.z = 6;

// Animation (rotation du cube)
function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

// Lancement de l'animation
animate();
