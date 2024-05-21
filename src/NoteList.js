import { Link } from "react-router-dom";
import ReactSelect from "react-select";
import { useMemo, useState } from "react";
import styles from "./NoteList.module.css";

export function NoteList({ availableTags, notes, deleteTag, updateTag }) {
    const [selectedTags, setSelectedTags] = useState([]);
    const [title, setTitle] = useState("");
    const [editTagsModalIsOpen, setEditTagsModalIsOpen] = useState(false);

    const filteredNote = useMemo(() => {
        return notes.filter(note => {
            return (
                (title === "" || note.title.toLowerCase().includes(title.toLowerCase())) &&
                (selectedTags.length === 0 || selectedTags.every(tag => note.tags.some(noteTag => noteTag.id === tag.id)))
            );
        });
    }, [title, selectedTags, notes]);

    return (
        <>
            <div className="flex items-center mb-4">
                <div className="flex-1">
                    <h1 className="text-2xl font-bold">Notes</h1>
                </div>
                <div className="flex space-x-2">
                    <Link to="/new">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Create</button>
                    </Link>
                    <button
                        onClick={() => setEditTagsModalIsOpen(true)}
                        className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                    >
                        Edit Tags
                    </button>
                </div>
            </div>
            <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label htmlFor="tags" className="block text-sm font-medium text-gray-700">Tags</label>
                        <ReactSelect
                            id="tags"
                            value={selectedTags.map(tag => ({ label: tag.label, value: tag.id }))}
                            options={availableTags.map(tag => ({ label: tag.label, value: tag.id }))}
                            onChange={tags => setSelectedTags(tags.map(tag => ({ label: tag.label, id: tag.value })))}
                            isMulti
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>
                </div>
            </form>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                {filteredNote.map(note => (
                    <NoteCard key={note.id} id={note.id} title={note.title} tags={note.tags} />
                ))}
            </div>
            <EditTagsModal
                availableTags={availableTags}
                show={editTagsModalIsOpen}
                handleClose={() => setEditTagsModalIsOpen(false)}
                deleteTag={deleteTag}
                updateTag={updateTag}
            />
        </>
    );
}

function NoteCard({ id, title, tags }) {
    return (
        <Link to={`/${id}`} className={`block h-full bg-white rounded-lg shadow-md overflow-hidden ${styles.card}`}>
            <div className="p-4">
                <div className="text-center">
                    <h2 className="text-lg font-medium">{title}</h2>
                    {tags.length > 0 && (
                        <div className="flex flex-wrap justify-center mt-2 space-x-1">
                            {tags.map(tag => (
                                <span key={tag.id} className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm truncate">
                                    {tag.label}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </Link>
    );
}

function EditTagsModal({ availableTags, show, handleClose, deleteTag, updateTag }) {
    return (
        <div className={`fixed inset-0 z-50 overflow-y-auto ${show ? 'block' : 'hidden'}`}>
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <h3 className="text-lg leading-6 font-medium text-gray-900">Edit Tags</h3>
                                <div className="mt-2">
                                    <form>
                                        <div className="space-y-4">
                                            {availableTags.map(tag => (
                                                <div key={tag.id} className="flex items-center space-x-2">
                                                    <input
                                                        type="text"
                                                        value={tag.label}
                                                        onChange={e => updateTag(tag.id, e.target.value)}
                                                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    />
                                                    <button
                                                        onClick={() => deleteTag(tag.id)}
                                                        type="button"
                                                        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                                                    >
                                                        X
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button
                            type="button"
                            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                            onClick={handleClose}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
