// components/ReleaseNotesSection/ReleaseNotesSection.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ReleaseNotesSection.css';
import { useSelectedNote, useSelectedNoteUpdate } from '../../context/SelectedNoteContext';

const ContentSection = () => {
  const [releaseNotes, setReleaseNotes] = useState([]);
  const { selectedNote, updateSelectedNote } = useSelectedNote();

  useEffect(() => {
    axios.get('http://localhost:5000/releaseNotes')
      .then(response => {
        const reversedData = response.data.reverse(); // Reverse the array to show latest version first
        setReleaseNotes(reversedData);
        // Guarda la primera nota por defecto al cargar
        if (reversedData.length > 0 && !selectedNote) {
          updateSelectedNote(reversedData[0]);
        }
      })
      .catch(error => {
        console.error('Error fetching release notes:', error);
      });
  }, []);

  const handleNoteClick = (note) => {
    updateSelectedNote(note); // Actualiza el contexto con la nota seleccionada
  };

  return (
    <div className="content-section mt-10">
      <h2 className='title-notes mb-5'>All release notes</h2>
      <ul>
        {releaseNotes.map((note, index) => (
          <li key={index}>
            <h3
              className={`note mt-1 ${selectedNote === note ? 'selected' : ''}`}
              onClick={() => handleNoteClick(note)}
            >
              Release {note.version} : {note.sections[0].description}
            </h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContentSection;
