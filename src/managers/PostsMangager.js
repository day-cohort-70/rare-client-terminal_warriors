export const getAllPostsforAuthor = () => {
    return fetch(`http://localhost:8000/posts`).then((res)=>
    res.json())
}

export const getAllMyPosts = (id) => {
    return fetch(`http://localhost:8000/posts?user_id=${id}`).then((res)=>
    res.json())
}

export const getPostDetails = (id) => {
    return fetch(`http://localhost:8000/posts/${id}`).then((res)=>
        res.json())
}