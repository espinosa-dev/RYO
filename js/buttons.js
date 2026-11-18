
const aside = document.getElementById("navBar");
const listItems = aside.querySelectorAll("ul li");

listItems.forEach((listItem) => {
    listItem.addEventListener("click", (event) => {
        if (event.target.closest("a")) {
            return;
        }

        const link = listItem.querySelector("a");
        if (link) {
            link.click();
        }
    });
});