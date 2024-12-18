import './index.css';
import { home } from "./pages/home.js";
import { menu } from "./pages/menu.js";
import { about } from "./pages/about.js";

home();
const btns = document.querySelectorAll("#btns button");
btns.forEach((button) => {
  button.addEventListener("click", (event) => {
    switch (event.target.textContent) {
      case "Home":
        home();
        break;
      case "Menu":
        menu();
        break;
      case "About":
        about();
      default:
        console.log("Unknown button clicked");
    }
  });
});
