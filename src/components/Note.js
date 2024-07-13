import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

function Note({ note, onDelete, onEdit }) {
  return (
    <div className="note">
      <textarea 
        className="note-content" 
        defaultValue={note.content} 
        readOnly 
      />
      <div className="note-actions">
        <button onClick={() => onEdit(note.id)}><FaEdit /></button>
        <button onClick={() => onDelete(note.id)}><FaTrash /></button>
      </div>
    </div>
  );
}

export default Note;
