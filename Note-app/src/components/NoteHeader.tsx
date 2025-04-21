import { ChangeEvent } from "react";
import { useNotes } from "../context/NotesContext";

interface NoteHeaderProps {
  sortBy: string;
  onSort: (e: ChangeEvent<HTMLSelectElement>) => void;
}

function NoteHeader({ sortBy, onSort }: NoteHeaderProps) {
  const notes = useNotes();

  return (
    <div className="note-header">
      <h1>My Notes ({notes.length})</h1>
      <select value={sortBy} onChange={onSort}>
        <option value="latest">Sort based on latest notes</option>
        <option value="earliest">Sort based on earliest notes</option>
        <option value="completed">Sort based on completed notes</option>
      </select>
    </div>
  );
}

export default NoteHeader;
