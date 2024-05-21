import { Routes, Route, Navigate } from "react-router-dom";
import { NewNote } from "./NewNote";
import { useLocalStorage } from "./useLocalStorage";
import { useMemo } from "react";
import { v4 as uuidV4 } from "uuid";
import { NoteList } from "./NoteList";
import { NoteLayout } from "./NoteLayout";
import { Note } from "./Note";
import { EditNote } from "./EditNote";
import './index.css';

function App() {
  const [notes, setNotes] = useLocalStorage("NOTES", []);
  const [tags, setTags] = useLocalStorage("TAGS", []);

  const notesWithTags = useMemo(() => {
    return notes.map(note => {
      return { ...note, tags: tags.filter(tag => note.tagIds.includes(tag.id)) };
    });
  }, [notes, tags]);

  function onCreateNote(data) {
    setNotes(prevNotes => {
      return [
        ...prevNotes, 
        { ...data, id: uuidV4(), tagIds: data.tags.map(tag => tag.id) },
      ];
    });
  }

  function onUpdateNote(id, data) {
    setNotes(prevNotes => {
      return prevNotes.map(note => {
        if (note.id === id) {
          return { ...note, ...data, tagIds: data.tags.map(tag => tag.id) };
        } else {
          return note;
        }
      });
    });
  }

  function onDeleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter(note => note.id !== id);
    });
  }

  function addTag(tag) {
    setTags(prev => [...prev, tag]);
  }

  function updateTag(id, label) {
    setTags(prevTags => {
      return prevTags.map(tag => {
        if (tag.id === id) {
          return { ...tag, label };
        } else {
          return tag;
        }
      });
    });
  }

  function deleteTag(id) {
    setTags(prevTags => {
      return prevTags.filter(tag => tag.id !== id);
    });
  }

  return (
    <div className="container mx-auto my-4">
      <Routes>
        <Route path="/" element={<NoteList notes={notesWithTags} availableTags={tags} updateTag={updateTag} deleteTag={deleteTag} />} />
        <Route path="/new" element={<NewNote onSubmit={onCreateNote} onAddTag={addTag} availableTags={tags} />} />
        <Route path="/:id" element={<NoteLayout notes={notesWithTags} />}>
          <Route index element={<Note onDeleteNote={onDeleteNote} />} />
          <Route path="edit" element={<EditNote onSubmit={onUpdateNote} onAddTag={addTag} availableTags={tags} />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
