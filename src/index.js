// CSS Imports
import "./default-reset.css";
import "./styles.css";

document.querySelector(".nav-bar").addEventListener("click", (e) => {
  const { target } = e;
  console.log(target);
  let menuContent;

  switch (target.className) {
    case "drop-down":
    case "link-container drop-down":
    case "button":
    case "sub-button":
      menuContent = target.querySelector(".menu-content");
      if (target.className === "button" || target.className === "sub-button") {
        menuContent = target.parentElement.querySelector(".menu-content");
      }

      if (target.className === "drop-down" || target.className === "button") {
        document.querySelectorAll(".menu-content").forEach((menu) => {
          if (menu.classList.contains("active")) {
            menu.classList.remove("active");
          }
        });
      }

      if (menuContent.classList.contains("active")) {
        menuContent.classList.remove("active");
        break;
      }
      menuContent.classList.add("active");
      console.log(menuContent);
      break;

    default:
      console.log("default");

      menuContent = document.querySelectorAll(".menu-content");
      menuContent.forEach((menu) => {
        console.log(menu);

        if (menu.classList.contains("active")) {
          menu.classList.remove("active");
        }
      });
      break;
  }
});
