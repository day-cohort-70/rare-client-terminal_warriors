import { useState, useEffect } from "react"
import { getCategories } from "../../managers/CategoryManager.js"

export const CategoryList = () => {
    //---Use States---
    const [categories, setCategories] = useState([])

    //---Use Effects---
    useEffect(() => {
        getCategories().then(setCategories)
    }, [])

    //---HTML---
    return (
<section className="section">
    <div className="container">
        <h2 className="title is-1 has-text-centered">Categories</h2>
        <div className="columns is-multiline">
            {categories.map(category => (
                <div key={category.id} className="column is-full-mobile is-half-tablet is-one-third-desktop">
                    <div className="box has-background-primary m-3">
                        <h2 className="title has-text-centered has-text-black is-2">{category.label}</h2>
                        <div className="buttons is-justify-content-center mt-1">
                            <button className="button is-danger is-small has-text-black has-text-weight-bold is-size-6 p-4">Delete</button>
                            <button className="button is-info is-small has-text-black has-text-weight-bold ml-2 is-size-6 p-4">Edit</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <button className="button is-primary has-text-black has-text-weight-bold is-size-5 mt-4">Create Category</button>
    </div>
</section>

    )
}
