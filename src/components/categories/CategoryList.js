import { useState, useEffect } from "react"
import { getCategories } from "../../managers/CategoryManager.js"

export const CategoryList = () => {
    //---Use Params---

    //---Use States---
    const [categories, setCategories] = useState([])

    //---Use Effects---
    useEffect(() => {
        getCategories().then(setCategories)
    },[])

    //---Functions---

    //---HTML---

    return(
        <div>fart</div>
    )
}