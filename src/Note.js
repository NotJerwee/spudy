import { useNote } from "./NoteLayout";
import { Link, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";

export function Note({ onDeleteNote }) {
    const note = useNote();
    const navigate = useNavigate();

    return (
        <>
            <div className="flex flex-wrap items-center mb-4">
                <div className="flex-1">
                    <h1 className="text-2xl font-bold">{note.title}</h1>
                    {note.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-2">
                            {note.tags.map(tag => (
                                <span 
                                    className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm truncate" 
                                    key={tag.id}
                                >
                                    {tag.label}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
                <div className="flex space-x-2">
                    <Link to={`/${note.id}/edit`}>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                            Edit
                        </button>
                    </Link>
                    <button 
                        onClick={() => { onDeleteNote(note.id); navigate("/"); }} 
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                        Delete
                    </button>
                    <Link to="/">
                        <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400">
                            Back
                        </button>
                    </Link>
                </div>
            </div>
            <ReactMarkdown children={note.textarea} />
        </>
    );
}
