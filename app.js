const addButton = document.querySelector(".btn");

addButton.addEventListener("click", addItem);

function addItem() {
    let counter = 0;
    let input = document.querySelector("input").value;
    if (input.length == 0) {
        return;
    }

    const newDiv = document.createElement("div");
    const listItem = document.createElement("li");
    listItem.innerText = input;
    const newButton = document.createElement("button");
    newButton.innerHTML = '<i class="fas fa-check"></i>';
    newDiv.appendChild(listItem);
    newDiv.appendChild(newButton);
    newDiv.classList.add("todo-container");
    newButton.classList.add("check-button");
    document.getElementById("todo-list").appendChild(newDiv);

    document.querySelector(".new-input").value = '';

    newButton.addEventListener('click', () => {
        counter++;
        if (counter%2 == 1) {
            listItem.style.textDecoration = 'line-through';
            listItem.style.backgroundColor = '#F0F0F0';
        } else {
            listItem.style.backgroundColor = 'white';
            listItem.style.textDecoration = 'none';
        }
    });
}



