import React, {
  createContext,
  useContext,
  useReducer,
  useCallback,
  useState,
} from 'react';
import notesData from '../components/NotesData';

// Create a context to manage the state related to notes
const NotesContext = createContext();

// Reducer function to handle state updates based on actions
const notesReducer = (state, action) => {
  switch (action.type) {
    // Add a new note to the state
    case 'ADD_NOTE':
      return [...state, action.payload];
    // Delete all notes from the state
    case 'DELETE_ALL_NOTES':
      return [];
    default:
      return state;
  }
};

// NotesProvider component to wrap the application and provide the notes state and actions
export const NotesProvider = ({children}) => {
  // Initialize state using useReducer with the notesReducer function and initial data
  const [notes, dispatch] = useReducer(notesReducer, notesData);
  // Track the last note id to generate unique ids for new notes
  const [lastId, setLastId] = useState(
    notes.length > 0 ? notes[notes.length - 1].id : 0,
  );

  // Add a new note to the state
  const addNote = newNote => {
    const newId = lastId + 1;
    const currentDate = new Date().toISOString();
    const noteWithIdAndDate = {...newNote, id: newId, date: currentDate};
    dispatch({type: 'ADD_NOTE', payload: noteWithIdAndDate});
    setLastId(newId);
  };

  // Delete all notes from the state
  const deleteAllNotes = useCallback(() => {
    dispatch({type: 'DELETE_ALL_NOTES'});
  }, []);

  // Get all notes from the state based on a specified category
  const getNotesByCategory = category => {
    return notes.filter(note => note.category === category);
  };

  // Provide the state and actions through the context
  return (
    <NotesContext.Provider
      value={{notes, addNote, deleteAllNotes, getNotesByCategory}}>
      {children}
    </NotesContext.Provider>
  );
};

// Custom hook to consume the NotesContext and access the state and actions
export const useNotes = () => {
  const context = useContext(NotesContext);
  if (!context) {
    throw new Error('useNotes must be used within a NotesProvider');
  }
  return context;
};
