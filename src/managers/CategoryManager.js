
export const getCategories = () => {
    return fetch('http://localhost:8000/categories')
    .then(response => response.json())
}