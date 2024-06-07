//CreateCategory.js
import { useState } from "react"
import { createCategory, listCategories } from "../../managers/CategoryManager.js"

export const CreateCategory = ({setCategories}) => {
    //---Use Params---
    
    //---Use States---
    const [label, setLabel] = useState()

    //---Use Effects---

    //---Functions---
    const handleSubmit = (event) => {
        event.preventDefault()

        const category_object = {
            label: label
        }

        createCategory(category_object).then(() =>
            listCategories().then((res) => setCategories(res))
        )
    }

    //---HTML---
    return (
        <div className="box has-background-primary m-3">
            <form onSubmit={handleSubmit}>
                <div className="field is-horizontal">
                    <label className="label m-auto pr-3">Label:</label>
                    <input
                        className="input"
                        type="text"
                        value={label}
                        onChange={(event) => setLabel(event.target.value)}
                        required
                    />
                </div>
                <div className="field is-horizontal is-justify-content-center"> {/* Center the button */}
                    <button className="button is-info has-text-weight-bold is-size-5 mt-4">Create Category</button>
                </div>
            </form>
        </div>
    )
}