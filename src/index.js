import './sass/main.scss';
import menuCards from "./templates/menu-cards.hbs";
import menuList from "./menu.json";

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const menu = document.querySelector(".js-menu");
const checkbox = document.querySelector("#theme-switch-toggle");
const body = document.querySelector("body");

checkbox.addEventListener("change", onChangeTheme);


function onChangeTheme() {
    if (checkbox.checked) {
        document.body.classList.add(Theme.DARK);
        document.body.classList.remove(Theme.LIGHT);
        localStorage.setItem('theme_localStorage', JSON.stringify(Theme.DARK));
    } else {
        document.body.classList.add(Theme.LIGHT);
        document.body.classList.remove(Theme.DARK);
        localStorage.setItem('theme_localStorage', JSON.stringify(Theme.LIGHT));
   }
}

function onCheckboxChecked() {
    if (localStorage.getItem("theme_localStorage") === JSON.stringify(Theme.DARK)) {
        document.body.classList.add(Theme.DARK)
        checkbox.setAttribute('checked', 'true');
    }
}

onCheckboxChecked();


function createMenuCardsMarkup(menuList) {
    return menuCards(menuList);
}

menu.insertAdjacentHTML("beforeend", createMenuCardsMarkup(menuList));