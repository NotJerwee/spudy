import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CreatableReactSelect from "react-select/creatable";
import { v4 as uuidV4 } from "uuid";

export function NoteForm({ onSubmit, onAddTag, availableTags, title = "", textarea = "", tags = [] }) {
    const titleRef = useRef(null);
    const textareaRef = useRef(null);
    const [selectedTags, setSelectedTags] = useState(tags);
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        onSubmit({
            title: titleRef.current.value,
            textarea: textareaRef.current.value,
            tags: selectedTags,
        });

        navigate("..");
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                    <input 
                        type="text" 
                        id="title" 
                        ref={titleRef} 
                        required 
                        defaultValue={title} 
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label htmlFor="tags" className="block text-sm font-medium text-gray-700">Tags</label>
                    <CreatableReactSelect 
                        onCreateOption={label => {
                            const newTag = { id: uuidV4(), label };
                            onAddTag(newTag);
                            setSelectedTags(prev => [...prev, newTag]);
                        }}
                        value={selectedTags.map(tag => ({
                            label: tag.label, value: tag.id
                        }))}
                        options={availableTags.map(tag => ({
                            label: tag.label, value: tag.id
                        }))}
                        onChange={tags => {
                            setSelectedTags(tags.map(tag => ({
                                label: tag.label, id: tag.value
                            })));
                        }}
                        isMulti
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                </div>
            </div>
            <div>
                <label htmlFor="textarea" className="block text-sm font-medium text-gray-700">Body</label>
                <textarea 
                    id="textarea" 
                    ref={textareaRef} 
                    required 
                    defaultValue={textarea} 
                    rows={15} 
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
            </div>
            <div className="flex justify-end space-x-2">
                <button 
                    type="submit" 
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Save
                </button>
                <Link to="..">
                    <button 
                        type="button" 
                        className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                    >
                        Cancel
                    </button>
                </Link>
            </div>
        </form>
    );
}
