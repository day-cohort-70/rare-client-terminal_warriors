import { useState, useEffect } from "react"
import { deleteCategory, listCategories } from "../../managers/CategoryManager.js"
import { CreateCategory } from "./CreateCategory.js"
import { Link, useNavigate } from "react-router-dom"

export const CategoryList = () => {
    const navigate = useNavigate()
    //---Use Params---

    //---Use States---
    const [categories, setCategories] = useState([])

    //---Use Effects---
    useEffect(() => {
        listCategories().then(setCategories)
    }, [])

    //---Functions---
    const handleDelete = async (id) => {
        await deleteCategory(id)
        await listCategories().then(setCategories)
    }

    //---HTML---
    return (
        <section className="section">
            <div className="container">
                <h2 className="title is-1 has-text-black has-text-centered">Categories</h2>
                <div className="columns is-multiline">
                    {categories.map(category => (
                        <div key={category.id} className="column is-full-mobile is-half-tablet is-one-third-desktop">
                            <div className="box has-background-primary m-3">
                                <h2 className="title has-text-centered has-text-black is-2">{category.label}</h2>
                                <div className="buttons is-justify-content-center mt-1">
                                    <button onClick={() => handleDelete(category.id)} className="button is-danger is-small  has-text-weight-bold is-size-6 p-4">Delete</button>
                                    <Link to={`/categories/${category.id}`} setCategories={setCategories}>
                                        <button className="button is-info is-small has-text-weight-bold ml-2 is-size-6 p-4">Edit</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <CreateCategory setCategories={setCategories} />
            </div>
        </section>

    )
}
