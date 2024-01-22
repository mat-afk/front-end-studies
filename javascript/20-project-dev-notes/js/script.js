// Selecting elements
const notesContainer = document.querySelector("#notes-container");
const noteInput = document.querySelector("#note-content");
const addNoteBtn = document.querySelector("#add-note");

// Functions
const addNote = () => {
  const noteContent = noteInput.value;
  if (!noteContent) return;

  const note = {
    id: generateId(),
    content: noteContent,
    fixed: false,
  };

  const noteElement = createNote(note);

  notesContainer.appendChild(noteElement);
};

const generateId = () => {
  return Math.floor(Math.random() * 5000);
};

const createNote = (note) => {
  const div = document.createElement("div");
  div.classList.add("note");

  const textarea = document.createElement("textarea");
  textarea.placeholder = "Write your note here...";
  textarea.value = note.content;
  div.appendChild(textarea);

  const pinIcon = document.createElement("i");
  pinIcon.classList.add("bi", "bi-pin");
  div.appendChild(pinIcon);

  const xIcon = document.createElement("i");
  xIcon.classList.add("bi", "bi-x-lg");
  div.appendChild(xIcon);

  const copyIcon = document.createElement("i");
  copyIcon.classList.add("bi", "bi-file-earmark-plus");
  div.appendChild(copyIcon);

  return div;
};

// Event listeners
addNoteBtn.addEventListener("click", () => addNote());
