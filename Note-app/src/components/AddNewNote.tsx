import { useState, FormEvent, ChangeEvent } from "react";
import { useNotesDispatch } from "../context/NotesContext";
import Form from "./UI/Form";
import Input from "./UI/Input";
import Button from "./UI/Button";

interface INote {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  createdAt: string;
}

function AddNewNote() {
  const dispatch = useNotesDispatch();
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title || !description) return;

    const newNote: INote = {
      title,
      description,
      id: Date.now(),
      completed: false,
      createdAt: new Date().toISOString(),
    };

    dispatch({ type: "add", payload: newNote });

    setTitle("");
    setDescription("");
  };

  return (
    <div className="add-new-note">
      <h2>Add New Note</h2>
      <Form className="note-form" onSubmit={handleSubmit}>
        <Input
          value={title}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
          type="text"
          className="text-field"
          placeholder="Note title"
        />
        <Input
          value={description}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)}
          type="text"
          className="text-field"
          placeholder="Note description"
        />
        <Button type="submit" className="btn btn--primary">
          Add New Note
        </Button>
      </Form>
    </div>
  );
}

export default AddNewNote;
