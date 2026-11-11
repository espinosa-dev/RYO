
const logoutButton = document.getElementById("arrowAsideButton");
const aside = document.getElementById("navBar")
let listItems = aside.querySelectorAll("ul li");

logoutButton.addEventListener("click", () => {

    if (aside.classList.contains("hidden")) {
        logoutButton.innerHTML = `
            <span class="material-symbols-rounded">right_panel_close</span>
            `;
        aside.classList.remove("hidden")
    } else {
        logoutButton.innerHTML = `
            <span class="material-symbols-rounded">left_panel_close</span>
            `;
        
        aside.classList.add("hidden")
    }
})

let transformToIcons = (listItems) => {
    
}