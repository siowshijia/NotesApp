import React, {
  createContext,
  useContext,
  useReducer,
  useCallback,
  useState,
} from 'react';
import notesData from '../components/NotesData';

const NotesContext = createContext();

const notesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return [...state, action.payload];
    case 'DELETE_ALL_NOTES':
      return [];
    default:
      return state;
  }
};

export const NotesProvider = ({children}) => {
  const [notes, dispatch] = useReducer(notesReducer, notesData);
  const [lastId, setLastId] = useState(
    notes.length > 0 ? notes[notes.length - 1].id : 0,
  );

  const addNote = newNote => {
    const newId = lastId + 1;
    const currentDate = new Date().toISOString();
    const noteWithIdAndDate = {...newNote, id: newId, date: currentDate};
    dispatch({type: 'ADD_NOTE', payload: noteWithIdAndDate});
    setLastId(newId);
  };

  const deleteAllNotes = useCallback(() => {
    dispatch({type: 'DELETE_ALL_NOTES'});
  }, []);

  const getNotesByCategory = category => {
    return notes.filter(note => note.category === category);
  };

  return (
    <NotesContext.Provider
      value={{notes, addNote, deleteAllNotes, getNotesByCategory}}>
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = () => {
  const context = useContext(NotesContext);
  if (!context) {
    throw new Error('useNotes must be used within a NotesProvider');
  }
  return context;
};
