import { BoxGeometry, MeshBasicMaterial, Mesh } from "three";

function createCube2() {
  const geometry = new BoxGeometry(2, 2, 2);

  const material = new MeshBasicMaterial({ color: 0x1272e0 });

  const cube = new Mesh(geometry, material);

  cube.rotation.set(-0.5, -0.1, -0.8);
  cube.position.set(2, 0, 0);

  return cube;
}

export { createCube2 };
