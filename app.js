const inputBox = document.getElementById("inputBox");
const addButton = document.getElementById("addBtn");
const toDoList = document.getElementById("todoList");

let editValue = null;
function addTask() {
    const inputTask = inputBox.value.trim();
    if (inputTask === "") {
        alert("pehle khuch dalo to bete!");
        return false;
    }
    if (addButton.value === "Edit") {
        editValue.target.previousElementSibling.innerHTML = inputTask;
        inputBox.value = "";
        addButton.value = "Add";
    }
    else {
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.innerHTML = inputTask;
        li.appendChild(p);

        const editBtn = document.createElement("button");
        editBtn.classList.add("btn", "editBtn");
        editBtn.innerHTML = "edit";
        li.appendChild(editBtn);

        const deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "delete";
        deleteBtn.classList.add("btn", "deleteBtn");
        li.appendChild(deleteBtn);

        toDoList.appendChild(li);
        inputBox.value = "";
    }

}

function updateTask(e) {
    if (e.target.innerHTML === "delete") {
        todoList.removeChild(e.target.parentElement);
    }
    if (e.target.innerHTML === "edit") {
        // inputBox.value= e.target.parentElement.firstChild.innerHTML;
        inputBox.value = e.target.previousElementSibling.innerHTML;
        inputBox.focus();
        addButton.value = "Edit";
        editValue = e;
    }
}

addButton.addEventListener("click", addTask);
todoList.addEventListener("click", updateTask);
