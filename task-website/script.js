// Select elements
const taskInput = document.getElementById("task-input");
const addButton = document.querySelector(".task-input button");
const taskList = document.querySelector(".task-list ul");

// Function to add a task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  // Create list item
  const li = document.createElement("li");
  li.textContent = taskText;

  // Add remove button
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.className = "remove-btn";
  removeBtn.onclick = () => li.remove();

  li.appendChild(removeBtn);
  taskList.appendChild(li);

  // Clear input
  taskInput.value = "";
}

// Event listener for Add button
addButton.addEventListener("click", addTask);

// Event listener for Enter key
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTask();
});