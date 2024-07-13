import React, { useState } from 'react';

function NoteForm({ addNote }) {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim()) {
      addNote({
        id: Date.now(),
        content,
      });
      setContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="note-form">
      <textarea 
        value={content} 
        onChange={(e) => setContent(e.target.value)} 
        placeholder="Add a new note..."
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default NoteForm;
