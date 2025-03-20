// CSS Imports
import "./default-reset.css";
import "./styles.css";

document.querySelector(".nav-bar").addEventListener("click", (e) => {
  const { target } = e;
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

      if (menuContent.classList.contains("active")) {
        menuContent.classList.remove("active");
        break;
      }

      if (target.className === "drop-down" || target.className === "button") {
        document.querySelectorAll(".menu-content").forEach((menu) => {
          if (menu.classList.contains("active")) {
            menu.classList.remove("active");
          }
        });
      }

      if (
        target.className === "link-container drop-down" ||
        target.className === "sub-button"
      ) {
        document
          .querySelectorAll(".link-container.drop-down > .menu-content")
          .forEach((menu) => {
            if (menu.classList.contains("active")) {
              menu.classList.remove("active");
            }
          });
      }

      menuContent.classList.add("active");
      break;

    default:
      menuContent = document.querySelectorAll(".menu-content");
      menuContent.forEach((menu) => {
        if (menu.classList.contains("active")) {
          menu.classList.remove("active");
        }
      });
      break;
  }
});
