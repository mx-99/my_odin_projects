import "./menu.css";
import jollof from "./jollof.jpg";
import tiramisu from "./tiramisu.jpg";
import wine from "./wine.jpg";

export function menu() {
  const menuDiv = document.getElementById("content");
  menuDiv.innerHTML = "";
  menuDiv.innerHTML = `
    <h1>The Global Spice Fusion Menu</h1>
    <div class="cards">
      <div class="card rice">
        <h2>Senegalese Jollof Rice</h2>
        <img src="${jollof}" alt="Senegalese Jollof Rice" />
        <h3>A vibrant, flavorful rice dish with a blend of aromatic spices, tender vegetables,<br> 
          and your choice of protein, inspired by the heart of Senegalese cuisine.</h3>
      </div>

      <div class="card tiramisu">
        <h2>Italian Tiramisu</h2>
        <img src="${tiramisu}" alt="Italian Tiramisu" />
        <h3>A classic Italian dessert featuring layers of espresso-soaked ladyfingers, rich mascarpone cream,<br>
          and a dusting of cocoa powder for a perfect balance of sweetness and bitterness.</h3>
      </div>

      <div class="card wine">
        <h2>Wine Pairing</h2>
        <img src="${wine}" alt="Wine Pairing" />
        <h3>Choose from a selection of exquisite wines to complement your meal, enhancing <br>
          the rich flavors of both the Jollof rice and the Tiramisu.</h3>
      </div>
    </div>
  `;
}
