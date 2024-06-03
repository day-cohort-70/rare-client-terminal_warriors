import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { listCategories, retrieveCategory, updateCategory } from "../../managers/CategoryManager.js"


export const EditCategory = ({setCategories}) => {
    const navigate = useNavigate()
    //---Use Params---
    const { categoryId } = useParams()

    //---Use States---
    const [category, setCategory] = useState({})

    //---Use Effects---
    useEffect(() => {
        retrieveCategory(categoryId).then(setCategory)
    }, [])

    //---Functions---

    const handleSubmit = (event) => {
        event.preventDefault()

        updateCategory(category).then(
            () => listCategories().then(
                (res) => setCategories(res)).then(
                    navigate("/categories")
                ))
    }

    //---HTML---
    return (
        <div className="box has-background-primary m-6">
            <h2 className="title is-1 has-text-centered">Edit Category</h2>
            <form onSubmit={handleSubmit}>
                <div className="field is-horizontal">
                    <label className="label m-auto pr-3">Label:</label>
                    <input
                        className="input"
                        type="text"
                        value={category.label}
                        onChange={(event) => setCategory({...category, label: event.target.value})}
                        required
                    />
                </div>
                <div className="field is-horizontal is-justify-content-center">
                    <button className="button is-info has-text-weight-bold is-size-5 mt-4">Submit</button>
                </div>
            </form>
        </div>
    )
}