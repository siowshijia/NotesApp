import React, {createContext, useContext, useState} from 'react';
import notesData from '../components/NotesData';

const NotesContext = createContext();

export const NotesProvider = ({children}) => {
  const [notes, setNotes] = useState(notesData);

  const addNote = newNote => {
    setNotes(prevNotes => [...prevNotes, newNote]);
  };

  const getNotesByCategory = category => {
    return notes.filter(note => note.category === category);
  };

  return (
    <NotesContext.Provider value={{notes, addNote, getNotesByCategory}}>
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
