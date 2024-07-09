// src/context/SelectedNoteContext.js
import React, { createContext, useState, useContext } from 'react';

const SelectedNoteContext = createContext();
export const useSelectedNote = () => useContext(SelectedNoteContext);

export const SelectedNoteProvider = ({ children }) => {
  const [selectedNote, setSelectedNote] = useState(null);

  const updateSelectedNote = (note) => {
    setSelectedNote(note);
  };

  return (
    <SelectedNoteContext.Provider value={{ selectedNote, updateSelectedNote }}>
      {children}
    </SelectedNoteContext.Provider>
  );
};
