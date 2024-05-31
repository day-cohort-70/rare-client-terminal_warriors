import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { createTag } from "../../managers/TagManager"

export const CreateTag = () => {
    const [label, setLabel] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const newTag = { label }
        createTag(newTag).then(() => navigate("/tags"))
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create a New Tag</h2>
            <div>
                <label htmlFor="label">Tag Name:</label>
                <input type="text" id="label" value={label} onChange={(e) => setLabel(e.target.value)} required />
            </div>
            <button type="submit">Save Tag</button>
        </form>
    )
}
