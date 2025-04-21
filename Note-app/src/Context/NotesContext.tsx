import { createContext, useContext, useReducer, ReactNode, Dispatch } from "react";

// -----------------------
// Types
// -----------------------

interface Note {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  createdAt: string;
}

type NotesAction =
  | { type: "add"; payload: Note }
  | { type: "delete"; payload: number }
  | { type: "complete"; payload: number };

type NotesState = Note[];

// -----------------------
// Reducer
// -----------------------

function notesReducer(state: NotesState, action: NotesAction): NotesState {
  switch (action.type) {
    case "add": {
      return [...state, action.payload];
    }
    case "delete": {
      return state.filter((note) => note.id !== action.payload);
    }
    case "complete": {
      return state.map((note) =>
        note.id === action.payload
          ? { ...note, completed: !note.completed }
          : note
      );
    }
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

// -----------------------
// Contexts
// -----------------------

const NotesContext = createContext<NotesState>([]);
const NotesDispatchContext = createContext<Dispatch<NotesAction> | undefined>(
  undefined
);

// -----------------------
// Provider
// -----------------------

interface NotesProviderProps {
  children: ReactNode;
}

export function NotesProvider({ children }: NotesProviderProps) {
  const [notes, dispatch] = useReducer(notesReducer, []);

  return (
    <NotesContext.Provider value={notes}>
      <NotesDispatchContext.Provider value={dispatch}>
        {children}
      </NotesDispatchContext.Provider>
    </NotesContext.Provider>
  );
}

// -----------------------
// Custom Hooks
// -----------------------

export function useNotes(): NotesState {
  return useContext(NotesContext);
}

export function useNotesDispatch(): Dispatch<NotesAction> {
  const context = useContext(NotesDispatchContext);
  if (!context) {
    throw new Error("useNotesDispatch must be used within a NotesProvider");
  }
  return context;
}
