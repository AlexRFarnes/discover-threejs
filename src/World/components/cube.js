import {
  BoxGeometry,
  MeshStandardMaterial,
  MeshDepthMaterial,
  MeshLambertMaterial,
  MeshPhongMaterial,
  MeshToonMaterial,
  Mesh,
} from "three";

function createCube() {
  // create a geometry
  const geometry = new BoxGeometry(2, 2, 2);

  // create a material
  // Switch the old "basic" material to MeshBasicMaterial
  // a physically correct "standard" material
  const material = new MeshStandardMaterial({ color: 0x1272e0 }); // Setting the material parameters need a specification object with named parameters

  // create a Mesh containing the geometry and material
  const cube = new Mesh(geometry, material);

  // Rotate it
  cube.rotation.set(-0.5, -0.1, -0.8);
  cube.position.set(-2, 0, 0);

  return cube;
}

export { createCube };
