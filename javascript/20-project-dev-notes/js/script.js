// Selecting elements
const notesContainer = document.querySelector("#notes-container");
const noteInput = document.querySelector("#note-content");
const addNoteBtn = document.querySelector("#add-note");
const searchInput = document.querySelector("#search-input");
const exportBtn = document.querySelector("#export-notes");

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

  saveNote(note);

  noteInput.value = "";
};

const generateId = () => {
  return Math.floor(Math.random() * 5000);
};

const clearNotes = () => {
  notesContainer.innerHTML = "";
};

const copyNote = (note) => {
  const notes = getNotes();
  const target = notes.find((n) => n.id === note.id);

  const newNote = {
    id: generateId(),
    content: target.content,
    fixed: false,
  };

  const noteElement = createNote(newNote);
  notesContainer.appendChild(noteElement);

  saveNote(newNote);
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

  pinIcon.addEventListener("click", () => {
    note.fixed = !note.fixed;
    saveNote(note);
    loadNotes();
  });

  xIcon.addEventListener("click", () => {
    deleteNote(note);
    notesContainer.removeChild(div);
  });

  copyIcon.addEventListener("click", () => {
    copyNote(note);
  });

  textarea.addEventListener("input", () => {
    note.content = textarea.value;
    saveNote(note);
  });

  if (note.fixed) {
    div.classList.toggle("pinned");
  }

  return div;
};

const exportToCSV = () => {
  const notes = getNotes();

  const csv = [
    ["Id", "Content", "Fixed"],
    ...notes.map((note) => [note.id, note.content, note.fixed]),
  ]
    .map((e) => e.join(","))
    .join("\n");

  const element = document.createElement("a");
  element.href = "data:text/csv;charset=utf-8," + encodeURI(csv);
  element.target = "_blank";

  element.download = "notes.csv";

  element.click();
};

// Event listeners
addNoteBtn.addEventListener("click", () => addNote());

searchInput.addEventListener("input", () => {
  if (searchInput.value === "") {
    loadNotes();
    return;
  }

  const targetNotes = getNotes().filter((note) =>
    note.content.toLowerCase().includes(searchInput.value.toLowerCase())
  );

  clearNotes();
  targetNotes.forEach((note) => {
    const noteElement = createNote(note);
    notesContainer.appendChild(noteElement);
  });
});

noteInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addNote();
  }
});

exportBtn.addEventListener("click", () => {
  exportToCSV();
});

// Local storage
const getNotes = () => {
  const notes = JSON.parse(localStorage.getItem("notes") || "[]");
  return notes.sort((a, b) => b.fixed - a.fixed);
};

const saveNote = (note) => {
  const notes = getNotes();

  const noteIndex = notes.findIndex((n) => n.id === note.id);
  noteIndex !== -1 ? (notes[noteIndex] = note) : notes.push(note);

  localStorage.setItem("notes", JSON.stringify(notes));
};

const loadNotes = () => {
  clearNotes();
  getNotes().forEach((note) => {
    const noteElement = createNote(note);
    notesContainer.appendChild(noteElement);
  });
};

const deleteNote = (note) => {
  const notes = getNotes().filter((n) => n.id !== note.id);
  localStorage.setItem("notes", JSON.stringify(notes));
};

loadNotes();
