import { NoteForm } from "./NoteForm";
import { useNote } from "./NoteLayout";

export function EditNote({ onSubmit, onAddTag, availableTags }) {
    const note = useNote();
    return (
        <>
            <h1 className="mb-4 text-2xl font-bold">Edit Note</h1>
            <NoteForm 
                title={note.title}
                textarea={note.textarea}
                tags={note.tags}
                onSubmit={data => onSubmit(note.id, data)} 
                onAddTag={onAddTag} 
                availableTags={availableTags} />
        </>
    );
}
