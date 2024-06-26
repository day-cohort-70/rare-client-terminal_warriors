
//CategoryManager.js
export const listCategories = () => {
    return fetch('http://localhost:8000/categories')
    .then(response => response.json())
}

export const retrieveCategory = (id) => {
    return fetch(`http://localhost:8000/categories/${id}`)
    .then(response => response.json())
}

export const createCategory = (category_object) => {
    return fetch('http://localhost:8000/categories',{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(category_object)
    }).then(response => response.json())
}

export const deleteCategory = (id) => {
    return fetch(`http://localhost:8000/categories/${id}`,{
        method: "DELETE",
    })
}

export const updateCategory = (category_object) => {
    return fetch(`http://localhost:8000/categories/${category_object.id}`,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(category_object)
    }).then(response => response.json())
}