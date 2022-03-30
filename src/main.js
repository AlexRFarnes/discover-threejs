import "./style.css";
import { World } from "./World/World";

// document.querySelector("#renderBtn").addEventListener("click", main);

// create the main function
function main() {
  // Get the reference to the container element
  const container = document.querySelector("#scene-container");

  // 1. Create an instance of the World app
  const world = new World(container);

  // 2. Render the scene
  world.render();
}

main();
