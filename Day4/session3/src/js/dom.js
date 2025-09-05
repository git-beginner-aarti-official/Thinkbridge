let greetings = document.querySelector("#greeting")
let toggle_button = document.querySelector("#toggleBtn")
let add_button = document.querySelector("#addBtn")
let list = document.querySelector("ul")
const info = document.getElementById("info");   


greetings.textContent="Hello World !";

toggle_button.addEventListener("click", () => {
    greetings.classList.toggle("highlight")
});

add_button.addEventListener("click" , () => {
    const newItem = document.createElement("li");
    newItem.textContent = "Item"
    list.appendChild(newItem)
})

greeting.addEventListener("click", () => {
    greeting.textContent = "You clicked the greeting!";
});

info.addEventListener("mouseover", () => {
    info.classList.add("highlight");
});
info.addEventListener("mouseout", () => {
    info.classList.remove("highlight");
});