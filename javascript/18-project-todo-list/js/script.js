// Selecting the elements
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");

// Functions
const saveTask = (task) => {
  const div = document.createElement("div");
  div.classList.add("todo");

  const title = document.createElement("h3");
  title.innerHTML = task;
  div.appendChild(title);

  const addButton = document.createElement("button");
  addButton.classList.add("finish-btn");
  addButton.innerHTML = '<i class="fa-solid fa-check"></i>';
  div.appendChild(addButton);

  const editButton = document.createElement("button");
  editButton.classList.add("edit-btn");
  editButton.innerHTML = '<i class="fa-solid fa-pen"></i>';
  div.appendChild(editButton);

  const removeButton = document.createElement("button");
  removeButton.classList.add("remove-btn");
  removeButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  div.appendChild(removeButton);

  todoList.appendChild(div);
};

// Event listeners
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const task = todoInput.value.trim();
  if (!task) return;
  saveTask(task);

  todoInput.value = "";
  todoInput.focus();
});
