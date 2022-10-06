import React, { useRef } from "react";
import { FaPlus } from 'react-icons/fa'

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
    const inputRef = useRef()

    return (
        <form className="addForm" onSubmit={handleSubmit}>
            <label htmlFor="addItem">Add Items</label>
            <input
                autoFocus
                ref={inputRef}
                type="text"
                placeholder="Enter The Task"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />
            <button
                type="submit"
                aria-label='Add Item'
                onClick={() => inputRef.current.focus()}
            >
                <FaPlus />
            </button>
        </form>
    )
}

export default AddItem;