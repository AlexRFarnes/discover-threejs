import { DirectionalLight } from "three";

function createLights() {
  const light = new DirectionalLight(0xffffff, 8);

  // Move the light right, up, and towards us
  light.position.set(10, 10, 10);

  return light;
}

export { createLights };
