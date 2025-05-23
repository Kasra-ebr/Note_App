import { useNotes, useNotesDispatch } from "../context/NotesContext";

interface Note {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  createdAt: string;
}

interface NoteListProps {
  sortBy: "earliest" | "latest" | "completed";
}

function NoteList({ sortBy }: NoteListProps) {
  const notes = useNotes();

  let sortedNotes = notes;
  if (sortBy === "earliest")
    sortedNotes = [...notes].sort(
      (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    );

  if (sortBy === "latest")
    sortedNotes = [...notes].sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

  if (sortBy === "completed")
    sortedNotes = [...notes].sort(
      (a, b) => Number(a.completed) - Number(b.completed)
    );

  return (
    <div className="note-list">
      {sortedNotes.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </div>
  );
}

export default NoteList;

interface NoteItemProps {
  note: Note;
}

function NoteItem({ note }: NoteItemProps) {
  const dispatch = useNotesDispatch();

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div className={`note-item ${note.completed ? "completed" : ""}`}>
      <div className="note-item__header">
        <div>
          <p className="title">{note.title}</p>
          <p className="desc">{note.description}</p>
        </div>
        <div className="actions">
          <button
            onClick={() => dispatch({ type: "delete", payload: note.id })}
          >
            ❌
          </button>
          <input
            type="checkbox"
            name={note.id.toString()}
            id={note.id.toString()}
            value={note.id.toString()}
            checked={note.completed}
            onChange={(e) => {
              const noteId = Number(e.target.value);
              dispatch({ type: "complete", payload: noteId });
            }}
          />
        </div>
      </div>
      <p className="note-item__footer">
        {new Date(note.createdAt).toLocaleDateString("en-US", options)}
      </p>
    </div>
  );
}
