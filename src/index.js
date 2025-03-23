// CSS Imports
import "./default-reset.css";
import "./styles.css";

document.addEventListener("click", (e) => {
  const { target } = e;
  let menuContent;
  let locatorID;
  // let currentLocator
  let scrollDirection;
  let activeImg = document.querySelector(".active-img");
  let activeLocator = document.querySelector(".active-locator");

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

    case "locator":
      activeImg.classList.remove("active-img");
      activeLocator.classList.remove("active-locator");

      locatorID = target.id.charAt(2);
      activeImg = document.querySelector(`#i-${locatorID}`);
      activeLocator = document.querySelector(`#l-${locatorID}`);

      activeImg.classList.add("active-img");

      activeLocator.classList.add("active-locator");

      break;

    case "scroll":
      scrollDirection = target.id;

      activeImg = document.querySelector(`.active-img`);
      activeLocator = document.querySelector(`.active-locator`);
      locatorID = activeLocator.id.charAt(2);

      activeImg.classList.remove("active-img");
      activeLocator.classList.remove("active-locator");

      if (scrollDirection === "left") {
        locatorID = parseInt(locatorID, 10) - 1;
        if (locatorID < 1) {
          locatorID = 5;
        }
        activeImg = document.querySelector(`#i-${locatorID}`);
        activeLocator = document.querySelector(`#l-${locatorID}`);
      } else if (scrollDirection === "right") {
        locatorID = parseInt(locatorID, 10) + 1;

        if (locatorID > 5) {
          locatorID = 1;
        }
        activeImg = document.querySelector(`#i-${locatorID}`);
        activeLocator = document.querySelector(`#l-${locatorID}`);
      }

      activeImg.classList.add("active-img");
      activeLocator.classList.add("active-locator");
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

function activateNextImg() {
  const currentActiveImg = document.querySelector(".active-img");
  const currentActiveLocator = document.querySelector(".active-locator");

  currentActiveImg.classList.remove("active-img");
  currentActiveLocator.classList.remove("active-locator");

  let next = parseInt(currentActiveImg.id.charAt(2), 10);

  next = next + 1 > 5 ? 1 : next + 1;

  const nextActiveImg = document.querySelector(`#i-${next}`);
  const nextActiveLocator = document.querySelector(`#l-${next}`);

  nextActiveImg.classList.add("active-img");
  nextActiveLocator.classList.add("active-locator");
}

setInterval(activateNextImg, 5000);
