const form = document.querySelector("#new-task-form");
const input = document.querySelector("#new-task-input");
const taskList = document.querySelector("#tasks");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const taskText = input.value.trim();
  if (taskText === "") return;

  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task");

  const contentDiv = document.createElement("div");
  contentDiv.classList.add("content");

  const taskInput = document.createElement("input");
  taskInput.classList.add("text");
  taskInput.type = "text";
  taskInput.value = taskText;
  taskInput.setAttribute("readonly", "readonly");

  contentDiv.appendChild(taskInput);
  taskDiv.appendChild(contentDiv);

  const actionsDiv = document.createElement("div");
  actionsDiv.classList.add("actions");

  const editBtn = document.createElement("button");
  editBtn.classList.add("edit");
  editBtn.innerText = "Edit";

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete");
  deleteBtn.innerText = "Delete";

  actionsDiv.appendChild(editBtn);
  actionsDiv.appendChild(deleteBtn);

  taskDiv.appendChild(actionsDiv);
  taskList.appendChild(taskDiv);

  input.value = "";

  editBtn.addEventListener("click", () => {
    if (editBtn.innerText.toLowerCase() === "edit") {
      editBtn.innerText = "Save";
      taskInput.removeAttribute("readonly");
      taskInput.focus();
    } else {
      editBtn.innerText = "Edit";
      taskInput.setAttribute("readonly", "readonly");
    }
  });

  deleteBtn.addEventListener("click", () => {
    taskList.removeChild(taskDiv);
  });
});
