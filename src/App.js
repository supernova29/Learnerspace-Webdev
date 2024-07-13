import React, { useState, useEffect } from 'react';
import NoteList from './components/NoteList';
import NoteForm from './components/Noteform';
import Header from './components/Header';
import './styles.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes'));
    if (savedNotes) {
      setNotes(savedNotes);
    }
    const savedDarkMode = JSON.parse(localStorage.getItem('darkMode'));
    if (savedDarkMode) {
      setIsDarkMode(savedDarkMode);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [notes, isDarkMode]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const editNote = (id) => {
    const editedContent = prompt("Edit your note:");
    if (editedContent) {
      setNotes(notes.map(note => note.id === id ? { ...note, content: editedContent } : note));
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`app ${isDarkMode ? 'dark' : ''}`}>
      <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <NoteForm addNote={addNote} />
      <NoteList notes={notes} onDelete={deleteNote} onEdit={editNote} />
    </div>
  );
}

export default App;
