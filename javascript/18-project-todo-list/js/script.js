// Selecting the elements
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const finishEditBtn = document.querySelector("#finish-edit-btn");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");

let oldTask = "";

// Functions
const saveTask = (task) => {
  const div = document.createElement("div");
  div.classList.add("task");

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

const toggleEditForm = () => {
  editForm.classList.toggle("hide");
  todoForm.classList.toggle("hide");
  todoList.classList.toggle("hide");
};

const finishTask = (task) => {
  task.classList.toggle("done");
};

const editTask = (task) => {
  toggleEditForm();

  let taskTitle;

  if (task && task.querySelector("h3"))
    taskTitle = task.querySelector("h3").innerHTML;

  editInput.value = taskTitle;
  oldTask = taskTitle;
};

const removeTask = (task) => {
  task.remove();
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

todoList.addEventListener("click", (e) => {
  e.preventDefault();

  const target = e.target;
  const taskDiv = target.closest("div");

  if (target.classList.contains("finish-btn")) finishTask(taskDiv);
  if (target.classList.contains("edit-btn")) editTask(taskDiv);
  if (target.classList.contains("remove-btn")) removeTask(taskDiv);
});

cancelEditBtn.addEventListener("click", (e) => {
  e.preventDefault();
  toggleEditForm();
});
